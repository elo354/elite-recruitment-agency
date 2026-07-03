import Link from "next/link";
import DualCTA from "@/components/DualCTA";
import TrustBadge from "@/components/TrustBadge";
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
      <section className="bg-cream px-[7%] pt-20 pb-24 text-center">
        <div className="label justify-center flex mb-5">UK Nanny Recruitment</div>
        <h1 className="font-serif text-4xl sm:text-6xl text-navy leading-tight max-w-3xl mx-auto mb-6">
          Exceptional childcare, <em className="text-gold not-italic">hand-matched</em> to your family.
        </h1>
        <p className="text-ink/70 max-w-xl mx-auto mb-12 leading-relaxed">
          A premium, fully vetted nanny recruitment service for families across the UK — and a
          trusted path to your next placement if you&apos;re a nanny.
        </p>
        <DualCTA />
      </section>

      <section className="px-[7%] py-16 border-b border-border">
        <div className="flex flex-wrap justify-center gap-3">
          <TrustBadge icon="shield" label="Enhanced DBS Checked" />
          <TrustBadge icon="badge" label="References Verified" />
          <TrustBadge icon="star" label="Elite-Vetted Network" />
        </div>
      </section>

      <section className="px-[7%] py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label justify-center flex mb-4">How It Works</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">A refined, effortless process.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {PROCESS_STEPS.map((step) => (
            <div key={step.n}>
              <div className="font-serif text-4xl text-gold mb-3">{step.n}</div>
              <h3 className="font-serif text-xl text-navy mb-2">{step.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{step.body}</p>
            </div>
          ))}
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

      <section className="bg-navy px-[7%] py-20 text-center text-white">
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
      </section>
    </>
  );
}
