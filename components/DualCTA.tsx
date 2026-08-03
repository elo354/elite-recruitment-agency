import Link from "next/link";
import { Users, Briefcase, ArrowRight } from "lucide-react";

// The single most important decision point on the whole site: every
// visitor is either looking for a nanny or looking to become one.
// Competitor research (Bubble, Care.com) consistently puts this choice
// first, before any other content, so nobody wades through irrelevant
// copy for the other side.
export default function DualCTA() {
  return (
    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <Link
        href="/for-families"
        className="group relative flex flex-col items-start gap-4 p-8 bg-white border border-border rounded-lg overflow-hidden hover:border-gold hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 transition-all"
      >
        <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
        <span className="p-3 rounded-full bg-navy/5 text-navy">
          <Users size={26} aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-serif text-2xl text-navy mb-1">I need a nanny</h3>
          <p className="text-sm text-ink/60">
            Tell us what your family needs and we&apos;ll introduce you to hand-vetted candidates.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:gap-2.5 transition-all">
          For Families <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>

      <Link
        href="/for-nannies"
        className="group relative flex flex-col items-start gap-4 p-8 bg-white border border-border rounded-lg overflow-hidden hover:border-gold hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 transition-all"
      >
        <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
        <span className="p-3 rounded-full bg-gold-soft text-navy-dark">
          <Briefcase size={26} aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-serif text-2xl text-navy mb-1">I&apos;m a nanny</h3>
          <p className="text-sm text-ink/60">
            Apply once, get presented to families who genuinely value what you bring.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:gap-2.5 transition-all">
          For Nannies <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>
    </div>
  );
}
