export const dynamic = "force-dynamic";

import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/db/users";
import { listLinkedStudents } from "@/lib/db/supervision";

export default async function FelugyeletListPage() {
  const user = await getCurrentUser();
  const students = await listLinkedStudents(user.id);

  if (students.length === 1) {
    redirect(`/felugyelet/${students[0].studentId}`);
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Hozzád kapcsolt diákok</h2>
        <p className="text-sm text-slate-500">Válassz egy diákot a részletes haladás megtekintéséhez.</p>
      </div>

      {students.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
          Még nincs hozzád kapcsolt diák. Kérj meghívó linket a diáktól, akinek a haladását szeretnéd
          követni.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <Link
              key={student.studentId}
              href={`/felugyelet/${student.studentId}`}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <p className="font-semibold text-slate-900">{student.displayName}</p>
              <p className="mt-1 text-xs text-slate-500">Részletek megtekintése →</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
