import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCityBySlug, getAllCitySlugs } from "@/src/data/cities-seo";
import { generateFaqPageSchema } from "@/src/lib/schema/faqPageSchema";
import { generateBreadcrumbSchema } from "@/src/lib/schema/breadcrumbSchema";
import ClimatisationSeoPage from "@/src/components/pages/ClimatisationSeoPage";

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
    title: cityData.climatisation.metaTitle,
    description: cityData.climatisation.metaDescription,
    alternates: {
      canonical: `/climatisation/${cityData.slug}`,
    },
    openGraph: {
      title: cityData.climatisation.metaTitle,
      description: cityData.climatisation.metaDescription,
      type: "website",
      locale: "fr_FR",
    },
  };
}

export default async function ClimatisationCityPage({
  params,
}: CityPageProps) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();

  const faqSchema = generateFaqPageSchema(cityData.climatisation.faq);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", href: "/" },
    { name: "Climatisation", href: "/climatisation" },
    {
      name: `Climatisation à ${cityData.name}`,
      href: `/climatisation/${cityData.slug}`,
    },
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
      <ClimatisationSeoPage
        cityName={cityData.name}
        heroIntro={cityData.climatisation.heroIntro}
        sections={cityData.climatisation.sections}
        faq={cityData.climatisation.faq}
      />
    </>
  );
}
