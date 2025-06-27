import BlogClient from "@/src/components/sections/blog-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog plomberie, chauffage et climatisation | TCS Plomberie",
  description:
    "Conseils, guides pratiques et astuces pour l’entretien, la réparation et l’installation en plomberie, chauffage et climatisation. Thermo Clim Sanitaire vous partage son expertise.",
};

export default function BlogPage() {
  return <BlogClient />;
}
