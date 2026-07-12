"use client";

import Link from "next/link";
import { useFormspreeSubmit } from "@/lib/useFormspreeSubmit";

export default function ApplyForm() {
  const { handleSubmit, submitting, error } = useFormspreeSubmit(
    "https://formspree.io/f/xwvdganr",
    "application"
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="_subject" value="New Nanny Application" />

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
        {submitting ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
