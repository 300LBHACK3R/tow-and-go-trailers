import type { MetadataRoute } from "next";
import { trailerCategories } from "@/data/trailerCategories";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/rentals`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const rentalCategoryPages: MetadataRoute.Sitemap =
    trailerCategories.map((category) => ({
      url: `${baseUrl}/rentals/${category.id}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  return [...staticPages, ...rentalCategoryPages];
}