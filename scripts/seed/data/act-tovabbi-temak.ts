import { TopicSeed } from "./angol";

export const actTovabbiTemakTopics: TopicSeed[] = [
  {
    slug: "math-algebra-and-functions",
    title: "Math: Algebra and Functions",
    level: "mindketto",
    theme: "ACT Math",
    order_index: 3,
    summary_markdown:
      "Az ACT Math szekció 60 kérdése 60 perc alatt: az algebrai és függvényes feladatok (egyenletek, egyenlőtlenségek, függvényértékek) adják a feladatsor gerincét, és — a SAT-tól eltérően — itt nincs elkülönített szöveges rész.",
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
      {
        question_type: "multiple_choice",
        question_text: "If f(x) = 5x + 1, what is f(3)?",
        options: ["16", "15", "18", "14"],
        correct_answer: "16",
        explanation: "f(3) = 5(3) + 1 = 15 + 1 = 16.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "If f(x) = 2x - 1 and g(x) = x + 4, what is g(f(3))?",
        options: ["9", "5", "10", "6"],
        correct_answer: "9",
        explanation: "First f(3) = 2(3) - 1 = 5, then g(5) = 5 + 4 = 9. Work from the inside out.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Solve for x: -5x + 3 ≤ 18",
        options: ["x ≥ -3", "x ≤ -3", "x ≥ 3", "x ≤ 3"],
        correct_answer: "x ≥ -3",
        explanation: "-5x ≤ 15 → dividing by -5 flips the inequality: x ≥ -3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Solve the system: 3x + 2y = 16 and x - y = 2. What is the value of y?",
        options: ["2", "4", "6", "3"],
        correct_answer: "2",
        explanation: "From x - y = 2, x = y + 2. Substituting: 3(y+2) + 2y = 16 → 5y + 6 = 16 → y = 2.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which pair of numbers factors x² - 2x - 15?",
        options: ["-5 and 3", "5 and -3", "-15 and 1", "5 and 3"],
        correct_answer: "-5 and 3",
        explanation: "-5 × 3 = -15 and -5 + 3 = -2, so x² - 2x - 15 = (x-5)(x+3).",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "If f(x) = -2x + 7, what is f(-3)?",
        options: ["13", "1", "-13", "-1"],
        correct_answer: "13",
        explanation: "f(-3) = -2(-3) + 7 = 6 + 7 = 13.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A rectangle's length is 3 more than twice its width. If the width is w, which expression represents the length?",
        options: ["2w + 3", "3w + 2", "2(w+3)", "w + 3"],
        correct_answer: "2w + 3",
        explanation: "'Twice the width' is 2w, and '3 more than' that means adding 3: 2w + 3.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "According to effective ACT strategy, when should you use the quadratic formula instead of factoring?",
        options: [
          "When the coefficients don't factor easily using small integer pairs",
          "Always, regardless of the coefficients",
          "Only when the equation has no solutions",
          "Never — ACT questions always factor nicely",
        ],
        correct_answer: "When the coefficients don't factor easily using small integer pairs",
        explanation: "Factoring is faster when it works cleanly; the quadratic formula is the reliable fallback otherwise.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "For the system 2x + y = 13 and x + 3y = 14, what is the value of x + y?",
        options: ["8", "9", "7", "10"],
        correct_answer: "8",
        explanation: "Solving the system gives x = 5 and y = 3, so x + y = 8.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Roughly how much time do you have per question on ACT Math?",
        options: ["about 1 minute", "about 3 minutes", "about 30 seconds", "about 5 minutes"],
        correct_answer: "about 1 minute",
        explanation: "60 questions in 60 minutes works out to roughly one minute per question.",
        difficulty: 1,
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
      {
        question_type: "multiple_choice",
        question_text: "What makes an answer choice a 'too big a leap' rather than a valid inference?",
        options: [
          "It requires outside knowledge or a major assumption not supported by the text",
          "It is a small, logical step from the text",
          "It directly quotes the passage",
          "It restates a detail from the text",
        ],
        correct_answer: "It requires outside knowledge or a major assumption not supported by the text",
        explanation: "A 'too big a leap' answer goes beyond what the text can actually support.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "According to the recommended ACT Reading practice approach, what should you do after answering an inference question?",
        options: [
          "Write down the specific sentence(s) in the text that support your answer",
          "Immediately move to the next passage without checking",
          "Only check your answer against the main idea",
          "Reread the entire passage from the start",
        ],
        correct_answer: "Write down the specific sentence(s) in the text that support your answer",
        explanation: "If you can't find a clear textual basis, you've likely fallen for an outside-knowledge trap.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "How many passages and total questions does the ACT Reading section contain?",
        options: [
          "4 passages and 40 questions",
          "5 passages and 50 questions",
          "3 passages and 30 questions",
          "4 passages and 75 questions",
        ],
        correct_answer: "4 passages and 40 questions",
        explanation: "ACT Reading has 4 passages with 40 questions total, to be completed in 35 minutes.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage discusses three benefits of exercise across three paragraphs. Which answer choice would be a 'too narrow' trap for a main idea question?",
        options: [
          "A choice that only describes the benefit discussed in paragraph two",
          "A choice that mentions all three benefits discussed",
          "A choice that accurately summarizes the whole passage",
          "A choice that is too vague to describe any real passage",
        ],
        correct_answer: "A choice that only describes the benefit discussed in paragraph two",
        explanation: "A main idea answer must cover the whole passage, not just one paragraph's detail.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage implies that a scientist was skeptical of a new theory. An answer choice states that the scientist fully embraced the theory from the start. What kind of error is this?",
        options: [
          "An opposite inference — it reverses the direction of what the passage implies",
          "A too-literal restatement of the text",
          "A valid inference supported by the passage",
          "A main idea error",
        ],
        correct_answer: "An opposite inference — it reverses the direction of what the passage implies",
        explanation: "This answer directly contradicts the skepticism the passage implies, reversing its actual direction.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "What is the recommended overall reading strategy for ACT Reading passages, given the time pressure?",
        options: [
          "Skim for structure first (what each paragraph is about), then return for specific questions",
          "Read every sentence twice before answering any question",
          "Skip reading the passage and only look at the questions",
          "Memorize the passage word for word",
        ],
        correct_answer: "Skim for structure first (what each paragraph is about), then return for specific questions",
        explanation: "Skimming for structure first is faster than reading for every detail, and you can return to specific parts as needed.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "In a paired-passage set, a question asks how the author of Passage 2 would likely respond to a claim in Passage 1. What must you do before answering?",
        options: [
          "Understand each passage's individual stance first, then compare them",
          "Only read Passage 1 and ignore Passage 2 entirely",
          "Assume the two authors always agree",
          "Skip directly to the answer choices without rereading either passage",
        ],
        correct_answer: "Understand each passage's individual stance first, then compare them",
        explanation: "Building a solid understanding of each passage separately makes comparison questions easier and less error-prone.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage's first paragraph introduces a historical inventor, the middle paragraphs describe three of her inventions, and the final paragraph discusses her lasting influence. Which is the best main idea?",
        options: [
          "The inventor's key creations and the lasting impact she had",
          "A detailed description of only her second invention",
          "The inventor's childhood before she became famous",
          "A list of every date mentioned in the passage",
        ],
        correct_answer: "The inventor's key creations and the lasting impact she had",
        explanation: "This captures the passage as a whole (inventions plus influence) rather than one narrow detail.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage states: 'Despite the marketing budget being cut by half, the product's sales remained steady.' Which is a valid inference?",
        options: [
          "The product's popularity did not depend heavily on marketing spending alone.",
          "The product will definitely fail within a year.",
          "The company's marketing team was fired.",
          "Sales will double next year.",
        ],
        correct_answer: "The product's popularity did not depend heavily on marketing spending alone.",
        explanation: "Steady sales despite a marketing cut is a small logical step suggesting sales weren't solely dependent on marketing; the other choices require unsupported leaps.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage states: 'The committee delayed the vote by one week to review additional data.' An answer choice claims: 'The committee was hiding something from the public.' What's wrong with this answer?",
        options: [
          "It's too big a leap — it assumes a hidden motive the text never supports",
          "It's a valid, well-supported inference",
          "It's a too-literal restatement of the text",
          "It's an example of the main idea",
        ],
        correct_answer: "It's too big a leap — it assumes a hidden motive the text never supports",
        explanation: "The passage gives a neutral reason (reviewing data); inferring a hidden motive requires an unsupported assumption.",
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
      "Az ACT English kérdéseinek kb. fele nem nyelvtant, hanem retorikai készségeket tesztel: bekezdések sorrendje, mondatok elhelyezése, stílusbeli tömörség és relevancia — vagyis a szöveg egészének hatékonysága.",
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
      {
        question_type: "multiple_choice",
        question_text: "Which phrase contains a redundant modifier that ACT English would flag for revision?",
        options: ["completely eliminate", "eliminate quickly", "eliminate later", "partially eliminate"],
        correct_answer: "completely eliminate",
        explanation: "'Eliminate' already means to remove entirely, so adding 'completely' is redundant.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A sentence begins with 'These changes, however, were not welcomed by everyone.' What must come before this sentence?",
        options: [
          "A sentence describing specific changes that 'these' refers to",
          "A sentence about an unrelated topic",
          "The passage's concluding sentence",
          "Nothing — it can be the first sentence of the passage",
        ],
        correct_answer: "A sentence describing specific changes that 'these' refers to",
        explanation: "The pronoun 'these' needs an antecedent — a prior sentence naming the specific changes — for the sentence to make sense.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A paragraph focuses specifically on a company's marketing strategy in 2020. A sentence about the company's founding in 1985 is proposed for addition. Should it be added?",
        options: [
          "No — it doesn't serve this paragraph's specific focus on 2020 marketing strategy",
          "Yes — because company history is always relevant",
          "Yes — because it is grammatically correct",
          "No — because it mentions a specific year",
        ],
        correct_answer: "No — it doesn't serve this paragraph's specific focus on 2020 marketing strategy",
        explanation: "Even true, well-written information should be excluded if it doesn't match the specific paragraph's focus.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A formal scientific passage describes results neutrally throughout, then one answer choice uses the phrase 'the results were super impressive.' Why is this likely wrong?",
        options: [
          "It breaks the passage's formal, neutral tone",
          "It is grammatically incorrect",
          "It is too concise",
          "It uses a transition word incorrectly",
        ],
        correct_answer: "It breaks the passage's formal, neutral tone",
        explanation: "'Super impressive' is too casual for a formal, neutral scientific passage.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which is the most concise combination of: 'The bridge is old. The bridge is also very sturdy.'?",
        options: [
          "The bridge is old but sturdy.",
          "The bridge is old, and in addition to being old, it is also sturdy.",
          "The bridge, which is old, is a bridge that is sturdy.",
          "The bridge is old; furthermore, the bridge is also sturdy.",
        ],
        correct_answer: "The bridge is old but sturdy.",
        explanation: "This preserves both facts in the fewest words, without repeating 'bridge' or 'old' unnecessarily.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Three sentences: (1) 'Next, the dough is left to rise for an hour.' (2) 'First, the baker mixes flour, water, and yeast.' (3) 'Finally, it is baked at a high temperature.' What is the correct order?",
        options: ["2, 1, 3", "1, 2, 3", "3, 2, 1", "2, 3, 1"],
        correct_answer: "2, 1, 3",
        explanation: "The transition words 'First,' 'Next,' and 'Finally' directly indicate the correct sequence: 2, 1, 3.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "Which of these questions falls under 'rhetorical skills' rather than pure grammar on ACT English?",
        options: [
          "Whether a paragraph's sentences are in the most logical order",
          "Whether a verb agrees with its subject",
          "Whether a comma splice has occurred",
          "Whether a pronoun matches its antecedent in number",
        ],
        correct_answer: "Whether a paragraph's sentences are in the most logical order",
        explanation: "Sentence/paragraph order is an organizational (rhetorical skills) issue, not a grammar rule.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage about a serious historical tragedy suddenly includes a joke in one answer choice, which is grammatically fine and factually accurate. Why is it still the wrong choice?",
        options: [
          "It clashes with the passage's serious, respectful tone despite being accurate and grammatical",
          "It is too short to be correct",
          "It repeats information from earlier in the passage",
          "It uses a transition word incorrectly",
        ],
        correct_answer: "It clashes with the passage's serious, respectful tone despite being accurate and grammatical",
        explanation: "Tone consistency matters even when a sentence is otherwise correct and factually true.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A paragraph already explains that a bridge collapsed due to a design flaw. A new sentence proposed for the same paragraph says 'The bridge failed because of a flaw in its design.' Should it be added?",
        options: [
          "No — it is redundant with information already stated",
          "Yes — repeating key facts always strengthens a paragraph",
          "Yes — because it uses different wording",
          "No — because it uses passive voice",
        ],
        correct_answer: "No — it is redundant with information already stated",
        explanation: "Restating the same fact in different words is still redundant and should be excluded.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text: "All four choices are grammatically correct. Which one would the ACT typically prefer?",
        options: [
          "The team won the game.",
          "The team was successful in winning the game that they played.",
          "The team, in the end, ultimately managed to win the game.",
          "The team won the game that was played by them.",
        ],
        correct_answer: "The team won the game.",
        explanation: "This is the shortest option that preserves the full meaning, matching ACT's preference for concision.",
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
      "Az ACT Science szekció nem elsősorban tananyagot, hanem tudományos érvelést tesztel: kísérletek felépítésének, változóinak és kontrollcsoportjainak megértése, valamint egymásnak ellentmondó tudományos álláspontok összehasonlítása.",
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
      {
        question_type: "multiple_choice",
        question_text: "In an experiment testing how study time affects test scores, what is the dependent variable?",
        options: ["the test scores", "the amount of study time", "the difficulty of the test", "the number of students"],
        correct_answer: "the test scores",
        explanation: "The dependent variable is what is measured as a result of the change — here, test scores, which depend on study time.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "In an experiment comparing plant growth under different light colors, all plants receive the same amount of water and are kept at the same temperature. What are water and temperature in this experiment?",
        options: ["controlled variables", "the independent variable", "the dependent variable", "the control group"],
        correct_answer: "controlled variables",
        explanation: "Factors deliberately kept the same across all trials to ensure a fair comparison are controlled variables.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "In a drug trial, one group of patients receives the new medication, while another group receives a sugar pill with no active ingredient. The second group is:",
        options: ["the control group", "the independent variable", "the dependent variable", "a Conflicting Viewpoints group"],
        correct_answer: "the control group",
        explanation: "The group that receives no active treatment, used as a baseline for comparison, is the control group.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Experiment 1 tests bacterial growth with a nutrient solution at pH 6. Experiment 2 tests bacterial growth with the same nutrient solution at pH 8, using the same incubation time and temperature as Experiment 1. What is the independent variable being tested across the two experiments?",
        options: ["the pH level", "the incubation time", "the temperature", "the nutrient solution"],
        correct_answer: "the pH level",
        explanation: "pH is the only factor that changed between the two experiments; the rest were held constant.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Why would a study's conclusion about a treatment's effectiveness be weaker if it had no control group?",
        options: [
          "There would be no baseline to determine what would have happened without the treatment",
          "The results would automatically be invalid regardless of design",
          "Control groups are only needed in Conflicting Viewpoints passages",
          "It would make the experiment take less time",
        ],
        correct_answer: "There would be no baseline to determine what would have happened without the treatment",
        explanation: "Without a control group for comparison, it's hard to isolate the treatment's actual effect from other factors.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "A passage describes a graph of temperature versus reaction rate, with almost no accompanying text describing an experimental procedure. This is most likely which passage type?",
        options: ["Data Representation", "Research Summaries", "Conflicting Viewpoints", "None of these"],
        correct_answer: "Data Representation",
        explanation: "Data Representation passages center on graphs/tables with minimal experimental narrative, unlike Research Summaries.",
        difficulty: 2,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Scientist A claims a lake's fish decline is due to pollution. Scientist B claims it's due to overfishing. A study finds the lake's pollution levels have remained low and stable for decades, while fishing activity increased sharply just before the decline. Which scientist does this evidence support?",
        options: ["Scientist B", "Scientist A", "Neither", "Both equally"],
        correct_answer: "Scientist B",
        explanation: "Stable pollution rules out Scientist A's explanation, while the sharp rise in fishing right before the decline supports Scientist B's claim.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "What is the independent variable in an experiment?",
        options: [
          "The factor the researcher deliberately changes",
          "The factor that is measured as a result",
          "The factor kept constant to ensure fairness",
          "The group that receives no treatment",
        ],
        correct_answer: "The factor the researcher deliberately changes",
        explanation: "The independent variable is what the researcher intentionally varies to observe its effect on the dependent variable.",
        difficulty: 1,
      },
      {
        question_type: "multiple_choice",
        question_text:
          "Three experiments test enzyme activity at 20°C, 30°C, and 40°C, using the same enzyme concentration and same substrate in every trial. What is being tested as the independent variable across the three experiments?",
        options: ["temperature", "enzyme concentration", "the type of substrate", "the type of enzyme"],
        correct_answer: "temperature",
        explanation: "Temperature is the only factor that changes across the three trials; concentration and substrate are held constant.",
        difficulty: 3,
      },
      {
        question_type: "multiple_choice",
        question_text: "How does a 'Research Summaries' passage differ from a 'Data Representation' passage?",
        options: [
          "It describes one or more experiments and their procedures, not just raw data",
          "It never includes any graphs or tables",
          "It always involves disagreeing scientists",
          "It requires outside chemistry knowledge to answer",
        ],
        correct_answer: "It describes one or more experiments and their procedures, not just raw data",
        explanation: "Research Summaries include experimental design and procedure, beyond just presenting data as Data Representation passages do.",
        difficulty: 2,
      },
    ],
  },
];
