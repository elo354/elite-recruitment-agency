"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/for-families", label: "For Families" },
  { href: "/for-nannies", label: "For Nannies" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/trust-and-vetting", label: "Trust & Vetting" },
  { href: "/fees", label: "Fees" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between px-[7%] h-20">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-lockup-transparent.png"
            alt="Elite Childcare Recruitment"
            width={431}
            height={500}
            className="h-16 w-auto py-2"
            priority
          />
        </Link>

        <button
          className="p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 px-[7%] pb-6 text-sm font-medium text-ink/80 border-t border-border">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 px-3 -mx-3 border-b border-l-4 border-l-transparent border-border/60 rounded hover:bg-cream hover:border-l-gold hover:text-navy hover:pl-5 transition-all"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Link
              href="/family/brief"
              className="px-5 py-3 rounded text-center border border-navy text-navy"
              onClick={() => setOpen(false)}
            >
              Find a Nanny
            </Link>
            <Link
              href="/nanny/apply"
              className="px-5 py-3 rounded text-center bg-navy text-white"
              onClick={() => setOpen(false)}
            >
              Apply as a Nanny
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
