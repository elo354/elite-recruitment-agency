import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Elite Recruitment Agency",
  description: "Get in touch with Elite Recruitment Agency.",
};

export default function ContactPage() {
  return (
    <div className="px-[7%] py-20">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <div className="label justify-center flex mb-4">Get In Touch</div>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-6">Begin your journey with us.</h1>
        <p className="text-ink/70 leading-relaxed">
          Whether you&apos;re a family searching for the ideal nanny, or an experienced nanny
          seeking your next placement — we&apos;d love to hear from you. For an account and to
          track your application, use Sign Up above; for a general enquiry, use the form below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <Phone className="text-gold mt-1" size={20} aria-hidden="true" />
            <div>
              <div className="text-xs text-ink/50 uppercase tracking-wide mb-1">Phone</div>
              <a href="tel:+447471350428" className="text-navy font-medium">+44 7471 350428</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-gold mt-1" size={20} aria-hidden="true" />
            <div>
              <div className="text-xs text-ink/50 uppercase tracking-wide mb-1">Email</div>
              <a href="mailto:eliterecruitmentagencies@gmail.com" className="text-navy font-medium">
                eliterecruitmentagencies@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-gold mt-1" size={20} aria-hidden="true" />
            <div>
              <div className="text-xs text-ink/50 uppercase tracking-wide mb-1">Office</div>
              <p className="text-navy font-medium">
                19–21 Crawford Street
                <br />
                London, W1H 1PJ
              </p>
            </div>
          </div>
        </div>

        <form action="https://formspree.io/f/xqapqlgb" method="POST" className="flex flex-col gap-4">
          <input
            name="name"
            required
            placeholder="Full Name"
            className="px-4 py-3 border border-border rounded text-sm"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="px-4 py-3 border border-border rounded text-sm"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            className="px-4 py-3 border border-border rounded text-sm resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded bg-navy text-white font-semibold hover:bg-navy-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
