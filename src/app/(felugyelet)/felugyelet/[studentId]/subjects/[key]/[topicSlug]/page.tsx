export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getSubjectByKey } from "@/lib/db/subjects";
import { getTopicBySlug } from "@/lib/db/topics";
import { getCurrentUser } from "@/lib/db/users";
import { getLinkRole } from "@/lib/db/supervision";

type PageProps = { params: Promise<{ studentId: string; key: string; topicSlug: string }> };

export default async function SupervisorTopicDetailPage({ params }: PageProps) {
  const { studentId, key, topicSlug } = await params;
  const user = await getCurrentUser();

  const role = await getLinkRole(user.id, studentId);
  if (!role) notFound();

  const subject = await getSubjectByKey(key);
  if (!subject) notFound();

  const topic = await getTopicBySlug(subject.id, topicSlug, studentId);
  if (!topic) notFound();

  const contentHtml = topic.content_markdown ? await marked.parse(topic.content_markdown) : "";

  return (
    <article className="space-y-6">
      <div>
        <Link
          href={`/felugyelet/${studentId}/subjects/${subject.key}`}
          className="text-sm font-semibold text-indigo-600 hover:underline"
        >
          ← {subject.name} tételek
        </Link>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">{topic.title}</h1>
        {topic.summary_markdown && (
          <p className="mt-1 text-slate-600">{topic.summary_markdown}</p>
        )}
        <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
          👀 Csak olvasható nézet — a megtekintés nem számít bele a haladásba
        </p>
      </div>

      {topic.key_concepts.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {topic.key_concepts.map((concept) => (
            <span
              key={concept}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700"
            >
              {concept}
            </span>
          ))}
        </div>
      )}

      <div
        className="prose prose-slate max-w-none prose-headings:font-semibold prose-h2:text-lg prose-h3:text-base"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {topic.source_refs.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="mb-1 font-medium text-slate-700">Források</p>
          <ul className="list-inside list-disc space-y-1">
            {topic.source_refs.map((ref) => (
              <li key={ref.url}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  {ref.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
