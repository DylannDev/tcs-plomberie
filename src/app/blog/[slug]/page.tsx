import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { Badge } from "@/src/components/ui/badge";
import { notFound } from "next/navigation";
import { blogPosts } from "@/src/data/blogPosts";
import { Metadata } from "next";
import { SimilarPosts } from "@/src/components/sections/similar-posts";
import { AnimatedHeader } from "@/src/components/ui/animated-header";
import { AnimatedCard } from "@/src/components/ui/animated-card";

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

  // Trouver les articles similaires (un post de chaque catégorie, excluant l'article actuel)
  const similarPosts = blogPosts
    .filter((p) => p.slug !== post.slug) // Exclure l'article actuel
    .reduce(
      (acc, currentPost) => {
        // Si nous n'avons pas encore de post pour cette catégorie
        if (!acc.find((p) => p.category === currentPost.category)) {
          // Sélectionner aléatoirement entre les posts de cette catégorie
          const categoryPosts = blogPosts.filter(
            (p) => p.category === currentPost.category && p.slug !== post.slug
          );
          if (categoryPosts.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * categoryPosts.length
            );
            acc.push(categoryPosts[randomIndex]);
          }
        }
        return acc;
      },
      [] as typeof blogPosts
    );

  return (
    <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <AnimatedHeader className="relative w-full aspect-square sm:aspect-video max-h-[500px] rounded-3xl overflow-hidden mb-16">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 1300px"
          className="object-cover brightness-50"
          priority
          fetchPriority="high"
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center w-full max-w-3xl px-4">
            <Badge className="capitalize">{post.category}</Badge>
            <Typography
              as="h1"
              weight="bold"
              className="text-white mt-8 text-3xl sm:text-5xl"
              lineHeight="tight"
            >
              {post.title}
            </Typography>
          </div>
        </div>
      </AnimatedHeader>

      {/* Content */}
      <AnimatedCard>
        <div
          className="rich-text max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </AnimatedCard>

      <hr className="my-16 sm:my-32 text-light-gray" />

      {/* Similar posts */}
      <SimilarPosts posts={similarPosts} />
    </main>
  );
}
