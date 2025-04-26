import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { Badge } from "@/src/components/ui/badge";
import { notFound } from "next/navigation";
import { blogPosts } from "@/src/data/blogPosts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  // Trouver les articles similaires (même catégorie, excluant l'article actuel)
  // const similarPosts = blogPosts
  //   .filter((p) => p.category === post.category && p.slug !== post.slug)
  //   .slice(0, 3);

  return (
    <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
      {/* Header */}
      <div className="relative w-full aspect-video max-h-[500px] rounded-3xl overflow-hidden mb-16">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center w-full max-w-2xl px-4">
            <Badge className="capitalize">{post.category}</Badge>
            <Typography
              as="h1"
              variant="5xl"
              weight="bold"
              className="text-white mt-8"
              lineHeight="tight"
            >
              {post.title}
            </Typography>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="rich-text max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Similar posts */}
      {/* {similarPosts.length > 0 && (
        <div>
          <Typography
            as="h2"
            variant="3xl"
            weight="bold"
            className="text-black mb-8"
          >
            Articles similaires
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )} */}
    </main>
  );
}
