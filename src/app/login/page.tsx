import Link from "next/link";

type LoginPageProps = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const next = params.next ?? "/";
  const hasError = params.error === "1";

  return (
    <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-600 to-purple-700 p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎓</span>
          <span className="text-xl font-extrabold text-slate-900">Érettségi Felkészítő</span>
        </div>
        <p className="mt-1 text-sm text-slate-500">Jelentkezz be email címeddel és jelszavaddal.</p>

        <form action="/api/auth/login" method="POST" className="mt-6 space-y-4">
          <input type="hidden" name="next" value={next} />
          <input
            type="email"
            name="email"
            autoFocus
            placeholder="Email cím"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          <input
            type="password"
            name="password"
            placeholder="Jelszó"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          {hasError && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">Hibás email cím vagy jelszó.</p>
          )}
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.98]"
          >
            Belépés
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-500">
          Még nincs fiókod?{" "}
          <Link href="/register" className="font-semibold text-indigo-600 hover:underline">
            Regisztrálj diákként
          </Link>
        </p>
        <p className="mt-1 text-center text-xs text-slate-400">
          Szülőként vagy tanárként csak diákod meghívó linkjén keresztül tudsz regisztrálni.
        </p>
      </div>
    </main>
  );
}
