import { TopicSeed } from "./angol";

export const satTopics: TopicSeed[] = [
  {
    slug: "reading-command-of-evidence",
    title: "Reading: Command of Evidence",
    level: "mindketto",
    theme: "SAT Reading & Writing",
    order_index: 1,
    summary_markdown:
      "A digitális SAT Reading & Writing szekciójának egyik kulcskészsége: megtalálni a szövegben azt a részt, ami alátámasztja a helyes választ, és kiszűrni a csalós válaszokat.",
    content_markdown: `
## What this question type tests

Every SAT Reading & Writing passage is short (25-150 words) and paired with one question. "Command of evidence" style questions ask you to identify which part of the text (or which piece of data in a graph/table) best supports a claim, or to complete the passage's logic.

## Core strategy

1. **Read the question stem first**, then the passage — this tells you exactly what to look for.
2. Identify the passage's **main claim** in one sentence in your own words before looking at answers.
3. Eliminate answers that are **true but irrelevant** — SAT loves distractors that are factually correct but don't answer the specific question asked.
4. Watch for **extreme language** (always, never, completely) in wrong answers — correct answers are usually more measured.
5. For data-based questions (graphs/tables), always check **units and axis labels** before matching the answer.

## Common wrong-answer traps

- **Half-right**: the answer restates part of the evidence correctly but adds an unsupported claim.
- **Out of scope**: true in general, but not about what the question specifically asks.
- **Reversed logic**: swaps cause and effect, or contradicts the direction of the claim.

## Practice approach

When practising, for every question you get wrong, write down **which trap** caught you (half-right / out of scope / reversed logic). Over time you'll notice you fall for the same 1-2 traps repeatedly — that's the pattern to fix first.
`,
    key_concepts: [
      "command of evidence",
      "main claim",
      "distractor",
      "out-of-scope answer",
      "data-based question",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text:
          "A passage states: 'Sales increased every quarter except one, when a supply shortage caused a temporary dip.' Which best restates the main claim?",
        options: [
          "Sales grew overall, with one exception caused by an external factor.",
          "Sales declined steadily due to ongoing supply problems.",
          "Supply shortages permanently damaged the company's sales.",
          "The company had no growth in any quarter.",
        ],
        correct_answer: "Sales grew overall, with one exception caused by an external factor.",
        explanation:
          "This captures both parts of the claim accurately without adding unsupported information.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which of the following is a classic 'out of scope' wrong answer type on SAT Reading?",
        options: [
          "A statement that is true in general but doesn't answer the specific question asked",
          "A statement that directly quotes the passage",
          "A statement that restates the question",
          "A statement with correct grammar",
        ],
        correct_answer:
          "A statement that is true in general but doesn't answer the specific question asked",
        explanation:
          "'Out of scope' answers are often factually reasonable but don't address what was actually asked.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What should you do first when facing a Command of Evidence question?",
        options: [
          "Read the question stem before the passage, so you know what to look for",
          "Guess based on the answer choices alone",
          "Skip to the longest answer choice",
          "Read the passage twice before looking at the question",
        ],
        correct_answer: "Read the question stem before the passage, so you know what to look for",
        explanation: "Knowing the question first focuses your reading on the relevant detail.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "In a data-based question referencing a graph, what is the most common mistake students make?",
        options: [
          "Misreading the axis labels or units",
          "Reading the passage too many times",
          "Spending too long on the question stem",
          "Using process of elimination",
        ],
        correct_answer: "Misreading the axis labels or units",
        explanation:
          "Many wrong answers are designed to match a value read from the wrong axis or unit.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What does a 'half-right' distractor typically do?",
        options: [
          "Correctly restates part of the evidence, then adds an unsupported claim",
          "Is completely unrelated to the passage",
          "Uses identical wording to the passage",
          "Is grammatically incorrect",
        ],
        correct_answer: "Correctly restates part of the evidence, then adds an unsupported claim",
        explanation: "This is one of the most common SAT distractor patterns.",
        difficulty: 3,
      },
    ],
  },
  {
    slug: "writing-standard-english-conventions",
    title: "Writing: Standard English Conventions",
    level: "mindketto",
    theme: "SAT Reading & Writing",
    order_index: 2,
    summary_markdown:
      "A leggyakrabban tesztelt nyelvtani szabályok, amiket a SAT Writing kérdései minden alkalommal ellenőriznek: mondatszerkezet, igeidő-egyeztetés, írásjelek.",
    content_markdown: `
## Top grammar rules tested on the SAT

### 1. Subject-verb agreement
The verb must agree with the subject, even when other words come between them.
- ✅ "The list of items **is** on the table." (subject = *list*, singular)
- ❌ "The list of items are on the table."

### 2. Sentence boundaries (run-ons and fragments)
Two independent clauses need a period, semicolon, or comma + conjunction — never just a comma (comma splice).
- ✅ "I studied all night; I still felt unprepared."
- ❌ "I studied all night, I still felt unprepared."

### 3. Pronoun-antecedent agreement
A pronoun must match its antecedent in number.
- ✅ "Each student must bring **their** own laptop." (modern accepted usage, singular *they*)
- ❌ "Each student must bring **her** own laptop" (if gender is unspecified/plural context)

### 4. Modifier placement
Misplaced modifiers change the intended meaning.
- ✅ "Running to catch the bus, **Sarah** dropped her bag."
- ❌ "Running to catch the bus, **the bag** was dropped by Sarah." (bag can't run)

### 5. Punctuation with non-essential clauses
Non-essential (extra) information is set off with commas; essential information is not.
- ✅ "My brother, who lives in Boston, is visiting." (non-essential — you have one brother)
- ✅ "The book that I borrowed is due tomorrow." (essential — no commas)

## Strategy

For every underlined portion, first ask: **"Is this a complete, grammatically correct sentence on its own?"** Most SAT Writing questions are really just testing 5-6 recurring rules — recognising the pattern is more valuable than memorising terminology.
`,
    key_concepts: [
      "subject-verb agreement",
      "comma splice",
      "run-on sentence",
      "modifier placement",
      "non-essential clause",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Which sentence is grammatically correct?",
        options: [
          "The group of students is going on a trip.",
          "The group of students are going on a trip.",
          "The group of students were going on a trip, is fun.",
          "The groups of student is going on a trip.",
        ],
        correct_answer: "The group of students is going on a trip.",
        explanation: "'Group' is the singular subject, so it takes the singular verb 'is'.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which of these is a comma splice (grammatically incorrect)?",
        options: [
          "I finished my homework, then I watched TV.",
          "I finished my homework; then I watched TV.",
          "I finished my homework, and then I watched TV.",
          "After I finished my homework, I watched TV.",
        ],
        correct_answer: "I finished my homework, then I watched TV.",
        explanation:
          "Joining two independent clauses with only a comma (no conjunction) is a comma splice.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Choose the correctly punctuated sentence.",
        options: [
          "My sister, who studies medicine, is visiting this weekend.",
          "My sister who studies medicine, is visiting this weekend.",
          "My sister, who studies medicine is visiting this weekend.",
          "My sister who studies medicine is visiting, this weekend.",
        ],
        correct_answer: "My sister, who studies medicine, is visiting this weekend.",
        explanation:
          "The non-essential clause 'who studies medicine' should be set off by commas on both sides.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which sentence has a misplaced modifier?",
        options: [
          "Walking into the room, the smell of fresh bread greeted us.",
          "Walking into the room, we noticed the smell of fresh bread.",
          "As we walked into the room, we smelled fresh bread.",
          "We smelled fresh bread as we walked into the room.",
        ],
        correct_answer: "Walking into the room, the smell of fresh bread greeted us.",
        explanation:
          "The smell can't 'walk into the room' — the modifier should describe the people, not the smell.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "What is the first question to ask about an underlined portion on SAT Writing?",
        options: [
          "Is this a complete, grammatically correct sentence on its own?",
          "Is this the longest answer choice?",
          "Does this use difficult vocabulary?",
          "Is this written in passive voice?",
        ],
        correct_answer: "Is this a complete, grammatically correct sentence on its own?",
        explanation:
          "Testing whether each clause stands as a correct sentence catches most grammar errors quickly.",
        difficulty: 1,
      },
    ],
  },
  {
    slug: "math-heart-of-algebra",
    title: "Math: Heart of Algebra",
    level: "mindketto",
    theme: "SAT Math",
    order_index: 3,
    summary_markdown:
      "Lineáris egyenletek, egyenlőtlenségek és egyenletrendszerek — a SAT Math legnagyobb súlyú témaköre, gyakran szöveges feladatok formájában.",
    content_markdown: `
## What this covers

- Solving linear equations and inequalities in one variable
- Systems of two linear equations (substitution & elimination)
- Interpreting linear equations in real-world word problems
- Understanding slope and intercepts in context

## Key techniques

### Solving systems by substitution
Given:
\`\`\`
y = 2x + 3
3x + y = 18
\`\`\`
Substitute the first into the second: 3x + (2x + 3) = 18 → 5x = 15 → x = 3, then y = 9.

### Translating word problems into equations
Look for keywords:
- "more than" / "increased by" → **+**
- "less than" / "decreased by" → **−**
- "times" / "of" → **×**
- "per" / "each" → division or rate, often the **slope** of a linear model

### Slope-intercept form: y = mx + b
In a word problem, **m** (slope) is usually the *rate of change* (e.g. cost per item), and **b** (y-intercept) is the *fixed/starting value* (e.g. base fee).

Example: "A gym charges a $30 signup fee plus $15 per month."
→ Total cost: **C = 15m + 30**, where m = number of months.

## Common mistakes

- Forgetting to distribute a negative sign across parentheses.
- Flipping the inequality sign when multiplying/dividing by a negative — this must always happen.
- Misreading which quantity is the independent vs. dependent variable in word problems.
`,
    key_concepts: [
      "linear equation",
      "system of equations",
      "slope-intercept form",
      "substitution method",
      "rate of change",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Solve the system: y = 2x + 3 and 3x + y = 18. What is x?",
        options: ["3", "5", "6", "9"],
        correct_answer: "3",
        explanation:
          "Substituting: 3x + (2x+3) = 18 → 5x + 3 = 18 → 5x = 15 → x = 3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A gym charges a $30 signup fee plus $15 per month. Which equation gives the total cost C after m months?",
        options: ["C = 15m + 30", "C = 30m + 15", "C = 15m - 30", "C = 45m"],
        correct_answer: "C = 15m + 30",
        explanation: "The fixed $30 fee is the y-intercept; $15/month is the slope (rate).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Solve for x: -3x + 6 > 15",
        options: ["x < -3", "x > -3", "x < 3", "x > 3"],
        correct_answer: "x < -3",
        explanation:
          "-3x > 9 → dividing by -3 flips the inequality: x < -3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "In the equation y = mx + b, what does 'b' typically represent in a real-world context?",
        options: [
          "the starting or fixed value",
          "the rate of change",
          "the total number of items",
          "the slope of the line",
        ],
        correct_answer: "the starting or fixed value",
        explanation: "'b' is the y-intercept — the value when x = 0, often a fixed starting amount.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"5 less than twice a number is 21.\" Which equation represents this statement, where n is the number?",
        options: ["2n - 5 = 21", "5 - 2n = 21", "2n + 5 = 21", "2(n - 5) = 21"],
        correct_answer: "2n - 5 = 21",
        explanation:
          "'Twice a number' = 2n, and '5 less than' that quantity means subtracting 5 from it.",
        difficulty: 2,
      },
    ],
  },
];
