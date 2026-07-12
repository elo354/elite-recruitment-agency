import type { Metadata } from "next";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "FAQ | Elite Recruitment Agency",
  description: "Frequently asked questions about our nanny recruitment service, process and fees.",
};

const FAMILY_FAQS = [
  { question: "How does your recruitment service work?", answer: "Our entire recruitment process runs remotely via phone, email and video calls, from initial consultation through to placement. Submit your brief and our team begins sourcing vetted candidates." },
  { question: "What types of nanny placements do you cover?", answer: "We cover the full spectrum: full-time, part-time, live-in, live-out, temporary, after-school nannies, maternity nurses and more." },
  { question: "How long does the process typically take?", answer: "Timelines vary depending on the role and location, but we work efficiently — many families receive suitable candidates within days of their initial consultation." },
  { question: "Are your nannies actually vetted?", answer: "Yes. Every nanny in our network has an Enhanced DBS check, two verified references and confirmed right to work before we present them to a family." },
];

const NANNY_FAQS = [
  { question: "I'm a nanny — how do I apply?", answer: "Complete our application form with your experience and availability. Our team reviews every application personally and will be in touch about next steps, including references and vetting." },
  { question: "How long does approval take?", answer: "Most applications are reviewed within a few working days. We'll be in touch either way." },
  { question: "Will my details be shared with families before I agree?", answer: "No. You're only introduced to a family once you accept — your contact details stay private until then." },
];

export default function FaqPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="label justify-center flex mb-4">Questions Answered</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy">Frequently asked questions.</h1>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-14">
        <div>
          <h2 className="font-serif text-2xl text-navy mb-5">For Families</h2>
          <Accordion items={FAMILY_FAQS} />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-navy mb-5">For Nannies</h2>
          <Accordion items={NANNY_FAQS} />
        </div>
      </div>
    </div>
  );
}
