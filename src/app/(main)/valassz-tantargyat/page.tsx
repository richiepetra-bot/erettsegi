export const dynamic = "force-dynamic";

import { getElectiveSubjects } from "@/lib/db/subjects";
import { getCurrentUser } from "@/lib/db/users";
import { chooseElectiveSubjectAction } from "./actions";

export default async function ChooseElectiveSubjectPage() {
  const user = await getCurrentUser();
  const electives = await getElectiveSubjects();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
          Válaszd ki az 5. (választható) érettségi tantárgyadat
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          A 4 kötelező tárgy (Magyar, Matematika, Történelem, Angol) mellett egy 5.
          tantárgyat is választanod kell. A kvízek és a tanulási terv csak ehhez a
          tantárgyhoz fognak kérdéseket adni a választható tárgyak közül — a másik 5-öt
          nem fogod látni. Ha meggondolod magad, később bármikor módosíthatod.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {electives.map((subject) => {
          const isSelected = subject.id === user.elective_subject_id;
          return (
            <form key={subject.id} action={chooseElectiveSubjectAction.bind(null, subject.id)}>
              <button
                type="submit"
                className={`w-full rounded-2xl border-2 p-5 text-left shadow-sm transition hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] ${
                  isSelected
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-slate-200 bg-white hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="h-3.5 w-3.5 rounded-full"
                    style={{ backgroundColor: subject.color }}
                  />
                  {isSelected && (
                    <span className="rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white">
                      ✓ Kiválasztva
                    </span>
                  )}
                </div>
                <p className="mt-2 font-extrabold tracking-tight text-slate-900">{subject.name}</p>
                <p className="mt-1 text-xs font-semibold text-indigo-600">
                  {isSelected ? "Ezt tanulod" : "Ezt választom →"}
                </p>
              </button>
            </form>
          );
        })}
      </div>
    </div>
  );
}
