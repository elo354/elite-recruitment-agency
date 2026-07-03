import { createClient } from "@/lib/supabase/server";
import { setApplicationStatus, setDbsStatus } from "@/app/admin/actions";

export const metadata = { title: "Nanny Applications | Admin" };

export default async function AdminApplicationsPage() {
  const supabase = await createClient();

  const { data: applications } = await supabase
    .from("nanny_applications")
    .select("*, profiles(full_name, email, phone)")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      <h1 className="font-serif text-3xl text-navy mb-2">Nanny Applications</h1>

      {(!applications || applications.length === 0) && (
        <p className="text-sm text-ink/50">No applications submitted yet.</p>
      )}

      {applications?.map((app) => (
        <div key={app.id} className="bg-white border border-border rounded-lg p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h2 className="font-serif text-xl text-navy">{app.profiles?.full_name}</h2>
              <p className="text-xs text-ink/50">
                {app.profiles?.email} · {app.profiles?.phone}
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-gold shrink-0">{app.status}</span>
          </div>

          <p className="text-sm text-ink/70 mb-4">{app.bio}</p>
          <p className="text-xs text-ink/50 mb-4">
            {app.experience_years} years experience · Availability: {app.availability} · Rate: {app.rate_expectation}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <form action={setApplicationStatus.bind(null, app.id, "approved")}>
              <button className="px-4 py-2 rounded bg-navy text-white text-xs font-semibold">Approve</button>
            </form>
            <form action={setApplicationStatus.bind(null, app.id, "under_review")}>
              <button className="px-4 py-2 rounded border border-border text-xs font-semibold">Mark Under Review</button>
            </form>
            <form action={setApplicationStatus.bind(null, app.id, "rejected")}>
              <button className="px-4 py-2 rounded border border-red-300 text-red-600 text-xs font-semibold">Reject</button>
            </form>

            <span className="w-px h-5 bg-border mx-1" />

            <form action={setDbsStatus.bind(null, app.id, "verified")}>
              <button className="px-4 py-2 rounded bg-gold-soft text-navy-dark text-xs font-semibold">
                Mark DBS Verified
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
