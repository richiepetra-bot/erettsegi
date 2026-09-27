export const dynamic = "force-dynamic";

import Link from "next/link";
import { getStudyPlan } from "@/lib/db/study-plan";

function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(`${startDate}T00:00:00Z`);
  const end = new Date(`${endDate}T00:00:00Z`);
  const fmt = (d: Date) => `${d.getUTCMonth() + 1}. ${d.getUTCDate()}.`;
  return `${fmt(start)}–${fmt(end)}`;
}

function weekLabel(weekIndex: number, startDate: string, endDate: string): string {
  if (weekIndex === 0) return `Ezen a héten (${formatDateRange(startDate, endDate)})`;
  if (weekIndex === 1) return `Jövő héten (${formatDateRange(startDate, endDate)})`;
  return `${weekIndex + 1}. hét (${formatDateRange(startDate, endDate)})`;
}

export default async function StudyPlanPage() {
  const plan = await getStudyPlan();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Tanulási terv</h2>
        <p className="text-sm text-slate-500">
          Automatikusan összeállítva a vizsgadátumok, a még nem elsajátított tételek és a gyenge
          területek alapján — heti bontásban.
        </p>
      </div>

      {plan.subjectsWithoutExam.length > 0 && (
        <p className="rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">
          Ezekhez a tantárgyakhoz még nincs vizsgadátum felvéve, ezért nem szerepelnek a tervben:{" "}
          {plan.subjectsWithoutExam.map((s) => s.name).join(", ")}.{" "}
          <Link href="/exams" className="font-medium text-indigo-600 hover:underline">
            Vizsga hozzáadása →
          </Link>
        </p>
      )}

      {plan.subjectPlans.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
          Még nincs egyetlen közelgő vizsga sem felvéve. Adj hozzá vizsgadátumot a{" "}
          <Link href="/exams" className="text-indigo-600 hover:underline">
            Vizsgák
          </Link>{" "}
          oldalon, hogy személyre szabott tervet tudjunk összeállítani.
        </p>
      ) : (
        <div className="space-y-6">
          {plan.subjectPlans.map((sp) => (
            <section
              key={sp.subjectKey}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
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
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                          {weekLabel(week.weekIndex, week.startDate, week.endDate)}
                        </p>
                        <ul className="space-y-1.5">
                          {week.topics.map((topic) => (
                            <li
                              key={topic.id}
                              className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                            >
                              <span>{topic.title}</span>
                              {topic.isWeak && (
                                <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600">
                                  gyenge terület
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
