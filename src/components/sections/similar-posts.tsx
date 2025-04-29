import { Typography } from "@/src/components/ui/typography";
import { Button } from "@/src/components/ui/button";
import { BlogCard } from "@/src/components/ui/blog-card";
import { blogPosts } from "@/src/data/blogPosts";

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
      // Si pas de catégorie spécifiée, on prend un post de chaque catégorie
      const categories = ["plomberie", "chauffage", "climatisation"] as const;
      return categories.map((cat) => {
        const categoryPosts = blogPosts.filter((post) => post.category === cat);
        const randomIndex = Math.floor(Math.random() * categoryPosts.length);
        return categoryPosts[randomIndex];
      });
    })();

  if (displayPosts.length === 0) return null;

  return (
    <section className="mt-20">
      <div className="flex items-end justify-between mb-10">
        <Typography
          as="h2"
          variant="5xl"
          weight="bold"
          lineHeight="tight"
          className="text-black max-w-xl"
        >
          {title}
        </Typography>
        {showAllButton && (
          <Button as="link" href="/blog" variant="outline">
            Voir tous les articles
          </Button>
        )}
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-8`}
      >
        {displayPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
