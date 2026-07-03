import Link from "next/link";
import DualCTA from "@/components/DualCTA";
import TrustBadge from "@/components/TrustBadge";
import Parallax from "@/components/motion/Parallax";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import SoftBlob from "@/components/graphics/SoftBlob";
import GoldBotanical from "@/components/graphics/GoldBotanical";
import DottedArc from "@/components/graphics/DottedArc";
import ConnectingPath from "@/components/graphics/ConnectingPath";
import { ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  { n: "01", title: "Consultation", body: "We begin with an in-depth conversation to understand your world — values, schedule, and what matters most." },
  { n: "02", title: "Search", body: "Drawing on our vetted network, we discreetly source candidates whose experience and character align with your brief." },
  { n: "03", title: "Selection", body: "A carefully curated shortlist is presented — each candidate personally interviewed and vetted." },
  { n: "04", title: "Placement", body: "We coordinate interviews, references and offer details, guiding both parties through to a confirmed placement." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative bg-cream px-[7%] pt-20 pb-24 text-center overflow-hidden">
        <Parallax speed={0.25} className="absolute -top-24 -left-24 w-[420px] h-[420px] pointer-events-none">
          <SoftBlob color="navy" />
        </Parallax>
        <Parallax speed={0.4} className="absolute -bottom-32 -right-16 w-[380px] h-[380px] pointer-events-none">
          <SoftBlob color="gold" />
        </Parallax>
        <Parallax speed={0.15} className="hidden lg:block absolute top-10 right-[6%] w-[140px] h-[220px] pointer-events-none opacity-70">
          <GoldBotanical />
        </Parallax>

        <div className="relative">
          <RevealOnScroll>
            <div className="label justify-center flex mb-5">UK Nanny Recruitment</div>
            <h1 className="font-serif text-4xl sm:text-6xl text-navy leading-tight max-w-3xl mx-auto mb-6">
              Exceptional childcare, <em className="text-gold not-italic">hand-matched</em> to your family.
            </h1>
            <p className="text-ink/70 max-w-xl mx-auto mb-12 leading-relaxed">
              A premium, fully vetted nanny recruitment service for families across the UK — and a
              trusted path to your next placement if you&apos;re a nanny.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <DualCTA />
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative px-[7%] py-16 border-b border-border overflow-hidden">
        <Parallax speed={0.2} className="absolute inset-x-0 -top-16 flex justify-center pointer-events-none">
          <DottedArc className="w-[800px] h-[400px]" />
        </Parallax>
        <RevealOnScroll className="relative flex flex-wrap justify-center gap-3">
          <TrustBadge icon="shield" label="Enhanced DBS Checked" />
          <TrustBadge icon="badge" label="References Verified" />
          <TrustBadge icon="star" label="Elite-Vetted Network" />
        </RevealOnScroll>
      </section>

      <section className="px-[7%] py-24">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <div className="label justify-center flex mb-4">How It Works</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">A refined, effortless process.</h2>
        </RevealOnScroll>

        <div className="relative max-w-5xl mx-auto">
          <ConnectingPath className="hidden lg:block absolute top-[18px] left-0 w-full h-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((step, i) => (
              <RevealOnScroll key={step.n} delay={i * 0.12}>
                <div className="bg-cream lg:bg-transparent">
                  <div className="font-serif text-4xl text-gold mb-3">{step.n}</div>
                  <h3 className="font-serif text-xl text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{step.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:gap-3 transition-all"
          >
            More on our process <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="relative bg-navy px-[7%] py-20 text-center text-white overflow-hidden">
        <Parallax speed={0.3} className="absolute -top-20 -right-20 w-[360px] h-[360px] pointer-events-none">
          <SoftBlob color="gold" />
        </Parallax>
        <RevealOnScroll className="relative">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4">Ready to begin?</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-10">
            Whether you&apos;re searching for the ideal nanny or seeking your next placement, we&apos;d
            love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup?role=family" className="px-8 py-3.5 rounded bg-gold text-navy-dark font-semibold hover:brightness-105 transition">
              Find a Nanny
            </Link>
            <Link href="/signup?role=nanny" className="px-8 py-3.5 rounded border border-white/30 text-white font-semibold hover:bg-white/10 transition">
              Apply as a Nanny
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
