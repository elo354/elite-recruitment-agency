import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency Policies | Elite Recruitment Agency",
  description: "Elite Recruitment Agency's professional policies protecting children, candidates and clients.",
};

const POLICIES = [
  { emoji: "🛡️", title: "Safeguarding Policy", body: "The welfare of every child is our first priority. We follow best-practice safeguarding standards in every placement we make." },
  { emoji: "🔒", title: "Confidentiality Policy", body: "All client and candidate information is treated with strict confidentiality and is never shared beyond what's necessary to facilitate a placement." },
  { emoji: "⚖️", title: "Equal Opportunities Policy", body: "We recruit and place candidates fairly, without discrimination on the basis of race, religion, gender, age, disability or any other protected characteristic." },
  { emoji: "📋", title: "Complaints Policy", body: "If you're unhappy with any part of our service, contact us directly and we'll investigate and respond within a reasonable timeframe." },
  { emoji: "🔍", title: "Vetting Policy", body: "Every candidate undergoes an Enhanced DBS check, reference verification and identity checks before being presented to a family." },
  { emoji: "💾", title: "Data Protection Policy", body: "We handle personal data in line with UK GDPR, and never sell or share your details with third parties for marketing purposes." },
];

export default function PoliciesPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="label justify-center flex mb-4">Agency Policies</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Professional policies.</h1>
        <p className="text-ink/70 leading-relaxed">
          Elite Recruitment Agency operates with integrity, transparency and a commitment to best
          practice in all aspects of our work.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {POLICIES.map((policy) => (
          <div key={policy.title} className="p-8 bg-white border-t-[3px] border-t-gold border border-border rounded">
            <div className="text-2xl mb-3" aria-hidden="true">{policy.emoji}</div>
            <h3 className="font-serif text-xl text-navy mb-2">{policy.title}</h3>
            <p className="text-sm text-ink/60 leading-relaxed">{policy.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
