import ApplyForm from "@/components/ApplyForm";

export const metadata = { title: "Apply | Elite Childcare Recruitment" };

export default function ApplyPage() {
  return (
    <div className="relative max-w-xl mx-auto bg-white border border-border rounded-lg p-8 sm:p-10 shadow-xl shadow-navy/5 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
      <h1 className="font-serif text-3xl text-navy mb-2">Your application</h1>
      <p className="text-sm text-ink/60 mb-8">
        Tell us about yourself. Our team personally reviews every application and will be in
        touch about next steps, including references and vetting.
      </p>

      <ApplyForm />
    </div>
  );
}
