export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubjectByKey, canAccessSubject } from "@/lib/db/subjects";
import { getTopicsBySubjectId } from "@/lib/db/topics";
import { getCurrentUser } from "@/lib/db/users";

const STATUS_LABELS: Record<string, string> = {
  nem_kezdett: "Nem kezdett",
  folyamatban: "Folyamatban",
  elsajatitott: "Elsajátítva",
};

export default async function SubjectTopicsPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const user = await getCurrentUser();
  const subject = await getSubjectByKey(key);
  if (!subject || !canAccessSubject(subject, user.elective_subject_id)) notFound();

  const topics = await getTopicsBySubjectId(subject.id, user.id);

  const grouped = new Map<string, typeof topics>();
  for (const topic of topics) {
    const theme = topic.theme ?? "Egyéb";
    if (!grouped.has(theme)) grouped.set(theme, []);
    grouped.get(theme)!.push(topic);
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="h-4 w-4 rounded-full" style={{ backgroundColor: subject.color }} />
        <h1 className="text-lg font-extrabold tracking-tight text-slate-900">{subject.name} tételek</h1>
      </div>

      {topics.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
          Ehhez a tantárgyhoz még nincs feltöltött tétel.
        </p>
      ) : (
        Array.from(grouped.entries()).map(([theme, themeTopics]) => (
          <section key={theme}>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
              {theme}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {themeTopics.map((topic) => {
                const stars = topic.progress?.stars ?? 0;
                const status = topic.progress?.status ?? "nem_kezdett";
                return (
                  <Link
                    key={topic.id}
                    href={`/subjects/${subject.key}/${topic.slug}`}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-slate-900">{topic.title}</p>
                      <div className="flex gap-0.5">
                        {[0, 1, 2].map((i) => (
                          <span key={i} className={i < stars ? "text-amber-400" : "text-slate-300"}>
                            {i < stars ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                        {topic.level === "mindketto" ? "közép/emelt" : topic.level}
                      </span>
                      <span className="text-xs text-slate-400">{STATUS_LABELS[status]}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
