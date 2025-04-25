import { getDisplayCityFromSlug } from "@/src/lib/utils";
import type { Metadata } from "next";
import ChauffageSeoPage from "@/src/components/pages/ChauffageSeoPage";

interface CityPageProps {
  params: {
    city: string;
  };
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const capitalizedCity = getDisplayCityFromSlug(city);

  const title = `Chauffage à ${capitalizedCity} - Installation et dépannage chauffage | TCS Plomberie`;
  const description = `Besoin d'un chauffagiste à ${capitalizedCity} ? Intervention rapide, devis gratuit. TCS Plomberie intervient 7j/7 pour tous vos besoins en chauffage, installation et entretien.`;
  const url = `https://tcs-plomberie-montpellier.fr/chauffage/${city}`;
  const image = `https://tcs-plomberie-montpellier.fr/chauffage-1.jpg`;

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
          alt: `Chauffage à ${capitalizedCity} - TCS Plomberie`,
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

  return <ChauffageSeoPage city={city} />;
}
