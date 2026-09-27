"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItem = { href: string; label: string; icon: string };
export type SubjectNavItem = { key: string; name: string; color: string };

type SidebarNavProps = {
  navItems: NavItem[];
  subjects?: SubjectNavItem[];
  subjectsLabel?: string;
  userName: string;
  roleBadge?: string;
  streak?: number;
  xp?: number;
  level?: number;
};

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export default function SidebarNav({
  navItems,
  subjects,
  subjectsLabel = "Tantárgyak",
  userName,
  roleBadge,
  streak,
  xp,
  level,
}: SidebarNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  const linkClass = (active: boolean) =>
    `flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
      active ? "bg-white/20 text-white shadow-sm" : "text-indigo-100 hover:bg-white/10 hover:text-white"
    }`;

  const content = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-5 pb-2 pt-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-white" onClick={() => setOpen(false)}>
          <span className="text-2xl">🎓</span>
          <span>Érettségi</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Menü bezárása"
          className="rounded-lg p-1.5 text-indigo-200 hover:bg-white/10 hover:text-white md:hidden"
        >
          <CloseIcon />
        </button>
      </div>

      {roleBadge && (
        <div className="mx-5 mb-2 mt-1 inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
          {roleBadge}
        </div>
      )}

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={linkClass(isActive(item.href))}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </Link>
        ))}

        {subjects && subjects.length > 0 && (
          <div className="mt-5">
            <p className="px-3 text-xs font-bold uppercase tracking-wider text-indigo-300">
              {subjectsLabel}
            </p>
            <div className="mt-1.5 space-y-1">
              {subjects.map((subject) => {
                const href = `/subjects/${subject.key}`;
                const active = isActive(href);
                return (
                  <Link
                    key={subject.key}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={linkClass(active)}
                  >
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white/30"
                      style={{ backgroundColor: subject.color }}
                    />
                    <span className="truncate">{subject.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <div className="border-t border-white/10 px-4 py-4">
        {(streak !== undefined || xp !== undefined) && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {streak !== undefined && (
              <span className="flex items-center gap-1 rounded-full bg-orange-400/20 px-2.5 py-1 text-xs font-bold text-orange-200">
                🔥 {streak} nap
              </span>
            )}
            {xp !== undefined && (
              <span className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-bold text-white">
                ⭐ {xp} XP · {level}. szint
              </span>
            )}
          </div>
        )}
        <p className="mb-2 truncate text-sm font-medium text-indigo-100">{userName}</p>
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Kilépés
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:hidden">
        <Link href="/" className="flex items-center gap-2 text-base font-extrabold text-slate-900">
          <span className="text-xl">🎓</span> Érettségi
        </Link>
        <div className="flex items-center gap-2">
          {streak !== undefined && (
            <span className="flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-600">
              🔥 {streak}
            </span>
          )}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menü megnyitása"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col bg-gradient-to-b from-indigo-600 via-indigo-600 to-purple-700 md:flex">
        {content}
      </aside>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-slate-900/50" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-72 max-w-[85vw] bg-gradient-to-b from-indigo-600 via-indigo-600 to-purple-700 shadow-2xl">
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
