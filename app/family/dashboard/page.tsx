import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCurrentProfile } from "@/lib/auth";
import TrustBadge from "@/components/TrustBadge";

export const metadata = { title: "Dashboard | Elite Childcare Recruitment" };

const STATUS_LABEL: Record<string, string> = {
  submitted: "Submitted — awaiting review",
  matching: "Being matched",
  introduced: "Introductions made",
  placed: "Placed",
  closed: "Closed",
};

export default async function FamilyDashboardPage() {
  const supabase = await createClient();
  const profile = await getCurrentProfile();
  if (!profile) redirect("/");

  const { data: briefs } = await supabase
    .from("family_briefs")
    .select("*")
    .eq("profile_id", profile!.id)
    .order("created_at", { ascending: false });

  const briefIds = (briefs ?? []).map((b) => b.id);

  const { data: introductions } = briefIds.length
    ? await supabase
        .from("introductions")
        .select("*, nanny_applications(bio, experience_years, photo_url, dbs_status)")
        .in("family_brief_id", briefIds)
    : { data: [] };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-3xl text-navy">Welcome, {profile?.full_name?.split(" ")[0] ?? "there"}</h1>
        <Link href="/family/brief" className="text-sm font-semibold text-navy underline">
          + Submit another brief
        </Link>
      </div>

      {(!briefs || briefs.length === 0) && (
        <div className="bg-white border border-border rounded-lg p-10 text-center">
          <p className="text-ink/60 mb-6">You haven&apos;t submitted a brief yet.</p>
          <Link href="/family/brief" className="px-6 py-3 rounded bg-navy text-white font-semibold">
            Submit Your Brief
          </Link>
        </div>
      )}

      {briefs?.map((brief) => {
        const briefIntroductions = (introductions ?? []).filter((i) => i.family_brief_id === brief.id);
        return (
          <div key={brief.id} className="bg-white border border-border rounded-lg p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl text-navy">{brief.location}</h2>
              <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                {STATUS_LABEL[brief.status] ?? brief.status}
              </span>
            </div>
            <p className="text-sm text-ink/60 mb-6">{brief.hours_needed}</p>

            {briefIntroductions.length === 0 ? (
              <p className="text-sm text-ink/50 italic">No introductions yet — our team is sourcing candidates.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {briefIntroductions.map((intro) => (
                  <div key={intro.id} className="flex items-center justify-between gap-4 p-4 bg-cream rounded">
                    <div>
                      <p className="text-sm font-semibold text-navy mb-1">
                        {intro.nanny_applications?.experience_years ?? "—"} years&apos; experience
                      </p>
                      <p className="text-xs text-ink/60 line-clamp-1 mb-2">{intro.nanny_applications?.bio}</p>
                      {intro.nanny_applications?.dbs_status === "verified" && (
                        <TrustBadge icon="shield" label="Enhanced DBS Checked" />
                      )}
                    </div>
                    <Link
                      href={`/family/messages/${intro.id}`}
                      className="shrink-0 px-4 py-2 rounded bg-navy text-white text-sm font-semibold"
                    >
                      Message
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
