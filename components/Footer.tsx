import Link from "next/link";
import Image from "next/image";

const COLUMNS = [
  {
    title: "Families",
    links: [
      { href: "/for-families", label: "For Families" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/fees", label: "Fees" },
      { href: "/family/brief", label: "Submit a Brief" },
    ],
  },
  {
    title: "Nannies",
    links: [
      { href: "/for-nannies", label: "For Nannies" },
      { href: "/trust-and-vetting", label: "Trust & Vetting" },
      { href: "/nanny/apply", label: "Apply Now" },
    ],
  },
  {
    title: "Agency",
    links: [
      { href: "/reviews", label: "Reviews" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/policies", label: "Agency Policies" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80 mt-auto">
      <div className="px-[7%] py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/logo-icon-transparent.png"
            alt=""
            width={216}
            height={216}
            className="h-12 w-auto mb-3"
          />
          <div className="font-serif text-lg font-medium text-white tracking-wide mb-3">
            Elite Childcare Recruitment
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Elite Childcare Recruitment LTD
            <br />
            71-75 Shelton Street, Covent Garden
            <br />
            London, WC2H 9JQ, United Kingdom
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="label text-white/50 mb-4">{col.title}</div>
            <ul className="flex flex-col gap-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-[7%] py-6 text-xs text-white/40 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Elite Recruitment Agency. All rights reserved.</span>
        <span>Registered in England &amp; Wales.</span>
      </div>
    </footer>
  );
}
