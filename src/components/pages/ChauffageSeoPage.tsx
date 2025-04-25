"use client";

import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { faqChauffage, sectionsChauffage } from "@/src/data";
import { getDisplayCityFromSlug } from "@/src/lib/utils";
import { Faq } from "@/src/components/sections/faq";
import { Coverage } from "@/src/components/sections/coverage";
import { VscFlame } from "react-icons/vsc";
import { motion } from "framer-motion";

interface CityPageProps {
  city: string;
}

export default function ChauffageSeoPage({ city }: CityPageProps) {
  const capitalizedCity = getDisplayCityFromSlug(city);

  return (
    <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full aspect-square max-h-[350px] md:aspect-square md:max-h-[450px] mb-12">
          <Image
            src="/chauffagiste-4.jpg"
            alt={`Chauffage à ${capitalizedCity}`}
            fill
            className="object-cover brightness-40 rounded-3xl"
            priority
          />
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center z-20">
            <div className="bg-yellow rounded-full border-5 border-white p-4">
              <VscFlame className="text-black text-6xl" />
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <Typography
              as="h1"
              variant="6xl"
              weight="bold"
              className="text-center text-white"
            >
              Chauffagiste à {capitalizedCity}
            </Typography>
            <Typography
              as="p"
              variant="xl"
              weight="medium"
              className="text-center mb-12 text-white"
            >
              TCS Plomberie intervient rapidement pour tous vos besoins en
              chauffage à {capitalizedCity} : <br /> Installation, dépannage,
              entretien et maintenance.
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-16 md:gap-28 py-28">
          {sectionsChauffage.map((section, index) => (
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
                  {section.title(capitalizedCity)}
                </Typography>
                <div
                  className="text-lg text-dark-gray rich-text"
                  dangerouslySetInnerHTML={{
                    __html: section.content(capitalizedCity),
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 relative aspect-square max-h-[300px] md:aspect-square md:max-h-[500px]">
                <Image
                  src={section.image}
                  alt={`${section.title} à ${capitalizedCity}`}
                  fill
                  className="object-cover object-right rounded-3xl"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        <Faq
          data={faqChauffage(capitalizedCity)}
          title={`Questions sur le chauffage à ${capitalizedCity}`}
          badge="FAQ"
          isRichText={true}
        />

        <Coverage />
      </motion.div>
    </main>
  );
}
