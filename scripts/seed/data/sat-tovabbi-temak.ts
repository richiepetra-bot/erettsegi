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
      {
        question_type: "multiple_choice",
        question_text:
          "In the sentence 'The team's novel approach to recycling attracted international attention,' the word 'novel' most nearly means:",
        options: ["new and original", "a long fictional book", "expensive", "traditional"],
        correct_answer: "new and original",
        explanation:
          "Here 'novel' is used as an adjective meaning new and original, not as a noun referring to a book.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A paragraph follows a claim with specific statistics from a recent study. What is the function of this paragraph?",
        options: [
          "to provide supporting evidence for the claim",
          "to introduce a counterargument",
          "to transition to an unrelated topic",
          "to restate the claim without evidence",
        ],
        correct_answer: "to provide supporting evidence for the claim",
        explanation: "Specific statistics following a claim serve to support and substantiate that claim with data.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A question asks for the purpose of a single sentence that gives one specific example supporting a broader claim. Which answer choice describes this purpose too broadly (a common wrong-answer trap)?",
        options: [
          "to provide general support for the passage's argument",
          "to give one specific example illustrating the broader claim",
          "to introduce the topic of the passage",
          "to summarize the entire passage",
        ],
        correct_answer: "to provide general support for the passage's argument",
        explanation:
          "This description is too vague compared to the more precise correct function: giving one specific example.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Passage 1 claims that social media improves social connection. Passage 2 claims it isolates people. How do the two passages relate?",
        options: [
          "They present directly opposing views on the same topic.",
          "They completely agree with each other.",
          "Passage 2 only repeats Passage 1.",
          "They are unrelated in topic.",
        ],
        correct_answer: "They present directly opposing views on the same topic.",
        explanation: "Both passages address the same topic (social media's social effect) but reach opposite conclusions.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "In the sentence 'Investors were pleased when the company's stock rose sharply after the earnings report,' the word 'stock' most nearly means:",
        options: ["shares of ownership in a company", "a supply of goods", "a type of soup base", "livestock"],
        correct_answer: "shares of ownership in a company",
        explanation:
          "The financial context (investors, earnings report) points to the meaning 'shares of ownership,' not the other common meanings of 'stock.'",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Passage 1 argues that urban gardens reduce food costs for families. Passage 2 argues that urban gardens mainly benefit the environment, not household budgets. A question asks how the passages relate. Which answer is a 'one-sided' trap?",
        options: [
          "Passage 1 argues that urban gardens reduce food costs for families.",
          "Passage 2 mainly emphasizes environmental benefits, contradicting Passage 1's economic focus.",
          "Both passages disagree on the primary benefit of urban gardens.",
          "The passages present different emphases on the same subject.",
        ],
        correct_answer: "Passage 1 argues that urban gardens reduce food costs for families.",
        explanation:
          "This restates only Passage 1's claim without addressing how it relates to Passage 2, making it a one-sided (incomplete) answer to a cross-text relationship question.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A short sentence shifts the discussion from causes of a problem to possible solutions. What is this sentence's function?",
        options: [
          "to transition between ideas",
          "to provide a counterargument",
          "to restate the main claim",
          "to give a specific example",
        ],
        correct_answer: "to transition between ideas",
        explanation: "A sentence that shifts focus from one part of the discussion to another is functioning as a transition.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "In the sentence 'The critic's remarks were pointed, leaving no doubt about her disapproval,' a student choosing 'physically sharp' as the meaning of 'pointed' has fallen for which kind of error?",
        options: [
          "choosing a common meaning that doesn't fit this specific context",
          "choosing the correct contextual meaning",
          "misreading the passage's structure",
          "confusing cross-text connections",
        ],
        correct_answer: "choosing a common meaning that doesn't fit this specific context",
        explanation:
          "'Pointed' here means direct/critical in tone, not physically sharp — a classic 'right word, wrong context' trap.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What are the three skills tested by 'Craft and Structure' questions?",
        options: [
          "words in context, text structure and purpose, and cross-text connections",
          "grammar, punctuation, and spelling",
          "algebra, geometry, and data analysis",
          "reading speed, memorization, and vocabulary lists",
        ],
        correct_answer: "words in context, text structure and purpose, and cross-text connections",
        explanation: "These are the three related skills this question type is designed to test.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Passage 1 states that a historical figure's decision was courageous given the risks at the time. Passage 2, written centuries later, argues the same decision was reckless by modern safety standards. The relationship between the two passages is best described as which of the following?",
        options: [
          "Passage 2 reevaluates Passage 1's judgment using a different standard of evaluation.",
          "Passage 2 completely agrees with Passage 1's assessment.",
          "Passage 1 and Passage 2 discuss unrelated historical events.",
          "Passage 2 simply repeats the facts stated in Passage 1.",
        ],
        correct_answer: "Passage 2 reevaluates Passage 1's judgment using a different standard of evaluation.",
        explanation:
          "Passage 2 doesn't dispute the facts but reinterprets the same decision through a different lens (modern safety standards).",
        difficulty: 3,
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
      "Logikus szövegszervezés, hatékony átvezető szavak és a rhetorical synthesis kérdéstípus: hogyan válasszuk ki a megadott jegyzetekből azt az információt, amely a legjobban szolgálja a megadott célt.",
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
      {
        question_type: "multiple_choice",
        question_text: "Which transition word signals addition of a similar idea?",
        options: ["furthermore", "however", "therefore", "for instance"],
        correct_answer: "furthermore",
        explanation: "'Furthermore' adds another supporting point; the others signal contrast, cause/effect, and example.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which transition word signals that an example is about to be given?",
        options: ["for instance", "moreover", "nevertheless", "consequently"],
        correct_answer: "for instance",
        explanation: "'For instance' introduces a specific example; the other options signal addition, contrast, and cause/effect.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "'The film received glowing reviews from critics. _____, ticket sales were disappointingly low.' Which transition fits best?",
        options: ["However", "Furthermore", "For instance", "As a result"],
        correct_answer: "However",
        explanation: "The second sentence contrasts with the first (good reviews vs. low sales), so a contrast transition is needed.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Notes: (1) Coral reefs cover less than 1% of the ocean floor. (2) They support around 25% of all marine species. (3) Rising sea temperatures cause coral bleaching. Goal: 'to introduce the topic to an audience unfamiliar with coral reefs.' Which sentence best fulfils this goal?",
        options: [
          "Coral reefs, which cover less than 1% of the ocean floor, support around a quarter of all marine species.",
          "Rising sea temperatures cause coral bleaching.",
          "Coral bleaching is a well-known environmental issue.",
          "Marine biologists have studied coral reefs for decades.",
        ],
        correct_answer:
          "Coral reefs, which cover less than 1% of the ocean floor, support around a quarter of all marine species.",
        explanation:
          "This sentence introduces what coral reefs are and why they matter, which suits readers unfamiliar with the topic; the others assume prior knowledge or focus on an unrelated detail.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which is the most concise way to combine these two sentences without losing meaning: 'The report was long. The report was also very detailed.'?",
        options: [
          "The report was long and detailed.",
          "The report was long, and in addition to being long, it was also very detailed.",
          "The report, which was long, was also a report that was detailed.",
          "The report was long; furthermore, it was also detailed in nature.",
        ],
        correct_answer: "The report was long and detailed.",
        explanation: "This preserves both facts using the fewest words, without repetition.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "'The bridge was closed for repairs. However, traffic flowed smoothly on the detour route.' Is 'however' used correctly here?",
        options: [
          "No — the sentences aren't in contrast; 'as a result' or a similar transition would fit better",
          "Yes — the sentences clearly contradict each other",
          "Yes — 'however' always signals a positive outcome",
          "No — this pair of sentences needs no transition at all",
        ],
        correct_answer:
          "No — the sentences aren't in contrast; 'as a result' or a similar transition would fit better",
        explanation:
          "The second sentence describes how the closure was handled, not a contrasting idea, so 'however' misrepresents the logical relationship.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What is a 'rhetorical synthesis' question on the SAT?",
        options: [
          "A question that gives bullet-point notes and asks which sentence best accomplishes a specific stated goal",
          "A question that only tests spelling",
          "A question about correcting subject-verb agreement",
          "A question that asks you to summarize an entire passage",
        ],
        correct_answer:
          "A question that gives bullet-point notes and asks which sentence best accomplishes a specific stated goal",
        explanation: "Rhetorical synthesis questions test whether you can select or construct a sentence that fulfils a specific purpose using given information.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Notes: (1) The bakery opened in 1990. (2) It now has 12 locations. (3) Its signature product is a sourdough loaf. Goal: 'to highlight the bakery's growth over time.' Which answer is accurate but fails to meet the stated goal?",
        options: [
          "The bakery's signature product is a sourdough loaf.",
          "Since opening in 1990, the bakery has grown to 12 locations.",
          "Opened in 1990, the bakery now operates 12 locations.",
          "From a single shop in 1990, the bakery expanded to 12 locations.",
        ],
        correct_answer: "The bakery's signature product is a sourdough loaf.",
        explanation:
          "This is a true fact from the notes, but it says nothing about growth over time, so it fails the stated goal despite being accurate.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "'The factory adopted new safety protocols. _____, workplace injuries decreased by 30%.' Which transition fits best?",
        options: ["As a result", "In contrast", "For instance", "Similarly"],
        correct_answer: "As a result",
        explanation: "The second sentence describes a consequence of the first, so a cause/effect transition fits best.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Before picking a transition word, what should you determine first?",
        options: [
          "the logical relationship between the two sentences, without looking at the answer choices",
          "which answer choice is grammatically longest",
          "the total word count of the passage",
          "whether the sentence uses passive voice",
        ],
        correct_answer:
          "the logical relationship between the two sentences, without looking at the answer choices",
        explanation:
          "Determining the relationship first prevents being misled by a transition that sounds natural but is logically wrong.",
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
      {
        question_type: "multiple_choice",
        question_text: "A laptop's price dropped from $800 to $680. What was the percent decrease?",
        options: ["15%", "12%", "20%", "17.6%"],
        correct_answer: "15%",
        explanation: "Percent decrease = (800 - 680) / 800 × 100 = 120/800 × 100 = 15%.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A recipe requires flour to sugar in a ratio of 4:1. If you use 12 cups of flour, how many cups of sugar are needed?",
        options: ["3", "4", "12", "1"],
        correct_answer: "3",
        explanation: "12 cups of flour is 3 times the '4' part of the ratio, so sugar = 3 × 1 = 3 cups.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A two-way table shows 30 students who play soccer and 20 who play basketball, with no overlap, out of 50 total students surveyed. What percent of all surveyed students play soccer?",
        options: ["60%", "30%", "40%", "50%"],
        correct_answer: "60%",
        explanation: "30 out of 50 total students play soccer: 30/50 × 100 = 60%.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A scatterplot shows points trending downward from left to right, closely following a line. This best describes:",
        options: [
          "a strong negative correlation",
          "a strong positive correlation",
          "no correlation",
          "an outlier pattern",
        ],
        correct_answer: "a strong negative correlation",
        explanation: "A downward trend where points closely follow a line indicates a strong negative correlation.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "A car travels at 60 miles per hour. How many miles does it travel in 45 minutes?",
        options: ["45", "60", "30", "75"],
        correct_answer: "45",
        explanation: "45 minutes is 3/4 of an hour, so distance = 60 × (45/60) = 45 miles.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A price increases by 20%, then decreases by 20%. Compared to the original price, the final price is:",
        options: [
          "lower than the original price",
          "equal to the original price",
          "higher than the original price",
          "impossible to determine",
        ],
        correct_answer: "lower than the original price",
        explanation:
          "Starting at 100: up 20% gives 120, then down 20% of 120 gives 96 — the two percentages apply to different bases, so the net result is a 4% decrease, not zero.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A jar contains marbles in a ratio of 2 red to 3 blue, with no other colors. What is the ratio of red marbles to the TOTAL number of marbles?",
        options: ["2:5", "2:3", "3:5", "3:2"],
        correct_answer: "2:5",
        explanation: "Total parts = 2 + 3 = 5, so red to total is 2:5, not 2:3 (which is red to blue only).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which equation correctly expresses 'part = percent × whole'?",
        options: [
          "part = (percent/100) × whole",
          "part = percent × 100 × whole",
          "whole = percent × part",
          "part = whole / percent",
        ],
        correct_answer: "part = (percent/100) × whole",
        explanation: "Percent must be converted to a decimal (divided by 100) before multiplying by the whole.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A two-way table shows 25 of 100 surveyed adults prefer tea, and among tea drinkers, 15 are women. What percent of TEA DRINKERS are women?",
        options: ["60%", "15%", "25%", "40%"],
        correct_answer: "60%",
        explanation: "15 out of the 25 tea drinkers are women: 15/25 × 100 = 60%. The denominator must be the tea-drinker total, not the grand total.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A scatterplot of study hours vs. test scores shows a strong positive correlation, except for one student who studied very little but scored very high. This student's point is best described as:",
        options: [
          "an outlier that doesn't fit the overall trend",
          "proof that there is no correlation",
          "evidence the correlation is negative",
          "a typical data point",
        ],
        correct_answer: "an outlier that doesn't fit the overall trend",
        explanation: "A point that clearly breaks from the general pattern of the data is called an outlier.",
        difficulty: 3,
      },
    ],
  },
];
