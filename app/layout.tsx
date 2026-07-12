import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elite-recruitment-agency.vercel.app"),
  title: "Elite Childcare Recruitment | Luxury Nanny Recruitment, UK",
  description:
    "Elite Childcare Recruitment connects discerning UK families with exceptional, fully vetted nannies. Discreet, personal, and built on trust.",
  openGraph: {
    title: "Elite Childcare Recruitment | Luxury Nanny Recruitment, UK",
    description:
      "Premium UK nanny recruitment. We connect discerning families with the finest childcare professionals — with care, discretion and precision.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Elite Childcare Recruitment | Luxury Nanny Recruitment, UK",
    description: "Premium UK nanny recruitment — discreet, personal and trusted.",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='4' fill='%231a3db5'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-size='18' fill='%23f5c518'%3EE%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
