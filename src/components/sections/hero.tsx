import { Typography } from "../ui/typography";
import Image from "next/image";
import { ButtonCall } from "../ui/button-call";
import { ButtonQuote } from "../ui/button-quote";
import { FlipWords } from "../ui/flip-words";
import { seoWords } from "@/src/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden flex justify-center w-full mx-auto px-0 md:px-6 lg:px-8 max-w-[1440px]">
      <div className="relative w-full">
        <div className="relative text-center flex flex-col">
          {/* TOP TEXT + SHAPE */}
          <div className="relative top-0 w-full z-50 flex items-center justify-center bg-white md:bg-transparent pt-12 pb-10 lg:absolute lg:inset-0 lg:pt-0 overflow-hidden rounded-4xl">
            <Image
              src={"/shape-1.svg"}
              alt=""
              width={600}
              height={600}
              className="absolute -top-28 -right-36 -z-10 md:-left-50 md:scale-x-[-1] md:w-auto md:-top-35"
              priority
            />
            <div className="max-w-3xl px-4">
              <Typography
                as="h1"
                weight="bold"
                lineHeight="normal"
                className="text-black sm:leading-normal text-3xl min-[580px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl relative flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3 mb-6"
              >
                <span className="whitespace-nowrap leading-normal">
                  Besoin d'un
                </span>{" "}
                <FlipWords words={seoWords} />
                <span> à Montpellier ?</span>
              </Typography>
              <Typography
                as="h2"
                weight="medium"
                className="text-dark-gray text-lg sm:text-xl md:text-2xl text-balance mb-10"
              >
                TCS Plomberie intervient 7j/7 pour la plomberie, le chauffage et
                la climatisation à Montpellier et ses alentours.
              </Typography>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 justify-center">
                <ButtonCall />
                <ButtonQuote color="black" />
              </div>
            </div>
          </div>

          {/* BACKGROUND IMAGE */}
          <div className="relative -z-10 flex w-full rounded-bl-3xl rounded-br-3xl lg:rounded-4xl overflow-hidden max-h-[800px] md:aspect-video aspect-square">
            {/* Overlay */}
            <div className="absolute block lg:hidden inset-0 z-40 bg-linear-to-b from-white to-white/0 to-30%" />
            <div className="absolute hidden lg:block inset-0 z-40 bg-linear-to-r from-white via-white/60 to-white/0 to-95%" />

            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/plombier-5.webp"
                alt="Plombier Montpellier TCS Plomberie"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
