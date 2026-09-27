export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/db/users";
import { getLinkRole, getStudentDashboardData, listLinkedStudents } from "@/lib/db/supervision";

function accuracyColor(accuracy: number): string {
  if (accuracy >= 0.8) return "text-emerald-600";
  if (accuracy >= 0.5) return "text-amber-600";
  return "text-red-600";
}

function activityColor(daysSince: number | null): string {
  if (daysSince === null) return "text-slate-500";
  if (daysSince <= 1) return "text-emerald-600";
  if (daysSince <= 3) return "text-amber-600";
  return "text-red-600";
}

function activityLabel(daysSince: number | null): string {
  if (daysSince === null) return "még nem gyakorolt";
  if (daysSince === 0) return "ma gyakorolt";
  if (daysSince === 1) return "tegnap gyakorolt";
  return `${daysSince} napja nem gyakorolt`;
}

type PageProps = { params: Promise<{ studentId: string }> };

export default async function StudentDetailPage({ params }: PageProps) {
  const { studentId } = await params;
  const user = await getCurrentUser();

  const role = await getLinkRole(user.id, studentId);
  if (!role) notFound();

  const [data, allStudents] = await Promise.all([
    getStudentDashboardData(studentId),
    listLinkedStudents(user.id),
  ]);
  const overallPct = Math.round(data.allTimeStats.overallAccuracy * 100);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{data.studentName} haladása</h2>
          <p className="text-sm text-slate-500">
            Csak olvasható összegzés: eredményesség, tétel-áttekintés, gyakorlási rendszeresség és
            gyenge területek.
          </p>
        </div>
        {allStudents.length > 1 && (
          <Link href="/felugyelet" className="text-sm font-medium text-indigo-600 hover:underline">
            ← Összes diák
          </Link>
        )}
      </div>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Sorozat</p>
          <p className="mt-1 text-2xl font-bold text-orange-600">
            🔥 {data.userProgress.current_streak}
          </p>
          <p className="mt-1 text-xs text-slate-500">leghosszabb: {data.userProgress.longest_streak} nap</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Szint</p>
          <p className="mt-1 text-2xl font-bold text-indigo-600">⭐ {data.level}.</p>
          <p className="mt-1 text-xs text-slate-500">{data.userProgress.total_xp} XP összesen</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Legutóbbi aktivitás
          </p>
          <p className={`mt-1 text-lg font-bold ${activityColor(data.daysSinceLastActivity)}`}>
            {activityLabel(data.daysSinceLastActivity)}
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Elmúlt 30 nap
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{data.activeDaysLast30} nap</p>
          <p className="mt-1 text-xs text-slate-500">amikor gyakorolt</p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Összesített eredményesség
        </p>
        <p className={`mt-1 text-3xl font-bold ${accuracyColor(data.allTimeStats.overallAccuracy)}`}>
          {data.allTimeStats.totalAttempts > 0 ? `${overallPct}%` : "–"}
        </p>
        <p className="mt-1 text-sm text-slate-500">
          {data.allTimeStats.totalAttempts > 0
            ? `${data.allTimeStats.totalCorrect} / ${data.allTimeStats.totalAttempts} helyes válasz összesen`
            : "Még nincs megválaszolt kérdés."}
        </p>
      </section>

      <section>
        <h3 className="mb-3 text-base font-semibold text-slate-900">Tétel-áttekintés tantárgyanként</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.subjectProgress.map(({ subject, topicCount, masteredCount }) => {
            const pct = topicCount > 0 ? Math.round((masteredCount / topicCount) * 100) : 0;
            return (
              <div
                key={subject.id}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">{subject.name}</p>
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: subject.color }}
                  />
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {topicCount === 0
                    ? "Még nincs feltöltött tétel"
                    : `${masteredCount} / ${topicCount} elsajátítva`}
                </p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: subject.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h3 className="mb-1 text-base font-semibold text-slate-900">Gyenge területek</h3>
        <p className="mb-3 text-xs text-slate-500">
          Azok a tételek, amiken a legtöbbet érdemes még gyakorolni (legalább 3 megválaszolt kérdés
          alapján).
        </p>
        {data.weakTopics.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
            Még nincs elég gyakorlási előzmény ahhoz, hogy gyenge területeket lehessen azonosítani.
          </p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-2 font-medium">Tétel</th>
                  <th className="px-4 py-2 font-medium">Tantárgy</th>
                  <th className="px-4 py-2 text-right font-medium">Pontosság</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.weakTopics.map((t) => {
                  const pct = Math.round(t.accuracy * 100);
                  return (
                    <tr key={t.topicId}>
                      <td className="px-4 py-2 text-slate-900">{t.topicTitle}</td>
                      <td className="px-4 py-2">
                        <span className="flex items-center gap-2 text-slate-500">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: t.subjectColor }}
                          />
                          {t.subjectName}
                        </span>
                      </td>
                      <td className={`px-4 py-2 text-right font-semibold ${accuracyColor(t.accuracy)}`}>
                        {pct}%{" "}
                        <span className="font-normal text-slate-400">
                          ({t.correct}/{t.attempts})
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
