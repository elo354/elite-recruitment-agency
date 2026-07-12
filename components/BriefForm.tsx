"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { useFormspreeSubmit } from "@/lib/useFormspreeSubmit";

export default function BriefForm() {
  const { handleSubmit, submitting, error } = useFormspreeSubmit(
    "https://formspree.io/f/xwvdganr",
    "brief"
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="_subject" value="New Family Brief Submission" />

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
        Full name
        <input
          name="name"
          required
          className="px-4 py-3 border border-border rounded text-sm font-normal"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
        Email
        <input
          name="email"
          type="email"
          required
          className="px-4 py-3 border border-border rounded text-sm font-normal"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
        Phone
        <input
          name="phone"
          type="tel"
          required
          className="px-4 py-3 border border-border rounded text-sm font-normal"
        />
      </label>

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
        <div className="relative">
          <Calendar
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold"
            aria-hidden="true"
          />
          <input
            name="start_date"
            type="date"
            className="w-full pl-11 pr-4 py-3 border border-border rounded text-sm font-normal"
          />
        </div>
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
        Budget (per week)
        <input
          name="budget"
          placeholder="Let us know your weekly budget"
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

      <label className="flex items-start gap-3 text-sm text-ink/80">
        <input type="checkbox" name="consent" required className="mt-1 shrink-0" />
        <span>
          I consent to Elite Childcare Recruitment LTD storing and using my details for
          recruitment, placement and contact purposes in line with the{" "}
          <Link href="/privacy" className="text-navy underline hover:text-gold">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 px-6 py-3 rounded bg-navy text-white font-semibold hover:bg-navy-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/25 transition-all disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {submitting ? "Submitting…" : "Submit Brief"}
      </button>
    </form>
  );
}
