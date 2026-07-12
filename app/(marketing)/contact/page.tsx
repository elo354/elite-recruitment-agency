import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

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
          seeking your next placement — we&apos;d love to hear from you. Submit a brief or
          application above, or send us a general enquiry using the form below.
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
            <MessageCircle className="text-gold mt-1" size={20} aria-hidden="true" />
            <div>
              <div className="text-xs text-ink/50 uppercase tracking-wide mb-1">WhatsApp</div>
              <a
                href="https://wa.me/447471350428"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy font-medium"
              >
                +44 7471 350428
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-gold mt-1" size={20} aria-hidden="true" />
            <div>
              <div className="text-xs text-ink/50 uppercase tracking-wide mb-1">Office</div>
              <p className="text-navy font-medium">
                71-75 Shelton Street, Covent Garden
                <br />
                London, WC2H 9JQ
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
