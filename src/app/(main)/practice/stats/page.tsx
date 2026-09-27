export const dynamic = "force-dynamic";

import Link from "next/link";
import { getAllTimeStats } from "@/lib/db/practice-quiz";

function accuracyColor(accuracy: number): string {
  if (accuracy >= 0.8) return "text-emerald-600";
  if (accuracy >= 0.5) return "text-amber-600";
  return "text-red-600";
}

export default async function StatsPage() {
  const stats = await getAllTimeStats();
  const overallPct = Math.round(stats.overallAccuracy * 100);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Hogy állok?</h2>
          <p className="text-sm text-slate-500">All-time statisztikák minden megválaszolt kérdésről.</p>
        </div>
        <Link href="/practice" className="text-sm font-medium text-indigo-600 hover:underline">
          ← Vissza a gyakorláshoz
        </Link>
      </div>

      {stats.totalAttempts === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
          Még nincs megválaszolt kérdésed. Kezdj egy kvízzel a{" "}
          <Link href="/practice" className="text-indigo-600 hover:underline">
            gyakorlás
          </Link>{" "}
          oldalon, hogy itt lásd az eredményeidet!
        </p>
      ) : (
        <>
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Összesített pontosság
            </p>
            <p className={`mt-1 text-3xl font-bold ${accuracyColor(stats.overallAccuracy)}`}>
              {overallPct}%
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {stats.totalCorrect} / {stats.totalAttempts} helyes válasz összesen
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-base font-semibold text-slate-900">Tantárgyanként</h3>
            <div className="space-y-3">
              {stats.bySubject.map((s) => {
                const pct = Math.round(s.accuracy * 100);
                return (
                  <div
                    key={s.subjectKey}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-medium text-slate-900">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: s.subjectColor }}
                        />
                        {s.subjectName}
                      </span>
                      <span className={`text-sm font-semibold ${accuracyColor(s.accuracy)}`}>
                        {pct}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, backgroundColor: s.subjectColor }}
                      />
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      {s.correct} / {s.attempts} helyes válasz
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h3 className="mb-1 text-base font-semibold text-slate-900">Témakörönként</h3>
            <p className="mb-3 text-xs text-slate-500">
              A leggyengébb eredményű témák szerepelnek elöl — ezekre érdemes gyakorlást tervezni.
            </p>
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
                  {stats.byTopic.map((t) => {
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
          </section>
        </>
      )}
    </div>
  );
}
