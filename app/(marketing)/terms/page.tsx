import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Elite Recruitment Agency",
  description: "Terms and conditions for Elite Recruitment Agency's nanny recruitment service.",
};

const SECTIONS = [
  { title: "1. Introduction", body: "These Terms & Conditions apply to the use of Elite Recruitment Agency and our nanny recruitment services. By contacting us, submitting a form, applying as a nanny, or requesting a nanny placement, you agree to use our service honestly and professionally. Elite Childcare Recruitment LTD, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom." },
  { title: "2. Definitions", body: "\"Client\" means a family, parent, guardian or household seeking childcare support. \"Candidate\" means a nanny, maternity nurse or childcare professional applying for placement. \"Agency\" means Elite Recruitment Agency." },
  { title: "3. Agency Services", body: "We provide recruitment support by introducing suitable nanny candidates to families. Our service acts as an introduction-only agency: we do not employ candidates directly, and the family becomes the legal employer of any nanny they engage. Our service includes consultation, candidate review, remote communication, interview coordination and placement support." },
  { title: "4. Client Responsibilities", body: "Clients agree to provide accurate information about their requirements, to treat candidates fairly and professionally, to comply with all relevant employment law when engaging a nanny directly, and to pay the agreed placement fee upon confirmation of a placement." },
  { title: "5. Candidate Responsibilities", body: "Candidates agree to provide accurate and honest information about their experience, qualifications and right to work, to cooperate with our vetting process (including DBS checks and reference checks), and to conduct themselves professionally throughout the recruitment process." },
  { title: "6. Fees", body: "Our placement fees are set out on our Fees page and are payable by the client upon confirmation of a placement, unless otherwise agreed in writing." },
  { title: "7. Privacy", body: "We handle personal data in accordance with our Privacy Policy and UK data protection law." },
  { title: "8. Contact", body: "Questions about these Terms can be sent to eliterecruitmentagencies@gmail.com." },
];

export default function TermsPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <div className="label justify-center flex mb-4">Terms</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Terms &amp; Conditions</h1>
        <p className="text-ink/70 leading-relaxed">Please read our agency terms carefully.</p>
      </div>

      <div className="max-w-xl mx-auto mb-10 p-4 bg-gold-soft rounded text-xs text-navy-dark text-center">
        Draft content — review with a solicitor before this is treated as legally binding.
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="font-serif text-xl text-navy mb-2">{section.title}</h2>
            <p className="text-sm text-ink/70 leading-relaxed">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
