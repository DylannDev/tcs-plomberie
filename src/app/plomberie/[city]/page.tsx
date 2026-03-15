import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCityBySlug, getAllCitySlugs } from "@/src/data/cities-seo";
import { generateFaqPageSchema } from "@/src/lib/schema/faqPageSchema";
import { generateBreadcrumbSchema } from "@/src/lib/schema/breadcrumbSchema";
import { Breadcrumb } from "@/src/components/ui/breadcrumb";
import PlomberieSeoPage from "@/src/components/pages/PlomberieSeoPage";

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
    title: cityData.plomberie.metaTitle,
    description: cityData.plomberie.metaDescription,
    alternates: {
      canonical: `/plomberie/${cityData.slug}`,
    },
    openGraph: {
      title: cityData.plomberie.metaTitle,
      description: cityData.plomberie.metaDescription,
      type: "website",
      locale: "fr_FR",
    },
  };
}

export default async function PlomberieCityPage({ params }: CityPageProps) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();

  const faqSchema = generateFaqPageSchema(cityData.plomberie.faq);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", href: "/" },
    { name: "Plomberie", href: "/plomberie" },
    { name: `Plombier à ${cityData.name}`, href: `/plomberie/${cityData.slug}` },
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
            { name: "Plomberie", href: "/plomberie" },
            { name: `Plombier à ${cityData.name}`, href: `/plomberie/${cityData.slug}` },
          ]}
        />
      </div>
      <PlomberieSeoPage
        cityName={cityData.name}
        heroIntro={cityData.plomberie.heroIntro}
        sections={cityData.plomberie.sections}
        faq={cityData.plomberie.faq}
      />
    </>
  );
}
