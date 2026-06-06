import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://josey-baxter-0923.github.io";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date("2026-06-06"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
