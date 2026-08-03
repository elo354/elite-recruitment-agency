import Link from "next/link";
import DualCTA from "@/components/DualCTA";
import TrustBadge from "@/components/TrustBadge";
import { ArrowRight, HeartHandshake, Video, ShieldCheck, Lock } from "lucide-react";

const PROCESS_STEPS = [
  { n: "01", title: "Consultation", body: "We begin with an in-depth conversation to understand your world — values, schedule, and what matters most." },
  { n: "02", title: "Search", body: "Drawing on our vetted network, we discreetly source candidates whose experience and character align with your brief." },
  { n: "03", title: "Selection", body: "A carefully curated shortlist is presented — each candidate personally interviewed and vetted." },
  { n: "04", title: "Placement", body: "We coordinate interviews, references and offer details, guiding both parties through to a confirmed placement." },
];

const WHY_CHOOSE_US = [
  { icon: HeartHandshake, title: "Deeply Personal", body: "We get to know your family's needs before we suggest a candidate." },
  { icon: Video, title: "Personally Interviewed", body: "Every nanny meets our team before being presented to you." },
  { icon: ShieldCheck, title: "Thorough Vetting", body: "References and right-to-work status — personally verified, no stone unturned." },
  { icon: Lock, title: "Absolute Discretion", body: "Every enquiry is handled in the strictest confidence." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative bg-navy px-[7%] pt-24 pb-20 text-center overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,197,24,0.16), transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,197,24,0.1), transparent 70%)" }}
        />
        <div className="relative">
          <div className="label justify-center flex mb-5">UK Nanny Recruitment</div>
          <h1 className="font-serif text-4xl sm:text-6xl text-white leading-tight max-w-3xl mx-auto mb-6">
            Finding the <em className="text-gold not-italic">right fit</em>, tailored to you.
          </h1>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
            A premium, fully vetted nanny recruitment service — based in the UK, recruiting
            worldwide — and a trusted path to your next placement if you&apos;re a nanny.
          </p>
        </div>
      </section>

      <section className="bg-cream px-[7%] pt-14 pb-24">
        <DualCTA />
      </section>

      <section className="px-[7%] py-16 border-b border-border">
        <div className="flex flex-wrap justify-center gap-3">
          <TrustBadge icon="shield" label="Right-to-Work Confirmed" />
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

      <section className="bg-cream px-[7%] py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label justify-center flex mb-4">Why Choose Us</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">Premium recruitment. Personal service.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white border border-border rounded-lg hover:border-gold hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 transition-all"
            >
              <item.icon className="text-gold mb-4" size={28} aria-hidden="true" />
              <h3 className="font-serif text-xl text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-navy px-[7%] py-20 text-center text-white overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-1/4 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,197,24,0.12), transparent 70%)" }}
        />
        <div className="relative">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4">Ready to begin?</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-10">
            Whether you&apos;re searching for the ideal nanny or seeking your next placement, we&apos;d
            love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/family/brief"
              className="px-8 py-3.5 rounded bg-gold text-navy-dark font-semibold hover:brightness-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30 transition-all"
            >
              Find a Nanny
            </Link>
            <Link
              href="/nanny/apply"
              className="px-8 py-3.5 rounded border border-white/30 text-white font-semibold hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 transition-all"
            >
              Apply as a Nanny
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
