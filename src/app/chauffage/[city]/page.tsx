import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCityBySlug, getAllCitySlugs } from "@/src/data/cities-seo";
import { generateFaqPageSchema } from "@/src/lib/schema/faqPageSchema";
import { generateBreadcrumbSchema } from "@/src/lib/schema/breadcrumbSchema";
import { Breadcrumb } from "@/src/components/ui/breadcrumb";
import ChauffageSeoPage from "@/src/components/pages/ChauffageSeoPage";

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return {};

  return {
    title: cityData.chauffage.metaTitle,
    description: cityData.chauffage.metaDescription,
    alternates: {
      canonical: `/chauffage/${cityData.slug}`,
    },
    openGraph: {
      title: cityData.chauffage.metaTitle,
      description: cityData.chauffage.metaDescription,
      type: "website",
      locale: "fr_FR",
    },
  };
}

export default async function ChauffageCityPage({ params }: CityPageProps) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();

  const faqSchema = generateFaqPageSchema(cityData.chauffage.faq);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", href: "/" },
    { name: "Chauffage", href: "/chauffage" },
    { name: `Chauffagiste à ${cityData.name}`, href: `/chauffage/${cityData.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "Accueil", href: "/" },
            { name: "Chauffage", href: "/chauffage" },
            { name: `Chauffagiste à ${cityData.name}`, href: `/chauffage/${cityData.slug}` },
          ]}
        />
      </div>
      <ChauffageSeoPage
        cityName={cityData.name}
        heroIntro={cityData.chauffage.heroIntro}
        sections={cityData.chauffage.sections}
        faq={cityData.chauffage.faq}
      />
    </>
  );
}
