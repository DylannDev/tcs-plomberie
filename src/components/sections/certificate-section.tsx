import Image from "next/image";
import { Typography } from "@/src/components/ui/typography";
import { AnimatedCard } from "@/src/components/ui/animated-card";
import { certificateInfos } from "@/src/data/certificateData";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface CertificateInfo {
  badge: string;
  title: string;
  image: string;
  content: string;
  isButton: boolean;
  bgColor: string;
  imgClassName: string;
}

export function Certificate() {
  return (
    <section className="space-y-16 sm:space-y-24 h-full mb-20 sm:my-20">
      {certificateInfos.map((section: CertificateInfo, index: number) => (
        <AnimatedCard
          key={section.title}
          index={index}
          className={`${section.bgColor} rounded-3xl py-10 sm:py-16 px-5 sm:px-10`}
        >
          <div
            className={`flex flex-col-reverse gap-8 lg:gap-12 items-center ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full aspect-square lg:w-1/2 flex justify-center items-center">
              <div
                className={`relative aspect-square w-full rounded-3xl ${section.imgClassName}`}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="absolute object-contain rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="text-center sm:text-left mb-10">
                <Badge variant={index === 1 ? "dark" : "light"}>
                  {section.badge}
                </Badge>
                <Typography
                  as="h2"
                  variant="3xl"
                  weight="bold"
                  className="text-balance"
                >
                  {section.title}
                </Typography>
              </div>
              <div
                className="rich-text "
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
              {section.isButton && (
                <div className="flex flex-col gap-4 mt-10">
                  <Button variant="outline">
                    <a
                      href="/flyer-qualipac.pdf"
                      target="_blank"
                      className="text-base sm:text-lg"
                    >
                      Télécharger le guide QualiPac (PDF)
                    </a>
                  </Button>

                  <Button>
                    <a
                      href="https://www.qualit-enr.org/entreprises/thermo-clim-sanitaire/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg"
                    >
                      Voir notre fiche officielle QualiPac
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </AnimatedCard>
      ))}
    </section>
  );
}
