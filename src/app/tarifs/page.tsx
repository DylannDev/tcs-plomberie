import { Metadata } from "next";
import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { tarifs } from "@/src/data/tarifs";
import { TarifsCard } from "@/src/components/sections/tarifs-card";
import { AnimatedHeader } from "@/src/components/ui/animated-header";
import { AnimatedCard } from "@/src/components/ui/animated-card";

export const metadata: Metadata = {
  title: "Tarifs plomberie, chauffage et climatisation | TCS Plomberie",
  description:
    "Consultez nos tarifs détaillés pour l'installation, l'entretien et le dépannage de plomberie, chauffage et climatisation à Montpellier. Devis gratuit, prix transparents.",
};

export default function TarifsPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <AnimatedHeader
        className="max-w-[1440px] mx-auto text-center bg-light-blue rounded-4xl px-5 sm:px-10 py-10 sm:py-20 overflow-hidden"
        useViewport={false}
      >
        <div className="absolute w-full h-full inset-0 z-0">
          <Image
            src="/shape-1.svg"
            alt=""
            width={500}
            height={500}
            className="absolute object-cover -left-40 -bottom-25 -rotate-10 scale-y-[-1] scale-x-[-1]"
            priority
          />
          <Image
            src="/wave-1.svg"
            alt=""
            width={400}
            height={400}
            className="absolute object-cover -right-35 -top-30 -rotate-15"
            priority
          />
        </div>
        <div className="relative z-10">
          <Typography as="h1" variant="6xl" weight="bold" className="mb-4">
            Tarifs
          </Typography>
          <Typography
            as="p"
            variant="xl"
            weight="medium"
            className="mb-8 max-w-2xl mx-auto"
          >
            Des prestations claires, des prix transparents. Découvrez nos tarifs
            selon les interventions les plus courantes en plomberie.
          </Typography>
        </div>
      </AnimatedHeader>

      {/* Tarifs grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 pt-12 sm:pt-24">
        {tarifs.map((tarif, index) => (
          <AnimatedCard
            key={tarif.id}
            index={index}
            className={`${index === tarifs.length - 1 && "xl:col-span-2 xl:mx-auto"}`}
          >
            <TarifsCard
              label={tarif.label}
              description={tarif.description}
              tarifs={tarif.tarifs.map((item) => ({
                title: item.title,
                price: item.price,
                from: item.from,
              }))}
            />
          </AnimatedCard>
        ))}
      </section>
    </main>
  );
}
