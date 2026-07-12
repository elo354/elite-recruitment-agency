import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment Fees | Elite Childcare Recruitment",
  description: "Transparent, professional pricing for nanny placements across the UK.",
};

export default function FeesPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="label justify-center flex mb-4">Recruitment Fees</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Transparent &amp; professional pricing.</h1>
        <p className="text-ink/70 leading-relaxed">
          We provide a personalised recruitment service designed to find the right fit for
          families seeking the highest standards of childcare. Our placement fees are based on the
          agreed annual salary between the family and the nanny.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="p-10 bg-white border border-border rounded-lg hover:border-gold hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 transition-all">
          <div className="text-3xl mb-3">🏡</div>
          <h3 className="font-serif text-2xl text-navy mb-2">Placements</h3>
          <p className="text-sm text-ink/60 mb-6">Suitable for the majority of private household roles.</p>
          <ul className="flex flex-col gap-2 text-sm text-ink/70 mb-8">
            <li>✓ Full-Time Nannies</li>
            <li>✓ Part-Time Nannies</li>
            <li>✓ Live-In Nannies</li>
            <li>✓ Live-Out Nannies</li>
            <li>✓ Nanny Housekeepers</li>
          </ul>
          <div className="text-2xl font-serif text-gold">10%</div>
          <div className="text-xs text-ink/50">of agreed annual gross salary</div>
        </div>
      </div>

      <p className="text-center text-xs text-ink/50 max-w-lg mx-auto mt-10">
        Fees are only payable once a placement is confirmed. Full terms are set out in our{" "}
        <a href="/terms" className="underline hover:text-navy">Terms &amp; Conditions</a>.
      </p>
    </div>
  );
}
