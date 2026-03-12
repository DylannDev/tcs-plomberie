import BlogClient from "@/src/components/sections/blog-page";
import type { Metadata } from "next";
import { getAllPosts } from "@/src/lib/blog";

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
  return <BlogClient posts={posts} />;
}
