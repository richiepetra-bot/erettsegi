export const dynamic = "force-dynamic";

import Link from "next/link";
import { getInviteByToken } from "@/lib/db/invites";
import { getSession } from "@/lib/db/users";
import { SupervisorRole } from "@/lib/types";

const ROLE_LABELS: Record<SupervisorRole, string> = {
  parent: "szülőként",
  tanar: "osztályfőnökként",
};

const ERROR_MESSAGES: Record<string, string> = {
  invalid: "Töltsd ki mind a három mezőt (érvényes email, legalább 6 karakteres jelszó, név).",
  exists: "Ezzel az email címmel már regisztráltak — jelentkezz be helyette.",
  mismatch: "A bejelentkezett fiókod szerepköre nem egyezik a meghívóéval.",
};

type PageProps = {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ error?: string }>;
};

export default async function InviteAcceptPage({ params, searchParams }: PageProps) {
  const { token } = await params;
  const sp = await searchParams;
  const [found, session] = await Promise.all([getInviteByToken(token), getSession()]);

  if (!found || found.invite.used_at) {
    return (
      <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-600 to-purple-700 p-6">
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🎓</span>
            <span className="text-xl font-extrabold text-slate-900">Érettségi Felkészítő</span>
          </div>
          <h1 className="mt-3 text-lg font-bold text-slate-900">Érvénytelen meghívó</h1>
          <p className="mt-2 text-sm text-slate-500">
            Ez a meghívó link érvénytelen vagy már felhasználták. Kérj egy újat a diáktól.
          </p>
        </div>
      </main>
    );
  }

  const { invite, studentName } = found;
  const roleLabel = ROLE_LABELS[invite.role];
  const errorMessage = sp.error ? ERROR_MESSAGES[sp.error] ?? "Hiba történt." : null;

  if (session && session.role === invite.role) {
    return (
      <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-600 to-purple-700 p-6">
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <span className="text-xl font-extrabold text-slate-900">Érettségi Felkészítő</span>
          </div>
          <h1 className="mt-3 text-lg font-bold text-slate-900">
            {studentName} meghívott, hogy csatlakozz {roleLabel}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            A bejelentkezett fiókoddal fogsz csatlakozni {studentName} felügyeletéhez.
          </p>
          <form action={`/api/invite/${token}/accept`} method="POST" className="mt-6">
            <input type="hidden" name="mode" value="existing" />
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.98]"
            >
              Csatlakozás
            </button>
          </form>
        </div>
      </main>
    );
  }

  if (session) {
    return (
      <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-600 to-purple-700 p-6">
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🎓</span>
            <span className="text-xl font-extrabold text-slate-900">Érettségi Felkészítő</span>
          </div>
          <h1 className="mt-3 text-lg font-bold text-slate-900">Szerepkör-eltérés</h1>
          <p className="mt-2 text-sm text-slate-500">
            Ez a meghívó {roleLabel} szól, de te jelenleg más fiókkal vagy bejelentkezve. Lépj ki,
            majd nyisd meg újra ezt a linket.
          </p>
          <form action="/api/auth/logout" method="POST" className="mt-4">
            <button
              type="submit"
              className="w-full rounded-xl bg-slate-100 px-4 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-200 active:scale-[0.98]"
            >
              Kilépés
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-600 to-purple-700 p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎓</span>
          <span className="text-xl font-extrabold text-slate-900">Érettségi Felkészítő</span>
        </div>
        <h1 className="mt-3 text-lg font-bold text-slate-900">
          {studentName} meghívott, hogy csatlakozz {roleLabel}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Hozz létre egy fiókot, hogy megtekinthesd {studentName} haladását.
        </p>

        <form action={`/api/invite/${token}/accept`} method="POST" className="mt-6 space-y-4">
          <input type="hidden" name="mode" value="new" />
          <input
            type="text"
            name="displayName"
            autoFocus
            placeholder="Neved"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Email cím"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          <input
            type="password"
            name="password"
            placeholder="Jelszó (min. 6 karakter)"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          {errorMessage && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.98]"
          >
            Fiók létrehozása és csatlakozás
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-500">
          Már van fiókod?{" "}
          <Link
            href={`/login?next=/invite/${token}`}
            className="font-semibold text-indigo-600 hover:underline"
          >
            Jelentkezz be
          </Link>
        </p>
      </div>
    </main>
  );
}
