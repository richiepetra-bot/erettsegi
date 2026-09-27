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
      {
        question_type: "multiple_choice",
        question_text:
          "On SAT Reading, what does extreme language like 'always,' 'never,' or 'completely' in an answer choice usually signal?",
        options: [
          "The answer is likely too extreme to be correct; correct answers tend to be more measured",
          "The answer is definitely correct because it sounds confident",
          "The passage itself must contain that exact word",
          "The question is testing vocabulary, not reading comprehension",
        ],
        correct_answer:
          "The answer is likely too extreme to be correct; correct answers tend to be more measured",
        explanation:
          "SAT correct answers tend to avoid absolute claims; extreme wording is a common distractor signal.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage states that a new traffic law reduced accidents; an answer choice claims the law actually caused more accidents. What kind of wrong-answer trap is this?",
        options: ["Reversed logic", "Out of scope", "Half-right", "Extreme language"],
        correct_answer: "Reversed logic",
        explanation:
          "This answer reverses the direction of the claim (cause and effect), which is the definition of a reversed-logic trap.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage states: 'The new policy cut costs by 15%, although it led to a rise in customer complaints.' Which best restates the main claim?",
        options: [
          "The policy lowered costs but also increased complaints.",
          "The policy only increased customer complaints.",
          "The policy had no effect on costs.",
          "The policy eliminated all customer complaints.",
        ],
        correct_answer: "The policy lowered costs but also increased complaints.",
        explanation:
          "This captures both parts of the claim (cost reduction and the complaint increase) without adding unsupported information.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the recommended practice approach for Command of Evidence questions, what should you do after getting one wrong?",
        options: [
          "Write down which trap (half-right, out of scope, or reversed logic) caught you",
          "Immediately move to the next passage without review",
          "Memorize the passage word for word",
          "Only review the question stem, not the answer choices",
        ],
        correct_answer:
          "Write down which trap (half-right, out of scope, or reversed logic) caught you",
        explanation:
          "Identifying the recurring trap helps you notice patterns in your own mistakes over time.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What is the main purpose of a Command of Evidence question on the digital SAT?",
        options: [
          "To identify which part of the text or data best supports a given claim",
          "To test spelling and vocabulary definitions",
          "To summarize the entire passage in one sentence",
          "To identify the author's biography",
        ],
        correct_answer: "To identify which part of the text or data best supports a given claim",
        explanation:
          "Command of Evidence questions ask you to find the specific textual or data-based support for a claim.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage argues that a company's new recycling program has been effective. Which piece of evidence would best support this claim?",
        options: [
          "Waste sent to landfills dropped by 40% within six months of the program's launch.",
          "The company's CEO gave a speech praising sustainability in general.",
          "Recycling programs are common among large companies nationwide.",
          "The program was more expensive to implement than expected.",
        ],
        correct_answer:
          "Waste sent to landfills dropped by 40% within six months of the program's launch.",
        explanation:
          "A concrete, measurable result directly tied to the program is the strongest evidence; the other options are general, irrelevant, or contradict effectiveness.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage claims that regular exercise improves memory. An answer choice states 'Exercise is beneficial for overall health,' which is true but does not address memory specifically. What trap is this?",
        options: ["Out of scope", "Reversed logic", "Extreme language", "Half-right"],
        correct_answer: "Out of scope",
        explanation:
          "The statement is true in general but doesn't answer what the question specifically asked about (memory).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage states 'The museum's new exhibit attracted twice as many visitors as last year, though attendance dropped in the final week due to renovations.' An answer choice says: 'The exhibit doubled its visitors and continued gaining attendance every week.' What is wrong with this answer?",
        options: [
          "It correctly restates part of the claim but adds an unsupported detail (continuous weekly gains), making it half-right",
          "It is completely unrelated to the passage",
          "It uses extreme language not found anywhere in the passage",
          "It is a perfectly correct restatement of the claim",
        ],
        correct_answer:
          "It correctly restates part of the claim but adds an unsupported detail (continuous weekly gains), making it half-right",
        explanation:
          "This is a classic half-right distractor: accurate on the doubling, but wrong on the added claim about continuous gains, which contradicts the final week's drop.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Before looking at the answer choices for a Command of Evidence question, what should you do first?",
        options: [
          "Identify the passage's main claim in your own words",
          "Guess which answer is longest",
          "Skip directly to elimination",
          "Reread the question three times",
        ],
        correct_answer: "Identify the passage's main claim in your own words",
        explanation:
          "Forming the main claim yourself before reading answers helps you avoid being misled by plausible-sounding distractors.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Approximately how long is a typical digital SAT Reading & Writing passage for this question type?",
        options: [
          "25-150 words, paired with one question",
          "500-750 words, paired with five questions",
          "Exactly 100 words every time",
          "1-2 full pages",
        ],
        correct_answer: "25-150 words, paired with one question",
        explanation:
          "Digital SAT Reading & Writing passages are short—about 25 to 150 words—each paired with a single question.",
        difficulty: 1,
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
      "A SAT Writing kérdései által leggyakrabban vizsgált nyelvtani szabályok: mondatszerkezet, igeidő-egyeztetés, írásjelek.",
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
      {
        question_type: "multiple_choice",
        question_text: "Which of the following is a complete sentence rather than a fragment?",
        options: [
          "She runs through the park every morning.",
          "Running through the park every morning.",
          "Through the park every morning.",
          "Because she runs through the park every morning.",
        ],
        correct_answer: "She runs through the park every morning.",
        explanation:
          "The other options lack a subject-verb pair that stands alone, or are subordinate clauses that can't stand alone as sentences.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to modern SAT-accepted usage, which pronoun correctly completes: 'Each student must bring ___ own laptop'?",
        options: ["their", "his", "our", "your"],
        correct_answer: "their",
        explanation:
          "Modern usage accepts singular 'their' when gender is unspecified, matching an antecedent like 'each student.'",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which sentence uses correct subject-verb agreement?",
        options: [
          "The box of old photographs is in the attic.",
          "The box of old photographs are in the attic.",
          "The boxes of old photograph is in the attic.",
          "The box of old photographs were in the attic.",
        ],
        correct_answer: "The box of old photographs is in the attic.",
        explanation:
          "'Box' is the singular subject, despite the plural 'photographs' that comes between subject and verb.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which of the following is a run-on sentence?",
        options: [
          "I studied all night I still felt unprepared.",
          "I studied all night; I still felt unprepared.",
          "I studied all night, and I still felt unprepared.",
          "Although I studied all night, I still felt unprepared.",
        ],
        correct_answer: "I studied all night I still felt unprepared.",
        explanation:
          "Two independent clauses joined with no punctuation or conjunction at all form a run-on sentence.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "A semicolon can correctly join two clauses when:",
        options: [
          "both clauses are independent and closely related in meaning",
          "the first clause is a fragment",
          "the second clause starts with 'because'",
          "the clauses have nothing in common",
        ],
        correct_answer: "both clauses are independent and closely related in meaning",
        explanation:
          "A semicolon joins two independent, closely related clauses without needing a conjunction.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which sentence contains a misplaced modifier?",
        options: [
          "Having finished the marathon, the medal was awarded to Elena.",
          "Having finished the marathon, Elena received her medal.",
          "After she finished the marathon, Elena received her medal.",
          "Elena received her medal after finishing the marathon.",
        ],
        correct_answer: "Having finished the marathon, the medal was awarded to Elena.",
        explanation:
          "The medal did not finish the marathon — the modifier should describe the person, Elena, not the medal.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which sentence correctly punctuates a restrictive (essential) clause?",
        options: [
          "The laptop that I bought last year still works well.",
          "The laptop, that I bought last year, still works well.",
          "The laptop that I bought, last year still works well.",
          "The laptop, that I bought last year still works well.",
        ],
        correct_answer: "The laptop that I bought last year still works well.",
        explanation:
          "'That I bought last year' is essential information identifying which laptop, so no commas are needed.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which sentence contains a pronoun-antecedent agreement error?",
        options: [
          "The dog wagged their tail happily.",
          "The dog wagged its tail happily.",
          "The dogs wagged their tails happily.",
          "Each dog wagged its tail happily.",
        ],
        correct_answer: "The dog wagged their tail happily.",
        explanation:
          "'Dog' here is a singular animal with unspecified gender; the standard pronoun is 'its,' not 'their.'",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What is a comma splice?",
        options: [
          "Joining two independent clauses with only a comma and no conjunction",
          "Using too many commas in a list",
          "Starting a sentence with a comma",
          "Using a comma before 'and' in a list",
        ],
        correct_answer: "Joining two independent clauses with only a comma and no conjunction",
        explanation:
          "A comma alone cannot join two independent clauses — this error is called a comma splice.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Which revision corrects both the subject-verb agreement error and the misplaced modifier in: 'Rushing to catch the train, the schedules of the commuters was constantly checked'?",
        options: [
          "Rushing to catch the train, the commuters constantly checked their schedules.",
          "Rushing to catch the train, the schedules of the commuters were constantly checked.",
          "The schedules of the commuters was constantly checked, rushing to catch the train.",
          "Rushing to catch the train, the commuter's schedule were constantly checked.",
        ],
        correct_answer: "Rushing to catch the train, the commuters constantly checked their schedules.",
        explanation:
          "This version fixes the misplaced modifier by making 'commuters' the logical subject doing the rushing, and matches the verb 'checked' to that plural subject.",
        difficulty: 3,
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
      {
        question_type: "multiple_choice",
        question_text: "In the equation y = mx + b, what does 'm' typically represent in a real-world context?",
        options: [
          "the rate of change",
          "the starting value",
          "the y-intercept",
          "the total sum of x and y",
        ],
        correct_answer: "the rate of change",
        explanation: "'m' is the slope — how much y changes per unit of x, i.e. the rate of change.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Solve the system: 2x + y = 11 and x - y = 1. What is the value of x?",
        options: ["4", "3", "5", "6"],
        correct_answer: "4",
        explanation: "Adding the two equations eliminates y: 3x = 12, so x = 4.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A parking garage charges a $5 flat entry fee plus $3 per hour. Which equation gives the total cost C after h hours?",
        options: ["C = 3h + 5", "C = 5h + 3", "C = 3h - 5", "C = 8h"],
        correct_answer: "C = 3h + 5",
        explanation: "The flat $5 fee is the y-intercept; $3/hour is the slope (rate of change).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Solve for x: -2(x - 4) = 10",
        options: ["x = -1", "x = 1", "x = -9", "x = 9"],
        correct_answer: "x = -1",
        explanation: "-2(x-4) = -2x + 8 = 10 → -2x = 2 → x = -1.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A store sells pens for $2 each and notebooks for $5 each. A customer buys a total of 10 items for $29. How many pens did the customer buy?",
        options: ["7", "3", "5", "8"],
        correct_answer: "7",
        explanation:
          "Setting p + n = 10 and 2p + 5n = 29 and solving gives n = 3 notebooks and p = 7 pens.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Solve for x: 4x - 8 ≤ 12",
        options: ["x ≤ 5", "x ≥ 5", "x ≤ -5", "x ≥ -5"],
        correct_answer: "x ≤ 5",
        explanation: "4x ≤ 20 → x ≤ 5. Dividing by a positive number does not flip the inequality.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "\"A number increased by 8 is equal to three times the number decreased by 2.\" Which equation represents this, where n is the number?",
        options: ["n + 8 = 3n - 2", "n - 8 = 3n + 2", "8n = 3n - 2", "n + 8 = 3(n - 2)"],
        correct_answer: "n + 8 = 3n - 2",
        explanation:
          "'Increased by 8' means + 8, and 'three times the number decreased by 2' means 3n - 2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "A line passes through the points (2, 5) and (4, 11). What is the slope of the line?",
        options: ["3", "2", "6", "1/3"],
        correct_answer: "3",
        explanation: "Slope = (11 - 5) / (4 - 2) = 6 / 2 = 3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "The system y = 4x + 7 and y = 4x + k has no solution for every value of k except:",
        options: ["k = 7", "k = 4", "k = 0", "k = -7"],
        correct_answer: "k = 7",
        explanation:
          "Both lines have the same slope (4), so they are parallel and never intersect unless they are the exact same line, which happens only when k = 7.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "A taxi ride costs C = 2.5m + 4, where m is miles traveled. What does the value 4 represent?",
        options: [
          "the base fare before any miles are driven",
          "the cost per mile",
          "the total number of miles",
          "the total fare for a 4-mile trip",
        ],
        correct_answer: "the base fare before any miles are driven",
        explanation: "4 is the y-intercept — the fixed cost when m = 0, i.e. the base fare.",
        difficulty: 1,
      },
    ],
  },
];
