"use client";

import { useState } from "react";
import Link from "next/link";
import { QuizQuestion, QuizSessionResult } from "@/lib/types";
import { submitQuizAction } from "./actions";

type Props = {
  topicId: string;
  topicTitle: string;
  subjectKey: string;
  topicSlug: string;
  questions: QuizQuestion[];
};

export default function QuizClient({
  topicId,
  topicTitle,
  subjectKey,
  topicSlug,
  questions,
}: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<QuizSessionResult | null>(null);

  const question = questions[index];
  const isLast = index === questions.length - 1;
  const isCorrect = checked && selected === question?.correct_answer;

  async function handleCheck() {
    if (!selected) return;
    setChecked(true);
    setAnswers((prev) => ({ ...prev, [question.id]: selected }));
  }

  async function handleNext() {
    if (isLast) {
      setSubmitting(true);
      const finalAnswers = { ...answers, [question.id]: selected! };
      const payload = Object.entries(finalAnswers).map(([questionId, selectedAnswer]) => ({
        questionId,
        selectedAnswer,
      }));
      const sessionResult = await submitQuizAction(topicId, subjectKey, payload);
      setResult(sessionResult);
      setSubmitting(false);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setChecked(false);
  }

  if (result) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
          <p className="text-4xl">
            {result.stars === 3 ? "🌟" : result.stars === 2 ? "⭐" : result.stars === 1 ? "✨" : "💪"}
          </p>
          <h2 className="mt-3 text-xl font-bold text-slate-900">Kvíz kész!</h2>
          <p className="mt-2 text-4xl font-extrabold text-slate-900">
            {result.correctCount} / {result.totalCount}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-600">
            helyes válasz ({Math.round(result.accuracy * 100)}%)
          </p>
          <div className="mt-3 flex justify-center gap-0.5 text-2xl text-amber-400">
            {[0, 1, 2].map((i) => (
              <span key={i}>{i < result.stars ? "★" : "☆"}</span>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          +{result.xpEarned} XP · összesen {result.newTotalXp} XP · 🔥 {result.newStreak} napos
          sorozat
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href={`/subjects/${subjectKey}/${topicSlug}`}
            className="rounded-xl border-2 border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50/50"
          >
            Vissza a tételhez
          </Link>
          <Link
            href={`/subjects/${subjectKey}`}
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.98]"
          >
            Következő tétel
          </Link>
        </div>
      </div>
    );
  }

  if (!question) {
    return <p className="text-slate-500">Ehhez a tételhez még nincs kvízkérdés.</p>;
  }

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {topicTitle} · {index + 1}. / {questions.length} kérdés
        </p>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
            style={{ width: `${((index + (checked ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <p className="text-lg font-medium text-slate-900">{question.question_text}</p>

        <div className="mt-4 space-y-2">
          {question.options.map((option) => {
            const isSelected = selected === option;
            const showCorrect = checked && option === question.correct_answer;
            const showWrong = checked && isSelected && option !== question.correct_answer;
            return (
              <button
                key={option}
                type="button"
                disabled={checked}
                onClick={() => setSelected(option)}
                className={`block w-full rounded-xl border-2 px-4 py-3 text-left font-medium transition ${
                  showCorrect
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : showWrong
                      ? "border-red-500 bg-red-50 text-red-700"
                      : isSelected
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50"
                }`}
              >
                {showCorrect && "✓ "}
                {showWrong && "✗ "}
                {option}
              </button>
            );
          })}
        </div>

        {checked && (
          <div
            className={`mt-4 rounded-lg p-3 text-sm ${
              isCorrect ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
            }`}
          >
            <p className="font-medium">{isCorrect ? "Helyes!" : "Nem egészen."}</p>
            {question.explanation && <p className="mt-1 text-slate-600">{question.explanation}</p>}
          </div>
        )}

        <div className="mt-5 flex justify-end">
          {!checked ? (
            <button
              type="button"
              disabled={!selected}
              onClick={handleCheck}
              className="rounded-xl bg-indigo-600 px-5 py-2.5 font-bold text-white transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Ellenőrzés
            </button>
          ) : (
            <button
              type="button"
              disabled={submitting}
              onClick={handleNext}
              className="rounded-xl bg-indigo-600 px-5 py-2.5 font-bold text-white transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLast ? (submitting ? "Mentés…" : "Befejezés") : "Következő"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
