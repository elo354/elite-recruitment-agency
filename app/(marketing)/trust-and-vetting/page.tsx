import type { Metadata } from "next";
import TrustBadge from "@/components/TrustBadge";
import { ShieldCheck, Users, FileCheck, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Trust & Vetting | Elite Recruitment Agency",
  description: "How Elite Recruitment Agency vets every nanny — DBS checks, references, and ongoing standards.",
};

const STAGES = [
  { icon: ShieldCheck, title: "Enhanced DBS Check", body: "Every nanny undergoes an Enhanced DBS check before being presented to a family, with re-checks at regular intervals." },
  { icon: Users, title: "Verified References", body: "A minimum of two professional references, contacted directly by our team — not just claimed on an application." },
  { icon: FileCheck, title: "Identity & Right to Work", body: "Photo ID verification and proof of right to work in the UK, checked before any introduction is made." },
  { icon: Lock, title: "Confidentiality", body: "Every placement is covered by a confidentiality agreement — your family's privacy is treated with the utmost discretion." },
];

export default function TrustAndVettingPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <div className="label justify-center flex mb-4">Trust &amp; Vetting</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Built on trust. Defined by discretion.</h1>
        <p className="text-ink/70 leading-relaxed">
          Only a small proportion of nanny applicants make it into our network. Every candidate you
          meet has already been through the process below.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        <TrustBadge icon="shield" label="Enhanced DBS Checked" />
        <TrustBadge icon="badge" label="References Verified" />
        <TrustBadge icon="star" label="Elite-Vetted Network" />
      </div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {STAGES.map((stage) => (
          <div
            key={stage.title}
            className="p-8 bg-white border border-border rounded-lg hover:border-gold hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 transition-all"
          >
            <stage.icon className="text-gold mb-4" size={28} aria-hidden="true" />
            <h3 className="font-serif text-xl text-navy mb-2">{stage.title}</h3>
            <p className="text-sm text-ink/60 leading-relaxed">{stage.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
