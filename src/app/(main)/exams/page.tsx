export const dynamic = "force-dynamic";

import { getSubjects } from "@/lib/db/subjects";
import { getExamsWithSubjects } from "@/lib/db/exams";
import { createExamAction, updateExamAction, deleteExamAction } from "./actions";

const EXAM_TYPES: { value: string; label: string }[] = [
  { value: "erettsegi", label: "Érettségi" },
  { value: "elorehozott_erettsegi", label: "Előrehozott érettségi" },
  { value: "sat", label: "SAT" },
  { value: "act", label: "ACT" },
];

const LEVELS = [
  { value: "", label: "—" },
  { value: "kozep", label: "Közép szint" },
  { value: "emelt", label: "Emelt szint" },
];

const inputClass =
  "w-full rounded-md border border-slate-300 px-2.5 py-1.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

export default async function ExamsPage() {
  const [subjects, exams] = await Promise.all([getSubjects(), getExamsWithSubjects()]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Vizsgák kezelése</h1>
        <p className="mt-1 text-sm text-slate-500">
          Itt vehetsz fel új vizsgát (érettségi, előrehozott érettségi, SAT, ACT), és
          bármikor módosíthatod a dátumokat, ahogy pontosodnak a hivatalos időpontok.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-medium text-slate-800">Felvett vizsgák</h2>
        {exams.length === 0 && (
          <p className="text-sm text-slate-500">Még nincs felvéve vizsga.</p>
        )}
        <div className="space-y-3">
          {exams.map((exam) => (
            <form
              key={exam.id}
              action={updateExamAction}
              className="grid grid-cols-2 gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-6"
            >
              <input type="hidden" name="id" value={exam.id} />
              <div className="col-span-2 sm:col-span-1">
                <label className="text-xs font-medium text-slate-500">Tantárgy</label>
                <p className="mt-1.5 text-sm font-semibold text-slate-900">{exam.subject.name}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500">Típus</label>
                <select name="exam_type" defaultValue={exam.exam_type} className={inputClass}>
                  {EXAM_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500">Szint</label>
                <select name="level" defaultValue={exam.level ?? ""} className={inputClass}>
                  {LEVELS.map((l) => (
                    <option key={l.value} value={l.value}>
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500">Írásbeli dátum</label>
                <input
                  type="date"
                  name="written_date"
                  defaultValue={exam.written_date ?? ""}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500">Szóbeli dátum</label>
                <input
                  type="date"
                  name="oral_date"
                  defaultValue={exam.oral_date ?? ""}
                  className={inputClass}
                />
              </div>
              <div className="col-span-2 flex items-end gap-2 sm:col-span-1">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Mentés
                </button>
                <button
                  type="submit"
                  formAction={deleteExamAction}
                  className="rounded-md px-3 py-1.5 text-sm font-medium text-red-500 hover:bg-red-50"
                >
                  Törlés
                </button>
              </div>
            </form>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-medium text-slate-800">Új vizsga hozzáadása</h2>
        <form
          action={createExamAction}
          className="grid grid-cols-2 gap-3 rounded-xl border border-dashed border-slate-300 bg-white p-4 sm:grid-cols-6"
        >
          <div>
            <label className="text-xs font-medium text-slate-500">Tantárgy</label>
            <select name="subject_id" required className={inputClass}>
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-500">Típus</label>
            <select name="exam_type" className={inputClass}>
              {EXAM_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-500">Szint</label>
            <select name="level" className={inputClass}>
              {LEVELS.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-500">Írásbeli dátum</label>
            <input type="date" name="written_date" className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-500">Szóbeli dátum</label>
            <input type="date" name="oral_date" className={inputClass} />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Hozzáadás
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
