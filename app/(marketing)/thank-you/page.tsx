import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = { title: "Thank You | Elite Childcare Recruitment" };

const COPY: Record<string, { heading: string; body: string }> = {
  brief: {
    heading: "Thank you for your brief.",
    body: "We've received the details of what you're looking for. Our team will review your requirements personally and be in touch as soon as possible to discuss the next steps.",
  },
  application: {
    heading: "Thank you for applying.",
    body: "We've received your application. Our team will carefully review your experience and references, and be in touch as soon as possible with an update.",
  },
  contact: {
    heading: "Thank you for getting in touch.",
    body: "We've received your message. A member of our team will review it personally and get back to you as soon as possible.",
  },
  default: {
    heading: "Thank you.",
    body: "We've received your submission. Our team will review it personally and get back to you as soon as possible.",
  },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const { heading, body } = COPY[type ?? "default"] ?? COPY.default;

  return (
    <div className="px-[7%] py-24">
      <div className="max-w-lg mx-auto text-center">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-soft text-navy mb-6">
          <CheckCircle2 size={32} aria-hidden="true" />
        </span>
        <h1 className="font-serif text-4xl text-navy mb-4">{heading}</h1>
        <p className="text-ink/70 leading-relaxed mb-10">{body}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-navy text-white font-semibold hover:bg-navy-dark transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
