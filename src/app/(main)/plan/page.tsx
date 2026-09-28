export const dynamic = "force-dynamic";

import Link from "next/link";
import { getStudyPlan } from "@/lib/db/study-plan";
import { getCurrentUser } from "@/lib/db/users";
import { firstNameOf } from "@/lib/gamification";
import StudyPlanClient from "./StudyPlanClient";

export default async function StudyPlanPage() {
  const user = await getCurrentUser();
  const firstName = firstNameOf(user.display_name);
  const plan = await getStudyPlan(user.id);
  const behindSubjects = plan.subjectPlans.filter((sp) => sp.weeks.some((w) => w.isPastDue));

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-extrabold tracking-tight text-slate-900">Tanulási terv</h2>
        <p className="text-sm text-slate-500">
          Automatikusan összeállítva a vizsgadátumok, a még nem elsajátított tételek és a gyenge
          területek alapján — heti bontásban. Pipáld ki, amit átnéztél.
        </p>
      </div>

      {behindSubjects.length > 0 && (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {firstName}, bekéstél a tervhez képest a(z){" "}
          {behindSubjects.map((sp) => sp.subjectName).join(", ")} tárgyban — nézd át az alábbi
          🔴-vel jelölt heteket.
        </p>
      )}

      {plan.subjectsWithoutExam.length > 0 && (
        <p className="rounded-2xl border-2 border-dashed border-slate-300 p-4 text-sm text-slate-500">
          Ezekhez a tantárgyakhoz még nincs vizsgadátum felvéve, ezért nem szerepelnek a tervben:{" "}
          {plan.subjectsWithoutExam.map((s) => s.name).join(", ")}.{" "}
          <Link href="/exams" className="font-medium text-indigo-600 hover:underline">
            Vizsga hozzáadása →
          </Link>
        </p>
      )}

      {plan.subjectPlans.length === 0 ? (
        <p className="rounded-2xl border-2 border-dashed border-slate-300 p-6 text-sm text-slate-500">
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
