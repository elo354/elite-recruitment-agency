import { createClient } from "@/lib/supabase/server";
import { createIntroduction, toggleFeePaid } from "@/app/admin/actions";

export const metadata = { title: "Introductions | Admin" };

export default async function AdminIntroductionsPage() {
  const supabase = await createClient();

  const [{ data: briefs }, { data: applications }, { data: introductions }] = await Promise.all([
    supabase.from("family_briefs").select("*, profiles(full_name)").order("created_at", { ascending: false }),
    supabase
      .from("nanny_applications")
      .select("*, profiles(full_name)")
      .eq("status", "approved")
      .order("created_at", { ascending: false }),
    supabase
      .from("introductions")
      .select("*, family_briefs(location, profiles!family_briefs_profile_id_fkey(full_name)), nanny_applications(profiles(full_name))")
      .order("created_at", { ascending: false }),
  ]);

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-10">
      <div>
        <h1 className="font-serif text-3xl text-navy mb-6">Create an Introduction</h1>
        <form action={createIntroduction} className="bg-white border border-border rounded-lg p-6 flex flex-col sm:flex-row gap-4 items-end">
          <label className="flex-1 flex flex-col gap-1.5 text-sm font-medium text-ink/80 w-full">
            Family brief
            <select name="family_brief_id" required className="px-4 py-3 border border-border rounded text-sm font-normal">
              <option value="">Select a brief…</option>
              {briefs?.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.profiles?.full_name} — {b.location}
                </option>
              ))}
            </select>
          </label>
          <label className="flex-1 flex flex-col gap-1.5 text-sm font-medium text-ink/80 w-full">
            Approved nanny
            <select name="nanny_application_id" required className="px-4 py-3 border border-border rounded text-sm font-normal">
              <option value="">Select a nanny…</option>
              {applications?.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.profiles?.full_name}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="px-6 py-3 rounded bg-navy text-white text-sm font-semibold whitespace-nowrap">
            Introduce
          </button>
        </form>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-navy mb-4">All Introductions</h2>
        <div className="flex flex-col gap-4">
          {(!introductions || introductions.length === 0) && (
            <p className="text-sm text-ink/50">No introductions made yet.</p>
          )}
          {introductions?.map((intro) => (
            <div key={intro.id} className="bg-white border border-border rounded-lg p-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-navy">
                  {intro.family_briefs?.profiles?.full_name} ↔ {intro.nanny_applications?.profiles?.full_name}
                </p>
                <p className="text-xs text-ink/50">{intro.family_briefs?.location} · Status: {intro.status}</p>
              </div>
              <form action={toggleFeePaid.bind(null, intro.id, !intro.fee_paid)}>
                <button
                  className={`px-4 py-2 rounded text-xs font-semibold ${
                    intro.fee_paid ? "bg-cream text-ink/60 border border-border" : "bg-gold text-navy-dark"
                  }`}
                >
                  {intro.fee_paid ? "Fee Paid ✓ (click to undo)" : "Mark Fee Paid"}
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
