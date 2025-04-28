import { formatCityUrl, getDisplayCityFromSlug } from "@/src/lib/utils";
import type { Metadata } from "next";
import PlomberieSeoPage from "@/src/components/pages/PlomberieSeoPage";
import { cities } from "@/src/data";

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: formatCityUrl(city),
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const capitalizedCity = getDisplayCityFromSlug(city);

  const title = `Plombier à ${capitalizedCity} - Dépannage plomberie 7j/7 | TCS Plomberie`;
  const description = `Besoin d'un plombier à ${capitalizedCity} ? Intervention rapide, devis gratuit. TCS Plomberie intervient 7j/7 pour tous vos besoins en plomberie, chauffage et climatisation.`;
  const url = `https://tcs-plomberie-montpellier.fr/plombier/${city}`;
  const image = `https://tcs-plomberie-montpellier.fr/plombier-2.jpg`;

  return {
    title,
    description,
    metadataBase: new URL("https://tcs-plomberie-montpellier.fr"),
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "TCS Plomberie Montpellier",
      type: "website",
      images: [
        {
          url: image,
          width: 1512,
          height: 1006,
          alt: `Plombier à ${capitalizedCity} - TCS Plomberie`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function PageWrapper({ params }: CityPageProps) {
  const { city } = await params;

  return <PlomberieSeoPage city={city} />;
}
