import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Elite Recruitment Agency",
  description: "How Elite Recruitment Agency collects, uses and protects your personal data.",
};

const SECTIONS = [
  { title: "What we collect", body: "For families: contact details and information about your childcare requirements. For nannies: contact details, experience, references, DBS certificate and right-to-work documentation." },
  { title: "Why we collect it", body: "To provide our recruitment and introduction service — matching families with suitable, vetted nanny candidates — and to meet our legal and safeguarding obligations." },
  { title: "Who can see it", body: "Nanny DBS certificates and reference contact details are only ever visible to our team and the nanny themselves — never to families, even after an introduction is made. Families only see the information a nanny agrees to share as part of their profile." },
  { title: "How long we keep it", body: "We retain personal data for as long as necessary to provide our service and to meet legal record-keeping obligations, after which it is securely deleted." },
  { title: "Your rights", body: "Under UK GDPR you have the right to access, correct or request deletion of your personal data at any time. Contact eliterecruitmentagencies@gmail.com to make a request." },
];

export default function PrivacyPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <div className="label justify-center flex mb-4">Privacy</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Privacy Policy</h1>
      </div>

      <div className="max-w-xl mx-auto mb-10 p-4 bg-gold-soft rounded text-xs text-navy-dark text-center">
        Draft content — review with a solicitor and confirm ICO registration before going live.
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
