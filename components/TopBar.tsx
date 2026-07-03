import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden sm:flex items-center justify-end gap-6 bg-navy text-white text-xs px-[7%] py-2">
      <a href="tel:+447471350428" className="flex items-center gap-1.5 hover:text-gold transition-colors">
        <Phone size={13} aria-hidden="true" />
        +44 7471 350428
      </a>
      <a
        href="mailto:eliterecruitmentagencies@gmail.com"
        className="flex items-center gap-1.5 hover:text-gold transition-colors"
      >
        <Mail size={13} aria-hidden="true" />
        eliterecruitmentagencies@gmail.com
      </a>
    </div>
  );
}
