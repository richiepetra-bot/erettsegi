"use client";

import { useState, useTransition } from "react";
import { Invite, LinkedSupervisor, SupervisorRole } from "@/lib/types";
import { createInviteAction, revokeInviteAction, removeLinkAction } from "./actions";

const ROLE_LABELS: Record<SupervisorRole, string> = {
  parent: "Szülő",
  tanar: "Osztályfőnök",
};

function inviteUrl(token: string): string {
  if (typeof window === "undefined") return `/invite/${token}`;
  return `${window.location.origin}/invite/${token}`;
}

function InviteRow({ invite, onRevoke }: { invite: Invite; onRevoke: (id: string) => void }) {
  const [copied, setCopied] = useState(false);
  const url = inviteUrl(invite.token);

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-slate-500">{ROLE_LABELS[invite.role]} meghívó</p>
        <p className="truncate text-sm text-slate-700">{url}</p>
      </div>
      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className={`rounded-xl px-4 py-2.5 font-semibold text-white transition hover:shadow-md active:scale-[0.98] ${
            copied ? "bg-emerald-500 hover:bg-emerald-500" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {copied ? "Másolva!" : "Másolás"}
        </button>
        <button
          type="button"
          onClick={() => onRevoke(invite.id)}
          className="rounded-lg px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
        >
          Visszavonás
        </button>
      </div>
    </div>
  );
}

export default function MeghivokClient({
  invites,
  links,
}: {
  invites: Invite[];
  links: LinkedSupervisor[];
}) {
  const [pendingInvites, setPendingInvites] = useState(invites);
  const [linkedSupervisors, setLinkedSupervisors] = useState(links);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleCreate(role: SupervisorRole) {
    setError(null);
    startTransition(async () => {
      try {
        const token = await createInviteAction(role);
        setPendingInvites((prev) => [
          {
            id: token,
            token,
            student_user_id: "",
            role,
            created_at: new Date().toISOString(),
            used_at: null,
            used_by_user_id: null,
          },
          ...prev,
        ]);
      } catch {
        setError("Nem sikerült meghívót létrehozni.");
      }
    });
  }

  function handleRevoke(id: string) {
    startTransition(async () => {
      await revokeInviteAction(id);
      setPendingInvites((prev) => prev.filter((i) => i.id !== id));
    });
  }

  function handleRemoveLink(id: string) {
    startTransition(async () => {
      await removeLinkAction(id);
      setLinkedSupervisors((prev) => prev.filter((l) => l.id !== id));
    });
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-extrabold tracking-tight text-slate-900">Meghívók</h2>
        <p className="text-sm text-slate-500">
          Hívj meg egy szülőt vagy osztályfőnököt, hogy csak olvasható betekintést kapjon a
          haladásodba. A meghívó egy egyedi linket generál, amit te küldesz el nekik (pl.
          WhatsApp-on vagy emailben).
        </p>
      </div>

      <section className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={isPending}
          onClick={() => handleCreate("parent")}
          className="rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.98] disabled:opacity-50"
        >
          Szülő meghívása
        </button>
        <button
          type="button"
          disabled={isPending}
          onClick={() => handleCreate("tanar")}
          className="rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.98] disabled:opacity-50"
        >
          Osztályfőnök meghívása
        </button>
      </section>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {pendingInvites.length > 0 && (
        <section>
          <h3 className="mb-3 text-base font-extrabold tracking-tight text-slate-900">Kiküldött meghívók</h3>
          <div className="space-y-2">
            {pendingInvites.map((invite) => (
              <InviteRow key={invite.id} invite={invite} onRevoke={handleRevoke} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h3 className="mb-3 text-base font-extrabold tracking-tight text-slate-900">Hozzád kapcsolt felügyelők</h3>
        {linkedSupervisors.length === 0 ? (
          <p className="rounded-2xl border-2 border-dashed border-slate-300 p-6 text-sm text-slate-500">
            Még senki nem fogadta el a meghívódat.
          </p>
        ) : (
          <div className="space-y-2">
            {linkedSupervisors.map((link) => (
              <div
                key={link.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{link.supervisor_name}</p>
                  <p className="text-xs text-slate-500">
                    {ROLE_LABELS[link.role]} · {link.supervisor_email}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveLink(link.id)}
                  className="rounded-lg px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                >
                  Lecsatolás
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
