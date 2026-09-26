import { TopicSeed } from "./angol";

export const satTovabbiTemakTopics: TopicSeed[] = [
  {
    slug: "reading-craft-and-structure",
    title: "Reading: Craft and Structure",
    level: "mindketto",
    theme: "SAT Reading & Writing",
    order_index: 4,
    summary_markdown:
      "Szókincs kontextusban, a szöveg szerkezetének és a szerző céljának felismerése — a digitális SAT Reading & Writing egyik legnagyobb súlyú, de jól begyakorolható kérdéstípusa.",
    content_markdown: `
## What this question type tests

"Craft and Structure" questions test three related skills: **words in context** (choosing the meaning that fits a specific passage, not just the "dictionary" meaning), **text structure and purpose** (why the author included a specific sentence or organised the passage a certain way), and **cross-text connections** (comparing the views of two short paired passages).

## Words in context strategy

1. **Cover the answer choices** and predict your own word first, based only on the surrounding sentence.
2. Match your prediction to the closest answer — don't get distracted by a "fancier" word that doesn't fit the exact context.
3. Watch for words with **multiple meanings** (e.g. "novel" can mean "new" or "a book") — the SAT loves testing the less common meaning.

## Text structure and purpose strategy

Ask yourself: **"What job is this sentence/paragraph doing?"** Common functions include: introducing a claim, providing a counterargument, giving supporting evidence, or transitioning between ideas. The correct answer names the function precisely — vague answers ("to give information") are usually wrong when a more specific option is available.

## Cross-text connections strategy

For paired-passage questions, first summarise **each passage's stance in one sentence**. Then check whether the answer choice correctly describes the *relationship* between the two views (agreement, disagreement, one extending the other) rather than just restating one passage alone.

## Common wrong-answer traps

- **Right word, wrong context**: a common meaning of the word that doesn't fit this specific sentence.
- **Too broad / too narrow**: a purpose description that's either too general or too specific compared to what the text actually does.
- **One-sided cross-text answer**: only addresses one of the two passages instead of their relationship.

## Practice approach

Time yourself: aim for under 70 seconds per question. If you're consistently going over, practise the "predict-your-own-word-first" strategy until it becomes automatic — it's faster than evaluating all four options from scratch.
`,
    key_concepts: [
      "words in context",
      "text structure and purpose",
      "cross-text connections",
      "predict-then-match strategy",
      "multiple-meaning words",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text:
          "In the sentence 'The critic's review was scathing, leaving the director little room for a rebuttal,' the word 'scathing' most nearly means:",
        options: ["harshly critical", "mildly positive", "confusingly vague", "unexpectedly short"],
        correct_answer: "harshly critical",
        explanation: "'Scathing' means severely critical — the context ('little room for a rebuttal') confirms a harsh, not vague, review.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage's first paragraph describes a scientific discovery; the second paragraph presents objections from other scientists. What is the function of the second paragraph?",
        options: [
          "to introduce a counterargument to the claim made in the first paragraph",
          "to restate the first paragraph's claim in different words",
          "to provide unrelated background information",
          "to conclude the passage with a summary",
        ],
        correct_answer: "to introduce a counterargument to the claim made in the first paragraph",
        explanation: "Presenting objections after an initial claim is a classic counterargument structure.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Passage 1 argues that remote work increases productivity. Passage 2 argues that it depends heavily on the type of job. How do the two passages relate?",
        options: [
          "Passage 2 qualifies and complicates the broad claim made in Passage 1.",
          "Passage 2 completely agrees with Passage 1 on every point.",
          "Passage 2 is unrelated to the topic of Passage 1.",
          "Passage 2 simply repeats Passage 1's argument.",
        ],
        correct_answer: "Passage 2 qualifies and complicates the broad claim made in Passage 1.",
        explanation: "Passage 2 adds a condition ('depends on the job type') to the general claim in Passage 1 — this is a qualifying relationship, not agreement or repetition.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which strategy is most efficient for 'words in context' questions?",
        options: [
          "Cover the answers and predict your own word from context first.",
          "Always choose the longest, most sophisticated-sounding word.",
          "Choose the most common dictionary definition of the word.",
          "Skip the sentence and just look at the answer choices.",
        ],
        correct_answer: "Cover the answers and predict your own word from context first.",
        explanation: "Predicting first prevents you from being misled by plausible-sounding but incorrect answer choices.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Why does the SAT often test the less common meaning of a multiple-meaning word?",
        options: [
          "to check whether students rely on context rather than assumed definitions",
          "because the common meaning is always wrong",
          "to make the passage longer",
          "because it only tests science vocabulary",
        ],
        correct_answer: "to check whether students rely on context rather than assumed definitions",
        explanation: "This question type specifically tests whether students can adapt their understanding of a word to fit its actual use in context.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "writing-expression-of-ideas",
    title: "Writing: Expression of Ideas",
    level: "mindketto",
    theme: "SAT Reading & Writing",
    order_index: 5,
    summary_markdown:
      "Logikus szövegszerkesztés, hatékony átvezető szavak és a rhetorical synthesis kérdéstípus: hogyan válasszuk ki a megadott jegyzetekből azt az információt, amely a legjobban szolgálja a megadott célt.",
    content_markdown: `
## What this question type tests

"Expression of Ideas" questions test whether you can improve a passage's **organisation, transitions, and rhetorical effectiveness** — as opposed to "Standard English Conventions," which tests pure grammar. A major sub-type here is **rhetorical synthesis**: you're given bullet-point notes on a topic and asked which sentence best accomplishes a *specific stated goal* (e.g., "to compare two findings" or "to introduce the topic to an unfamiliar audience").

## Transition words strategy

Transitions signal the **logical relationship** between ideas. Group them by function:
- **Addition**: furthermore, in addition, moreover
- **Contrast**: however, on the other hand, nevertheless
- **Cause/effect**: therefore, as a result, consequently
- **Example**: for instance, specifically

Before picking a transition, determine the relationship between the two sentences **without looking at the answer choices** — this prevents you from being swayed by a transition that "sounds nice" but is logically wrong.

## Rhetorical synthesis strategy

1. **Read the stated goal carefully** — it usually asks for something very specific (e.g., "to highlight a similarity" vs. "to highlight a difference").
2. Go through the bullet points and find only the ones **relevant to that specific goal** — most of the notes will be irrelevant distractors for this particular question.
3. Eliminate any answer that includes **accurate but off-goal** information — a common SAT trap is an answer that's factually correct but doesn't fulfil the stated purpose.

## Sentence combining and conciseness

The SAT sometimes asks you to combine two short sentences efficiently. The best answer is usually the **most concise** option that preserves the original meaning without any grammar errors — avoid answers with unnecessary repetition or wordiness.

## Common wrong-answer traps

- A transition that reverses the actual logical relationship (e.g., "however" where the ideas actually agree).
- A rhetorical synthesis answer that's true but doesn't match the specific stated goal.
- An unnecessarily wordy sentence combination that technically isn't ungrammatical, but isn't the most concise correct option.

## Practice approach

For every transition-word question you get wrong, say the relationship out loud in your own words first ("this sentence gives an example of the previous one") — this habit builds the pattern recognition the SAT is testing.
`,
    key_concepts: [
      "rhetorical synthesis",
      "transition words (addition, contrast, cause/effect)",
      "conciseness",
      "stated goal matching",
      "sentence combining",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text:
          "'The experiment produced unexpected results. _____, the team decided to repeat it under stricter conditions.' Which transition fits best?",
        options: ["As a result", "For instance", "In contrast", "Similarly"],
        correct_answer: "As a result",
        explanation: "The second sentence describes a consequence of the first (unexpected results led to repeating the experiment), so a cause/effect transition is needed.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Notes: (1) City A's population grew 5% in 2020. (2) City B's population grew 12% in 2020. (3) Both cities invested in public transport. Goal: 'to emphasise a difference between the two cities.' Which sentence best fulfils this goal?",
        options: [
          "While City A's population grew by 5% in 2020, City B's grew more than twice as fast, at 12%.",
          "Both City A and City B invested in public transport in 2020.",
          "City A and City B are both mid-sized cities with growing populations.",
          "Public transport investment is a common urban policy tool.",
        ],
        correct_answer: "While City A's population grew by 5% in 2020, City B's grew more than twice as fast, at 12%.",
        explanation: "This is the only option that directly highlights a difference (growth rate) between the two cities, matching the stated goal.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which transition signals a contrast between two ideas?",
        options: ["however", "furthermore", "therefore", "for instance"],
        correct_answer: "however",
        explanation: "'However' signals contrast; the other options signal addition, cause/effect, and example, respectively.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "What is the main difference between 'Expression of Ideas' and 'Standard English Conventions' questions?",
        options: [
          "Expression of Ideas tests organisation and rhetorical effectiveness, not pure grammar rules.",
          "Standard English Conventions only tests vocabulary.",
          "There is no difference between the two question types.",
          "Expression of Ideas only appears in the Math section.",
        ],
        correct_answer: "Expression of Ideas tests organisation and rhetorical effectiveness, not pure grammar rules.",
        explanation: "Standard English Conventions tests grammar rules (like subject-verb agreement); Expression of Ideas tests how well ideas are organised and connected.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "In a rhetorical synthesis question, why is a factually correct answer sometimes still wrong?",
        options: [
          "because it doesn't fulfil the specific stated goal of the question",
          "because all factually correct answers are automatically wrong",
          "because the SAT never uses true statements",
          "because it must always be the longest option"
        ],
        correct_answer: "because it doesn't fulfil the specific stated goal of the question",
        explanation: "Rhetorical synthesis questions require matching a specific purpose, not just picking any true statement from the notes.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "math-problem-solving-and-data-analysis",
    title: "Math: Problem-Solving and Data Analysis",
    level: "mindketto",
    theme: "SAT Math",
    order_index: 6,
    summary_markdown:
      "Arányok, százalékok, egységváltás és adatok (táblázatok, grafikonok, szórásdiagramok) értelmezése — a SAT Math második legnagyobb súlyú témaköre, amely erős szövegértést is igényel.",
    content_markdown: `
## What this domain covers

"Problem-Solving and Data Analysis" questions test **ratios, rates, percentages, unit conversions**, and the ability to **read and interpret data** presented in tables, scatterplots, and bar/line graphs. Unlike "Heart of Algebra," many of these questions have little or no algebraic manipulation — the challenge is usually **translating a real-world scenario into the correct calculation**.

## Percentage strategy

Remember the core relationship: **part = percent × whole**. For percent *increase/decrease* questions, always calculate the change relative to the **original** value, not the new one:
- Percent increase = (new − original) / original × 100

## Ratios and proportions

Set up ratios as fractions and cross-multiply to solve for an unknown. Watch out for questions that give you a ratio in one order (e.g., "3 red to 5 blue") but ask about a different comparison (e.g., red to total, which would be 3 : 8, not 3 : 5).

## Reading data displays

For **scatterplots**, focus on the overall trend (positive, negative, or no correlation) and identify outliers when asked. For **two-way tables**, carefully identify whether the question asks for a value from a specific row, a specific column, or a combination (e.g., "what percent of male respondents..." requires dividing by the male total, not the grand total). For **line/bar graphs**, always check the axis labels and units before reading off a value.

## Common wrong-answer traps

- Using the **new value** instead of the **original value** as the denominator in a percent change calculation.
- Dividing by the **wrong total** in a two-way table percentage question (grand total vs. row/column total).
- Misreading a ratio's order (confusing "part to part" with "part to whole").

## Practice approach

For every data-display question, before looking at the answer choices, **write down in words** what calculation you need to do (e.g., "I need row 2's value divided by the male total"). This habit prevents the most common careless errors on this question type.
`,
    key_concepts: [
      "percent increase/decrease",
      "ratios and proportions",
      "two-way tables",
      "scatterplot trends",
      "part vs. whole in data questions",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "A shirt's price increased from $40 to $50. What was the percent increase?",
        options: ["25%", "20%", "10%", "50%"],
        correct_answer: "25%",
        explanation: "Percent increase = (50-40)/40 × 100 = 10/40 × 100 = 25%.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "In a class, the ratio of boys to girls is 3:5. If there are 24 boys, how many students are there in total?",
        options: ["64", "40", "56", "24"],
        correct_answer: "64",
        explanation: "3 parts = 24 boys, so 1 part = 8. Total parts = 3+5 = 8, so total students = 8 × 8 = 64.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A two-way table shows 40 male and 60 female survey respondents. 10 of the males answered 'yes'. What percent of male respondents answered 'yes'?",
        options: ["25%", "10%", "16.7%", "40%"],
        correct_answer: "25%",
        explanation: "10 out of 40 males answered yes: 10/40 × 100 = 25%. The denominator must be the male total (40), not the grand total (100).",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "A scatterplot shows points trending upward from left to right, with most points close to a straight line. This best describes:",
        options: ["a strong positive correlation", "a strong negative correlation", "no correlation", "a perfectly random distribution"],
        correct_answer: "a strong positive correlation",
        explanation: "An upward trend where points closely follow a line indicates a strong positive correlation between the two variables.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which formula correctly calculates percent decrease?",
        options: [
          "(original − new) / original × 100",
          "(new − original) / new × 100",
          "new / original × 100",
          "(original − new) / new × 100",
        ],
        correct_answer: "(original − new) / original × 100",
        explanation: "Percent decrease always divides the change by the ORIGINAL value, not the new value.",
        difficulty: 2,
      },
    ],
  },
];
