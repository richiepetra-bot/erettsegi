export type QuestionSeed = {
  question_type: "multiple_choice";
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  difficulty: 1 | 2 | 3;
};

export type SourceRefSeed = {
  label: string;
  url: string;
};

export type TopicSeed = {
  slug: string;
  title: string;
  level: "mindketto" | "kozep" | "emelt";
  theme: string;
  order_index: number;
  summary_markdown: string;
  content_markdown: string;
  key_concepts: string[];
  source_refs?: SourceRefSeed[];
  questions: QuestionSeed[];
};

export const angolTopics: TopicSeed[] = [
  {
    slug: "personal-life-and-family",
    title: "Personal life, family (Személyes vonatkozások, család)",
    level: "mindketto",
    theme: "Szóbeli témakörök",
    order_index: 1,
    summary_markdown:
      "Az érettségi szóbeli egyik alaptémaköre. Itt magadról, a családodról, a lakóhelyedről és a mindennapi kapcsolataidról kell tudnod folyékonyan, összefüggően beszélni kb. 2-3 percben, kérdésekre válaszolva.",
    content_markdown: `
## Mire figyelj a szóbelin?

Ebben a témakörben a vizsgáztató tipikusan rákérdez a családodra, a szűkebb-tágabb környezetedre, a jellemedre és a mindennapjaidra. A cél nem a tökéletes nyelvtan, hanem az **összefüggő, folyékony beszéd**, megfelelő szókinccsel.

## Key vocabulary

- **immediate family** – szűk család (parents, siblings)
- **extended family** – kiterjedt család (grandparents, cousins, aunts, uncles)
- **to get along (with someone)** – jól kijönni valakivel
- **to look up to someone** – felnézni valakire
- **only child / the youngest / the eldest** – egyke / a legfiatalabb / a legidősebb
- **to be raised / brought up** – nevelkedni
- **household chores** – házimunka
- **to run in the family** – a családban örökletes/jellemző

## Useful phrases for the oral exam

- "I come from a family of four / I have quite a large family."
- "I get on really well with my younger brother, although we used to argue a lot when we were kids."
- "I'd say I take after my mother in terms of personality, but I look more like my dad."
- "One thing I really appreciate about my family is..."
- "Growing up, I was mostly raised by..."

## Sample answer (model paragraph)

> "There are four of us in my family: my parents, my younger sister and me. I'd say we're a pretty close-knit family — we have dinner together most evenings, and we try to spend weekends together whenever possible. My sister and I get along well now, though we used to fight a lot when we were younger. I think I take after my father in terms of personality — we're both quite easy-going, whereas my mum and sister are more organised and a bit more stubborn! One tradition I really value is that we always celebrate birthdays together, no matter how busy everyone is."

## Exam tips

1. Prepare 2-3 sentences about **each** family member, not just facts (age, job) but **relationships and personality**.
2. Use a **variety of tenses**: present simple for facts, past simple for childhood memories, present perfect for ongoing situations ("We've lived here for 10 years").
3. Always try to **extend your answers** with a reason or example — never stop at a one-word answer.
`,
    key_concepts: [
      "immediate family",
      "extended family",
      "to get along with",
      "to take after someone",
      "household chores",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "\"I really _____ my grandmother — she's the wisest person I know.\"",
        options: ["look up to", "look after", "look for", "look into"],
        correct_answer: "look up to",
        explanation: "'Look up to someone' = to admire and respect someone.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which word means 'a person's brothers and sisters'?",
        options: ["siblings", "relatives", "descendants", "ancestors"],
        correct_answer: "siblings",
        explanation: "'Siblings' specifically refers to brothers and sisters.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"My little brother and I used to fight a lot, but we _____ really well now.\"",
        options: ["get along", "get up", "get over", "get off"],
        correct_answer: "get along",
        explanation: "'Get along (with someone)' = to have a good relationship.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"People say I _____ my mother — we have the same sense of humour.\"",
        options: ["take after", "take on", "take up", "take in"],
        correct_answer: "take after",
        explanation: "'Take after someone' = to resemble an older family member.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which sentence uses the present perfect correctly to describe an ongoing family situation?",
        options: [
          "We have lived in this house for ten years.",
          "We are living in this house for ten years.",
          "We lived in this house since ten years.",
          "We live in this house for ten years ago.",
        ],
        correct_answer: "We have lived in this house for ten years.",
        explanation:
          "Present perfect + 'for' is used for a situation that started in the past and continues now.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"Your _____ includes grandparents, aunts, uncles and cousins.\"",
        options: ["extended family", "immediate family", "generation gap", "household chores"],
        correct_answer: "extended family",
        explanation: "'Extended family' refers to relatives beyond parents and siblings, such as grandparents and cousins.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"My _____ consists of just my parents and my brother.\"",
        options: ["immediate family", "extended family", "role model", "peer group"],
        correct_answer: "immediate family",
        explanation: "'Immediate family' refers to parents and siblings, as opposed to the wider extended family.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"Everyone in our house has to help with the _____, like washing up and vacuuming.\"",
        options: ["household chores", "entrance exams", "career path", "screen time"],
        correct_answer: "household chores",
        explanation: "'Household chores' are everyday domestic tasks like cleaning and washing up.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"A talent for music seems to _____ — my mother, my aunt and I all play the piano.\"",
        options: [
          "run in the family",
          "take after the family",
          "get along with the family",
          "look up to the family",
        ],
        correct_answer: "run in the family",
        explanation: "'Run in the family' means a trait or talent is shared across generations of relatives.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"She was _____ by her grandparents after her parents moved abroad for work.\"",
        options: ["brought up", "taken after", "looked up", "got along"],
        correct_answer: "brought up",
        explanation: "'To be brought up' means to be raised or cared for during childhood.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"As an _____, I never had to share my toys with brothers or sisters.\"",
        options: ["only child", "eldest child", "extended family", "immediate family"],
        correct_answer: "only child",
        explanation: "An 'only child' is someone who has no siblings.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which sentence correctly describes a childhood memory using the past simple?",
        options: [
          "When I was little, I shared a room with my sister.",
          "When I was little, I have shared a room with my sister.",
          "When I was little, I am sharing a room with my sister.",
          "When I was little, I share a room with my sister.",
        ],
        correct_answer: "When I was little, I shared a room with my sister.",
        explanation: "The past simple is used for finished actions or states in the past, such as childhood memories.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which answer best extends a simple statement with a reason, as recommended for the oral exam?",
        options: [
          "I get on well with my sister because we share the same sense of humour and always support each other.",
          "I get on well with my sister.",
          "My sister is nice.",
          "Yes.",
        ],
        correct_answer:
          "I get on well with my sister because we share the same sense of humour and always support each other.",
        explanation: "Exam tips recommend extending answers with a reason or example rather than stopping at a short statement.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "In a family with three children, the child who was born first is called _____.",
        options: ["the eldest", "the youngest", "an only child", "a sibling"],
        correct_answer: "the eldest",
        explanation: "'The eldest' refers to the oldest child in a family.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A family that has close, strong relationships between its members is often described as a _____ family.",
        options: ["close-knit", "extended", "immediate", "distant"],
        correct_answer: "close-knit",
        explanation: "'Close-knit' describes a family or group with strong, supportive relationships.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "school-and-education",
    title: "School and education (Az iskola)",
    level: "mindketto",
    theme: "Szóbeli témakörök",
    order_index: 2,
    summary_markdown:
      "Az iskoláról, a tantárgyakról, a tanárokkal és osztálytársakkal való kapcsolatról, valamint a jövőbeli tanulmányi terveidről kell tudnod beszélni.",
    content_markdown: `
## Mire figyelj a szóbelin?

Ide tartozik: milyen iskolába jársz, kedvenc/nem kedvelt tantárgyaid és miért, a tanáraid, az iskolai élet (szabályok, extra programok), és a továbbtanulási terveid.

## Key vocabulary

- **compulsory / optional subject** – kötelező / választható tantárgy
- **to fall behind (in a subject)** – lemaradni (egy tantárgyból)
- **to catch up (on schoolwork)** – bepótolni (a tananyagot)
- **strict / supportive teacher** – szigorú / támogató tanár
- **extracurricular activities** – tanórán kívüli tevékenységek
- **to apply for university** – egyetemre jelentkezni
- **entrance exam** – felvételi vizsga
- **grade / mark** – érdemjegy

## Useful phrases

- "My favourite subject has always been..., mainly because..."
- "I used to struggle with..., but thanks to my teacher I managed to catch up."
- "After graduating, I'm planning to apply for..."
- "What I like most about my school is the atmosphere / the facilities / the teachers."

## Sample answer (model paragraph)

> "I go to a grammar school that specialises in science subjects. My favourite subject is biology, partly because I find the topic fascinating, and partly because our teacher makes the lessons really engaging — she always brings in real-life examples. I used to find maths quite difficult, but I started going to extra classes last year, and now I'm much more confident. Outside of lessons, I'm part of the school's debate club, which has really helped my English. After the exams, I'm planning to apply to university to study computer science, so I've been focusing a lot on maths and IT this year."

## Exam tips

1. Mention **specific subjects and reasons** — "I like biology" is weak; "I like biology because of the teacher's practical examples" is strong.
2. Talk about **both positives and challenges** (a subject you struggled with) — this shows range.
3. Connect this topic to your **future plans** (university, career) to link it naturally to other topics.
`,
    key_concepts: [
      "compulsory subject",
      "extracurricular activities",
      "to fall behind",
      "to catch up",
      "entrance exam",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "\"I _____ in maths last term, but I've caught up now.\"",
        options: ["fell behind", "fell down", "fell off", "fell over"],
        correct_answer: "fell behind",
        explanation: "'Fall behind (in something)' = to make less progress than others.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which subject type is NOT required — students can choose it?",
        options: ["optional subject", "compulsory subject", "core subject", "mandatory subject"],
        correct_answer: "optional subject",
        explanation: "'Optional' means students may choose whether to take it.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"Next year I'm going to _____ university to study law.\"",
        options: ["apply for", "apply to", "apply on", "apply in"],
        correct_answer: "apply to",
        explanation: "Correct collocation: 'apply to' an institution, 'apply for' a course/job.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What do you call clubs and sports that happen outside normal lessons?",
        options: [
          "extracurricular activities",
          "compulsory lessons",
          "entrance exams",
          "core curriculum",
        ],
        correct_answer: "extracurricular activities",
        explanation: "'Extracurricular' = outside the standard curriculum.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"You need to pass the _____ before you can start your studies at that university.\"",
        options: ["entrance exam", "final grade", "school report", "timetable"],
        correct_answer: "entrance exam",
        explanation: "An 'entrance exam' determines admission to an institution.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"Maths and Hungarian are _____ subjects — every student has to take them.\"",
        options: ["compulsory", "optional", "extracurricular", "elective"],
        correct_answer: "compulsory",
        explanation: "'Compulsory' subjects are required, unlike optional or elective ones.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"I missed two weeks of school, so now I need to _____ on the material I missed.\"",
        options: ["catch up", "fall behind", "apply for", "take up"],
        correct_answer: "catch up",
        explanation: "'Catch up (on schoolwork)' means to reach the same level as others after falling behind.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"My chemistry teacher is very _____ — she always encourages us and helps us when we struggle.\"",
        options: ["supportive", "strict", "compulsory", "entrance"],
        correct_answer: "supportive",
        explanation: "A 'supportive' teacher encourages and helps students, as opposed to a strict one.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"I got a good _____ on my last English test — an A minus.\"",
        options: ["grade", "subject", "curriculum", "chore"],
        correct_answer: "grade",
        explanation: "A 'grade' (or mark) is the score or rating given for schoolwork.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"I'm going to _____ a scholarship to study abroad next year.\"",
        options: ["apply for", "apply to", "apply on", "apply about"],
        correct_answer: "apply for",
        explanation: "'Apply for' is used with a thing you request, such as a scholarship or job; 'apply to' is used with an institution.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which of the following is an example of an extracurricular activity mentioned as helping improve English skills?",
        options: [
          "joining the debate club",
          "taking an entrance exam",
          "falling behind in a subject",
          "attending a compulsory lesson",
        ],
        correct_answer: "joining the debate club",
        explanation: "The topic mentions that being part of the school's debate club really helped the speaker's English.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which sentence correctly uses 'used to' to describe a past habit that has since changed, as suggested for exam answers?",
        options: [
          "I used to find maths difficult, but now I'm more confident.",
          "I use to find maths difficult, but now I'm more confident.",
          "I am used to find maths difficult, but now I'm more confident.",
          "I used finding maths difficult, but now I'm more confident.",
        ],
        correct_answer: "I used to find maths difficult, but now I'm more confident.",
        explanation: "'Used to + infinitive' describes a past habit or state that is no longer true.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "The document that shows what lessons you have on which day is called a _____.",
        options: ["timetable", "curriculum", "transcript", "syllabus"],
        correct_answer: "timetable",
        explanation: "A 'timetable' shows the schedule of lessons for each day.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Why does the topic guide suggest giving a reason such as 'I like biology because of the teacher's practical examples' rather than just 'I like biology'?",
        options: [
          "Because it shows more developed, specific language and reasoning, which examiners reward.",
          "Because shorter answers are always graded higher.",
          "Because subject names must never be mentioned alone.",
          "Because it changes the topic to travel and tourism.",
        ],
        correct_answer:
          "Because it shows more developed, specific language and reasoning, which examiners reward.",
        explanation: "The exam tips state that mentioning specific subjects and reasons is stronger than a bare statement.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A secondary school that focuses especially on academic/science subjects, as mentioned in the topic, is called a _____.",
        options: ["grammar school", "entrance exam", "extracurricular club", "consumer society"],
        correct_answer: "grammar school",
        explanation: "The sample answer describes attending a 'grammar school that specialises in science subjects'.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "free-time-and-entertainment",
    title: "Free time, hobbies, entertainment (Szabadidő, szórakozás)",
    level: "mindketto",
    theme: "Szóbeli témakörök",
    order_index: 3,
    summary_markdown:
      "A hobbijaidról, a szabadidő eltöltéséről, a kulturális programokról (mozi, koncert, olvasás) és ezek indoklásáról kell folyékonyan beszélned.",
    content_markdown: `
## Mire figyelj a szóbelin?

A vizsgáztató kíváncsi arra, hogyan töltöd a szabadidődet, milyen hobbijaid vannak, és hogy ezek hogyan változtak az idővel. Fontos, hogy ne csak felsorolj, hanem **indokolj és részletezz** is.

## Key vocabulary

- **to unwind / to relax** – kikapcsolódni
- **to be into (something)** – érdeklődni valami iránt, "vágni" valamit
- **a hobby that runs in the family** – örökletes/családi hobbi
- **to binge-watch a series** – egyszerre sok részt megnézni egy sorozatból
- **to be a couch potato** – tévé előtt ülő, mozgásszegény típus
- **to take up a hobby** – elkezdeni egy hobbit
- **to give up a hobby** – abbahagyni egy hobbit

## Useful phrases

- "In my free time, I mostly enjoy..."
- "I've been into ... since I was a kid."
- "I took up ... a couple of years ago and I've stuck with it ever since."
- "It's a great way to unwind after a long day at school."

## Sample answer (model paragraph)

> "In my free time, I'm really into photography — I took it up about two years ago when my dad gave me his old camera. I especially enjoy street photography, and I like to edit the pictures afterwards. Apart from that, I enjoy going to the cinema with friends, and I'm a bit of a bookworm too — I usually read fantasy novels before going to bed. On weekends, I also love hiking, which helps me switch off from schoolwork and just relax outdoors."

## Exam tips

1. Don't just list hobbies — explain **how you got into them** and **why you enjoy them**.
2. Mention how your hobbies **changed over time** ("I used to... but now I...").
3. Bring in a few **less common expressions** (couch potato, bookworm, binge-watch) to show range of vocabulary.
`,
    key_concepts: [
      "to unwind",
      "to be into something",
      "to take up a hobby",
      "to binge-watch",
      "couch potato",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "\"I _____ painting last year, and I really enjoy it now.\"",
        options: ["took up", "took off", "took over", "took out"],
        correct_answer: "took up",
        explanation: "'Take up a hobby' = to start doing it as a new activity.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "What does 'to be a couch potato' mean?",
        options: [
          "to spend a lot of time sitting and watching TV",
          "to be very active and sporty",
          "to enjoy cooking vegetables",
          "to travel a lot",
        ],
        correct_answer: "to spend a lot of time sitting and watching TV",
        explanation: "'Couch potato' describes someone who is inactive and watches a lot of TV.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"I've been _____ hip-hop music since I was about twelve.\"",
        options: ["into", "on", "at", "for"],
        correct_answer: "into",
        explanation: "'To be into something' = to be interested in / enjoy something.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which word describes watching many episodes of a series in one sitting?",
        options: ["binge-watching", "channel-surfing", "fast-forwarding", "rewinding"],
        correct_answer: "binge-watching",
        explanation: "'Binge-watch' = to watch many episodes in a row.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"Reading before bed really helps me _____ after a stressful day.\"",
        options: ["unwind", "wind up", "wind down the window", "unwrap"],
        correct_answer: "unwind",
        explanation: "'Unwind' = to relax after being tense or busy.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"After a few months, she decided to _____ tennis because she didn't enjoy it anymore.\"",
        options: ["give up", "take up", "get along with", "look up to"],
        correct_answer: "give up",
        explanation: "'Give up a hobby' means to stop doing it.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Someone who reads a lot of books is often called a _____.",
        options: ["bookworm", "couch potato", "workaholic", "night owl"],
        correct_answer: "bookworm",
        explanation: "A 'bookworm' is someone who enjoys reading a lot.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"Going hiking on weekends helps me _____ from schoolwork and just relax.\"",
        options: ["switch off", "take up", "give up", "look up"],
        correct_answer: "switch off",
        explanation: "'Switch off (from something)' means to stop thinking about it and relax.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which sentence correctly uses present perfect to talk about a long-standing interest?",
        options: [
          "I've been into photography since I was a kid.",
          "I am into photography since I was a kid.",
          "I was into photography since I was a kid.",
          "I into photography since I was a kid.",
        ],
        correct_answer: "I've been into photography since I was a kid.",
        explanation: "Present perfect ('have been') + 'since' describes a state that started in the past and continues now.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "If a talent or interest is shared across generations of the same family, we say it _____.",
        options: [
          "runs in the family",
          "takes up the family",
          "gives up the family",
          "gets along the family",
        ],
        correct_answer: "runs in the family",
        explanation: "'Run in the family' means a trait or hobby is common among relatives across generations.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "In the sample answer, what kind of photography does the speaker especially enjoy?",
        options: ["street photography", "wildlife photography", "portrait photography", "underwater photography"],
        correct_answer: "street photography",
        explanation: "The sample answer says the speaker 'especially enjoys street photography'.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"After taking photos, the speaker likes to _____ them afterwards.\"",
        options: ["edit", "delete", "print", "sell"],
        correct_answer: "edit",
        explanation: "The sample answer mentions liking 'to edit the pictures afterwards'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which sentence best follows the exam tip of explaining how you got into a hobby, not just naming it?",
        options: [
          "I took up photography two years ago when my dad gave me his old camera.",
          "I like photography.",
          "Photography is a hobby.",
          "I have a camera.",
        ],
        correct_answer: "I took up photography two years ago when my dad gave me his old camera.",
        explanation: "The exam tips recommend explaining how and why you got into a hobby, not just listing it.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "What is the main difference in meaning between 'to take up a hobby' and 'to be into something'?",
        options: [
          "'Take up' focuses on starting an activity, while 'be into' describes ongoing enthusiasm or interest.",
          "They mean exactly the same thing with no difference.",
          "'Take up' is only used for sports, and 'be into' only for music.",
          "'Be into' means to dislike something.",
        ],
        correct_answer:
          "'Take up' focuses on starting an activity, while 'be into' describes ongoing enthusiasm or interest.",
        explanation: "'Take up' marks the beginning of a hobby, whereas 'be into' expresses a general, ongoing interest.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, what genre of novels does the speaker usually read before going to bed?",
        options: ["fantasy novels", "science fiction novels", "romance novels", "historical novels"],
        correct_answer: "fantasy novels",
        explanation: "The sample answer says the speaker 'usually reads fantasy novels before going to bed'.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "travel-and-tourism",
    title: "Travel and tourism (Utazás, turizmus)",
    level: "mindketto",
    theme: "Szóbeli témakörök",
    order_index: 4,
    summary_markdown:
      "Az utazási szokásaidról, egy emlékezetes útról, a közlekedési eszközökről és az utazás előnyeiről-hátrányairól kell beszélned.",
    content_markdown: `
## Mire figyelj a szóbelin?

Ez a témakör gyakran kapcsolódik a képleíráshoz is (egy utazással kapcsolatos kép alapján). Fontos, hogy tudj mesélni egy **konkrét útról**, ne csak általánosságban beszélj.

## Key vocabulary

- **package holiday** – szervezett utazás/csomagajánlat
- **to book a flight/hotel** – repülőjegyet/szállást foglalni
- **to go sightseeing** – nevezetességeket nézni
- **jet lag** – időeltolódás okozta fáradtság
- **off the beaten track** – kevésbé ismert/turisztikai útvonalaktól távoli hely
- **to broaden your horizons** – kitágítani a látókört
- **a budget/backpacking trip** – költséghatékony/hátizsákos utazás

## Useful phrases

- "One of the most memorable trips I've ever been on was..."
- "We stayed in a small guesthouse rather than a big hotel, which made the trip feel more authentic."
- "Travelling really broadens your horizons because..."
- "If I had the chance, I'd love to go backpacking around..."

## Sample answer (model paragraph)

> "One of the most memorable trips I've been on was to Croatia with my family two summers ago. We didn't go for a typical package holiday — instead we rented a car and explored a few smaller towns along the coast that were a bit off the beaten track. What I remember most is a small fishing village where we had the best seafood I've ever tasted. I think travelling like that, rather than staying in a big resort, really helps you understand a country's culture better. In the future, I'd love to go backpacking around Southeast Asia after finishing school."

## Exam tips

1. Prepare **one detailed story** (a specific trip) rather than only general statements — examiners reward concrete detail.
2. Use a **range of travel vocabulary** (package holiday vs backpacking vs off the beaten track) to show range.
3. Be ready to compare **pros and cons** of travelling (broadening horizons vs cost, jet lag, etc.).
`,
    key_concepts: [
      "package holiday",
      "to go sightseeing",
      "off the beaten track",
      "to broaden your horizons",
      "jet lag",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "\"We wanted an authentic experience, so we avoided the usual _____ and explored smaller villages instead.\"",
        options: ["tourist traps", "airports", "passports", "suitcases"],
        correct_answer: "tourist traps",
        explanation: "'Tourist trap' = an overly commercial place aimed at tourists.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What does 'off the beaten track' mean?",
        options: [
          "a place that isn't well known or visited by many tourists",
          "a very popular and crowded tourist destination",
          "a dangerous hiking route",
          "an airport with many delays",
        ],
        correct_answer: "a place that isn't well known or visited by many tourists",
        explanation: "'Off the beaten track' describes a lesser-known, less touristy place.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"After the long flight to Australia, I had terrible _____ for two days.\"",
        options: ["jet lag", "home sickness", "sea sickness", "a hangover"],
        correct_answer: "jet lag",
        explanation: "'Jet lag' = tiredness after travelling across time zones.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"Travelling to different countries really _____ my horizons.\"",
        options: ["broadened", "widened up", "opened", "stretched"],
        correct_answer: "broadened",
        explanation: "Correct collocation: 'broaden someone's horizons'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which word describes a cheap, low-cost style of travelling with a backpack?",
        options: ["backpacking", "package holiday", "cruise", "business trip"],
        correct_answer: "backpacking",
        explanation: "'Backpacking' = travelling on a low budget, usually carrying your belongings in a backpack.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A pre-arranged trip that includes flights, hotel and sometimes meals is called a _____.",
        options: ["package holiday", "backpacking trip", "business trip", "road trip"],
        correct_answer: "package holiday",
        explanation: "A 'package holiday' is a pre-organised trip where flights, accommodation and often meals are bundled together.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"On our first day in Rome, we went _____ and visited the Colosseum and the Trevi Fountain.\"",
        options: ["sightseeing", "backpacking", "boarding", "checking in"],
        correct_answer: "sightseeing",
        explanation: "'To go sightseeing' means to visit famous or interesting places as a tourist.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"It's usually cheaper if you _____ your flight several months in advance.\"",
        options: ["book", "cancel", "miss", "delay"],
        correct_answer: "book",
        explanation: "'To book a flight/hotel' means to reserve it in advance.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "In the sample answer, where did the family stay instead of a big hotel?",
        options: ["a small guesthouse", "a campsite", "a hostel", "a cruise ship"],
        correct_answer: "a small guesthouse",
        explanation: "The sample answer says they 'stayed in a small guesthouse rather than a big hotel'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which sentence correctly uses the past simple to narrate a specific trip, as recommended for the oral exam?",
        options: [
          "Two summers ago, we rented a car and explored small towns along the coast.",
          "Two summers ago, we rent a car and explore small towns along the coast.",
          "Two summers ago, we have rented a car and explored small towns.",
          "Two summers ago, we are renting a car and exploring small towns.",
        ],
        correct_answer: "Two summers ago, we rented a car and explored small towns along the coast.",
        explanation: "The past simple is the correct tense for narrating a completed, specific past event.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "If a trip is planned to cost as little money as possible, it can be described as a _____ trip.",
        options: ["budget", "package", "luxury", "business"],
        correct_answer: "budget",
        explanation: "A 'budget trip' is one planned to keep costs as low as possible.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the exam tips, why is it useful to prepare one detailed story about a specific trip rather than only general statements?",
        options: [
          "Because examiners reward concrete detail over vague generalities.",
          "Because general statements are grammatically incorrect.",
          "Because specific stories are shorter to say.",
          "Because the topic only allows one sentence answers.",
        ],
        correct_answer: "Because examiners reward concrete detail over vague generalities.",
        explanation: "The exam tips state that examiners reward concrete detail, so a specific story is stronger than general statements.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "What is the key difference between 'off the beaten track' and a 'tourist trap'?",
        options: [
          "'Off the beaten track' means quiet and less visited, while a 'tourist trap' is an overcommercialised place aimed at tourists.",
          "They are two different words for the same touristy, crowded place.",
          "'Off the beaten track' refers only to airports, while 'tourist trap' refers only to hotels.",
          "A tourist trap is always cheaper than an off-the-beaten-track destination.",
        ],
        correct_answer:
          "'Off the beaten track' means quiet and less visited, while a 'tourist trap' is an overcommercialised place aimed at tourists.",
        explanation: "These two expressions describe almost opposite kinds of destinations: quiet/unknown versus crowded/commercial.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, which country did the speaker visit two summers ago?",
        options: ["Croatia", "Italy", "Greece", "Spain"],
        correct_answer: "Croatia",
        explanation: "The sample answer describes a trip 'to Croatia with my family two summers ago'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"Instead of joining a tour group, we decided to _____ a car and explore independently.\"",
        options: ["rent", "book", "catch", "miss"],
        correct_answer: "rent",
        explanation: "'To rent a car' means to pay to use a car temporarily, as mentioned in the sample answer.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "health-and-lifestyle",
    title: "Health and lifestyle (Életmód, egészség)",
    level: "mindketto",
    theme: "Szóbeli témakörök",
    order_index: 5,
    summary_markdown:
      "Az egészséges életmódról, a táplálkozásról, a sportról és a stresszkezelésről kell tudnod beszélni, saját szokásaidra reflektálva.",
    content_markdown: `
## Mire figyelj a szóbelin?

Ez a témakör gyakran összekapcsolódik a szabadidővel. A vizsgáztató kíváncsi a napi rutinodra, az étkezési szokásaidra, és arra, hogyan próbálsz egészségesen élni (vagy min szeretnél változtatni).

## Key vocabulary

- **to work out / to exercise** – edzeni
- **a balanced diet** – kiegyensúlyozott étrend
- **junk food** – gyorsételek, egészségtelen étel
- **to cut down on (sugar/salt)** – csökkenteni (cukor/só) fogyasztását
- **to be under stress** – stressz alatt lenni
- **to get enough sleep** – eleget aludni
- **a sedentary lifestyle** – ülő, mozgásszegény életmód

## Useful phrases

- "I try to lead a fairly healthy lifestyle, although..."
- "I've been trying to cut down on..."
- "Exercise really helps me deal with stress before exams."
- "One thing I'd like to change about my lifestyle is..."

## Sample answer (model paragraph)

> "I'd say I try to live a fairly healthy lifestyle, though it's not always easy with school taking up so much time. I go jogging three times a week, which really helps me clear my head, especially before exams. In terms of diet, I try to eat a balanced diet, but I have to admit I have a weakness for junk food, especially during exam periods when I'm stressed. One thing I'm trying to work on is getting more sleep — I often stay up too late finishing homework, which leaves me tired the next day."

## Exam tips

1. Be honest and personal — examiners like **authentic, reflective answers**, not just textbook statements.
2. Mention something you'd like to **improve**, not just positives — this shows more natural, nuanced English.
3. Connect health to **stress and school life** — a natural bridge to other topics like school or free time.
`,
    key_concepts: [
      "a balanced diet",
      "to cut down on",
      "to work out",
      "to be under stress",
      "a sedentary lifestyle",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "\"I've been trying to _____ sugar because I want to eat more healthily.\"",
        options: ["cut down on", "cut off", "cut out loud", "cut across"],
        correct_answer: "cut down on",
        explanation: "'Cut down on something' = to reduce the amount of it that you consume.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which phrase describes a lifestyle with very little physical activity?",
        options: ["a sedentary lifestyle", "an active lifestyle", "a balanced lifestyle", "a hectic lifestyle"],
        correct_answer: "a sedentary lifestyle",
        explanation: "'Sedentary' means involving a lot of sitting and little exercise.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"Regular exercise is a great way to deal with being _____ stress.\"",
        options: ["under", "on", "at", "in"],
        correct_answer: "under",
        explanation: "Fixed expression: 'to be under stress/pressure'.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "What is 'junk food'?",
        options: [
          "food that is unhealthy but quick and convenient",
          "food that has gone off and can't be eaten",
          "food eaten only at festivals",
          "a type of health supplement",
        ],
        correct_answer: "food that is unhealthy but quick and convenient",
        explanation: "'Junk food' refers to fast food or snacks low in nutritional value.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"I try to _____ every morning before school, even if it's just a short jog.\"",
        options: ["work out", "work on", "work off", "work up"],
        correct_answer: "work out",
        explanation: "'Work out' = to do physical exercise.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Eating a variety of healthy foods in the right amounts is known as having a _____.",
        options: ["balanced diet", "sedentary lifestyle", "screen time", "consumer society"],
        correct_answer: "balanced diet",
        explanation: "A 'balanced diet' includes the right proportions of different food groups.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Teenagers are advised to _____ every night to stay healthy and focused at school.",
        options: ["get enough sleep", "cut down on stress", "work out sugar", "take up junk food"],
        correct_answer: "get enough sleep",
        explanation: "'To get enough sleep' means to sleep for a sufficient amount of time each night.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "According to the sample answer, how often does the speaker go jogging?",
        options: ["three times a week", "every day", "once a month", "twice a week"],
        correct_answer: "three times a week",
        explanation: "The sample answer says 'I go jogging three times a week'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"Going for a run really helps me _____ before a stressful exam.\"",
        options: ["clear my head", "cut down on stress", "get under stress", "fall behind"],
        correct_answer: "clear my head",
        explanation: "'Clear my head' means to help oneself think more calmly by relaxing or exercising.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which sentence correctly uses 'have to admit' to acknowledge an honest weakness, as suggested for authentic exam answers?",
        options: [
          "I have to admit I have a weakness for junk food.",
          "I have to admitting I have a weakness for junk food.",
          "I must to admit I have a weakness for junk food.",
          "I have admit I have a weakness for junk food.",
        ],
        correct_answer: "I have to admit I have a weakness for junk food.",
        explanation: "'Have to admit' is followed by a clause, not a gerund or bare infinitive: 'have to admit (that) I have...'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"I often _____ finishing homework, which leaves me tired the next day.\"",
        options: ["stay up too late", "wake up early", "work out late", "cut down late"],
        correct_answer: "stay up too late",
        explanation: "'Stay up too late' means to go to bed later than one should.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Why do the exam tips recommend mentioning something you would like to improve, not just positive habits?",
        options: [
          "Because it shows more natural, nuanced and reflective English rather than only textbook statements.",
          "Because examiners only accept negative answers.",
          "Because positive statements are grammatically wrong.",
          "Because the topic requires exactly one sentence.",
        ],
        correct_answer:
          "Because it shows more natural, nuanced and reflective English rather than only textbook statements.",
        explanation: "The exam tips say mentioning something to improve shows more natural, reflective English.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the exam tips, health is described as a natural bridge to which other topics?",
        options: [
          "stress and school life",
          "travel and tourism only",
          "economy and finances only",
          "science and technology only",
        ],
        correct_answer: "stress and school life",
        explanation: "The exam tips connect health to stress and school life, linking naturally to other topics.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"I have a _____ for chocolate — I always end up eating too much of it.\"",
        options: ["weakness", "balance", "budget", "chore"],
        correct_answer: "weakness",
        explanation: "'To have a weakness for something' means to find it hard to resist.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "What does the speaker in the sample answer say they are trying to work on?",
        options: [
          "getting more sleep",
          "eating more junk food",
          "doing less exercise",
          "watching more TV",
        ],
        correct_answer: "getting more sleep",
        explanation: "The sample answer says 'one thing I'm trying to work on is getting more sleep'.",
        difficulty: 1,
      },
    ],
  },
];
