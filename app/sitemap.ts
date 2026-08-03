import type { MetadataRoute } from "next";

const BASE_URL = "https://elite-recruitment-agency.vercel.app";

const PAGES = [
  "",
  "/for-families",
  "/for-nannies",
  "/how-it-works",
  "/trust-and-vetting",
  "/reviews",
  "/fees",
  "/faq",
  "/contact",
  "/family/brief",
  "/nanny/apply",
  "/policies",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}
