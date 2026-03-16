import type { Metadata } from "next";
import MDXContent from "@/src/components/layout/mdx-content";

export const metadata: Metadata = {
  title: "Politique de confidentialité | TCS Plomberie Montpellier",
  description:
    "Politique de confidentialité de TCS Plomberie. Informations sur la collecte, le traitement et la protection de vos données personnelles.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
};

export default function Page() {
  return (
    <main className="max-w-[900px] mx-auto px-5 sm:px-8 py-8 md:py-20 rich-text">
      <MDXContent file="politique-confidentialite.md" />
    </main>
  );
}
