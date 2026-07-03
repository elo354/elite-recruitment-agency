import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Elite Recruitment Agency",
  description: "How Elite Recruitment Agency uses cookies on this website.",
};

export default function CookiesPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <div className="label justify-center flex mb-4">Cookies</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Cookie Policy</h1>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-6 text-sm text-ink/70 leading-relaxed">
        <p>
          We use only essential cookies required to keep you securely logged in to your family or
          nanny account. We do not currently use analytics or advertising cookies.
        </p>
        <p>
          If we introduce analytics in future, this page will be updated and you&apos;ll be asked
          for consent where required.
        </p>
      </div>
    </div>
  );
}
