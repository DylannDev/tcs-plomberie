import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { MetaHead } from "@/src/components/ui/meta-head";
import { PiPipe } from "react-icons/pi";
import { sectionsPlomberie } from "@/src/data";

interface CityPageProps {
  params: {
    city: string;
  };
}

function capitalizeCity(city: string): string {
  return city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function CityPage({ params }: CityPageProps) {
  const city = capitalizeCity(params.city);
  const title = `Plombier à ${city} - Dépannage plomberie 7j/7 | TCS Plomberie`;
  const description = `Besoin d'un plombier à ${city} ? Intervention rapide, devis gratuit. TCS Plomberie intervient 7j/7 pour tous vos besoins en plomberie, chauffage et climatisation.`;

  return (
    <>
      <MetaHead title={title} description={description} />
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative w-full aspect-square max-h-[350px] md:aspect-square md:max-h-[450px] mb-12">
          <Image
            src="/plombier-8.jpg"
            alt={`Plombier à ${city}`}
            fill
            className="object-cover brightness-40 rounded-3xl"
            priority
          />
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center z-20">
            <div className="bg-yellow rounded-full border-5 border-white p-4">
              <PiPipe className="text-black text-6xl" />
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <Typography
              as="h1"
              variant="6xl"
              weight="bold"
              className="text-center text-white"
            >
              Plombier à {city}
            </Typography>
            <Typography
              as="p"
              variant="xl"
              weight="medium"
              className="text-center mb-12 text-white"
            >
              TCS Plomberie intervient rapidement pour tous vos besoins en
              plomberie à {city} : <br /> Dépannage, installation sanitaire,
              entretien et rénovation.
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-16 md:gap-28 py-28">
          {sectionsPlomberie.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 items-center`}
            >
              <div className="flex-1">
                <Typography
                  as="h2"
                  variant="4xl"
                  weight="bold"
                  lineHeight="tight"
                  className="mb-4 text-black"
                >
                  {section.title(city)}
                </Typography>
                <div
                  className="text-lg text-dark-gray rich-text"
                  dangerouslySetInnerHTML={{ __html: section.content(city) }}
                />
              </div>
              <div className="w-full md:w-1/2 relative aspect-square max-h-[300px] md:aspect-square md:max-h-[500px]">
                <Image
                  src={section.image}
                  alt={`${section.title} à ${city}`}
                  fill
                  className="object-cover object-right rounded-3xl"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
