import { submitApplication } from "@/app/nanny/actions";

export const metadata = { title: "Apply | Elite Recruitment Agency" };

export default function ApplyPage() {
  return (
    <div className="max-w-xl mx-auto bg-white border border-border rounded-lg p-8 sm:p-10">
      <h1 className="font-serif text-3xl text-navy mb-2">Your application</h1>
      <p className="text-sm text-ink/60 mb-8">
        Complete your profile and upload your documents. Our team personally reviews every
        application — DBS certificates and reference contact details are never shared with
        families, only used for our internal vetting.
      </p>

      <form action={submitApplication} encType="multipart/form-data" className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          Years of childcare experience
          <input
            name="experience_years"
            type="number"
            min={0}
            required
            className="px-4 py-3 border border-border rounded text-sm font-normal"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          Certifications (paediatric first aid, Norland, etc.)
          <input name="certifications" className="px-4 py-3 border border-border rounded text-sm font-normal" />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          Availability
          <input
            name="availability"
            required
            placeholder="e.g. Full-time, Mon–Fri"
            className="px-4 py-3 border border-border rounded text-sm font-normal"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          Rate expectation
          <input
            name="rate_expectation"
            placeholder="e.g. £18–22/hr gross"
            className="px-4 py-3 border border-border rounded text-sm font-normal"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          About you
          <textarea
            name="bio"
            required
            rows={4}
            placeholder="Your experience, your values, the type of family you'd thrive with…"
            className="px-4 py-3 border border-border rounded text-sm font-normal resize-none"
          />
        </label>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
            Reference 1 — name
            <input name="reference_one_name" required className="px-4 py-3 border border-border rounded text-sm font-normal" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
            Reference 1 — contact
            <input name="reference_one_contact" required className="px-4 py-3 border border-border rounded text-sm font-normal" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
            Reference 2 — name
            <input name="reference_two_name" required className="px-4 py-3 border border-border rounded text-sm font-normal" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
            Reference 2 — contact
            <input name="reference_two_contact" required className="px-4 py-3 border border-border rounded text-sm font-normal" />
          </label>
        </div>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          Profile photo
          <input name="photo" type="file" accept="image/*" className="text-sm font-normal" />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
          DBS certificate (or upload once received)
          <input name="dbs_document" type="file" accept="image/*,.pdf" className="text-sm font-normal" />
        </label>

        <button
          type="submit"
          className="mt-2 px-6 py-3 rounded bg-navy text-white font-semibold hover:bg-navy-dark transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
