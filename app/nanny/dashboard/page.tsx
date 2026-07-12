import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCurrentProfile } from "@/lib/auth";

export const metadata = { title: "Dashboard | Elite Childcare Recruitment" };

const STATUS_LABEL: Record<string, string> = {
  submitted: "Submitted — awaiting review",
  under_review: "Under review",
  approved: "Approved — in our active network",
  rejected: "Not approved at this time",
};

export default async function NannyDashboardPage() {
  const supabase = await createClient();
  const profile = await getCurrentProfile();
  if (!profile) redirect("/");

  const { data: application } = await supabase
    .from("nanny_applications")
    .select("*")
    .eq("profile_id", profile!.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { data: introductions } = application
    ? await supabase
        .from("introductions")
        .select("*, family_briefs(location, hours_needed)")
        .eq("nanny_application_id", application.id)
    : { data: [] };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      <h1 className="font-serif text-3xl text-navy">Welcome, {profile?.full_name?.split(" ")[0] ?? "there"}</h1>

      {!application ? (
        <div className="bg-white border border-border rounded-lg p-10 text-center">
          <p className="text-ink/60 mb-6">You haven&apos;t submitted an application yet.</p>
          <Link href="/nanny/apply" className="px-6 py-3 rounded bg-navy text-white font-semibold">
            Apply Now
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white border border-border rounded-lg p-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-serif text-xl text-navy">Your application</h2>
              <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                {STATUS_LABEL[application.status] ?? application.status}
              </span>
            </div>
            <p className="text-sm text-ink/60">
              DBS status:{" "}
              {application.dbs_status === "verified"
                ? "Verified ✓"
                : application.dbs_status === "submitted"
                ? "Submitted — pending verification"
                : "Not yet submitted"}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-navy mb-4">Introductions</h2>
            {(!introductions || introductions.length === 0) ? (
              <p className="text-sm text-ink/50 italic">
                No introductions yet — once approved, we&apos;ll match you with suitable families.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {introductions.map((intro) => (
                  <div key={intro.id} className="flex items-center justify-between gap-4 p-5 bg-white border border-border rounded-lg">
                    <div>
                      <p className="text-sm font-semibold text-navy mb-1">{intro.family_briefs?.location}</p>
                      <p className="text-xs text-ink/60">{intro.family_briefs?.hours_needed}</p>
                    </div>
                    <Link
                      href={`/nanny/messages/${intro.id}`}
                      className="shrink-0 px-4 py-2 rounded bg-navy text-white text-sm font-semibold"
                    >
                      Message
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
