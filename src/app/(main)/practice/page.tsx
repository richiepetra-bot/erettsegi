export const dynamic = "force-dynamic";

import Link from "next/link";
import { getSubjects } from "@/lib/db/subjects";

export default async function PracticeHubPage() {
  const subjects = await getSubjects();

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-1 text-lg font-semibold text-slate-900">Gyors felmérők</h2>
        <p className="mb-4 text-sm text-slate-500">
          Mindegyik kb. 15 kérdéses, pár perc alatt kitölthető kvíz.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Link
            href="/practice/daily"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <p className="text-2xl">🗓️</p>
            <p className="mt-2 font-semibold text-slate-900">Napi 15 kérdés</p>
            <p className="mt-1 text-xs text-slate-500">
              Vegyesen minden tantárgyból, kiegyensúlyozottan elosztva.
            </p>
          </Link>
          <Link
            href="/practice/weak"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <p className="text-2xl">🎯</p>
            <p className="mt-2 font-semibold text-slate-900">Gyakorlásra ajánlott</p>
            <p className="mt-1 text-xs text-slate-500">
              A korábbi eredményeid alapján összeállított, célzott kérdések.
            </p>
          </Link>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl">📚</p>
            <p className="mt-2 font-semibold text-slate-900">Tantárgyankénti kvíz</p>
            <p className="mt-1 text-xs text-slate-500">Válassz egy tantárgyat alább.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Tantárgyankénti gyors kvíz</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/practice/subject/${subject.key}`}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: subject.color }}
              />
              <p className="font-medium text-slate-900">{subject.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <Link
          href="/practice/stats"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline"
        >
          📊 Hogy állok? — all-time statisztikák tantárgyanként és témakörönként →
        </Link>
      </section>
    </div>
  );
}
