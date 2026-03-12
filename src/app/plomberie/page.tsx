import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { Wrench } from "lucide-react";
import { faqPlomberieGenerale, sectionsPlomberieGenerale } from "@/src/data";
import { Faq } from "@/src/components/sections/faq";
import { Coverage } from "@/src/components/sections/coverage";
import { SimilarPosts } from "@/src/components/sections/similar-posts";
import { AnimatedHeader } from "@/src/components/ui/animated-header";
import { AnimatedCard } from "@/src/components/ui/animated-card";
import type { Metadata } from "next";
import { generateFaqPageSchema } from "@/src/lib/schema/faqPageSchema";
import { generateBreadcrumbSchema } from "@/src/lib/schema/breadcrumbSchema";
import { getAllPosts } from "@/src/lib/blog";

export const metadata: Metadata = {
  title: "Plombier à Montpellier et alentours - TCS Plomberie",
  description:
    "TCS Plomberie intervient rapidement dans tout l'Hérault pour tous vos besoins en plomberie : dépannage d'urgence, installation sanitaire, entretien et rénovation. Devis gratuit 7j/7.",
  keywords:
    "plombier Montpellier, plomberie Hérault, dépannage plomberie, installation sanitaires, chauffe-eau, fuites d'eau",
  alternates: {
    canonical: "/plomberie",
  },
  openGraph: {
    title: "Plombier Montpellier et alentours - TCS Plomberie",
    description:
      "TCS Plomberie intervient rapidement dans tout l'Hérault pour tous vos besoins en plomberie : dépannage d'urgence, installation sanitaire, entretien et rénovation.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function PlomberiePage() {
  const allPosts = getAllPosts();
  const faqData = faqPlomberieGenerale();
  const faqSchema = generateFaqPageSchema(faqData);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", href: "/" },
    { name: "Plomberie", href: "/plomberie" },
  ]);

  return (
    <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <AnimatedHeader>
        <div className="relative w-full aspect-square max-h-[350px] md:max-h-[450px] mb-12">
          <Image
            src="/plombier-3.jpg"
            alt="Plombier à Montpellier et ses alentours - TCS Plomberie"
            fill
            sizes="(max-width: 768px) 100vw, 1300px"
            className="object-cover brightness-40 rounded-3xl"
            priority
            fetchPriority="high"
          />
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center z-20">
            <div className="bg-yellow rounded-full border-4 sm:border-5 border-white p-4">
              <Wrench className="w-9 h-9 sm:w-14 sm:h-14 text-black" />
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full px-4">
            <Typography
              as="h1"
              weight="bold"
              lineHeight="tight"
              className="text-center text-white text-3xl sm:text-6xl"
            >
              Plombier à Montpellier et ses alentours
            </Typography>
            <Typography
              as="p"
              variant="xl"
              weight="medium"
              className="text-center mb-12 text-white text-balance text-base sm:text-xl"
            >
              TCS Plomberie intervient rapidement dans tout l'Hérault pour tous
              vos besoins en plomberie : <br className="hidden sm:block" />
              Dépannage d'urgence, installation sanitaire, entretien et
              rénovation.
            </Typography>
          </div>
        </div>
      </AnimatedHeader>

      <div className="flex flex-col gap-16 md:gap-28 py-8 sm:py-16 md:py-28">
        {sectionsPlomberieGenerale.map((section, index) => (
          <AnimatedCard
            key={index}
            index={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-10 items-stretch`}
          >
            <div className="flex-1 flex flex-col justify-center">
              <Typography
                as="h2"
                weight="bold"
                lineHeight="tight"
                className="mb-4 text-black text-3xl sm:text-4xl"
              >
                {section.title()}
              </Typography>
              <div
                className="text-lg text-dark-gray rich-text"
                dangerouslySetInnerHTML={{
                  __html: section.content(),
                }}
              />
            </div>
            <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto lg:aspect-square max-h-[350px] md:max-h-full lg:max-h-[500px] md:h-auto overflow-hidden">
              <Image
                src={section.image}
                alt={`Services de plomberie dans l'Hérault - TCS Plomberie`}
                fill
                sizes="(max-width: 768px) 100vw, 650px"
                className="object-cover object-right rounded-3xl"
                {...(index === 0 ? { priority: true } : { loading: "lazy" })}
              />
            </div>
          </AnimatedCard>
        ))}
      </div>

      <Faq
        data={faqData}
        title="Questions sur la plomberie dans l'Hérault"
        badge="FAQ"
        isRichText={true}
      />

      <Coverage />
      <SimilarPosts
        allPosts={allPosts}
        title="Consultez nos derniers articles sur la plomberie"
        category="plomberie"
        columns={2}
      />
    </main>
  );
}
