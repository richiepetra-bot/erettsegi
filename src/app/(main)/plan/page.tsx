export const dynamic = "force-dynamic";

import Link from "next/link";
import { getStudyPlan } from "@/lib/db/study-plan";
import { getCurrentUser } from "@/lib/db/users";
import StudyPlanClient from "./StudyPlanClient";

export default async function StudyPlanPage() {
  const user = await getCurrentUser();
  const plan = await getStudyPlan(user.id);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Tanulási terv</h2>
        <p className="text-sm text-slate-500">
          Automatikusan összeállítva a vizsgadátumok, a még nem elsajátított tételek és a gyenge
          területek alapján — heti bontásban. Pipáld ki, amit átnéztél.
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
        <StudyPlanClient subjectPlans={plan.subjectPlans} />
      )}
    </div>
  );
}
