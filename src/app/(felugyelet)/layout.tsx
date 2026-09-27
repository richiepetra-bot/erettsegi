import { getCurrentUser } from "@/lib/db/users";
import SidebarNav, { NavItem } from "@/components/SidebarNav";

const ROLE_LABELS: Record<string, string> = {
  parent: "Szülői nézet · csak olvasható",
  tanar: "Tanári nézet · csak olvasható",
};

const NAV_ITEMS: NavItem[] = [{ href: "/felugyelet", label: "Diákjaim", icon: "👀" }];

export default async function FelugyeletLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-slate-50">
      <SidebarNav
        navItems={NAV_ITEMS}
        userName={user.display_name}
        roleBadge={ROLE_LABELS[user.role] ?? "Felügyeleti nézet"}
      />
      <main className="md:pl-64">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 md:px-8 md:py-10">{children}</div>
      </main>
    </div>
  );
}
