import BlogClient from "@/src/components/sections/blog-page";
import type { Metadata } from "next";
import { getAllPosts } from "@/src/lib/blog";
import { Breadcrumb } from "@/src/components/ui/breadcrumb";
import { generateBreadcrumbSchema } from "@/src/lib/schema/breadcrumbSchema";

export const metadata: Metadata = {
  title: "Blog plomberie, chauffage et climatisation | TCS Plomberie",
  description:
    "Conseils et guides pour l'entretien, la réparation et l'installation en plomberie, chauffage et climatisation. TCS Plomberie à votre service.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", href: "/" },
    { name: "Blog", href: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "Accueil", href: "/" },
            { name: "Blog", href: "/blog" },
          ]}
        />
      </div>
      <BlogClient posts={posts} />
    </>
  );
}
