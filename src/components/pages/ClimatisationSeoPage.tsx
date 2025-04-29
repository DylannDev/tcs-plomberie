"use client";

import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { PiSnowflake } from "react-icons/pi";
import { faqClimatisation, sectionsClimatisation } from "@/src/data";
import { getDisplayCityFromSlug } from "@/src/lib/utils";
import { Faq } from "@/src/components/sections/faq";
import { Coverage } from "@/src/components/sections/coverage";
import { motion } from "framer-motion";
import { SimilarPosts } from "../sections/similar-posts";

export default function ClimatisationSeoPage({ city }: SeoPageProps) {
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
            src="/climatisation-2.jpg"
            alt={`Climatisation à ${capitalizedCity}`}
            fill
            className="object-cover brightness-40 rounded-3xl"
            priority
          />
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center z-20">
            <div className="bg-yellow rounded-full border-5 border-white p-4">
              <PiSnowflake className="text-black text-6xl" />
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <Typography
              as="h1"
              variant="6xl"
              weight="bold"
              className="text-center text-white"
            >
              Climatisation à {capitalizedCity}
            </Typography>
            <Typography
              as="p"
              variant="xl"
              weight="medium"
              className="text-center mb-12 text-white"
            >
              TCS Plomberie intervient rapidement pour tous vos besoins en
              climatisation à {capitalizedCity} : <br /> Installation,
              dépannage, entretien et maintenance.
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-16 md:gap-28 py-28">
          {sectionsClimatisation.map((section, index) => (
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
          data={faqClimatisation(capitalizedCity)}
          title={`Questions sur la climatisation à ${capitalizedCity}`}
          badge="FAQ"
          isRichText={true}
        />

        <Coverage />
        <SimilarPosts
          title="Consultez nos articles sur la climatisation"
          category="climatisation"
          columns={2}
        />
      </motion.div>
    </main>
  );
}
