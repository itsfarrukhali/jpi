// app/sitemap.ts
import { MetadataRoute } from "next";
import { newsItems } from "@/data/news";
import { departments } from "@/data/departments";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpikhi.edu.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },

    // About
    { url: `${baseUrl}/about-us`, priority: 0.8, changeFrequency: "monthly" },
    {
      url: `${baseUrl}/about-us/alhaj-rayazuddin`,
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/about-us/general-secretary`,
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/about-us/in-memory`,
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/about-us/principals-message`,
      priority: 0.7,
      changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/about-us/vision-history-mission`,
      priority: 0.7,
      changeFrequency: "yearly",
    },

    // Programs
    {
      url: `${baseUrl}/programs/dae`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/programs/diploma-certifications`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/programs/certifications`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/programs/short-courses`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/programs/jec`,
      priority: 0.7,
      changeFrequency: "monthly",
    },

    // Admissions
    { url: `${baseUrl}/admissions`, priority: 0.9, changeFrequency: "monthly" },
    {
      url: `${baseUrl}/admissions/fee-structure`,
      priority: 0.8,
      changeFrequency: "yearly",
    }, // fee saal mein ek baar badlti
    {
      url: `${baseUrl}/admissions/how-to-apply`,
      priority: 0.8,
      changeFrequency: "yearly",
    }, // process same rehta
    {
      url: `${baseUrl}/admissions/merit`,
      priority: 0.7,
      changeFrequency: "yearly",
    }, // merit criteria stable
    {
      url: `${baseUrl}/admissions/apply-now`,
      priority: 0.9,
      changeFrequency: "monthly",
    }, // form state change ho sakta

    // Institutional
    { url: `${baseUrl}/qec`, priority: 0.6, changeFrequency: "yearly" },
    {
      url: `${baseUrl}/student-affairs`,
      priority: 0.6,
      changeFrequency: "monthly",
    },
    { url: `${baseUrl}/facilities`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${baseUrl}/contact-us`, priority: 0.7, changeFrequency: "yearly" },

    // Active pages
    { url: `${baseUrl}/news`, priority: 0.8, changeFrequency: "weekly" }, // news aati rehti
    {
      url: `${baseUrl}/academic-policies`,
      priority: 0.6,
      changeFrequency: "yearly",
    }, // policies stable
    { url: `${baseUrl}/careers`, priority: 0.7, changeFrequency: "monthly" }, // jobs aati jaati
  ];

  // News
  const newsPages: MetadataRoute.Sitemap = newsItems.map((item) => ({
    url: `${baseUrl}/news/${item.slug}`,
    lastModified: new Date(item.date),
    priority: 0.6,
    changeFrequency: "never",
  }));

  // Departments
  const departmentPages: MetadataRoute.Sitemap = departments.map((dept) => ({
    url: `${baseUrl}/departments/${dept.slug}`,
    lastModified: new Date(),
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...newsPages, ...departmentPages];
}
