import { MetadataRoute } from "next";

const BASE = "https://www.phrfiduciaire.ch";

const SLUGS = [
  "comptabilite",
  "fiscalite",
  "salaires",
  "successions",
  "expertises",
  "transmission-entreprise",
  "cabinets-medicaux",
  "automatisation",
  "family-office",
  "conseil-coaching",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...SLUGS.map((slug) => ({
      url: `${BASE}/prestations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
