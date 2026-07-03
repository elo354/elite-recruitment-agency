import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Family Briefs | Admin" };

export default async function AdminBriefsPage() {
  const supabase = await createClient();

  const { data: briefs } = await supabase
    .from("family_briefs")
    .select("*, profiles(full_name, email, phone)")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      <h1 className="font-serif text-3xl text-navy mb-2">Family Briefs</h1>

      {(!briefs || briefs.length === 0) && <p className="text-sm text-ink/50">No briefs submitted yet.</p>}

      {briefs?.map((brief) => (
        <div key={brief.id} className="bg-white border border-border rounded-lg p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h2 className="font-serif text-xl text-navy">{brief.profiles?.full_name}</h2>
              <p className="text-xs text-ink/50">
                {brief.profiles?.email} · {brief.profiles?.phone}
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-gold shrink-0">{brief.status}</span>
          </div>
          <p className="text-sm text-ink/70 mb-1">
            <strong>{brief.location}</strong> · {brief.hours_needed}
          </p>
          <p className="text-xs text-ink/50 mb-2">
            Budget: {brief.budget ?? "—"} · Start: {brief.start_date ?? "flexible"}
          </p>
          {brief.requirements && <p className="text-sm text-ink/60">{brief.requirements}</p>}
        </div>
      ))}
    </div>
  );
}
