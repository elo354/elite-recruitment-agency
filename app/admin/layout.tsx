import Link from "next/link";
import { redirect } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import { getCurrentProfile } from "@/lib/auth";

const TABS = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/applications", label: "Nanny Applications" },
  { href: "/admin/briefs", label: "Family Briefs" },
  { href: "/admin/introductions", label: "Introductions" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const profile = await getCurrentProfile();

  if (!profile) redirect("/login");
  if (profile.role !== "admin") redirect(profile.role === "nanny" ? "/nanny/dashboard" : "/family/dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <DashboardHeader label="Admin" />
      <nav className="flex gap-1 px-[7%] bg-white border-b border-border overflow-x-auto">
        {TABS.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="px-4 py-4 text-sm font-medium text-ink/60 hover:text-navy whitespace-nowrap"
          >
            {tab.label}
          </Link>
        ))}
      </nav>
      <main className="flex-1 px-[7%] py-12">{children}</main>
    </div>
  );
}
