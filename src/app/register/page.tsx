import Link from "next/link";

type RegisterPageProps = {
  searchParams: Promise<{ error?: string }>;
};

const ERROR_MESSAGES: Record<string, string> = {
  exists: "Ezzel az email címmel már regisztráltak.",
  invalid: "Töltsd ki mind a három mezőt (érvényes email, legalább 6 karakteres jelszó, név).",
};

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const params = await searchParams;
  const errorMessage = params.error ? ERROR_MESSAGES[params.error] ?? "Hiba történt." : null;

  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-xl font-semibold text-slate-900">Diák regisztráció</h1>
        <p className="mt-1 text-sm text-slate-500">
          Hozz létre egy fiókot a tanuláshoz. Szülőt/tanárt a regisztráció után tudsz meghívni.
        </p>

        <form action="/api/auth/register" method="POST" className="mt-6 space-y-4">
          <input
            type="text"
            name="displayName"
            autoFocus
            placeholder="Neved"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Email cím"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          <input
            type="password"
            name="password"
            placeholder="Jelszó (min. 6 karakter)"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-700"
          >
            Regisztráció
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-500">
          Már van fiókod?{" "}
          <Link href="/login" className="font-medium text-indigo-600 hover:underline">
            Belépés
          </Link>
        </p>
      </div>
    </main>
  );
}
