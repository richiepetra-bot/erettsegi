import { TopicSeed } from "./angol";

export const angolTovabbiTemakorokTopics: TopicSeed[] = [
  {
    slug: "people-and-society",
    title: "People and society (Ember és társadalom)",
    level: "mindketto",
    theme: "Szóbeli témakörök",
    order_index: 6,
    summary_markdown:
      "Ebben a témakörben az emberi kapcsolatokról, a generációk közötti különbségekről, a tolerancia kérdéséről és a társadalmi problémákról kell tudnod véleményt formálni angolul, érvekkel alátámasztva.",
    content_markdown: `
## Mire figyelj a szóbelin?

A vizsgáztató itt tipikusan a nemzedékek közti viszonyra, a barátságra, a tinédzserek problémáira, illetve tágabb társadalmi kérdésekre (tolerancia, egyenlőség, önkéntesség) kérdez rá. Fontos, hogy ne csak leírd a jelenséget, hanem **véleményt is alkoss**, és azt meg is indokold.

## Key vocabulary

- **generation gap** – generációs szakadék
- **peer pressure** – kortárs nyomás
- **to get on someone's nerves** – idegesíteni valakit
- **role model** – példakép
- **volunteer work / to volunteer** – önkéntes munka / önkénteskedni
- **discrimination / to discriminate against** – megkülönböztetés / hátrányosan megkülönböztetni
- **to raise awareness (of something)** – felhívni a figyelmet valamire
- **social norms** – társadalmi normák

## Useful phrases for the oral exam

- "In my opinion, the generation gap is mostly caused by..."
- "I think peer pressure can have both positive and negative effects."
- "As far as I'm concerned, everyone deserves to be treated equally, regardless of..."
- "One issue that really concerns me is..."
- "I used to volunteer at..., which taught me a lot about..."

## Sample answer (model paragraph)

> "I think one of the biggest challenges young people face today is peer pressure — the need to fit in can push people to do things they wouldn't normally do. On the other hand, I believe the generation gap is often exaggerated: my grandparents and I actually agree on a lot of things, even if we disagree about technology! As for social issues, I feel strongly about discrimination — nobody should be treated unfairly because of their background, gender, or beliefs. Last year I volunteered at a local charity shop, and it really opened my eyes to how much of a difference small actions can make."

## Exam tips

1. Practise giving a **clear opinion** with a reason: "I think X, because Y."
2. Learn a few **contrasting linkers** (on the other hand, however, although) to show balanced arguments.
3. Prepare one **personal example** (volunteering, a family situation, a news story) for social topics — examiners respond well to specifics, not generalities.
`,
    key_concepts: [
      "generation gap",
      "peer pressure",
      "role model",
      "to volunteer / volunteer work",
      "discrimination",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "\"Teenagers often struggle with _____ — the desire to be accepted by their friends.\"",
        options: ["peer pressure", "generation gap", "role model", "social norms"],
        correct_answer: "peer pressure",
        explanation: "'Peer pressure' refers to the influence of one's peer group to fit in or conform.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"My grandmother is a real _____ to me — I admire her strength and kindness.\"",
        options: ["role model", "peer", "volunteer", "generation"],
        correct_answer: "role model",
        explanation: "'Role model' = someone whose behaviour or success is worth imitating.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which verb phrase means 'to work without being paid, to help others'?",
        options: ["to volunteer", "to discriminate", "to raise awareness", "to get on someone's nerves"],
        correct_answer: "to volunteer",
        explanation: "'To volunteer' means to freely offer to do unpaid work, often for a charity or community cause.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"The campaign aims to _____ the importance of mental health among teenagers.\"",
        options: ["raise awareness of", "get on the nerves of", "take after", "look up to"],
        correct_answer: "raise awareness of",
        explanation: "'To raise awareness of something' = to make more people notice and understand an issue.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which sentence best expresses a balanced opinion using a contrasting linker?",
        options: [
          "I think social media connects people; on the other hand, it can also isolate them.",
          "I think social media connects people and it connects people.",
          "Social media is good because it is good.",
          "I don't have an opinion about social media at all."
        ],
        correct_answer: "I think social media connects people; on the other hand, it can also isolate them.",
        explanation: "This shows a balanced argument using the contrasting linker 'on the other hand', which examiners value in opinion-based answers.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "The differences in opinions and values between older and younger people are often called the _____.",
        options: ["generation gap", "peer pressure", "social norms", "role model"],
        correct_answer: "generation gap",
        explanation: "'Generation gap' describes differences in attitudes between older and younger generations.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"My little brother's constant complaining really _____.\"",
        options: ["gets on my nerves", "gets along with me", "looks up to me", "raises my awareness"],
        correct_answer: "gets on my nerves",
        explanation: "'To get on someone's nerves' means to annoy or irritate someone.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Treating someone unfairly because of their race, gender or background is called _____.",
        options: ["discrimination", "volunteering", "peer pressure", "a generation gap"],
        correct_answer: "discrimination",
        explanation: "'Discrimination' is unfair treatment of people based on characteristics like race or gender.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Unwritten rules about how people are expected to behave in a society are known as _____.",
        options: ["social norms", "role models", "generation gaps", "volunteer work"],
        correct_answer: "social norms",
        explanation: "'Social norms' are the unwritten rules that govern expected behaviour in a society.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, what does the speaker say about the generation gap with their grandparents?",
        options: [
          "They actually agree on a lot of things, even though they disagree about technology.",
          "They never agree on anything at all.",
          "They only talk about technology.",
          "They have never discussed the generation gap.",
        ],
        correct_answer: "They actually agree on a lot of things, even though they disagree about technology.",
        explanation: "The sample answer says the generation gap is often exaggerated and that they agree on a lot, disagreeing mainly about technology.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "In the sample answer, where did the speaker volunteer last year?",
        options: ["a local charity shop", "a hospital", "a school", "an animal shelter"],
        correct_answer: "a local charity shop",
        explanation: "The sample answer says 'Last year I volunteered at a local charity shop'.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"It is illegal in most countries to _____ someone because of their religion.\"",
        options: ["discriminate against", "raise awareness of", "get on the nerves of", "look up to"],
        correct_answer: "discriminate against",
        explanation: "'To discriminate against someone' means to treat them unfairly because of a characteristic like religion.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which sentence best uses a contrasting linker to present a balanced view on peer pressure, as recommended for this topic?",
        options: [
          "Peer pressure can push people to make bad choices; however, it can also encourage healthy competition.",
          "Peer pressure is always bad and has no positive side.",
          "Peer pressure exists among teenagers.",
          "I don't know anything about peer pressure.",
        ],
        correct_answer:
          "Peer pressure can push people to make bad choices; however, it can also encourage healthy competition.",
        explanation: "This answer uses the contrasting linker 'however' to present both a negative and a positive side, as the exam tips recommend.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Why does the topic guide recommend preparing one personal example, such as volunteering, for social issue questions?",
        options: [
          "Because examiners respond well to specific, personal examples rather than generalities.",
          "Because personal examples are not allowed at the oral exam.",
          "Because only volunteering examples are accepted.",
          "Because generalities always score higher than examples.",
        ],
        correct_answer: "Because examiners respond well to specific, personal examples rather than generalities.",
        explanation: "The exam tips state that examiners respond well to specifics, not generalities.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"As far as I'm concerned, everyone deserves to be treated equally, regardless of their background.\" What does 'regardless of' mean here?",
        options: [
          "without being affected or influenced by",
          "because of, due to",
          "in addition to",
          "instead of",
        ],
        correct_answer: "without being affected or influenced by",
        explanation: "'Regardless of' means that something is true no matter what a particular factor is.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "environment-and-where-we-live",
    title: "Environment and where we live (Környezetünk, lakóhelyünk)",
    level: "mindketto",
    theme: "Szóbeli témakörök",
    order_index: 7,
    summary_markdown:
      "Ez a témakör a lakóhelyed leírásától a globális környezetvédelmi problémákig terjed: a lakókörnyezet bemutatása, a városi és vidéki élet összehasonlítása, valamint a klímaváltozás és a fenntarthatóság témái kerülnek elő.",
    content_markdown: `
## Mire figyelj a szóbelin?

Itt egyaránt számíthatsz konkrét (Hol laksz? Milyen a lakásod/házad?) és általánosabb, véleményformáló kérdésekre (Városban vagy vidéken jobb élni? Mit tehetünk a környezetért?). Érdemes mindkét szintre felkészülnöd.

## Key vocabulary

- **suburb / outskirts** – külváros / a város szélén lévő terület
- **detached / semi-detached house** – szabadon álló / ikerház
- **carbon footprint** – szén-lábnyom (ökológiai lábnyom)
- **renewable energy** – megújuló energia
- **to recycle / recycling** – újrahasznosítani / újrahasznosítás
- **global warming / climate change** – globális felmelegedés / klímaváltozás
- **sustainable / sustainability** – fenntartható / fenntarthatóság
- **pollution (air/water/noise)** – szennyezés (levegő/víz/zaj)

## Useful phrases for the oral exam

- "I live in a small flat/house on the outskirts of..."
- "One advantage of living in the countryside is..., whereas in the city..."
- "I try to reduce my carbon footprint by..."
- "In my opinion, governments should invest more in renewable energy because..."
- "A major environmental issue in my area is..."

## Sample answer (model paragraph)

> "I live in a semi-detached house in a quiet suburb, about twenty minutes from the city centre by bus. I really like it here because it's peaceful, but still close enough to everything I need. If I had to choose between city and countryside life, I think I'd go for a mix — the convenience of the city with some green space nearby. As for the environment, I try to do my bit: I recycle everything I can, and I usually cycle to school instead of asking for a lift. I do think climate change is one of the most serious challenges we face, and I believe both governments and individuals need to take responsibility — for example, by investing more in renewable energy and reducing plastic waste."

## Exam tips

1. Prepare **both a factual description** (your home, area) and **an opinion-based answer** (city vs. countryside, environmental responsibility).
2. Use **comparative structures** confidently: "X is quieter than Y", "the biggest advantage of... is..."
3. Mention **one concrete personal action** you take for the environment — it makes your answer more memorable and authentic.
`,
    key_concepts: [
      "carbon footprint",
      "renewable energy",
      "to recycle",
      "climate change",
      "sustainable / sustainability",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "\"Solar and wind power are examples of _____ energy.\"",
        options: ["renewable", "sustainable footprint", "detached", "suburban"],
        correct_answer: "renewable",
        explanation: "'Renewable energy' comes from sources that naturally replenish, like sun and wind.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which word describes a way of living that meets present needs without harming future generations?",
        options: ["sustainable", "detached", "suburban", "polluted"],
        correct_answer: "sustainable",
        explanation: "'Sustainable' describes practices that can continue long-term without depleting resources or harming the environment.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"We should all try to reduce our _____ by using less plastic and travelling more sustainably.\"",
        options: ["carbon footprint", "outskirts", "recycling bin", "renewable energy"],
        correct_answer: "carbon footprint",
        explanation: "'Carbon footprint' refers to the total amount of greenhouse gases produced by a person's activities.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which sentence correctly uses a comparative structure?",
        options: [
          "Living in the countryside is quieter than living in the city.",
          "Living in the countryside is quiet than living in the city.",
          "Living in the countryside is the quiet as living in the city.",
          "Living in the countryside is more quiet that living in the city."
        ],
        correct_answer: "Living in the countryside is quieter than living in the city.",
        explanation: "The correct comparative form of 'quiet' is 'quieter... than', not 'more quiet' or 'quiet than'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"A house that is joined to another house on one side is called a _____ house.\"",
        options: ["semi-detached", "detached", "renewable", "sustainable"],
        correct_answer: "semi-detached",
        explanation: "'Semi-detached' describes a house sharing one wall with a neighbouring house; 'detached' means standing completely alone.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "An area located on the edge of a city, away from the centre, is called the _____.",
        options: ["outskirts", "downtown", "countryside", "city centre"],
        correct_answer: "outskirts",
        explanation: "The 'outskirts' are the outer areas of a town or city, farthest from the centre.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Separating waste like paper, glass and plastic so it can be reused is called _____.",
        options: ["recycling", "pollution", "sustainability", "inflation"],
        correct_answer: "recycling",
        explanation: "'Recycling' is the process of processing used materials so they can be reused.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "The long-term rise in the Earth's average temperature is commonly known as _____.",
        options: ["global warming", "carbon footprint", "air pollution", "renewable energy"],
        correct_answer: "global warming",
        explanation: "'Global warming' refers to the gradual increase in the Earth's overall temperature.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Loud traffic and construction sounds in cities are a form of _____ pollution.",
        options: ["noise", "air", "water", "plastic"],
        correct_answer: "noise",
        explanation: "'Noise pollution' refers to excessive or disturbing sound in the environment, such as traffic or construction.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, how does the speaker usually get to school instead of asking for a lift?",
        options: ["by cycling", "by bus", "by walking", "by car"],
        correct_answer: "by cycling",
        explanation: "The sample answer says 'I usually cycle to school instead of asking for a lift'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, how far is the speaker's house from the city centre by bus?",
        options: ["about twenty minutes", "about five minutes", "about one hour", "about two hours"],
        correct_answer: "about twenty minutes",
        explanation: "The sample answer says the house is 'about twenty minutes from the city centre by bus'.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"I try to _____ everything I can — paper, glass and plastic.\"",
        options: ["recycle", "pollute", "inflate", "discriminate"],
        correct_answer: "recycle",
        explanation: "'To recycle' means to process used materials so they can be used again.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which sentence correctly uses a comparative structure to compare city and countryside life, following the topic's exam tips?",
        options: [
          "The countryside offers more green space than the city, but the city is more convenient.",
          "The countryside offer more green space then the city.",
          "The countryside is more green space as the city.",
          "The countryside has more green than the city has green.",
        ],
        correct_answer: "The countryside offers more green space than the city, but the city is more convenient.",
        explanation: "This sentence uses correct comparative grammar ('more... than') to contrast city and countryside life.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Why does the topic guide suggest mentioning one concrete personal action for the environment, such as recycling or cycling to school?",
        options: [
          "Because it makes the answer more memorable and authentic.",
          "Because concrete actions are grammatically required.",
          "Because examiners only ask about personal actions.",
          "Because general environmental opinions are forbidden.",
        ],
        correct_answer: "Because it makes the answer more memorable and authentic.",
        explanation: "The exam tips state that mentioning a concrete personal action makes the answer more memorable and authentic.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "What is the difference between 'renewable energy' and a 'sustainable lifestyle'?",
        options: [
          "'Renewable energy' refers to power sources that naturally replenish, while a 'sustainable lifestyle' is a broader way of living that avoids long-term harm to the environment.",
          "They are exactly the same concept with no difference.",
          "'Renewable energy' refers only to solar power.",
          "A 'sustainable lifestyle' means using only fossil fuels.",
        ],
        correct_answer:
          "'Renewable energy' refers to power sources that naturally replenish, while a 'sustainable lifestyle' is a broader way of living that avoids long-term harm to the environment.",
        explanation: "'Renewable energy' is one specific resource type, while 'sustainable' describes a broader approach to living responsibly.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "the-world-of-work",
    title: "The world of work (A munka világa)",
    level: "mindketto",
    theme: "Szóbeli témakörök",
    order_index: 8,
    summary_markdown:
      "A munka világa témakörben a jövőbeli karriertervekről, a munkakeresésről, az állásinterjúról és a munka-magánélet egyensúlyáról kell tudnod folyékonyan beszélni, megfelelő szakszókinccsel.",
    content_markdown: `
## Mire figyelj a szóbelin?

A vizsgáztató jellemzően rákérdez a terveidre (továbbtanulás, jövőbeli szakma), esetleg egy korábbi (diák)munkatapasztalatodra, valamint általánosabb kérdésekre a munka világáról (mi tesz egy munkát vonzóvá, a távmunka előnyei-hátrányai stb.).

## Key vocabulary

- **career path** – karrierút
- **job interview** – állásinterjú
- **to apply for a job** – állásra jelentkezni
- **CV / cover letter** – önéletrajz / motivációs levél
- **work-life balance** – munka-magánélet egyensúlya
- **to work remotely / remote work** – távmunkában dolgozni / távmunka
- **internship / work experience** – szakmai gyakorlat / munkatapasztalat
- **promotion / to get promoted** – előléptetés / előléptetni valakit

## Useful phrases for the oral exam

- "I'm planning to study... at university, because I'm really interested in..."
- "I did a summer internship at..., where I learned..."
- "I think work-life balance is really important because..."
- "One advantage of remote work is..., but a downside can be..."
- "In an ideal job, I would look for..."

## Sample answer (model paragraph)

> "I'm hoping to study computer science at university, since I've always been interested in how technology works, and I think it offers really good career prospects. Last summer I did a two-week internship at a small IT company, which was a great experience — I learned how to write a proper CV and even sat through my first job interview, which was quite nerve-wracking! Looking ahead, I think work-life balance will be really important to me: I've seen my parents struggle with long hours, and I don't want to sacrifice everything for my career. I'd also be open to remote work, since I think it gives you more flexibility, even though I know it can make it harder to separate work from free time."

## Exam tips

1. Prepare a **clear, confident answer** about your future plans — examiners often ask this as a warm-up question.
2. Learn key **collocations** (apply for a job, attend an interview, get promoted) rather than translating word-for-word from Hungarian.
3. If you have any part-time job or internship experience, **prepare 2-3 sentences** about it — real examples always score better than generic statements.
`,
    key_concepts: [
      "career path",
      "job interview",
      "to apply for a job",
      "work-life balance",
      "internship",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "\"Before you get a job interview, you usually need to _____ the position.\"",
        options: ["apply for", "get promoted to", "work remotely for", "balance"],
        correct_answer: "apply for",
        explanation: "'To apply for a job/position' means to formally request consideration for it, usually by sending a CV.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which document typically summarises your education, skills and work experience?",
        options: ["a CV", "a cover story", "a career path", "an internship"],
        correct_answer: "a CV",
        explanation: "A CV (curriculum vitae) is a document summarising a person's education, skills and experience.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"After working there for three years, she finally got _____ to team leader.\"",
        options: ["promoted", "applied", "interviewed", "balanced"],
        correct_answer: "promoted",
        explanation: "'To get promoted' means to be given a higher position or rank at work.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"Many companies now allow employees to _____, especially since the pandemic.\"",
        options: ["work remotely", "apply for a CV", "get an internship promoted", "balance an interview"],
        correct_answer: "work remotely",
        explanation: "'To work remotely' means to work from home or another location instead of the office.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"Maintaining a good _____ means not letting your job take over your personal time.\"",
        options: ["work-life balance", "cover letter", "career path", "job interview"],
        correct_answer: "work-life balance",
        explanation: "'Work-life balance' refers to dividing time and energy appropriately between work and personal life.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "The sequence of jobs and progress someone makes throughout their working life is called their _____.",
        options: ["career path", "cover letter", "job interview", "internship"],
        correct_answer: "career path",
        explanation: "A 'career path' is the progression of jobs and roles someone follows over their working life.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Before starting a new job, candidates are usually invited to attend a _____.",
        options: ["job interview", "cover letter", "internship", "CV"],
        correct_answer: "job interview",
        explanation: "A 'job interview' is a meeting where an employer assesses a candidate before hiring them.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A short document sent along with your CV, explaining why you're a good fit for the job, is called a _____.",
        options: ["cover letter", "career path", "internship", "promotion"],
        correct_answer: "cover letter",
        explanation: "A 'cover letter' accompanies a CV and explains why the applicant suits the job.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A short period of supervised work, often unpaid, that gives students practical experience is called an _____.",
        options: ["internship", "interview", "allowance", "application"],
        correct_answer: "internship",
        explanation: "An 'internship' is a period of work experience, often for students, sometimes unpaid.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, how long was the speaker's internship at the IT company?",
        options: ["two weeks", "two months", "one week", "six months"],
        correct_answer: "two weeks",
        explanation: "The sample answer says 'Last summer I did a two-week internship at a small IT company'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, what does the speaker say about attending their first job interview?",
        options: [
          "it was quite nerve-wracking",
          "it was very relaxing",
          "it was cancelled",
          "it lasted five hours",
        ],
        correct_answer: "it was quite nerve-wracking",
        explanation: "The sample answer describes the first job interview as 'quite nerve-wracking'.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"I don't want to _____ everything for my career, like my parents did with their long hours.\"",
        options: ["sacrifice", "apply for", "get promoted", "rely on"],
        correct_answer: "sacrifice",
        explanation: "'To sacrifice something' means to give it up for the sake of something else, such as a career.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the exam tips, why should collocations like 'apply for a job' or 'attend an interview' be learned directly, rather than translated word-for-word from Hungarian?",
        options: [
          "Because direct translation from Hungarian often produces incorrect collocations in English.",
          "Because Hungarian and English collocations are always identical.",
          "Because collocations are not tested at the oral exam.",
          "Because only single words matter, not phrases.",
        ],
        correct_answer: "Because direct translation from Hungarian often produces incorrect collocations in English.",
        explanation: "The exam tips recommend learning key collocations rather than translating word-for-word from Hungarian, which often produces mistakes.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Why does the topic guide suggest preparing 2-3 sentences about any part-time job or internship experience?",
        options: [
          "Because real examples always score better than generic statements.",
          "Because internships are compulsory for every student.",
          "Because generic statements are not allowed in English.",
          "Because examiners only ask about internships.",
        ],
        correct_answer: "Because real examples always score better than generic statements.",
        explanation: "The exam tips state that real examples from a part-time job or internship always score better than generic statements.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"One advantage of remote work is that it gives employees more _____ over their schedule.\"",
        options: ["flexibility", "promotion", "allowance", "curriculum"],
        correct_answer: "flexibility",
        explanation: "Remote work is often associated with greater 'flexibility' in how and when people work.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "science-and-technology",
    title: "Science and technology (Tudomány és technika)",
    level: "mindketto",
    theme: "Szóbeli témakörök",
    order_index: 9,
    summary_markdown:
      "A tudomány és technika témakörben a mindennapi technológiahasználatról, a közösségi médiáról és a mesterséges intelligenciáról, valamint ezek előnyeiről és kockázatairól kell tudnod érvelni angolul.",
    content_markdown: `
## Mire figyelj a szóbelin?

A vizsgáztató itt gyakran a saját technológiahasználatodra (okostelefon, közösségi média) kérdez rá, valamint arra, hogyan ítéled meg az újabb technológiai jelenségeket (mesterséges intelligencia, online tanulás). Fontos, hogy ne csak leírd, hanem **kritikusan is értékeld** ezeket.

## Key vocabulary

- **artificial intelligence (AI)** – mesterséges intelligencia
- **social media addiction** – közösségimédia-függőség
- **screen time** – képernyő előtt töltött idő
- **to keep up with (technology)** – lépést tartani (a technológiával)
- **privacy / to breach someone's privacy** – magánélet / megsérteni valakinek a magánéletét
- **online learning / e-learning** – online tanulás
- **innovation / cutting-edge technology** – innováció / élvonalbeli technológia
- **to rely on (technology)** – támaszkodni (a technológiára)

## Useful phrases for the oral exam

- "I couldn't imagine my life without my smartphone, because..."
- "I think artificial intelligence has both huge benefits and serious risks."
- "One thing that worries me about social media is..."
- "Compared to my parents' generation, we rely much more on..."
- "In my opinion, screen time should be limited because..."

## Sample answer (model paragraph)

> "I probably spend around four hours a day on my phone, mostly on social media and messaging apps — which, when I say it out loud, sounds like a lot! I do think technology has made our lives easier in many ways: online learning platforms helped me a lot during exam preparation, for example. At the same time, I'm a bit worried about how dependent we've become — I've noticed that I get anxious if I don't check my phone for a while, which probably isn't healthy. As for artificial intelligence, I find it fascinating, but also a little concerning: it could take over a lot of jobs in the future, and there are real questions about privacy and how our data is being used."

## Exam tips

1. Be ready to **quantify your own habits** ("I spend about... hours a day on...") — specific numbers make your English sound more natural.
2. Prepare **both a positive and a critical point** about technology — balanced answers score higher than one-sided ones.
3. Learn the collocation **"to rely on"** (not "rely to") — this is a common grammar mistake at the oral exam.
`,
    key_concepts: [
      "artificial intelligence (AI)",
      "screen time",
      "to rely on",
      "privacy",
      "online learning",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "\"Many teenagers spend too much _____ on their phones every day.\"",
        options: ["screen time", "privacy", "innovation", "artificial intelligence"],
        correct_answer: "screen time",
        explanation: "'Screen time' refers to the amount of time spent using devices with screens, like phones or computers.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which preposition correctly follows 'to rely'?",
        options: ["on", "to", "for", "with"],
        correct_answer: "on",
        explanation: "The correct collocation is 'to rely on something/someone', not 'rely to'.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"Companies must be careful not to _____ their customers' privacy when collecting data.\"",
        options: ["breach", "keep up with", "rely on", "innovate"],
        correct_answer: "breach",
        explanation: "'To breach someone's privacy' means to violate or invade it, often by misusing personal data.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"_____ refers to computer systems that can perform tasks normally requiring human intelligence.\"",
        options: ["Artificial intelligence", "Screen time", "Online learning", "Cutting-edge privacy"],
        correct_answer: "Artificial intelligence",
        explanation: "Artificial intelligence (AI) describes computer systems capable of tasks that typically require human-like reasoning.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which sentence best expresses a balanced opinion about technology?",
        options: [
          "Technology has made life easier, but it also raises concerns about privacy and dependency.",
          "Technology is completely good and has no downsides.",
          "Technology is completely bad and should be avoided.",
          "I have no opinion about technology whatsoever."
        ],
        correct_answer: "Technology has made life easier, but it also raises concerns about privacy and dependency.",
        explanation: "This answer shows both a positive and a critical perspective, which examiners value in opinion-based responses.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Spending so much time on social media that it negatively affects your life is sometimes called _____.",
        options: ["social media addiction", "online learning", "screen time", "cutting-edge technology"],
        correct_answer: "social media addiction",
        explanation: "'Social media addiction' describes excessive, compulsive use of social media that harms daily life.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Studying through websites, videos and apps instead of a physical classroom is called _____.",
        options: ["online learning", "artificial intelligence", "screen time", "innovation"],
        correct_answer: "online learning",
        explanation: "'Online learning' (or e-learning) means studying through digital platforms rather than in person.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"It can be hard to _____ technology when new apps and gadgets appear every month.\"",
        options: ["keep up with", "rely on", "breach", "take up"],
        correct_answer: "keep up with",
        explanation: "'To keep up with technology' means to stay informed about and adapt to new developments.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A brand-new, highly advanced piece of technology can be described as _____.",
        options: ["cutting-edge", "sedentary", "compulsory", "disposable"],
        correct_answer: "cutting-edge",
        explanation: "'Cutting-edge technology' refers to the most advanced and up-to-date technology available.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, roughly how many hours a day does the speaker spend on their phone?",
        options: ["about four hours", "about one hour", "about ten hours", "about thirty minutes"],
        correct_answer: "about four hours",
        explanation: "The sample answer says 'I probably spend around four hours a day on my phone'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, what does the speaker notice if they don't check their phone for a while?",
        options: ["they get anxious", "they feel more relaxed", "they sleep better", "they read more books"],
        correct_answer: "they get anxious",
        explanation: "The sample answer says 'I get anxious if I don't check my phone for a while'.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A new idea, method or piece of technology that changes how something is done is called an _____.",
        options: ["innovation", "invasion", "inflation", "institution"],
        correct_answer: "innovation",
        explanation: "'Innovation' refers to a new idea, method or technology that brings meaningful change.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, what specific concern does the speaker raise about artificial intelligence?",
        options: [
          "That it could take over many jobs and raises questions about privacy and data use.",
          "That it is too slow to be useful in daily life.",
          "That it has completely replaced online learning.",
          "That it has no impact on employment at all.",
        ],
        correct_answer: "That it could take over many jobs and raises questions about privacy and data use.",
        explanation: "The sample answer says AI 'could take over a lot of jobs in the future' and raises 'questions about privacy and how our data is being used'.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Why do the exam tips recommend quantifying your own habits, e.g. 'I spend about... hours a day on...'?",
        options: [
          "Because specific numbers make your English sound more natural.",
          "Because examiners require exact statistics to pass.",
          "Because vague statements are grammatically incorrect.",
          "Because numbers replace the need for any opinion.",
        ],
        correct_answer: "Because specific numbers make your English sound more natural.",
        explanation: "The exam tips state that specific numbers make your English sound more natural.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"Some experts worry that constantly checking social media can become a form of _____.\"",
        options: ["addiction", "innovation", "awareness", "sustainability"],
        correct_answer: "addiction",
        explanation: "Compulsively checking social media is often described as a form of 'addiction'.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "economy-and-finances",
    title: "Economy and finances (Gazdaság és pénzügyek)",
    level: "mindketto",
    theme: "Szóbeli témakörök",
    order_index: 10,
    summary_markdown:
      "A gazdaság és pénzügyek témakörben a személyes pénzügyi tudatosságról (zsebpénz, spórolás, hitelkártya), valamint tágabb gazdasági jelenségekről (infláció, fogyasztói társadalom) kell tudnod angolul beszélni.",
    content_markdown: `
## Mire figyelj a szóbelin?

Ez a témakör két szintet ötvöz: egyrészt a **saját pénzügyeidet** (zsebpénz, spórolás, első fizetés), másrészt **tágabb gazdasági jelenségeket** (infláció, fogyasztói társadalom, reklámok hatása). Mindkettőre készülj fel konkrét példákkal.

## Key vocabulary

- **pocket money / allowance** – zsebpénz
- **to save (up) for something** – spórolni valamire
- **budget / to budget** – költségvetés / beosztani a pénzt
- **inflation** – infláció
- **consumer society** – fogyasztói társadalom
- **to be in debt / to owe money** – eladósodni / tartozni valakinek
- **a bargain / to be a rip-off** – jó vétel / átverés (túl drága)
- **disposable income** – szabadon elkölthető jövedelem

## Useful phrases for the oral exam

- "I get a monthly allowance of..., which I try to budget carefully."
- "I've been saving up for... for a few months now."
- "I think advertising has a huge influence on how much we spend, because..."
- "With inflation rising, people have had to..."
- "I try to avoid impulse purchases by..."

## Sample answer (model paragraph)

> "I get a small monthly allowance from my parents, and on top of that I do some babysitting at weekends, so I have a bit of extra pocket money. I try to be sensible with it — I've actually been saving up for a new laptop for the past six months, which means saying no to a lot of impulse purchases! I do think we live in a very consumer-driven society: advertisements are everywhere, especially on social media, and it can be really hard to resist buying things you don't actually need. With prices going up because of inflation, I've noticed I have to think more carefully about what's really worth spending money on rather than what's just a good deal in the moment."

## Exam tips

1. Prepare **concrete numbers or examples** about your own money habits (how much pocket money, what you're saving for) — vague answers score lower.
2. Learn the difference between **"spend on"** and **"waste on"** — both are common at this topic but have different connotations.
3. For the broader economic questions (inflation, consumerism), have **one clear opinion with a reason** ready — don't just describe the phenomenon.
`,
    key_concepts: [
      "pocket money / allowance",
      "to save up for something",
      "budget / to budget",
      "inflation",
      "consumer society",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "\"I've been _____ a new bike for months — I'm almost halfway there!\"",
        options: ["saving up for", "spending on", "owing", "budgeting"],
        correct_answer: "saving up for",
        explanation: "'To save up for something' means to gradually set aside money in order to afford it.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which word describes a general rise in prices over time?",
        options: ["inflation", "allowance", "bargain", "budget"],
        correct_answer: "inflation",
        explanation: "'Inflation' refers to a general increase in prices and fall in the purchasing value of money.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"A society that constantly buys and uses new products is called a _____ society.\"",
        options: ["consumer", "budgeted", "disposable", "indebted"],
        correct_answer: "consumer",
        explanation: "'Consumer society' describes a society organised around the widespread buying and using of goods.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"If something is far too expensive for what you get, you can say it's a _____.\"",
        options: ["rip-off", "bargain", "budget", "allowance"],
        correct_answer: "rip-off",
        explanation: "'A rip-off' is an informal expression for something that is unfairly overpriced.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "\"It's important to _____ your monthly expenses so you don't run out of money.\"",
        options: ["budget", "owe", "inflate", "rip off"],
        correct_answer: "budget",
        explanation: "'To budget' means to plan how to spend a limited amount of money carefully.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Money that parents regularly give to their children to spend as they wish is called _____.",
        options: ["pocket money", "disposable income", "a bargain", "a budget"],
        correct_answer: "pocket money",
        explanation: "'Pocket money' (or allowance) is money given regularly, often by parents, for a child to spend freely.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "If you have borrowed money and haven't paid it back yet, you are _____.",
        options: ["in debt", "on a budget", "a bargain", "disposable"],
        correct_answer: "in debt",
        explanation: "'To be in debt' means to owe money that has not yet been repaid.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "A product that is unusually cheap for its quality is called _____.",
        options: ["a bargain", "a rip-off", "an allowance", "an inflation"],
        correct_answer: "a bargain",
        explanation: "'A bargain' is something bought for less than its usual or expected value.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "The money you have left to spend or save after paying taxes and essential bills is called your _____.",
        options: ["disposable income", "pocket money", "budget", "inflation"],
        correct_answer: "disposable income",
        explanation: "'Disposable income' is the money remaining after taxes and essential expenses are paid.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, how does the speaker earn extra pocket money besides their allowance?",
        options: [
          "babysitting at weekends",
          "working in a shop",
          "tutoring younger students",
          "selling old clothes",
        ],
        correct_answer: "babysitting at weekends",
        explanation: "The sample answer says the speaker does 'some babysitting at weekends' for extra pocket money.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the sample answer, how long has the speaker been saving up for a new laptop?",
        options: ["about six months", "about two weeks", "about one year", "about ten months"],
        correct_answer: "about six months",
        explanation: "The sample answer says 'I've actually been saving up for a new laptop for the past six months'.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Buying something suddenly, without planning, just because you want it in the moment, is called an _____.",
        options: ["impulse purchase", "inflation rate", "disposable income", "entrance exam"],
        correct_answer: "impulse purchase",
        explanation: "An 'impulse purchase' is a spontaneous, unplanned buy made on the spur of the moment.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the exam tips, what is the key difference in connotation between 'spend on' and 'waste on'?",
        options: [
          "'Waste on' suggests the money was used badly or unwisely, while 'spend on' is neutral.",
          "They mean exactly the same thing with identical connotations.",
          "'Spend on' is only used for savings accounts.",
          "'Waste on' can only describe spending on food.",
        ],
        correct_answer: "'Waste on' suggests the money was used badly or unwisely, while 'spend on' is neutral.",
        explanation: "The exam tips highlight that 'spend on' and 'waste on' have different connotations, with 'waste' implying poor use of money.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Why does the topic guide recommend having concrete numbers or examples ready, such as how much pocket money you get?",
        options: [
          "Because vague answers score lower than specific, concrete ones.",
          "Because examiners only accept exact numbers, never opinions.",
          "Because concrete examples are grammatically required in English.",
          "Because pocket money is the only acceptable topic.",
        ],
        correct_answer: "Because vague answers score lower than specific, concrete ones.",
        explanation: "The exam tips state that vague answers score lower, so concrete numbers or examples are recommended.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"_____ has a huge influence on how much we spend, especially on social media.\"",
        options: ["Advertising", "Budgeting", "Inflation", "Discrimination"],
        correct_answer: "Advertising",
        explanation: "The sample answer says advertisements 'have a huge influence on how much we spend', especially on social media.",
        difficulty: 2,
      },
    ],
  },
];
