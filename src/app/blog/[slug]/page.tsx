import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { Badge } from "@/src/components/ui/badge";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SimilarPosts } from "@/src/components/sections/similar-posts";
import { AnimatedHeader } from "@/src/components/ui/animated-header";
import { AnimatedCard } from "@/src/components/ui/animated-card";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/src/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { generateArticleSchema } from "@/src/lib/schema/articleSchema";
import { generateBreadcrumbSchema } from "@/src/lib/schema/breadcrumbSchema";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPostBySlug(slug);

  if (!article) {
    return {
      title: "Blog - TCS Plomberie",
      description:
        "Conseils plomberie, chauffage et climatisation par TCS Plomberie. Découvrez nos meilleurs articles pour votre maison ou votre entreprise.",
    };
  }

  return {
    title: `${article.title}`,
    description: `${article.description} Consultez tous nos conseils pratiques sur le blog de TCS Plomberie.`,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | TCS Plomberie`,
      description: `${article.description}`,
      url: `https://tcs-plomberie-montpellier.fr/blog/${article.slug}`,
      siteName: "TCS Plomberie",
      type: "article",
      images: [
        {
          url: `https://tcs-plomberie-montpellier.fr${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
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
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();

  // Trouver les articles similaires (un post de chaque catégorie, excluant l'article actuel)
  const similarPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .reduce(
      (acc, currentPost) => {
        if (!acc.find((p) => p.category === currentPost.category)) {
          const categoryPosts = allPosts.filter(
            (p) => p.category === currentPost.category && p.slug !== post.slug
          );
          if (categoryPosts.length > 0) {
            acc.push(categoryPosts[0]);
          }
        }
        return acc;
      },
      [] as typeof allPosts
    );

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    image: post.image,
    date: post.date,
    updatedAt: post.updatedAt,
    category: post.category,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ]);

  return (
    <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            <p className="text-white mt-4 text-base font-medium">
              Par {post.author} —{" "}
              {new Date(post.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
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
        <div className="max-w-4xl mx-auto rich-text">
          <MDXRemote source={post.content} />
        </div>
      </AnimatedCard>

      <hr className="my-16 sm:my-32 text-light-gray" />

      {/* Similar posts */}
      <SimilarPosts posts={similarPosts} />
    </main>
  );
}
