import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { PiPipe } from "react-icons/pi";
import { faqPlomberie, sectionsPlomberie } from "@/src/data";
import { getDisplayCityFromSlug } from "@/src/lib/utils";
import { Faq } from "@/src/components/sections/faq";
import { Coverage } from "@/src/components/sections/coverage";
import { SimilarPosts } from "../sections/similar-posts";
import { AnimatedHeader } from "../ui/animated-header";
import { AnimatedCard } from "../ui/animated-card";

export default function PlomberieSeoPage({ city }: SeoPageProps) {
  const capitalizedCity = getDisplayCityFromSlug(city);

  return (
    <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <AnimatedHeader>
        <div className="relative w-full aspect-square max-h-[350px] md:max-h-[450px] mb-12">
          <Image
            src="/plombier-8.jpg"
            alt={`Plombier à ${capitalizedCity}`}
            fill
            sizes="(max-width: 768px) 100vw, 1300px"
            className="object-cover brightness-40 rounded-3xl"
            priority
            fetchPriority="high"
          />
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center z-20">
            <div className="bg-yellow rounded-full border-4 sm:border-5 border-white p-4">
              <PiPipe className="text-black text-4xl sm:text-6xl" />
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full">
            <Typography
              as="h1"
              weight="bold"
              lineHeight="tight"
              className="text-center text-white text-3xl sm:text-6xl"
            >
              Plombier à {capitalizedCity}
            </Typography>
            <Typography
              as="p"
              variant="xl"
              weight="medium"
              className="text-center mb-12 text-white text-balance text-base sm:text-xl"
            >
              TCS Plomberie intervient rapidement pour tous vos besoins en
              plomberie à {capitalizedCity} : <br className="hidden sm:block" />
              Dépannage, installation sanitaire, entretien et rénovation.
            </Typography>
          </div>
        </div>
      </AnimatedHeader>

      <div className="flex flex-col gap-16 md:gap-28 py-8 sm:py-16 md:py-28">
        {sectionsPlomberie.map((section, index) => (
          <AnimatedCard
            key={index}
            index={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-10 items-stretch`}
          >
            <div className="flex-1 flex flex-col justify-center">
              <Typography
                as="h2"
                weight="bold"
                lineHeight="tight"
                className="mb-4 text-black text-3xl sm:text-4xl"
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
            <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto lg:aspect-square max-h-[350px] md:max-h-full lg:max-h-[500px] md:h-auto overflow-hidden">
              <Image
                src={section.image}
                alt={`Installation et dépannage de plomberie à ${capitalizedCity} - TCS Plomberie`}
                fill
                sizes="(max-width: 768px) 100vw, 650px"
                className="object-cover object-right rounded-3xl"
                {...(index === 0 ? { priority: true } : { loading: "lazy" })}
              />
            </div>
          </AnimatedCard>
        ))}
      </div>

      <Faq
        data={faqPlomberie(capitalizedCity)}
        title={`Questions sur la plomberie à ${capitalizedCity}`}
        badge="FAQ"
        isRichText={true}
      />

      <Coverage />
      <SimilarPosts
        title="Consultez nos derniers articles sur la plomberie"
        category="plomberie"
        columns={2}
      />
    </main>
  );
}
