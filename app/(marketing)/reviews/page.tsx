import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Elite Childcare Recruitment",
  description: "Reviews from families and nannies who've worked with Elite Childcare Recruitment.",
};

export default function ReviewsPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <div className="label justify-center flex mb-4">Reviews</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Client &amp; candidate reviews.</h1>
        <p className="text-ink/70 leading-relaxed">
          We&apos;re a growing agency, and every placement we complete adds to our track record.
          Genuine reviews from families and nannies we&apos;ve worked with will appear here as they
          come in.
        </p>
      </div>
    </div>
  );
}
