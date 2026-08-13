import type { MetadataRoute } from "next";

import { trailerCategories } from "@/data/trailerCategories";

const SITE_URL =
  "https://www.towandgotrailers.ca";

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${SITE_URL}/`,
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${SITE_URL}/rentals`,
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${SITE_URL}/services`,
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/reviews`,
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/about`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${SITE_URL}/contact`,
    changeFrequency: "monthly",
    priority: 0.85,
  },
];

export default function sitemap():
  MetadataRoute.Sitemap {
  const trailerRoutes:
    MetadataRoute.Sitemap =
    trailerCategories.map(
      (category) => ({
        url:
          `${SITE_URL}/rentals/${category.id}`,
        changeFrequency: "weekly",
        priority: 0.9,
      }),
    );

  const allRoutes = [
    ...staticRoutes,
    ...trailerRoutes,
  ];

  return Array.from(
    new Map(
      allRoutes.map(
        (route) => [
          route.url,
          route,
        ],
      ),
    ).values(),
  );
}