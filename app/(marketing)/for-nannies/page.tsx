import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Globe, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "For Nannies | Elite Recruitment Agency",
  description: "Apply once and get presented to UK families who genuinely value what you bring.",
};

const OPTIONS = [
  { icon: FileText, title: "Simple Application", body: "Tell us about your experience, your values and the type of family you'd thrive with." },
  { icon: Globe, title: "Exclusive Opportunities", body: "We connect professional nannies with families seeking trusted, long-term childcare support." },
  { icon: Star, title: "Professional Presentation", body: "We present you clearly and professionally to suitable families — highlighting your strengths." },
];

const REQUIREMENTS = [
  "Evidence of relevant childcare or household experience",
  "Two contactable professional references",
  "Proof of right to work in the UK",
  "Enhanced DBS check (we'll guide you through this)",
  "A valid form of photo ID for identity verification",
];

export default function ForNanniesPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="label justify-center flex mb-4">For Nannies</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Your next great placement begins here.</h1>
        <p className="text-ink/70 leading-relaxed">
          We welcome professional, warm and experienced nannies who are ready to make a genuine
          difference in a family&apos;s life.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        {OPTIONS.map((opt) => (
          <div key={opt.title} className="p-8 bg-white border border-border rounded-lg hover:border-gold hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 transition-all">
            <opt.icon className="text-gold mb-4" size={28} aria-hidden="true" />
            <h3 className="font-serif text-xl text-navy mb-2">{opt.title}</h3>
            <p className="text-sm text-ink/60 leading-relaxed">{opt.body}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto mb-20">
        <h2 className="font-serif text-2xl text-navy mb-6 text-center">What you&apos;ll need to apply</h2>
        <ul className="flex flex-col gap-3">
          {REQUIREMENTS.map((req) => (
            <li key={req} className="flex items-start gap-3 text-sm text-ink/70">
              <span className="text-gold font-bold mt-0.5">✓</span> {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative max-w-2xl mx-auto text-center bg-cream rounded-lg p-12 overflow-hidden shadow-lg shadow-navy/5">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
        <div className="text-4xl mb-4">📋</div>
        <h2 className="font-serif text-2xl text-navy mb-3">Ready to apply?</h2>
        <p className="text-sm text-ink/60 mb-8">
          Fill out your profile and tell us about yourself — our team will review your
          application within a few days.
        </p>
        <Link
          href="/nanny/apply"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-navy text-white font-semibold hover:bg-navy-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/25 transition-all"
        >
          Apply Now <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
