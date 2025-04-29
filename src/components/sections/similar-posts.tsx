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
}

export function SimilarPosts({
  posts,
  title = "Articles similaires",
  showAllButton = true,
}: SimilarPostsProps) {
  // Si aucun post n'est fourni, on sélectionne un post de chaque catégorie
  const displayPosts =
    posts ||
    (() => {
      const categories = ["plomberie", "chauffage", "climatisation"] as const;
      return categories.map((category) => {
        const categoryPosts = blogPosts.filter(
          (post) => post.category === category
        );
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
          className="text-black max-w-lg"
        >
          {title}
        </Typography>
        {showAllButton && (
          <Button as="link" href="/blog" variant="outline">
            Voir tous les articles
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
