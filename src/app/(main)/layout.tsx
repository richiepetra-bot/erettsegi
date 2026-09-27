export const dynamic = "force-dynamic";

import Link from "next/link";
import { getSubjects } from "@/lib/db/subjects";
import { getUserProgress } from "@/lib/db/quiz";
import { getCurrentUser } from "@/lib/db/users";
import { levelForXp } from "@/lib/gamification";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  const [subjects, userProgress] = await Promise.all([getSubjects(), getUserProgress(user.id)]);
  const level = levelForXp(userProgress.total_xp);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="text-lg font-semibold text-slate-900">
            🎓 Érettségi Felkészítő
          </Link>

          <nav className="flex flex-wrap items-center gap-1 text-sm">
            <Link
              href="/"
              className="rounded-md px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
            >
              Áttekintés
            </Link>
            <Link
              href="/exams"
              className="rounded-md px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
            >
              Vizsgák
            </Link>
            <Link
              href="/practice"
              className="rounded-md px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
            >
              Gyakorlás
            </Link>
            <Link
              href="/plan"
              className="rounded-md px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
            >
              Tanulási terv
            </Link>
            <Link
              href="/meghivok"
              className="rounded-md px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
            >
              Meghívók
            </Link>
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                href={`/subjects/${subject.key}`}
                className="rounded-md px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
              >
                {subject.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-slate-500 sm:inline">{user.display_name}</span>
            <span className="flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 font-medium text-orange-600">
              🔥 {userProgress.current_streak} napos sorozat
            </span>
            <span className="flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-600">
              ⭐ {userProgress.total_xp} XP · {level}. szint
            </span>
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="rounded-md px-2 py-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                Kilépés
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
    </div>
  );
}
