import { getCurrentUser } from "@/lib/db/users";

const ROLE_LABELS: Record<string, string> = {
  parent: "Szülői nézet",
  tanar: "Tanári nézet",
};

export default async function FelugyeletLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-slate-900">🎓 Érettségi Felkészítő</span>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
              {ROLE_LABELS[user.role] ?? "Felügyeleti nézet"} · csak olvasható
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-500">{user.display_name}</span>
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
