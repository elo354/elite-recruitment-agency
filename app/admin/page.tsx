import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Admin Overview | Elite Childcare Recruitment" };

export default async function AdminOverviewPage() {
  const supabase = await createClient();

  const [{ count: pendingApplications }, { count: openBriefs }, { count: activeIntroductions }] = await Promise.all([
    supabase.from("nanny_applications").select("*", { count: "exact", head: true }).eq("status", "submitted"),
    supabase.from("family_briefs").select("*", { count: "exact", head: true }).in("status", ["submitted", "matching"]),
    supabase.from("introductions").select("*", { count: "exact", head: true }).eq("status", "proposed"),
  ]);

  const cards = [
    { label: "Applications awaiting review", value: pendingApplications ?? 0, href: "/admin/applications" },
    { label: "Open family briefs", value: openBriefs ?? 0, href: "/admin/briefs" },
    { label: "Active introductions", value: activeIntroductions ?? 0, href: "/admin/introductions" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-serif text-3xl text-navy mb-8">Overview</h1>
      <div className="grid sm:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white border border-border rounded-lg p-6 hover:border-gold hover:shadow-md transition-all"
          >
            <div className="font-serif text-4xl text-navy mb-2">{card.value}</div>
            <p className="text-sm text-ink/60">{card.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
