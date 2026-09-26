import { TopicSeed } from "./angol";

export const actTovabbiTemakTopics: TopicSeed[] = [
  {
    slug: "math-algebra-and-functions",
    title: "Math: Algebra and Functions",
    level: "mindketto",
    theme: "ACT Math",
    order_index: 3,
    summary_markdown:
      "Az ACT Math szekció 60 kérdése 60 perc alatt: az algebrai és függvényes feladatok (egyenletek, egyenlőtlenségek, függvényértékek) adják a pontszám gerincét, és — a SAT-tól eltérően — itt nincs elkülönített szöveges rész.",
    content_markdown: `
## How ACT Math differs from SAT Math

The ACT gives you **60 questions in 60 minutes** (roughly one per minute), all multiple-choice with no separate grid-in section, and calculators are allowed throughout. Algebra and functions questions typically make up close to half the test, ranging from straightforward linear equations to function notation and systems of equations.

## Linear equations and inequalities

Solve for the variable using standard algebraic steps, remembering to **flip the inequality sign** when multiplying or dividing by a negative number. ACT often disguises simple equations inside word problems — translate the words into an equation first, then solve.

## Function notation

If f(x) = 2x + 3, then f(5) simply means "substitute 5 for every x": f(5) = 2(5) + 3 = 13. Composite functions like f(g(x)) require you to work from the **inside out**: evaluate g(x) first, then plug that result into f.

## Systems of equations

For two linear equations, use **substitution** (solve one equation for a variable, plug into the other) or **elimination** (add/subtract equations to cancel a variable). ACT frequently asks for just one coordinate of the solution, or for the sum/product of the two variables — read the question carefully to avoid solving for more than necessary.

## Quadratic equations

Recognise when factoring is faster than the quadratic formula: if a quadratic's coefficients are small, try factoring first (look for two numbers that multiply to *c* and add to *b*). If it doesn't factor easily, use the quadratic formula.

## Pacing strategy

Since you have almost exactly one minute per question, and later questions tend to be harder, aim to **move quickly through the first 30 questions** to bank extra time for the more complex algebra and function questions later in the section.

## Common wrong-answer traps

- Forgetting to flip an inequality sign after multiplying/dividing by a negative.
- Solving for the wrong variable when the question only asks for one specific value.
- Composite function errors from working outside-in instead of inside-out.
`,
    key_concepts: [
      "function notation: f(x)",
      "composite functions",
      "systems of equations (substitution, elimination)",
      "inequality sign flip",
      "factoring vs. quadratic formula",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "If f(x) = 3x - 4, what is f(6)?",
        options: ["14", "18", "10", "22"],
        correct_answer: "14",
        explanation: "f(6) = 3(6) - 4 = 18 - 4 = 14.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "If f(x) = x + 2 and g(x) = 3x, what is f(g(2))?",
        options: ["8", "6", "10", "4"],
        correct_answer: "8",
        explanation: "First g(2) = 3(2) = 6, then f(6) = 6 + 2 = 8. Composite functions are evaluated from the inside out.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Solve for x: -2x + 6 > 10",
        options: ["x < -2", "x > -2", "x < 2", "x > 2"],
        correct_answer: "x < -2",
        explanation: "-2x > 4, so x < -2 (the inequality sign flips because we divide by a negative number).",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Solve the system: x + y = 10 and x - y = 4. What is the value of x?",
        options: ["7", "6", "3", "14"],
        correct_answer: "7",
        explanation: "Adding both equations: 2x = 14, so x = 7.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which pair of numbers factors x² + 7x + 12?",
        options: ["3 and 4", "2 and 6", "1 and 12", "5 and 2"],
        correct_answer: "3 and 4",
        explanation: "3 × 4 = 12 and 3 + 4 = 7, so x² + 7x + 12 = (x+3)(x+4).",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "reading-main-idea-and-inference",
    title: "Reading: Main Idea and Inference",
    level: "mindketto",
    theme: "ACT Reading",
    order_index: 4,
    summary_markdown:
      "Az ACT Reading 40 kérdése 35 perc alatt: a fő gondolat azonosítása és a szövegből levonható következtetések (nem kifejezetten kimondott, de a szöveg alapján logikusan alátámasztott állítások) a leggyakoribb kérdéstípusok.",
    content_markdown: `
## The ACT Reading time pressure

ACT Reading gives you **40 questions across 4 passages in 35 minutes** — less than 9 minutes per passage including reading time, which is tighter than the SAT's pacing. Most successful test-takers **skim for structure first** (what is each paragraph about?) rather than reading for every detail, then return to the passage when a specific question requires it.

## Main idea questions

A main idea question asks what the passage **as a whole** is about — not just one paragraph. The correct answer must be broad enough to cover the entire passage, but not so broad that it could describe a completely different text. Eliminate answers that only describe one paragraph or a minor detail.

## Inference questions

An inference is a conclusion that is **strongly implied but not directly stated**. The correct answer must be a small, logical step beyond what's written — never something that requires outside knowledge or a big leap. A useful test: could you point to a specific sentence (or combination of sentences) in the passage that makes the answer *almost* certainly true? If not, it's probably too much of a stretch.

## Common wrong-answer traps

- **Too literal**: restates a detail from the text rather than drawing a conclusion (this is usually a "detail" question trap, not a correct inference).
- **Too big a leap**: technically possible but not actually supported by the text — requires outside assumptions.
- **Opposite inference**: reverses the direction of what the passage actually implies.

## Strategy for paired-passage sets

Some ACT Reading sets pair two related passages. Always answer questions about **Passage 1 alone** and **Passage 2 alone** first, using only information from that specific passage, before tackling questions that ask you to **compare** the two.

## Practice approach

After each practice passage, for every inference question, write the **specific sentence(s)** in the text that support your answer. If you can't find a clear textual basis, you've likely fallen for an "outside knowledge" trap — a common ACT wrong-answer pattern.
`,
    key_concepts: [
      "main idea (whole-passage scope)",
      "inference (implied, not stated)",
      "too-literal answer trap",
      "too-big-a-leap answer trap",
      "paired-passage strategy",
    ],
    source_refs: [],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "A main idea question asks about which of the following?",
        options: [
          "the passage as a whole, not just one paragraph or detail",
          "only the first sentence of the passage",
          "a random detail from paragraph 3",
          "the author's biography"
        ],
        correct_answer: "the passage as a whole, not just one paragraph or detail",
        explanation: "The main idea must capture what the entire passage is about, broad enough to cover all paragraphs but specific enough to distinguish it from other topics.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "What makes an answer choice a valid inference rather than a 'too big a leap'?",
        options: [
          "it is a small, logical step directly supported by specific sentences in the text",
          "it uses information the reader already knew before reading the passage",
          "it must be the most dramatic or surprising possible conclusion",
          "it directly quotes the passage word for word"
        ],
        correct_answer: "it is a small, logical step directly supported by specific sentences in the text",
        explanation: "A valid inference stays close to the text's actual implications rather than requiring outside knowledge or major assumptions.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "In a paired-passage set, what should you do first?",
        options: [
          "answer questions about each passage individually before tackling comparison questions",
          "only read Passage 2, since it usually contains the answers",
          "skip straight to comparison questions",
          "assume both passages have identical opinions"
        ],
        correct_answer: "answer questions about each passage individually before tackling comparison questions",
        explanation: "Building a solid understanding of each passage separately makes comparison questions much easier and less error-prone.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Roughly how much time do you have per passage on ACT Reading?",
        options: ["about 8-9 minutes", "about 20 minutes", "about 2 minutes", "unlimited time"],
        correct_answer: "about 8-9 minutes",
        explanation: "35 minutes divided across 4 passages gives roughly 8-9 minutes per passage, including reading and answering all questions.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "An answer choice that restates a directly stated detail (rather than drawing a conclusion) is most likely a trap for which question type?",
        options: ["inference questions", "vocabulary-in-context questions", "main idea questions only", "paired-passage questions only"],
        correct_answer: "inference questions",
        explanation: "Inference questions require going beyond what's directly stated; an answer that's 'too literal' just repeats a detail instead of drawing the required conclusion.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "english-rhetorical-skills-organization-and-style",
    title: "English: Rhetorical Skills (Organization and Style)",
    level: "mindketto",
    theme: "ACT English",
    order_index: 5,
    summary_markdown:
      "Az ACT English kérdéseinek kb. fele nem nyelvtant, hanem retorikai készségeket tesztel: bekezdések sorrendje, mondatok elhelyezése, stílusbeli tömörség és relevancia — vagyis a szöveg mint egész hatékonysága.",
    content_markdown: `
## Rhetorical skills vs. grammar questions

Roughly half of ACT English questions test **"Production of Writing"** and **"Knowledge of Language"** — collectively often called rhetorical skills — rather than pure grammar rules. These questions ask about **organisation** (where should a sentence or paragraph go?), **relevance** (should a sentence be added, kept, or deleted?), and **style** (which word choice or phrasing best fits the passage's tone?).

## Paragraph and sentence order questions

These questions typically give you numbered sentences or paragraphs and ask for the most logical order, or ask where a specific new sentence should be inserted. Look for **transition clues** (words like "first," "however," "as a result") and **pronoun references** (a sentence using "this" or "they" must come after the noun it refers to) to determine the correct sequence.

## "Add or delete" questions

When asked whether a sentence should be added, always check **two things**: does it fit the paragraph's specific focus (not just the general topic), and is the information it adds already covered elsewhere? A sentence can be true and interesting but still wrong to add if it doesn't serve the specific paragraph's purpose.

## Conciseness and redundancy

The ACT strongly favours the **most concise version that preserves meaning** — a hallmark difference from casual writing. Watch for redundant phrases (e.g., "return back," "each and every," "completely eliminate") — these are almost always wrong when a shorter alternative is available.

## Tone and style consistency

Passages have a consistent tone (formal, conversational, technical) — the correct answer choice must match that established tone. A perfectly grammatical sentence can still be wrong if it's too casual for a formal passage, or vice versa.

## Common wrong-answer traps

- An answer that's grammatically correct but **redundant** or unnecessarily wordy.
- A sentence addition that's factually accurate but **off-topic** for that specific paragraph.
- A word choice that shifts the passage's **established tone**.

## Practice approach

For every "add this sentence?" question, explicitly ask: "Does this serve THIS paragraph's specific purpose?" — not just "is this true and related to the general topic?"
`,
    key_concepts: [
      "rhetorical skills vs. grammar",
      "paragraph/sentence order",
      "add-or-delete relevance test",
      "conciseness and redundancy",
      "tone consistency",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "Which phrase is redundant and would likely be marked wrong on ACT English?",
        options: ["return back", "return home", "go back", "come back"],
        correct_answer: "return back",
        explanation: "'Return' already implies going back, so adding 'back' is redundant — the ACT favours concise phrasing.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "A question asks whether a new sentence about the history of a topic should be added to a paragraph focused on its modern-day applications. What determines the correct answer?",
        options: [
          "whether the sentence serves this specific paragraph's focus, not just the general topic",
          "whether the sentence is factually true",
          "whether the sentence is grammatically correct",
          "whether the sentence is the longest option"
        ],
        correct_answer: "whether the sentence serves this specific paragraph's focus, not just the general topic",
        explanation: "Even true, well-written sentences should be excluded if they don't match the specific paragraph's focus — here, historical information doesn't belong in a paragraph about modern applications.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which clue is most useful for determining correct sentence order in a paragraph?",
        options: [
          "transition words and pronoun references",
          "the length of each sentence",
          "the number of commas in each sentence",
          "alphabetical order of key words"
        ],
        correct_answer: "transition words and pronoun references",
        explanation: "Transition words (first, however, as a result) and pronouns (this, they) that refer back to earlier nouns are the key logical clues for sequencing.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What does the ACT generally prefer when two answer choices convey the same meaning?",
        options: ["the more concise option", "the longer, more detailed option", "the option with more adjectives", "the option using passive voice"],
        correct_answer: "the more concise option",
        explanation: "ACT English consistently rewards concise phrasing over wordier alternatives that add no new meaning.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "A formal, academic passage suddenly includes a very casual slang phrase in one answer choice. Why is this likely wrong?",
        options: [
          "it breaks the passage's established tone",
          "it is grammatically incorrect",
          "it is too concise",
          "slang is always factually incorrect"
        ],
        correct_answer: "it breaks the passage's established tone",
        explanation: "Even if grammatically fine, an answer that shifts the passage's tone away from its established style is considered incorrect on ACT English.",
        difficulty: 2,
      },
    ],
  },
  {
    slug: "science-scientific-reasoning-and-experimental-design",
    title: "Science: Scientific Reasoning and Experimental Design",
    level: "mindketto",
    theme: "ACT Science",
    order_index: 6,
    summary_markdown:
      "Az ACT Science szekció nem elsősorban tananyagot, hanem tudományos érvelést tesztel: kísérletek felépítésének, változóinak és kontrollcsoportjainak megértése, valamint ellentmondó tudósi álláspontok összehasonlítása.",
    content_markdown: `
## What ACT Science actually tests

Despite its name, ACT Science requires **very little memorised science content** — instead, it tests your ability to read graphs, tables, and experimental descriptions quickly and draw logical conclusions. The section has three passage types: **Data Representation** (graphs/tables), **Research Summaries** (descriptions of one or more experiments), and **Conflicting Viewpoints** (two or more scientists disagreeing about a phenomenon).

## Understanding experimental design

For Research Summaries passages, always identify: the **independent variable** (what the researchers deliberately changed), the **dependent variable** (what they measured as a result), and the **controlled variables** (what they kept constant to ensure a fair comparison). Many questions simply ask you to identify one of these three elements from the experiment's description.

## The role of a control group

A **control group** does not receive the experimental treatment, allowing researchers to compare results against a baseline. Questions often ask *why* a control group was necessary — the correct answer is almost always some version of "to show what would happen without the treatment, isolating its actual effect."

## Comparing multiple experiments

When a passage describes two or more related experiments, look carefully at **what changed between them** — this is almost always the basis for at least one question ("How does Experiment 2 differ from Experiment 1?").

## Conflicting Viewpoints strategy

For passages with multiple scientists' viewpoints, make a **quick one-line summary of each scientist's core claim** before reading the questions. Many questions simply ask which scientist would agree/disagree with a new piece of evidence — having the core claims clear in your mind makes this much faster.

## Common wrong-answer traps

- Confusing the independent and dependent variables.
- Choosing an answer that describes what happened in the WRONG experiment (when multiple experiments are compared).
- In Conflicting Viewpoints questions, picking the scientist whose view seems more "correct" scientifically, rather than the one the question actually asks about.

## Practice approach

Before answering any Research Summary question, write one line identifying the independent variable, the dependent variable, and the control — this single habit resolves a large share of ACT Science questions almost immediately.
`,
    key_concepts: [
      "independent vs. dependent variable",
      "controlled variables",
      "control group",
      "Data Representation / Research Summaries / Conflicting Viewpoints",
      "comparing multiple experiments",
    ],
    questions: [
      {
        question_type: "multiple_choice",
        question_text: "In an experiment testing how fertiliser amount affects plant height, what is the independent variable?",
        options: ["the amount of fertiliser applied", "the plant height", "the type of soil", "the amount of sunlight"],
        correct_answer: "the amount of fertiliser applied",
        explanation: "The independent variable is what the researcher deliberately changes — here, the fertiliser amount, to observe its effect on plant height (the dependent variable).",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Why do researchers include a control group that receives no treatment?",
        options: [
          "to show what would happen without the treatment, isolating its actual effect",
          "to make the experiment take longer",
          "because control groups always show the strongest results",
          "to avoid needing a dependent variable"
        ],
        correct_answer: "to show what would happen without the treatment, isolating its actual effect",
        explanation: "A control group provides a baseline for comparison, allowing researchers to attribute observed differences specifically to the treatment.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which ACT Science passage type presents two or more scientists disagreeing about a phenomenon?",
        options: ["Conflicting Viewpoints", "Data Representation", "Research Summaries", "None of these"],
        correct_answer: "Conflicting Viewpoints",
        explanation: "Conflicting Viewpoints passages present multiple scientists' differing explanations for the same phenomenon.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "What should you identify first when a passage compares two related experiments?",
        options: [
          "exactly what changed between the two experiments",
          "which experiment was performed first chronologically",
          "how many total pages the passage has",
          "the names of the researchers"
        ],
        correct_answer: "exactly what changed between the two experiments",
        explanation: "Questions comparing experiments almost always hinge on identifying the specific difference in setup or variables between them.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "What is the most efficient strategy before answering Conflicting Viewpoints questions?",
        options: [
          "writing a one-line summary of each scientist's core claim",
          "memorising the entire passage word for word",
          "deciding which scientist is objectively correct",
          "skipping the passage entirely"
        ],
        correct_answer: "writing a one-line summary of each scientist's core claim",
        explanation: "Having each viewpoint's core claim clear makes it much faster to answer questions about agreement, disagreement, or evaluating new evidence.",
        difficulty: 2,
      },
    ],
  },
];
