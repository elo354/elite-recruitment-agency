import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CalendarClock, Home as HomeIcon, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "For Families | Elite Childcare Recruitment",
  description: "Find a fully vetted, hand-matched nanny for your family, anywhere in the UK.",
};

const OPTIONS = [
  { icon: Clock, title: "Full-Time Nannies", body: "Consistent weekday childcare with a nanny who becomes a trusted part of your family's routine and daily life." },
  { icon: CalendarClock, title: "Part-Time & Flexible", body: "School runs, evenings, weekends, after-school care — flexible support shaped around your schedule." },
  { icon: HomeIcon, title: "Live-In & Live-Out", body: "We match both live-in and live-out requirements to suit your home, your preference and your family dynamic." },
];

export default function ForFamiliesPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="label justify-center flex mb-4">For Families</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Every family is unique. We find the nanny to match.</h1>
        <p className="text-ink/70 leading-relaxed">
          Whether you need full-time routine support, occasional flexibility, or a long-term
          live-in companion for your children, we take the time to understand your world before
          we begin.
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

      <div className="relative max-w-2xl mx-auto text-center bg-cream rounded-lg p-12 overflow-hidden shadow-lg shadow-navy/5">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
        <h2 className="font-serif text-2xl text-navy mb-3">Ready to start your search?</h2>
        <p className="text-sm text-ink/60 mb-8">
          Submit your brief — location, hours, budget and what matters most — and we&apos;ll
          begin sourcing candidates.
        </p>
        <Link
          href="/family/brief"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-navy text-white font-semibold hover:bg-navy-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/25 transition-all"
        >
          Submit Your Brief <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
