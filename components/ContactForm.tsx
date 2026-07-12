"use client";

import { useFormspreeSubmit } from "@/lib/useFormspreeSubmit";

export default function ContactForm() {
  const { handleSubmit, submitting, error } = useFormspreeSubmit(
    "https://formspree.io/f/xwvdganr",
    "contact"
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="_subject" value="New Contact Form Enquiry" />
      <input
        name="name"
        required
        placeholder="Full Name"
        className="px-4 py-3 border border-border rounded text-sm"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email Address"
        className="px-4 py-3 border border-border rounded text-sm"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Your Message"
        className="px-4 py-3 border border-border rounded text-sm resize-none"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="px-6 py-3 rounded bg-navy text-white font-semibold hover:bg-navy-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/25 transition-all disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
