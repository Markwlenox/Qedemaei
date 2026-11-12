/*
  The Logan Chronicles: scrolling introduction.

  This file is the whole story. Edit the words here; the page rebuilds itself
  from this list. Each entry is one stop on the scroll.

    chapter : starts a new chapter card (People, Places, Things)
    img     : file name in media/story/, without "-sm" or ".webp"
    kicker  : the small gold label above the title
    title   : the heading
    text    : one short paragraph
    alt     : description of the picture for screen readers

  An entry with only img and alt shows the picture with no caption card.

  House style: no em-dashes.
*/
window.STORY = [

  { chapter: "I", title: "The People",
    text: "Two engineers from eastern Idaho, and the very old friends they did not know they had." ,
    img: "lee-kate-middle-fork" },

  { img: "lee-kate-middle-fork", kicker: "The Logans", title: "Lee and Kate Logan",
    text: "Two engineers who would rather be on a river than in a meeting. They live on the Flying L Ranch on the Fall River, fly their own airplanes and dive whenever they get the chance. They are about to find out they matter far more than they ever imagined.",
    alt: "Lee and Kate Logan smiling together on the bank of the Middle Fork of the Salmon River." },

  { img: "lee", kicker: "Lee Logan", title: "Pilot. Engineer. Listener.",
    text: "A doctorate in computer science, a career in medical imaging, an airline transport pilot certificate and an A&P mechanic’s ticket. Lately Lee has been listening to Yellowstone with a private network of deep seismic sensors, and Yellowstone has started saying something nobody else can hear.",
    alt: "Portrait of Lee Logan, a fit man in his fifties with graying hair and blue eyes." },

  { img: "lee-teaching", kicker: "Lee Logan", title: "Signal in the noise",
    text: "Lee spent years turning faint, noisy signals into pictures of the inside of the human body. That same instinct, finding the shape hidden in the noise, is what first points him toward the thing buried beneath Yellowstone.",
    alt: "Lee lecturing to a class in front of a whiteboard covered in reconstruction equations." },

  { img: "kate", kicker: "Kate Logan", title: "Nuclear engineer",
    text: "Kate works at the Idaho National Laboratory’s Arco Advanced Reactor Complex. She designed the power source that flew to Titan. Precise, decisive, an excellent diver and the best shot in any room she walks into.",
    alt: "Portrait of Kate Logan, an athletic blonde woman in her fifties with her arms crossed." },

  { img: "kate-at-work", kicker: "Kate Logan", title: "The day job",
    text: "Kate spends her days keeping some of the most advanced reactors on Earth honest. It turns out to be exactly the right training for a reactor that is fifty thousand years more advanced than anything on the surface.",
    alt: "Kate in a white lab coat with colleagues on the floor of a reactor test facility." },

  { img: "kate-rifle", kicker: "Kate Logan", title: "The high ground",
    text: "Kate grew up hunting in Idaho. When trouble comes up a canyon, she is the one everybody wants on the rock above it.",
    alt: "Kate lying prone on a rock outcrop above a river canyon, sighting through a scoped rifle." },

  { img: "lee-kate-diving", kicker: "Palau", title: "Below the surface",
    text: "Their favorite water is in Palau, where a dive operator named Kel Oiterong has been their friend for twenty years. A dive trip there is where everything begins to change.",
    alt: "Lee and Kate in wetsuits sitting on the side of a dive boat beneath tropical cliffs." },

  { img: "lee-kate-waterfront", kicker: "Koror", title: "One more ordinary evening",
    text: "Grilled fish, a cold drink and the harbor lights of Koror. For a little while longer, it is just a vacation.",
    alt: "Lee and Kate, in bright tropical shirts, laughing over dinner at a waterfront table at night." },

  { img: "samantha", kicker: "The Logans", title: "Samantha Logan",
    text: "Lee and Kate’s daughter, a data-science doctoral candidate at Berkeley who finds the signals everyone else misses. Sharp, dry, and much harder to keep secrets from than her parents would like.",
    alt: "Samantha Logan, a dark-haired woman in a teal pullover, standing by a wooden fence in the mountains." },

  { img: "jack", kicker: "The Logans", title: "Jack Logan",
    text: "Lee and Kate\u2019s son. A nuclear engineer and a lieutenant in the United States Navy. He doesn\u2019t talk much about his job.",
    alt: "Jack Logan, a young naval officer in khakis, standing on a pier beside a submarine at sunset." },

  { img: "aileah", kicker: "Atlantis", title: "Aileah Kerion",
    text: "Chief Scientist of Atlantis. She has been searching for two very particular people for a very long time, with the patience of someone who has lived for thousands of years. Which she has.",
    alt: "Portrait of Aileah, a dark-haired woman with an ageless face and a knowing smile." },

  { img: "aileah-helmet", kicker: "Aileah", title: "The armor remembers her",
    text: "When Atlantis is threatened, its Chief Scientist puts on armor that knows her touch and carries a blue-edged sword. There is a reason the old stories always gave Athena a helmet. Somebody saw her wearing one, and the world never forgot what happened.",
    alt: "Aileah in polished silver armor and helmet, hand on her sword, standing on a terrace above the stone city of Atlantis." },

  { img: "raman", kicker: "Atlantis", title: "Raman Okido",
    text: "High Strategos, commander of everyone in Atlantis who carries a weapon. Five thousand years old, dry as the desert, and very hard to surprise. Surface world mythology called him Apollo, but they didn\u2019t know the other half of the story.",
    alt: "Portrait of Raman, a lean dark-haired man in a white open-collar shirt." },

  { img: "raman-armor", kicker: "Raman", title: "The staff",
    text: "Some weapons are tools. The staff Raman carries is something more, and he treats it with the wariness it deserves.",
    alt: "Raman in dark armor holding a tall ornate staff in a sunlit street of Atlantis." },

  { img: "kratos", kicker: "Atlantis", title: "Kratos",
    text: "Atlantean special operator. The surface world once told stories about a man like Kratos and called him Hercules. The stories undersold him.",
    alt: "Kratos, a heavily muscled bearded man with folded arms." },

  { img: "lee-battle", kicker: "Lee Logan", title: "Not looking for a fight",
    text: "Lee has never gone looking for trouble. When it finds him anyway, he turns out to be very good at the job.",
    alt: "Lee in sunglasses and tactical gear with a rifle on a terrace above Atlantis." },

  { img: "charge", kicker: "Atlantis", title: "From the front",
    text: "When Atlantis has to fight for itself, Aileah does not lead from behind.",
    alt: "A column of soldiers marching through a colonnaded street of Atlantis behind a figure in white armor." },

  { img: "lee-kate-ramp", kicker: "The Logans", title: "Mother and daughter",
    text: "Kate with her rifle across her knees and Samantha on the radio, the ramp of an Atlantean aircraft open beneath them and a city far below. It is not a vacation.",
    alt: "Kate and Samantha in camouflage, seated in the open rear ramp of an aircraft high above a city. Kate points; Samantha holds a radio and binoculars." },

  { img: "adamaris-dinner", kicker: "Aboard the Adamaris", title: "Dinner with the Atlanteans",
    text: "Lee, Kate, Aileah and Raman at the table on the afterdeck. Some of the most important conversations in the series happen over very good food.",
    alt: "Four people dining at a white-clothed table on the deck of a yacht among limestone islands." },

  { img: "formal-dinner", kicker: "The Logans", title: "A table for two",
    text: "Even people with this much on their plates need a night out. Mountains in the window, wine on the table, and nobody’s radio going off. Yet.",
    alt: "Lee and Kate toasting with red wine at a table by a window looking out on snowy peaks." },

  { img: "party-arrival", kicker: "Atlantis", title: "An Atlantean evening",
    text: "Atlantis has had forty thousand years to perfect a party. Chandeliers, gowns of responsive fabric, and a great many people who have waited a very long time to meet the Qedemaei.",
    alt: "Lee and Kate walking hand in hand down a staircase into a grand ballroom full of guests." },

  { img: "party", kicker: "Atlantis", title: "The guests of honor",
    text: "Kate in red, Lee in black, and an entire city watching them walk in.",
    alt: "Lee and Kate walking through the center of a crowded, gilded ballroom." },

  { chapter: "II", title: "The Places",
    text: "From a hay meadow in Idaho to a city three hundred feet beneath the Pacific.",
    img: "flying-l-180" },

  { img: "flying-l-180", kicker: "Ashton, Idaho", title: "The Flying L",
    text: "Home. The Logans’ ranch on the Fall River, with its own grass airstrip, a log house on the hill and Lee’s red-and-white Cessna 180 parked in the meadow.",
    alt: "A red-and-white Cessna 180 parked in a grassy meadow below pine trees and a log house." },

  { img: "atlantis-dome", kicker: "The central Pacific", title: "Atlantis",
    text: "Three hundred feet beneath the surface, a city of four hundred thousand people lives under a dome built over an entire undersea mountain. They have been there for forty thousand years. Nobody on the surface knows.",
    alt: "An immense glowing dome on the deep sea floor with a lit city inside and an aircraft descending toward it." },

  { img: "atlantis-city", kicker: "Inside the dome", title: "An old Mediterranean city",
    text: "Narrow streets, old stone and flowers spilling from the balconies, rising toward towers no surface architect has imagined. The sky looks clear and blue until you get close enough to see that it is water.",
    alt: "Atlantis seen from a landing platform: old stone streets and domed glass halls among tall spiraling towers, with two sleek aircraft parked in the foreground." },

  { img: "pacifica", kicker: "The research vessel", title: "The Pacifica",
    text: "Two kilometers long, five hundred meters wide, and shaped for the deep water where it spends most of its life. The Pacifica has been at sea for about ten thousand years.",
    alt: "A colossal smooth pale-gray vessel, shaped like a sea creature, on a calm gray ocean." },

  { img: "cloak", kicker: "The Pacifica", title: "Hidden in plain sight",
    text: "On the surface the Pacifica sits inside a cloaking field. To radar, to satellites and to the naked eye, it is nothing but open ocean.",
    alt: "A huge translucent blue dome glowing on a foggy gray sea." },

  { img: "control-room", kicker: "Beneath Yellowstone", title: "The reactor",
    text: "Fifty thousand years ago the builders put a dark-matter reactor under the Yellowstone caldera. It is still running. It is failing. And its controls answer to only two kinds of hands.",
    alt: "A dark control room lit red, with two freestanding control stations before curved windows over vast machinery." },

  { img: "polar-sentinel", kicker: "Under the Arctic ice", title: "The polar archive",
    text: "A library sealed beneath the ice early in the withdrawal and never touched since. Something is still on guard there.",
    alt: "A frost-covered tunnel with a squat white wheeled machine topped by a polished disc." },

  { chapter: "III", title: "The Things",
    text: "Machines, vessels and other surprises, described with the loving specificity they deserve.",
    img: "larry" },

  { img: "larry", kicker: "Observation drone", title: "Larry",
    text: "A bald eagle that is not a bald eagle. Larry is an Atlantean observation drone, and he has been keeping an eye on Lee for about two years.",
    alt: "A bald eagle perched on a snowy rock with its wings half open, mountains behind." },

  { img: "adamaris", kicker: "Palau", title: "The Adamaris",
    text: "A perfectly white yacht with no flag, no home port and no anchor chain, sitting impossibly still in the anchorage. When she leaves, she leaves no wake.",
    alt: "A sleek white superyacht motionless in a calm bay among green limestone islands." },

  { img: "smv75", kicker: "Atlantean aircraft", title: "The SMV-75",
    text: "The Atlantean tiltrotor. Cloaked, quiet, and as much at home under the water as above it.",
    alt: "A smooth gray tiltrotor aircraft hovering low over a foggy ocean deck." },

  { img: "boarding-smv75", kicker: "The SMV-75", title: "Wheels up",
    text: "Wherever this one is going, there is no airport there.",
    alt: "Lee and Kate walking up the rear ramp of a tiltrotor on a misty landing pad." },

  { img: "synthetic-vision", kicker: "In the cockpit", title: "Synthetic vision",
    text: "There is hardly a panel to look at. The airframe disappears, and the world, the flight data and whatever is hidden out there are painted onto the air at one-to-one scale.",
    alt: "Two pilots seen from behind, with flight symbology and a glowing dome projected on the windscreen." },

  { img: "hypersonic", kicker: "Atlantean aircraft", title: "The hypersonic",
    text: "No engines, no intakes, no windows, no control surfaces. Gravitational-field propulsion takes it to nearly Mach 8 without a sonic boom, and straight into the sea when it is time to go home.",
    alt: "A seamless dark arrowhead-shaped aircraft flying high above the ocean." },

  { img: "yellowstone-sentinel", kicker: "Beneath Yellowstone", title: "The sentinels",
    text: "The builders left guardians. Some of them are very old. Some of them are very fast.",
    alt: "A crablike walking robot with two glowing weapon arms in a red-lit underground hall." },

  { img: "ventus", kicker: "Lee Logan", title: "The Ventus",
    text: "Lee’s racing sailplane, the long-winged version. Some days he soars the Tetons just for the joy of it. Some days an eagle comes along.",
    alt: "A long-winged white sailplane flying past snow-covered peaks with a bald eagle off its wingtip." },

  { img: "family",
    alt: "The Logan family, Lee, Kate, Samantha and Jack, arm in arm beside a river at sunset." }
];
