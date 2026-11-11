/* The Logan Chronicles: opener + scrolling introduction. Content lives in story-data.js. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var MEDIA = 'media/story/';

  /* ---------- Opener ---------- */
  var film = document.querySelector('.film');
  var video = film && film.querySelector('video');
  var playBtn = film && film.querySelector('.play');
  var after = document.querySelector('.opener .after');
  var userScrolled = false;

  var TITLE_AT = 8.0;   // seconds: when the sky fills the frame
  var CAPTIONS = [
    [0.95, 4.2, 'The Logan Chronicles is the story of Lee and Kate Logan.'],
    [4.85, 9.1, 'Two engineers from Idaho who stumbled into the most amazing adventure.']
  ];

  if (video) {
    // Captions are built here rather than from a .vtt file so they also work when index.html is opened from disk.
    try {
      var cc = video.addTextTrack('captions', 'English', 'en');
      var Cue = window.VTTCue || window.TextTrackCue;
      CAPTIONS.forEach(function (c) { cc.addCue(new Cue(c[0], c[1], c[2])); });
      cc.mode = 'hidden';
    } catch (e) {}
    video.addEventListener('timeupdate', function () {
      film.classList.toggle('titled', video.currentTime >= TITLE_AT || video.ended);
    });
    playBtn.addEventListener('click', function () {
      film.classList.remove('ended', 'titled');
      video.muted = false;
      video.currentTime = 0;
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    });
    video.addEventListener('play', function () {
      film.classList.add('playing');
      video.setAttribute('controls', '');
      userScrolled = false;
      if (after) after.textContent = '';
    });
    video.addEventListener('ended', function () {
      film.classList.add('ended', 'titled');
      if (after) after.innerHTML = 'Keep scrolling, or <a href="#" class="replay">watch it again</a>.';
      var r = after && after.querySelector('.replay');
      if (r) r.addEventListener('click', function (e) { e.preventDefault(); playBtn.click(); });
      // Hand off to the story: drift down into the first picture, unless the reader is already moving.
      setTimeout(function () {
        if (!userScrolled) {
          document.getElementById('story').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
        }
      }, 900);
    });
    ['wheel', 'touchmove', 'keydown'].forEach(function (ev) {
      window.addEventListener(ev, function () { if (!video.paused) return; userScrolled = true; }, { passive: true });
    });
  }

  /* ---------- Story ---------- */
  var data = window.STORY || [];
  var stage = document.querySelector('.story-stage');
  var stepsEl = document.querySelector('.story-steps');
  if (!stage || !stepsEl || !data.length) return;

  var tag = stage.querySelector('.chapter-tag');
  var bar = stage.querySelector('.progress');
  var slides = {};      // img slug -> slide element
  var order = [];       // slugs in order of first appearance

  function srcFor(slug, small) { return MEDIA + slug + (small ? '-sm' : '') + '.webp'; }

  function makeSlide(slug, alt) {
    var s = document.createElement('div');
    s.className = 'slide';
    s.dataset.slug = slug;
    s.innerHTML =
      '<img class="backdrop" alt="" aria-hidden="true" decoding="async">' +
      '<img class="photo" decoding="async">';
    var photo = s.querySelector('.photo');
    photo.alt = alt || '';
    stage.insertBefore(s, tag);
    slides[slug] = s;
    order.push(slug);
    return s;
  }

  function load(slug) {
    var s = slides[slug];
    if (!s || s.dataset.loaded) return;
    s.dataset.loaded = '1';
    var photo = s.querySelector('.photo');
    photo.srcset = srcFor(slug, true) + ' 960w, ' + srcFor(slug, false) + ' 1920w';
    photo.sizes = '100vw';
    photo.src = srcFor(slug, false);
    s.querySelector('.backdrop').src = srcFor(slug, true);
  }

  var chapterName = '';
  data.forEach(function (d, i) {
    if (!slides[d.img]) makeSlide(d.img, d.alt);
    else if (d.alt && !slides[d.img].querySelector('.photo').alt) slides[d.img].querySelector('.photo').alt = d.alt;

    var step = document.createElement('section');
    step.className = 'step' + (d.chapter ? ' chapter' : '');
    step.dataset.index = i;
    if (d.chapter) chapterName = d.title;
    step.dataset.chapter = chapterName;

    var card = document.createElement('div');
    card.className = 'card';
    if (d.chapter) {
      card.innerHTML = '<span class="numeral-big"></span><h3></h3><p class="text"></p>';
      card.querySelector('.numeral-big').textContent = d.chapter;
    } else {
      card.innerHTML = '<p class="kicker"></p><h3></h3><p class="text"></p>';
      card.querySelector('.kicker').textContent = d.kicker || '';
    }
    card.querySelector('h3').textContent = d.title || '';
    card.querySelector('.text').textContent = d.text || '';
    if (d.chapter || d.title || d.text) step.appendChild(card);
    else step.classList.add('bare');
    stepsEl.appendChild(step);
  });

  var steps = Array.prototype.slice.call(stepsEl.querySelectorAll('.step'));
  var current = -1;

  function show(i) {
    if (i === current) return;
    current = i;
    var d = data[i];
    var slug = d.img;
    // load this picture and the next two ahead of time
    load(slug);
    for (var k = i + 1, n = 0; k < data.length && n < 2; k++) {
      if (data[k].img !== slug) { load(data[k].img); n++; }
    }
    Object.keys(slides).forEach(function (s) { slides[s].classList.toggle('on', s === slug); });
    stage.classList.toggle('dim', !!d.chapter);
    steps.forEach(function (el, j) { el.classList.toggle('active', j === i); });
    var ch = steps[i].dataset.chapter;
    tag.textContent = ch;
    tag.classList.toggle('on', !!ch && !d.chapter && !!(d.title || d.text));
  }

  // The step whose middle is nearest the middle of the screen is the active one.
  function pick() {
    var mid = window.innerHeight / 2, best = 0, bestDist = Infinity;
    for (var i = 0; i < steps.length; i++) {
      var r = steps[i].getBoundingClientRect();
      var dist = Math.abs((r.top + r.bottom) / 2 - mid);
      if (dist < bestDist) { bestDist = dist; best = i; }
    }
    show(best);
    var box = stepsEl.getBoundingClientRect();
    var p = Math.min(1, Math.max(0, (mid - box.top) / box.height));
    bar.style.width = (p * 100).toFixed(2) + '%';
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; pick(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  load(data[0].img);
  pick();
})();
