"use client";

import { Typography } from "@/src/components/ui/typography";
import { Button } from "@/src/components/ui/button";
import { BlogCard } from "@/src/components/ui/blog-card";
import { blogPosts } from "@/src/data/blogPosts";
import { AnimatedCard } from "@/src/components/ui/animated-card";
import { AnimatedHeader } from "../ui/animated-header";

interface BlogPost {
  title: string;
  description: string;
  category: "plomberie" | "chauffage" | "climatisation";
  image: string;
  slug: string;
}

interface SimilarPostsProps {
  posts?: BlogPost[];
  title?: string;
  showAllButton?: boolean;
  category?: "plomberie" | "chauffage" | "climatisation";
  columns?: 2 | 3;
}

export function SimilarPosts({
  posts,
  title = "Articles similaires",
  showAllButton = true,
  category,
  columns = 3,
}: SimilarPostsProps) {
  // Si aucun post n'est fourni, on sélectionne des posts en fonction de la catégorie
  const displayPosts =
    posts ||
    (() => {
      if (category) {
        return blogPosts
          .filter((post) => post.category === category)
          .slice(0, columns);
      }
      // Si pas de catégorie spécifiée, on prend le premier post de chaque catégorie
      const categories = ["plomberie", "climatisation", "chauffage"] as const;
      return categories.map((cat) => {
        const categoryPosts = blogPosts.filter((post) => post.category === cat);
        return categoryPosts[0]; // Prend toujours le premier post de chaque catégorie
      });
    })();

  if (displayPosts.length === 0) return null;

  return (
    <section className="mt-0 sm:mt-20">
      {/* Header */}
      <AnimatedHeader>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end items-center justify-between sm:mb-10 mb-8">
          <Typography
            as="h2"
            variant="5xl"
            weight="bold"
            lineHeight="tight"
            className="text-3xl sm:text-5xl text-black max-w-xl text-center sm:text-left"
          >
            {title}
          </Typography>
          {showAllButton && (
            <Button as="link" href="/blog" variant="outline">
              Voir tous les articles
            </Button>
          )}
        </div>
      </AnimatedHeader>

      {/* Mobile scroll container */}
      <div className="sm:hidden overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-4 w-max pr-4">
          {displayPosts.map((post, index) => (
            <div key={post.slug} className="w-[340px] flex-shrink-0">
              <AnimatedCard index={index}>
                <BlogCard post={post} />
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div
        className={`hidden sm:grid grid-cols-1 md:grid-cols-2 ${
          columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
        } gap-8`}
      >
        {displayPosts.map((post, index) => (
          <AnimatedCard key={post.slug} index={index}>
            <BlogCard post={post} />
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
