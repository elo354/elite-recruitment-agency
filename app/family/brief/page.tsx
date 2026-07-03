import { submitBrief } from "@/app/family/actions";

export const metadata = { title: "Submit Your Brief | Elite Recruitment Agency" };

export default function SubmitBriefPage() {
  return (
    <div className="max-w-xl mx-auto bg-white border border-border rounded-lg p-8 sm:p-10">
      <h1 className="font-serif text-3xl text-navy mb-2">Tell us what you need</h1>
      <p className="text-sm text-ink/60 mb-8">
        The more detail you give us, the faster we can find the right match. Our team reviews
        every brief personally before we begin sourcing candidates.
      </p>

      <form action={submitBrief} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          Location
          <input
            name="location"
            required
            placeholder="e.g. Chelsea, London"
            className="px-4 py-3 border border-border rounded text-sm font-normal"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          Hours needed
          <input
            name="hours_needed"
            required
            placeholder="e.g. Full-time, Mon–Fri 8am–6pm"
            className="px-4 py-3 border border-border rounded text-sm font-normal"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          Preferred start date
          <input
            name="start_date"
            type="date"
            className="px-4 py-3 border border-border rounded text-sm font-normal"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          Budget (annual gross)
          <input
            name="budget"
            placeholder="e.g. £35,000–£40,000"
            className="px-4 py-3 border border-border rounded text-sm font-normal"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          Anything else we should know?
          <textarea
            name="requirements"
            rows={4}
            placeholder="Children's ages, live-in/live-out, driving, languages, special requirements..."
            className="px-4 py-3 border border-border rounded text-sm font-normal resize-none"
          />
        </label>

        <button
          type="submit"
          className="mt-2 px-6 py-3 rounded bg-navy text-white font-semibold hover:bg-navy-dark transition"
        >
          Submit Brief
        </button>
      </form>
    </div>
  );
}
