"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Role } from "@/lib/types";

const LINKS = [
  { href: "/for-families", label: "For Families" },
  { href: "/for-nannies", label: "For Nannies" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/trust-and-vetting", label: "Trust & Vetting" },
  { href: "/fees", label: "Fees" },
  { href: "/faq", label: "FAQ" },
];

function dashboardHref(role: Role) {
  if (role === "family") return "/family/dashboard";
  if (role === "nanny") return "/nanny/dashboard";
  return "/admin";
}

export default function Nav({ role }: { role: Role | null }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between px-[7%] h-20">
        <Link href="/" className="font-serif text-2xl font-medium text-navy tracking-wide">
          Elite<span className="text-gold">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink/80">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-navy transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {role ? (
            <Link
              href={dashboardHref(role)}
              className="px-5 py-2.5 rounded text-sm font-medium bg-navy text-white hover:bg-navy-dark transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-ink/80 hover:text-navy transition-colors">
                Log In
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2.5 rounded text-sm font-medium bg-navy text-white hover:bg-navy-dark transition-colors"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-1 px-[7%] pb-6 text-sm font-medium text-ink/80 border-t border-border">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 border-b border-border/60"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            {role ? (
              <Link
                href={dashboardHref(role)}
                className="px-5 py-3 rounded text-center bg-navy text-white"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-5 py-3 rounded text-center border border-navy text-navy"
                  onClick={() => setOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="px-5 py-3 rounded text-center bg-navy text-white"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
