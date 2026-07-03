import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Elite Recruitment Agency",
  description: "A refined, effortless recruitment process — from first consultation to confirmed placement.",
};

const STEPS = [
  { n: "01", title: "Consultation", body: "We begin with an in-depth conversation to understand your world — values, schedule, and the qualities that matter most to you." },
  { n: "02", title: "Search", body: "Drawing on our network, we discreetly source candidates whose experience, character, and aspirations align with your brief." },
  { n: "03", title: "Selection", body: "A carefully curated shortlist is presented — each candidate personally interviewed, vetted, and chosen with your family in mind." },
  { n: "04", title: "Placement", body: "We coordinate interviews, references, and offer details — guiding both parties seamlessly through to a confirmed placement." },
  { n: "05", title: "Aftercare", body: "Our relationship continues well beyond placement — supporting both families and nannies through the settling period and beyond." },
];

export default function HowItWorksPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="label justify-center flex mb-4">How It Works</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">A refined, effortless process.</h1>
        <p className="text-ink/70 leading-relaxed">
          From your first message to a confirmed placement, we handle each stage with
          professionalism and care.
        </p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {STEPS.map((step) => (
          <div key={step.n} className="flex gap-6 items-start">
            <div className="font-serif text-4xl text-gold shrink-0 w-16">{step.n}</div>
            <div>
              <h3 className="font-serif text-2xl text-navy mb-2">{step.title}</h3>
              <p className="text-ink/70 leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
