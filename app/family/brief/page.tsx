import BriefForm from "@/components/BriefForm";

export const metadata = { title: "Submit Your Brief | Elite Recruitment Agency" };

export default function SubmitBriefPage() {
  return (
    <div className="relative max-w-xl mx-auto bg-white border border-border rounded-lg p-8 sm:p-10 shadow-xl shadow-navy/5 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
      <h1 className="font-serif text-3xl text-navy mb-2">Tell us what you need</h1>
      <p className="text-sm text-ink/60 mb-8">
        The more detail you give us, the faster we can find the right match. Our team reviews
        every brief personally before we begin sourcing candidates.
      </p>

      <BriefForm />
    </div>
  );
}
