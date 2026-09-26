import { TopicSeed } from "./angol";

export const actTopics: TopicSeed[] = [
  {
    slug: "english-grammar-and-usage",
    title: "English: Grammar and Usage",
    level: "mindketto",
    theme: "ACT English",
    order_index: 1,
    summary_markdown:
      "Az ACT English szekció szoros rokona a SAT Writingnek: 75 kérdés 45 perc alatt, elsősorban nyelvtan, mondatszerkezet és stílus.",
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
    ],
  },
  {
    slug: "science-data-representation",
    title: "Science: Data Representation",
    level: "mindketto",
    theme: "ACT Science",
    order_index: 2,
    summary_markdown:
      "Az ACT Science szekció nem lexikális tudást mér, hanem azt, mennyire tudsz gyorsan grafikonokat, táblázatokat értelmezni és kísérleti adatokból következtetni — ez SAT-on nincs benne.",
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
    ],
  },
];
