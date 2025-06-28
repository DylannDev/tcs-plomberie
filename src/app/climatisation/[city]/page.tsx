import { formatCityUrl, getDisplayCityFromSlug } from "@/src/lib/utils";
import type { Metadata } from "next";
import ClimatisationSeoPage from "@/src/components/pages/ClimatisationSeoPage";
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

  const title = `Climatisation à ${capitalizedCity} - Installation, entretien`;
  const description = `Climatisation à ${capitalizedCity} : Pose de climatiseur, entretien, dépannage. TCS Plomberie intervient 7j/7. Devis gratuit.`;
  const url = `https://tcs-plomberie-montpellier.fr/climatisation/${city}`;
  const image = `https://tcs-plomberie-montpellier.fr/climatisation-1.jpg`;

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
          alt: `Climatisation à ${capitalizedCity} - TCS Plomberie`,
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

  return <ClimatisationSeoPage city={city} />;
}
