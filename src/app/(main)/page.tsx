export const dynamic = "force-dynamic";

import Link from "next/link";
import { getSubjects, filterSubjectsForStudent } from "@/lib/db/subjects";
import { getExamsWithSubjects } from "@/lib/db/exams";
import { getTopicsBySubjectId } from "@/lib/db/topics";
import { getCurrentUser } from "@/lib/db/users";
import { daysUntil, formatCountdown, firstNameOf, EXAM_TYPE_LABELS, LEVEL_LABELS } from "@/lib/gamification";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const firstName = firstNameOf(user.display_name);
  const [allSubjects, exams] = await Promise.all([getSubjects(), getExamsWithSubjects(user.id)]);
  const subjects = filterSubjectsForStudent(allSubjects, user.elective_subject_id);
  const hasChosenElective = user.elective_subject_id !== null;

  const subjectsWithProgress = await Promise.all(
    subjects.map(async (subject) => {
      const topics = await getTopicsBySubjectId(subject.id, user.id);
      const mastered = topics.filter((t) => t.progress?.status === "elsajatitott").length;
      return { subject, topicCount: topics.length, masteredCount: mastered };
    })
  );

  const sortedExams = [...exams].sort((a, b) => {
    const da = daysUntil(a.written_date) ?? Number.MAX_SAFE_INTEGER;
    const db = daysUntil(b.written_date) ?? Number.MAX_SAFE_INTEGER;
    return da - db;
  });

  const nextUrgentExam = sortedExams.find((exam) => {
    const days = daysUntil(exam.written_date);
    return days !== null && days <= 14 && days >= 0;
  });

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
        Szia, {firstName}! 👋
      </h1>

      <section>
        <Link
          href="/practice/daily"
          className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 p-5 text-white shadow-sm transition hover:shadow-md"
        >
          <div>
            <p className="text-lg font-semibold">🗓️ Napi 15 kérdés</p>
            <p className="mt-1 text-sm text-indigo-100">
              Vegyes gyorskvíz minden tantárgyból — pár perc, és meglátod, hol állsz.
            </p>
          </div>
          <span className="rounded-xl bg-white/15 px-4 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/25">
            Kezdés →
          </span>
        </Link>
        <div className="mt-3 flex gap-4 text-sm">
          <Link href="/practice" className="font-medium text-indigo-600 hover:underline">
            Egyéb gyors felmérők →
          </Link>
          <Link href="/practice/stats" className="font-medium text-indigo-600 hover:underline">
            Hogy állok? →
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900">Közelgő vizsgák</h2>
          <Link href="/exams" className="text-sm font-medium text-indigo-600 hover:underline">
            Vizsgák kezelése →
          </Link>
        </div>

        {nextUrgentExam && (
          <p className="mb-3 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {firstName}, a(z) {nextUrgentExam.subject.name} vizsgád{" "}
            {formatCountdown(daysUntil(nextUrgentExam.written_date))} van — érdemes rákapcsolni!
          </p>
        )}

        {sortedExams.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
            Még nincs felvéve vizsga.{" "}
            <Link href="/exams" className="text-indigo-600 hover:underline">
              Adj hozzá egyet
            </Link>
            .
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sortedExams.map((exam) => {
              const days = daysUntil(exam.written_date);
              const urgent = days !== null && days <= 14 && days >= 0;
              return (
                <div
                  key={exam.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  style={{ borderLeftColor: exam.subject.color, borderLeftWidth: 4 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{exam.subject.name}</p>
                      <p className="text-xs text-slate-500">
                        {EXAM_TYPE_LABELS[exam.exam_type]}
                        {exam.level ? ` · ${LEVEL_LABELS[exam.level]} szint` : ""}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        urgent ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {formatCountdown(days)}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-slate-500">
                    Írásbeli: {exam.written_date ?? "nincs megadva"}
                    {exam.oral_date ? ` · Szóbeli: ${exam.oral_date}` : ""}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-extrabold tracking-tight text-slate-900">Tantárgyak</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {!hasChosenElective && (
            <Link
              href="/valassz-tantargyat"
              className="rounded-2xl border-2 border-dashed border-indigo-300 bg-indigo-50 p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <p className="font-extrabold tracking-tight text-indigo-700">
                🎯 Válaszd ki az 5. tantárgyad
              </p>
              <p className="mt-1 text-xs text-indigo-600">
                A választható érettségi tantárgyak közül még nem választottál — kattints a
                kiválasztáshoz.
              </p>
            </Link>
          )}
          {subjectsWithProgress.map(({ subject, topicCount, masteredCount }) => {
            const pct = topicCount > 0 ? Math.round((masteredCount / topicCount) * 100) : 0;
            return (
              <div
                key={subject.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <Link href={`/subjects/${subject.key}`}>
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
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pct}%`, backgroundColor: subject.color }}
                    />
                  </div>
                </Link>
                {subject.is_elective && (
                  <Link
                    href="/valassz-tantargyat"
                    className="mt-2 inline-block text-xs font-medium text-indigo-500 hover:underline"
                  >
                    választott 5. tantárgy — módosítás
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
