// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // sabhi crawlers ke liye
        allow: "/", // poori site allow
        disallow: ["/api/"], // API routes block
      },
    ],
    sitemap: "https://jpikhi.edu.pk/sitemap.xml",
  };
}
