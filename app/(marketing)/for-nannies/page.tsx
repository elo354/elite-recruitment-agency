import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Globe, Star, ArrowRight } from "lucide-react";
import Parallax from "@/components/motion/Parallax";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import SoftBlob from "@/components/graphics/SoftBlob";
import GoldBotanical from "@/components/graphics/GoldBotanical";

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
    <div className="relative px-[7%] py-20 overflow-hidden">
      <Parallax speed={0.25} className="absolute -top-16 -left-24 w-[380px] h-[380px] pointer-events-none">
        <SoftBlob color="gold" />
      </Parallax>
      <Parallax speed={0.15} className="hidden lg:block absolute top-24 right-[4%] w-[120px] h-[190px] pointer-events-none opacity-60">
        <GoldBotanical />
      </Parallax>

      <RevealOnScroll className="relative max-w-2xl mx-auto text-center mb-16">
        <div className="label justify-center flex mb-4">For Nannies</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Your next great placement begins here.</h1>
        <p className="text-ink/70 leading-relaxed">
          We welcome professional, warm and experienced nannies who are ready to make a genuine
          difference in a family&apos;s life.
        </p>
      </RevealOnScroll>

      <div className="relative grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        {OPTIONS.map((opt, i) => (
          <RevealOnScroll key={opt.title} delay={i * 0.1}>
            <div className="p-8 bg-white border border-border rounded-lg h-full">
              <opt.icon className="text-gold mb-4" size={28} aria-hidden="true" />
              <h3 className="font-serif text-xl text-navy mb-2">{opt.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{opt.body}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="relative max-w-2xl mx-auto mb-20">
        <h2 className="font-serif text-2xl text-navy mb-6 text-center">What you&apos;ll need to apply</h2>
        <ul className="flex flex-col gap-3">
          {REQUIREMENTS.map((req) => (
            <li key={req} className="flex items-start gap-3 text-sm text-ink/70">
              <span className="text-gold font-bold mt-0.5">✓</span> {req}
            </li>
          ))}
        </ul>
      </RevealOnScroll>

      <RevealOnScroll className="relative max-w-2xl mx-auto text-center bg-cream rounded-lg p-12">
        <h2 className="font-serif text-2xl text-navy mb-3">Ready to apply?</h2>
        <p className="text-sm text-ink/60 mb-8">
          Create a nanny account, complete your profile and upload your documents — our team will
          review your application within a few days.
        </p>
        <Link
          href="/signup?role=nanny"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-navy text-white font-semibold hover:bg-navy-dark transition"
        >
          Apply Now <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </RevealOnScroll>
    </div>
  );
}
