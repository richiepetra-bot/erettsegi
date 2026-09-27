export const dynamic = "force-dynamic";

import { getSubjects } from "@/lib/db/subjects";
import { getUserProgress } from "@/lib/db/quiz";
import { getCurrentUser } from "@/lib/db/users";
import { levelForXp } from "@/lib/gamification";
import SidebarNav, { NavItem } from "@/components/SidebarNav";

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Áttekintés", icon: "🏠" },
  { href: "/exams", label: "Vizsgák", icon: "📅" },
  { href: "/practice", label: "Gyakorlás", icon: "⚡" },
  { href: "/plan", label: "Tanulási terv", icon: "🗺️" },
  { href: "/meghivok", label: "Meghívók", icon: "✉️" },
];

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  const [subjects, userProgress] = await Promise.all([getSubjects(), getUserProgress(user.id)]);
  const level = levelForXp(userProgress.total_xp);

  return (
    <div className="min-h-screen bg-slate-50">
      <SidebarNav
        navItems={NAV_ITEMS}
        subjects={subjects.map((s) => ({ key: s.key, name: s.name, color: s.color }))}
        userName={user.display_name}
        streak={userProgress.current_streak}
        xp={userProgress.total_xp}
        level={level}
      />
      <main className="md:pl-64">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 md:px-8 md:py-10">{children}</div>
      </main>
    </div>
  );
}
