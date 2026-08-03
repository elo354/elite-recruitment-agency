import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/family/dashboard", "/family/messages", "/nanny/dashboard", "/nanny/messages", "/thank-you"],
      },
    ],
    sitemap: "https://elite-recruitment-agency.vercel.app/sitemap.xml",
  };
}
