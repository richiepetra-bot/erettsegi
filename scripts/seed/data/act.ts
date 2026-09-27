import { TopicSeed } from "./angol";

export const actTopics: TopicSeed[] = [
  {
    slug: "english-grammar-and-usage",
    title: "English: Grammar and Usage",
    level: "mindketto",
    theme: "ACT English",
    order_index: 1,
    summary_markdown:
      "Az ACT English szekció szoros rokonságban áll a SAT Writinggel: 75 kérdés 45 perc alatt, elsősorban nyelvtan, mondatszerkezet és stílus.",
    content_markdown: `
## What makes ACT English different from SAT Writing

- More questions (75) in a shorter, faster-paced format — pacing matters even more.
- Slightly more emphasis on **style and concision** questions ("which choice is most effective?").
- Tests **rhetorical skills**: whether a sentence should be added, deleted, or kept, and where in the paragraph it belongs.

## Core rules to master

### Concision ("shorter is usually better")
When multiple answer choices are grammatically correct, the ACT usually rewards the **shortest, clearest** option, as long as no meaning is lost.
- Wordy: "due to the fact that" → Concise: "because"
- Wordy: "in the event that" → Concise: "if"

### Transition words
Watch for whether the surrounding sentences agree or contrast:
- Agreement: *furthermore, in addition, similarly*
- Contrast: *however, on the other hand, nevertheless*
- Cause-effect: *therefore, as a result, consequently*

### Adding/deleting sentences
When asked "should this sentence be added?", check:
1. Does it support the **main idea** of the paragraph?
2. Does it repeat information already stated?
3. Does it interrupt the logical flow?

## Practice approach

Time yourself doing English passages in **9 minutes each** (75 questions / 5 passages ≈ 9 min/passage) so pacing becomes automatic before test day.
`,
    key_concepts: [
      "concision",
      "rhetorical skill",
      "transition word",
      "redundancy",
      "sentence placement",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text:
          "Which is the most concise, ACT-preferred version of: 'due to the fact that it was raining, we stayed home'?",
        options: [
          "Because it was raining, we stayed home.",
          "Due to the fact that it was raining, we stayed home.",
          "Owing to the fact that it was raining, we stayed home.",
          "In light of the fact that it was raining, we stayed home.",
        ],
        correct_answer: "Because it was raining, we stayed home.",
        explanation: "'Because' expresses the same meaning far more concisely.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Two sentences express contrasting ideas. Which transition word fits best?",
        options: ["however", "furthermore", "similarly", "therefore"],
        correct_answer: "however",
        explanation: "'However' signals contrast between two ideas.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "On ACT English, when should a sentence be added to a paragraph?",
        options: [
          "When it supports the paragraph's main idea without repeating existing information",
          "When it is the longest option available",
          "When it uses the most advanced vocabulary",
          "When it starts with a transition word",
        ],
        correct_answer:
          "When it supports the paragraph's main idea without repeating existing information",
        explanation:
          "Relevance to the main idea and non-redundancy are the deciding factors, not length or vocabulary.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Roughly how much time should you budget per passage on ACT English?",
        options: ["about 9 minutes", "about 20 minutes", "about 2 minutes", "about 45 minutes"],
        correct_answer: "about 9 minutes",
        explanation: "45 minutes / 5 passages = 9 minutes per passage.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which transition best connects a cause and its effect?",
        options: ["as a result", "similarly", "however", "for example"],
        correct_answer: "as a result",
        explanation: "'As a result' signals a cause-effect relationship.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which is the most concise, ACT-preferred revision of: 'in the event that it rains tomorrow, the game will be postponed'?",
        options: [
          "If it rains tomorrow, the game will be postponed.",
          "In the event that it rains tomorrow, the game will be postponed.",
          "In the event of rain occurring tomorrow, the game will be postponed.",
          "Under the circumstance that it rains tomorrow, the game will be postponed.",
        ],
        correct_answer: "If it rains tomorrow, the game will be postponed.",
        explanation: "'If' expresses the same conditional meaning far more concisely than 'in the event that.'",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Two sentences express agreeing, similar ideas. Which transition word fits best?",
        options: ["furthermore", "however", "nevertheless", "on the other hand"],
        correct_answer: "furthermore",
        explanation: "'Furthermore' signals addition/agreement; the other options all signal contrast.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which phrase is redundant and should typically be shortened on ACT English?",
        options: ["each and every", "each day", "every year", "many students"],
        correct_answer: "each and every",
        explanation: "'Each' and 'every' mean the same thing, so pairing them is redundant; ACT favors the more concise 'each' or 'every' alone.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A paragraph focuses on the health benefits of walking. A sentence about the history of jogging shoes is inserted. Should it be kept?",
        options: [
          "No — it doesn't support the paragraph's main idea about walking's health benefits",
          "Yes — it is interesting and well-written",
          "Yes — because it mentions a related activity",
          "No — because it uses transition words",
        ],
        correct_answer: "No — it doesn't support the paragraph's main idea about walking's health benefits",
        explanation: "Relevance to the specific paragraph's focus, not general topic relatedness, determines whether a sentence belongs.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A sentence begins with 'This process, however, takes several years to complete.' Where must this sentence logically be placed?",
        options: [
          "After a sentence that describes the process being referred to",
          "As the very first sentence of the passage",
          "Anywhere in the paragraph, since order doesn't matter",
          "Before the process is ever mentioned",
        ],
        correct_answer: "After a sentence that describes the process being referred to",
        explanation: "The pronoun 'this process' requires an antecedent — a prior sentence describing the process — to make sense.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "All four options below are grammatically correct. Which one does ACT English typically prefer as 'most effective'?",
        options: [
          "The results, in short, confirmed the hypothesis.",
          "The results, when all is said and done, confirmed the hypothesis.",
          "The results, taking everything into consideration, confirmed the hypothesis.",
          "The results, in light of all the evidence gathered, confirmed the hypothesis.",
        ],
        correct_answer: "The results, in short, confirmed the hypothesis.",
        explanation: "ACT English favors the shortest, clearest wording when multiple choices are grammatically correct and convey the same idea.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "'The recipe calls for two cups of sugar. _____, many bakers use only one cup for a less sweet result.' Which transition fits best?",
        options: ["However", "Furthermore", "As a result", "Similarly"],
        correct_answer: "However",
        explanation: "The second sentence contrasts with the first (less sugar than called for), so a contrast transition fits best.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Besides supporting the main idea and avoiding redundancy, what else should you check before adding a new sentence to a paragraph?",
        options: [
          "Whether it interrupts the logical flow of the paragraph",
          "Whether it is the shortest sentence in the paragraph",
          "Whether it rhymes with the previous sentence",
          "Whether it contains a transition word",
        ],
        correct_answer: "Whether it interrupts the logical flow of the paragraph",
        explanation: "A sentence can support the main idea and add new information, yet still be wrong to insert if it breaks the paragraph's flow.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A paragraph already states that the bridge was built in 1932. A later sentence in the same paragraph says, 'The bridge was constructed in 1932, a fact worth repeating.' Should this sentence be kept?",
        options: [
          "No — it repeats information already given in the paragraph",
          "Yes — repetition helps readers remember facts",
          "Yes — because it uses correct grammar",
          "No — because it is too short",
        ],
        correct_answer: "No — it repeats information already given in the paragraph",
        explanation: "Redundant sentences that restate already-given information should be deleted, regardless of their grammar.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "How many questions does the ACT English section typically contain, and in how much time?",
        options: [
          "75 questions in 45 minutes",
          "60 questions in 60 minutes",
          "40 questions in 35 minutes",
          "50 questions in 50 minutes",
        ],
        correct_answer: "75 questions in 45 minutes",
        explanation: "ACT English has 75 questions to complete in 45 minutes, a faster pace than SAT Writing.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "science-data-representation",
    title: "Science: Data Representation",
    level: "mindketto",
    theme: "ACT Science",
    order_index: 2,
    summary_markdown:
      "Az ACT Science szekció nem lexikális tudást mér, hanem azt, mennyire tudsz gyorsan grafikonokat, táblázatokat értelmezni és kísérleti adatokból következtetni — ilyen szekció a SAT-on nincs is.",
    content_markdown: `
## Key insight: it's a reading/reasoning test, not a science-knowledge test

Most ACT Science questions can be answered **directly from the given graph or table**, without needing outside scientific knowledge. The skill being tested is **data interpretation speed and accuracy**.

## The three passage types

1. **Data Representation** — graphs/tables, mostly "look up the value" questions.
2. **Research Summaries** — descriptions of 2-3 related experiments; look for what changed between them (the variable).
3. **Conflicting Viewpoints** — two or more scientists disagree; questions ask you to compare their reasoning.

## Strategy for Data Representation passages

1. **Skip the wall of text at first** — go straight to the figures/tables and understand what's on each axis.
2. For each question, find the **specific row/column or point on the graph** — don't rely on memory, look it up.
3. Watch for **trends** (as X increases, does Y increase, decrease, or stay the same?) — many questions ask about this directly.
4. Be careful with **units** — a common trap is a distractor using the right number but wrong unit or wrong axis.

## Common question phrasing and what it wants

- "Based on the graph, as X increases, Y..." → describe the **trend**, don't calculate exact values unless asked.
- "Which experiment/trial best supports..." → find the row/data point that matches the described condition.
- "If the experiment were repeated with [new condition], the result would most likely be..." → extrapolate the **existing trend**, don't guess randomly.
`,
    key_concepts: [
      "data representation passage",
      "research summary",
      "conflicting viewpoints",
      "trend",
      "extrapolation",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "What skill does ACT Science primarily test?",
        options: [
          "Reading and interpreting graphs/tables quickly and accurately",
          "Memorised outside scientific facts",
          "Advanced mathematical calculation",
          "Chemistry formula memorisation",
        ],
        correct_answer: "Reading and interpreting graphs/tables quickly and accurately",
        explanation:
          "Most questions can be answered directly from the given data, not outside knowledge.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "In a 'Conflicting Viewpoints' passage, what are questions most likely to ask about?",
        options: [
          "How the different scientists' reasoning or conclusions differ",
          "The exact numeric values in a table",
          "Definitions of scientific vocabulary",
          "The historical background of the experiment",
        ],
        correct_answer: "How the different scientists' reasoning or conclusions differ",
        explanation:
          "This passage type is built around comparing differing hypotheses or explanations.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A question asks: 'If the experiment were repeated with a higher temperature, the result would most likely be...' What's the best approach?",
        options: [
          "Extrapolate from the existing trend shown in the data",
          "Guess randomly, since this requires outside knowledge",
          "Pick the answer with the biggest number",
          "Assume no relationship exists",
        ],
        correct_answer: "Extrapolate from the existing trend shown in the data",
        explanation: "These questions test whether you can extend an observed pattern logically.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What is a common ACT Science trap answer?",
        options: [
          "A number that is correct but taken from the wrong axis or unit",
          "An answer that repeats the question",
          "An answer that is too short",
          "An answer with correct grammar",
        ],
        correct_answer: "A number that is correct but taken from the wrong axis or unit",
        explanation: "Misreading axes/units is one of the most frequent sources of errors.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "In 'Research Summaries' passages, what should you focus on identifying between experiments?",
        options: [
          "What variable changed between the experiments",
          "Which experiment has the most text",
          "The names of the scientists",
          "The publication date of the study",
        ],
        correct_answer: "What variable changed between the experiments",
        explanation:
          "Understanding what was varied (and what was held constant) is key to answering comparison questions.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What are the three passage types found in the ACT Science section?",
        options: [
          "Data Representation, Research Summaries, and Conflicting Viewpoints",
          "Algebra, Geometry, and Trigonometry",
          "Fiction, Nonfiction, and Poetry",
          "Biology, Chemistry, and Physics",
        ],
        correct_answer: "Data Representation, Research Summaries, and Conflicting Viewpoints",
        explanation: "These are the three passage formats used throughout ACT Science.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "What is the recommended first step when approaching a Data Representation passage?",
        options: [
          "Skip the wall of text and go straight to the figures/tables to understand the axes",
          "Read every word of the passage text first",
          "Memorize all the numbers before reading questions",
          "Skip the passage entirely and guess",
        ],
        correct_answer: "Skip the wall of text and go straight to the figures/tables to understand the axes",
        explanation: "Most Data Representation questions can be answered directly from the figures, so understanding them first saves time.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A table shows that as water temperature increases from 10°C to 40°C, the amount of dissolved oxygen in the water steadily decreases. Based on this trend, what would you expect at 50°C?",
        options: [
          "Even less dissolved oxygen than at 40°C",
          "The same amount of dissolved oxygen as at 10°C",
          "More dissolved oxygen than at 40°C",
          "No way to estimate without outside knowledge",
        ],
        correct_answer: "Even less dissolved oxygen than at 40°C",
        explanation: "Extrapolating the existing decreasing trend, dissolved oxygen should continue to decrease as temperature rises further.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "In an experiment testing how different amounts of sunlight affect plant growth, what is the dependent variable?",
        options: ["plant growth", "the amount of sunlight", "the type of soil", "the room temperature"],
        correct_answer: "plant growth",
        explanation: "The dependent variable is what is measured as a result of the change — here, plant growth, which depends on sunlight.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Scientist 1 claims a mineral formed from slow cooling of magma deep underground. Scientist 2 claims it formed from rapid cooling at the surface. A new sample shows large, well-formed crystals (which take a long time to grow). Which scientist's view does this new evidence support?",
        options: ["Scientist 1", "Scientist 2", "Neither scientist", "Both equally"],
        correct_answer: "Scientist 1",
        explanation: "Large, well-formed crystals typically require slow cooling, supporting Scientist 1's claim of slow, deep cooling.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which ACT Science passage type describes 2-3 related experiments?",
        options: ["Research Summaries", "Data Representation", "Conflicting Viewpoints", "None of these"],
        correct_answer: "Research Summaries",
        explanation: "Research Summaries passages describe the setup and results of related experiments.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A graph shows reaction rate on the y-axis and catalyst concentration on the x-axis. To answer 'what is the reaction rate at a catalyst concentration of 3 mol/L,' what should you do?",
        options: [
          "Find the point on the graph directly above 3 mol/L and read its y-value",
          "Estimate based on outside chemistry knowledge",
          "Average all the values shown on the graph",
          "Assume it equals the concentration value itself",
        ],
        correct_answer: "Find the point on the graph directly above 3 mol/L and read its y-value",
        explanation: "Data Representation questions should be answered by looking up the specific point, not by memory or outside knowledge.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Experiment 1 tests seed germination at 20°C with daily watering. Experiment 2 tests seed germination at 30°C with daily watering. What changed between the two experiments?",
        options: ["the temperature", "the watering schedule", "the type of seed", "the amount of soil"],
        correct_answer: "the temperature",
        explanation: "Watering stayed the same in both; only the temperature differed, making it the variable being compared.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A table lists mass in kilograms, but one answer choice restates a value in grams using the same number (e.g., a mass of 5 kg is presented as '5 g'). What kind of error does this represent?",
        options: [
          "A unit-conversion trap using the correct number but the wrong unit",
          "A correct and equivalent restatement",
          "An extrapolation error",
          "A conflicting viewpoints error",
        ],
        correct_answer: "A unit-conversion trap using the correct number but the wrong unit",
        explanation: "5 kg and 5 g are very different masses — reusing the number with the wrong unit is a classic ACT Science distractor.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "When answering a Conflicting Viewpoints question about which scientist supports a specific new piece of evidence, what is a common mistake?",
        options: [
          "Picking the scientist whose view seems scientifically more correct, rather than the one the question asks about",
          "Reading both scientists' claims before answering",
          "Comparing the claims directly to the new evidence",
          "Identifying each scientist's core claim in one line first",
        ],
        correct_answer: "Picking the scientist whose view seems scientifically more correct, rather than the one the question asks about",
        explanation: "The question asks about a specific scientist's perspective, not which view is objectively more scientifically sound.",
        difficulty: 2,
      },
    ],
  },
];
