import { MetadataRoute } from "next";
import { getBlogSlugs, getCitySlugs } from "../lib/utils";

interface BlogSlug {
  slug: string;
}

interface CitySlug {
  slug: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tcs-plomberie-montpellier.fr";
  const cities = getCitySlugs();
  const posts = getBlogSlugs();

  // Pages statiques avec priorité élevée
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/plomberie`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/climatisation`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/chauffage`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Pages dynamiques pour les villes (plomberie, chauffage, climatisation)
  const plomberiePages = cities.flatMap((city: CitySlug) => [
    {
      url: `${baseUrl}/plomberie/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ]);

  const chauffagePages = cities.flatMap((city: CitySlug) => [
    {
      url: `${baseUrl}/chauffage/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ]);

  const climatisationPages = cities.flatMap((city: CitySlug) => [
    {
      url: `${baseUrl}/climatisation/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ]);

  // Pages d'articles de blog
  const blogPages = posts.map((post: BlogSlug) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...plomberiePages,
    ...chauffagePages,
    ...climatisationPages,
    ...blogPages,
  ];
}
