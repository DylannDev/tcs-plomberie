import BlogClient from "@/src/components/sections/blog-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog plomberie, chauffage et climatisation | TCS Plomberie",
  description:
    "Conseils et guides pour l’entretien, la réparation et l’installation en plomberie, chauffage et climatisation. TCS Plomberie à votre service.",
};

export default function BlogPage() {
  return <BlogClient />;
}
