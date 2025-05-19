import { Typography } from "../ui/typography";
import Image from "next/image";
import { ButtonCall } from "../ui/button-call";
import { ButtonQuote } from "../ui/button-quote";
import { FlipWords } from "../ui/flip-words";
import { seoWords } from "@/src/data";
import { AnimatedHeader } from "../ui/animated-header";

export function Hero() {
  return (
    <AnimatedHeader>
      <section className="relative overflow-hidden max-h-[800px] hidden md:flex justify-center w-full mx-auto px-0 md:px-6 lg:px-8 max-w-[1440px]">
        <div className="relative w-full">
          <div className="text-center">
            <div className="relative h-auto min-h-[calc(100dvh-218px)] flex w-full rounded-4xl overflow-hidden">
              <Image
                src={"/shape-1.svg"}
                alt="Plombier Montpellier TCS Plomberie"
                width={400}
                height={400}
                className="absolute -top-35 -left-50 scale-x-[-1] z-49 overflow-hidden w-auto"
                priority
              />
              <div className="absolute top-0 bottom-0 bg-linear-to-r from-white via-white/70 to-white/0 w-full h-full z-40 rounded-4xl overflow-hidden"></div>
              <div className="relative w-full max-h-[800px] aspect-square md:aspect-video rounded-4xl overflow-hidden">
                <Image
                  src={"/plombier-5.webp"}
                  alt="Plombier Montpellier TCS Plomberie"
                  fill
                  sizes="(min-width: 768px) 100vw, 768px"
                  className="object-cover object-center"
                  priority={true}
                  fetchPriority="high"
                />
              </div>
            </div>
            <div className="absolute top-0 w-full h-full z-50 flex items-center justify-center">
              <div className="max-w-3xl px-4">
                <Typography
                  as="h1"
                  weight="bold"
                  className="text-5xl lg:text-6xl leading-tight text-black relative flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3 mb-6"
                >
                  <span className="whitespace-nowrap">Besoin d'un</span>{" "}
                  <FlipWords words={seoWords} />
                  <span className="sr-only">
                    Plomberie, Plombier, Chauffagiste, Climaticien, Climatiseur
                  </span>
                  <span>à Montpellier ?</span>
                </Typography>
                <Typography
                  as="h2"
                  weight="medium"
                  className="mb-10 text-dark-gray text-base sm:text-2xl text-balance"
                >
                  Thermo Clim Sanitaire Plomberie intervient 7j/7 pour la
                  plomberie, le chauffage et la climatisation à Montpellier et
                  ses alentours.
                </Typography>
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 justify-center">
                  <ButtonCall />
                  <ButtonQuote color="black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedHeader>
  );
}
