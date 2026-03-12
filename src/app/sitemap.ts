import { MetadataRoute } from "next";
import { getAllPosts } from "../lib/blog";
import { citiesData } from "../data/cities-seo";

// Slugs des villes avec contenu unique (priorité plus haute dans le sitemap)
const uniqueContentSlugs = new Set([
  // Group 1
  "lattes", "castelnau-le-lez", "juvignac", "grabels", "saint-gely-du-fesc",
  // Group 2
  "perols", "mauguio", "saint-jean-de-vedas",
  // Group 3
  "sete", "frontignan", "balaruc-les-bains",
  // Group 4
  "la-grande-motte", "palavas-les-flots", "aigues-mortes",
  // Group 5
  "villeneuve-les-maguelone", "le-cres", "grau-du-roi",
  // Group 6
  "pignan", "baillargues", "fabregues",
  // Group 7
  "vendargues", "jacou", "castries",
  // Group 8
  "gigean", "prades-le-lez", "clapiers",
  // Quartiers Montpellier
  "montpellier-antigone", "montpellier-port-marianne", "montpellier-richter",
  "montpellier-pres-d-arenes", "montpellier-beaux-arts",
  "montpellier-les-arceaux", "montpellier-centre-ville", "montpellier-boutonnet",
  "montpellier-aiguelongue", "montpellier-plan-des-4-seigneurs",
  "montpellier-la-mosson", "montpellier-celleneuve", "montpellier-cevennes",
  "montpellier-alco", "montpellier-hauts-de-massane",
  "montpellier-grisettes", "montpellier-ovalie", "montpellier-la-martelle",
  "montpellier-chamberte", "montpellier-aubes-pompignane",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tcs-plomberie-montpellier.fr";
  const posts = getAllPosts();

  // Pages principales avec priorité élevée
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
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chauffage`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/climatisation`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // Pages villes par service (priorité différenciée selon contenu unique ou template)
  const services = ["plomberie", "chauffage", "climatisation"];
  const cityPages = services.flatMap((service) =>
    citiesData.map((city) => ({
      url: `${baseUrl}/${service}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: uniqueContentSlugs.has(city.slug) ? 0.7 : 0.5,
    }))
  );

  // Pages d'articles de blog avec vraies dates
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...cityPages, ...blogPages];
}
