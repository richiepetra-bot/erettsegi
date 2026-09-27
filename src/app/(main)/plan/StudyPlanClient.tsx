"use client";

import { useState, useTransition } from "react";
import { SubjectStudyPlan } from "@/lib/types";
import { toggleTopicCheckAction } from "./actions";

function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(`${startDate}T00:00:00Z`);
  const end = new Date(`${endDate}T00:00:00Z`);
  const fmt = (d: Date) => `${d.getUTCMonth() + 1}. ${d.getUTCDate()}.`;
  return `${fmt(start)}–${fmt(end)}`;
}

function weekLabel(weekIndex: number, currentWeekIndex: number, startDate: string, endDate: string): string {
  const range = formatDateRange(startDate, endDate);
  if (weekIndex === currentWeekIndex) return `Ezen a héten (${range})`;
  if (weekIndex === currentWeekIndex + 1) return `Jövő héten (${range})`;
  if (weekIndex < currentWeekIndex) return `${weekIndex + 1}. hét (${range})`;
  return `${weekIndex + 1}. hét (${range})`;
}

export default function StudyPlanClient({ subjectPlans }: { subjectPlans: SubjectStudyPlan[] }) {
  const [checkedOverride, setCheckedOverride] = useState<Record<string, boolean>>({});
  const [, startTransition] = useTransition();

  function handleToggle(topicId: string, current: boolean) {
    const next = !current;
    setCheckedOverride((prev) => ({ ...prev, [topicId]: next }));
    startTransition(async () => {
      await toggleTopicCheckAction(topicId, next);
    });
  }

  return (
    <div className="space-y-6">
      {subjectPlans.map((sp) => (
        <section
          key={sp.subjectKey}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div
            className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 px-5 py-4"
            style={{ borderLeftColor: sp.subjectColor, borderLeftWidth: 4 }}
          >
            <div>
              <p className="font-semibold text-slate-900">{sp.subjectName}</p>
              <p className="text-xs text-slate-500">
                {sp.examLabel} · {sp.examDate}
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {sp.weeksRemaining} hét van hátra
            </span>
          </div>

          <div className="p-5">
            {sp.allCaughtUp ? (
              <p className="text-sm text-emerald-600">
                🎉 Minden tétel elsajátítva, nincs kiemelt gyenge terület — jó eséllyel csak
                ismétlésre van szükség a vizsgáig.
              </p>
            ) : (
              <div className="space-y-4">
                {sp.weeks.map((week) => (
                  <div key={week.weekIndex}>
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                          week.weekIndex === sp.currentWeekIndex
                            ? "bg-indigo-100 text-indigo-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {weekLabel(week.weekIndex, sp.currentWeekIndex, week.startDate, week.endDate)}
                      </span>
                      {week.isPastDue && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-700">
                          🔴 bekésett
                        </span>
                      )}
                    </div>
                    <ul className="space-y-1.5">
                      {week.topics.map((topic) => {
                        const checked = checkedOverride[topic.id] ?? topic.checked;
                        return (
                          <li
                            key={topic.id}
                            className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all duration-200 ${
                              checked
                                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                                : "border-slate-100 bg-slate-50 text-slate-700"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleToggle(topic.id, checked)}
                              className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span className={checked ? "line-through" : ""}>{topic.title}</span>
                            {topic.isWeak && (
                              <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600">
                                gyenge terület
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
