import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Elite Recruitment Agency",
  description: "Reviews from families and nannies who've worked with Elite Recruitment Agency.",
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

      <div className="max-w-lg mx-auto text-center bg-cream rounded-lg p-12">
        <p className="text-sm text-ink/60">
          No reviews published yet — check back soon, or{" "}
          <a href="/contact" className="text-navy font-semibold underline">get in touch</a>{" "}
          if you&apos;d like to share your experience with us directly.
        </p>
      </div>
    </div>
  );
}
