export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getSubjectByKey } from "@/lib/db/subjects";
import { getTopicBySlug } from "@/lib/db/topics";
import { getQuizQuestions } from "@/lib/db/quiz";
import { getCurrentUser } from "@/lib/db/users";

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ key: string; topicSlug: string }>;
}) {
  const { key, topicSlug } = await params;
  const user = await getCurrentUser();
  const subject = await getSubjectByKey(key);
  if (!subject) notFound();

  const topic = await getTopicBySlug(subject.id, topicSlug, user.id);
  if (!topic) notFound();

  const questions = await getQuizQuestions(topic.id);
  const contentHtml = topic.content_markdown ? await marked.parse(topic.content_markdown) : "";

  return (
    <article className="space-y-6">
      <div>
        <Link
          href={`/subjects/${subject.key}`}
          className="text-sm text-indigo-600 hover:underline"
        >
          ← {subject.name} tételek
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">{topic.title}</h1>
        {topic.summary_markdown && (
          <p className="mt-1 text-slate-600">{topic.summary_markdown}</p>
        )}
      </div>

      {topic.key_concepts.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {topic.key_concepts.map((concept) => (
            <span
              key={concept}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
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
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
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

      {questions.length > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-600">
            {questions.length} kérdéses kvíz vár rád ehhez a tételhez.
          </p>
          <Link
            href={`/subjects/${subject.key}/${topic.slug}/quiz`}
            className="mt-3 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Kvíz indítása
          </Link>
        </div>
      )}
    </article>
  );
}
