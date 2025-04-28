import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { Badge } from "@/src/components/ui/badge";
import { notFound } from "next/navigation";
import { blogPosts } from "@/src/data/blogPosts";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) {
    return {
      title: "Blog - TCS Plomberie",
      description:
        "Conseils plomberie, chauffage et climatisation par TCS Plomberie. Découvrez nos meilleurs articles pour votre maison ou votre entreprise.",
    };
  }

  return {
    title: `${article.title} | Conseils plomberie, climatisation et chauffage`,
    description: `${article.description} Consultez tous nos conseils pratiques sur le blog de TCS Plomberie.`,
    openGraph: {
      title: `${article.title} | TCS Plomberie`,
      description: `${article.description}`,
      url: `https://tcs-plomberie.fr/blog/${article.slug}`,
      siteName: "TCS Plomberie",
      type: "article",
      images: [
        {
          url: `https://tcs-plomberie-montpellier.fr/${article.image}`,
          width: 1200,
          height: 630,
          alt: "TCS Plomberie - Blog plomberie chauffage climatisation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | TCS Plomberie`,
      description: `${article.description}`,
    },
  };
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
          <div className="text-center w-full max-w-3xl px-4">
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
