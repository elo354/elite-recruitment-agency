import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment Fees | Elite Childcare Recruitment",
  description: "Transparent, professional pricing for nanny and maternity nurse placements.",
};

export default function FeesPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="label justify-center flex mb-4">Recruitment Fees</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Transparent &amp; professional pricing.</h1>
        <p className="text-ink/70 leading-relaxed">
          We provide a personalised recruitment service designed to find the right fit for
          families seeking the highest standards of childcare. Our placement fee depends on the
          type of role and is confirmed before a placement is made.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="p-10 bg-white border border-border rounded-lg hover:border-gold hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 transition-all">
          <div className="text-3xl mb-3">🏡</div>
          <h3 className="font-serif text-2xl text-navy mb-2">Nanny Placements</h3>
          <p className="text-sm text-ink/60 mb-6">Suitable for permanent private household childcare roles.</p>
          <ul className="flex flex-col gap-2 text-sm text-ink/70 mb-8">
            <li>✓ Full-Time Nannies</li>
            <li>✓ Part-Time Nannies</li>
            <li>✓ Live-In Nannies</li>
            <li>✓ Live-Out Nannies</li>
            <li>✓ Nanny Housekeepers</li>
          </ul>
          <div className="text-2xl font-serif text-gold">12%</div>
          <div className="text-xs text-ink/50">of agreed annual gross salary</div>
        </div>

        <div className="p-10 bg-white border border-border rounded-lg hover:border-gold hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 transition-all">
          <div className="text-3xl mb-3">🍼</div>
          <h3 className="font-serif text-2xl text-navy mb-2">Maternity, Day &amp; Night Nurse</h3>
          <p className="text-sm text-ink/60 mb-6">Specialist maternity, newborn, day and night care placements.</p>
          <ul className="flex flex-col gap-2 text-sm text-ink/70 mb-8">
            <li>✓ Maternity Nurses</li>
            <li>✓ Day Maternity Nurses</li>
            <li>✓ Night Maternity Nurses</li>
            <li>✓ Newborn Care Specialists</li>
            <li>✓ International Placements</li>
            <li>✓ Private Household Placements</li>
          </ul>
          <div className="text-2xl font-serif text-gold">12%</div>
          <div className="text-xs text-ink/50">of agreed annual gross salary</div>
        </div>
      </div>

      <p className="text-center text-xs text-ink/50 max-w-lg mx-auto mt-10">
        Placement fees are payable by the client once a placement is confirmed and are not deducted
        from the candidate&apos;s remuneration. Full terms are set out in our{" "}
        <a href="/terms" className="underline hover:text-navy">Terms &amp; Conditions</a>.
      </p>
    </div>
  );
}
