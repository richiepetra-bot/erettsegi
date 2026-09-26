type LoginPageProps = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const next = params.next ?? "/";
  const hasError = params.error === "1";

  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-xl font-semibold text-slate-900">Érettségi Felkészítő</h1>
        <p className="mt-1 text-sm text-slate-500">Add meg a PIN-kódot a belépéshez.</p>

        <form action="/api/auth/login" method="POST" className="mt-6 space-y-4">
          <input type="hidden" name="next" value={next} />
          <input
            type="password"
            name="pin"
            inputMode="numeric"
            autoFocus
            placeholder="PIN kód"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-lg tracking-widest outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          {hasError && (
            <p className="text-sm text-red-600">Hibás PIN kód, próbáld újra.</p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-700"
          >
            Belépés
          </button>
        </form>
      </div>
    </main>
  );
}
