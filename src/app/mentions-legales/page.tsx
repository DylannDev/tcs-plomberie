import type { Metadata } from "next";
import MDXContent from "@/src/components/layout/mdx-content";

export const metadata: Metadata = {
  title: "Mentions légales | TCS Plomberie Montpellier",
  description:
    "Mentions légales du site TCS Plomberie. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return (
    <main className="max-w-[900px] mx-auto px-5 sm:px-8 py-8 md:py-20 rich-text">
      <MDXContent file="mentions-legales.md" />
    </main>
  );
}
