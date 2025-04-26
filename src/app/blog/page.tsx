"use client";

import { useState } from "react";
import { Typography } from "@/src/components/ui/typography";
import { Button } from "@/src/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { BlogCard } from "@/src/components/ui/blog-card";
import Image from "next/image";
import { blogPosts } from "@/src/data/blogPosts";

// Data
// const blogPosts: BlogPost[] = [
//   {
//     title: "Pourquoi entretenir sa chaudière chaque année ?",
//     description:
//       "Découvrez pourquoi l'entretien annuel est obligatoire et comment il vous protège à long terme.",
//     category: "chauffage",
//     image: "/plombier-1.jpg",
//     slug: "pourquoi-entretenir-sa-chaudiere",
//   },
//   {
//     title: "Comment choisir sa climatisation réversible ?",
//     description:
//       "Guide complet pour sélectionner le système de climatisation adapté à votre logement.",
//     category: "climatisation",
//     image: "/plombier-2.jpg",
//     slug: "choisir-climatisation-reversible",
//   },
//   {
//     title: "Les signes d'une fuite d'eau cachée",
//     description:
//       "Apprenez à détecter les fuites d'eau invisibles et comment les réparer efficacement.",
//     category: "plomberie",
//     image: "/plombier-3.jpg",
//     slug: "signes-fuite-eau-cachee",
//   },
//   {
//     title: "Optimiser sa consommation d'eau chaude",
//     description:
//       "Conseils pratiques pour réduire votre facture d'eau chaude sans sacrifier le confort.",
//     category: "plomberie",
//     image: "/plombier-4.jpg",
//     slug: "optimiser-consommation-eau-chaude",
//   },
//   {
//     title: "Les avantages de la pompe à chaleur",
//     description:
//       "Découvrez pourquoi la pompe à chaleur est une solution écologique et économique.",
//     category: "chauffage",
//     image: "/plombier-5.jpg",
//     slug: "avantages-pompe-chaleur",
//   },
//   {
//     title: "Nettoyer sa climatisation soi-même",
//     description:
//       "Guide étape par étape pour l'entretien de votre climatisation entre les visites du professionnel.",
//     category: "climatisation",
//     image: "/plombier-6.jpg",
//     slug: "nettoyer-climatisation-soi-meme",
//   },
// ];

// Filter categories
const categories = [
  { id: "all", label: "Toutes catégories" },
  { id: "plomberie", label: "Plomberie" },
  { id: "chauffage", label: "Chauffage" },
  { id: "climatisation", label: "Climatisation" },
] as const;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts = blogPosts.filter(
    (post) => activeCategory === "all" || post.category === activeCategory
  );

  return (
    <main className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="relative max-w-[1440px] mx-auto text-center bg-light-blue rounded-4xl p-20 overflow-hidden">
        <div className="absolute w-full h-full inset-0 z-0">
          <Image
            src="/shape-1.svg"
            alt="Plombier Montpellier TCS Plomberie"
            width={500}
            height={500}
            className="absolute object-cover -right-40 -top-25 -rotate-10"
            priority
          />
          <Image
            src="/wave-1.svg"
            alt="Plombier Montpellier TCS Plomberie"
            width={400}
            height={400}
            className="absolute object-cover -left-35 -bottom-30 -rotate-15"
            priority
          />
        </div>
        <div className="relative z-10">
          <Typography as="h1" variant="6xl" weight="bold" className="mb-4">
            Blog
          </Typography>
          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="mb-8 max-w-2xl mx-auto"
          >
            Découvrez nos conseils et guides pratiques pour l'entretien et
            l'optimisation de vos installations.
          </Typography>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  activeCategory === category.id ? "black_blog" : "outline_blog"
                }
                size="sm"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog grid */}
      <div className="max-w-7xl mx-auto py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
