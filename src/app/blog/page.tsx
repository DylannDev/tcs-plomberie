"use client";

import { useState } from "react";
import { Typography } from "@/src/components/ui/typography";
import { Button } from "@/src/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { BlogCard } from "@/src/components/ui/blog-card";
import Image from "next/image";
import { blogPosts } from "@/src/data/blogPosts";
import { AnimatedHeader } from "@/src/components/ui/animated-header";
import { AnimatedCard } from "@/src/components/ui/animated-card";

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
      <AnimatedHeader
        useViewport={false}
        className="relative max-w-[1440px] mx-auto text-center bg-light-blue rounded-3xl sm:rounded-4xl px-5 py-10 sm:p-20 overflow-hidden"
      >
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
      </AnimatedHeader>

      {/* Blog grid */}
      <div className="max-w-7xl mx-auto pt-12 sm:pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredPosts.map((post, index) => (
            <AnimatedCard key={post.title} index={index}>
              <BlogCard post={post} />
            </AnimatedCard>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
