import Link from "next/link";

const COLUMNS = [
  {
    title: "Families",
    links: [
      { href: "/for-families", label: "For Families" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/fees", label: "Fees" },
      { href: "/signup?role=family", label: "Submit a Brief" },
    ],
  },
  {
    title: "Nannies",
    links: [
      { href: "/for-nannies", label: "For Nannies" },
      { href: "/trust-and-vetting", label: "Trust & Vetting" },
      { href: "/signup?role=nanny", label: "Apply Now" },
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
      { href: "/cookies", label: "Cookie Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80 mt-auto">
      <div className="px-[7%] py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-2xl text-white mb-3">
            Elite<span className="text-gold">.</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Elite Recruitment Agency
            <br />
            Office No. 332, 19–21 Crawford Street
            <br />
            London, W1H 1PJ, United Kingdom
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
