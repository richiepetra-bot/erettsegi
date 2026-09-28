export const dynamic = "force-dynamic";

import { getElectiveSubjects } from "@/lib/db/subjects";
import { getCurrentUser } from "@/lib/db/users";
import ChooseElectiveClient from "./ChooseElectiveClient";

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

      <ChooseElectiveClient electives={electives} currentElectiveSubjectId={user.elective_subject_id} />
    </div>
  );
}
