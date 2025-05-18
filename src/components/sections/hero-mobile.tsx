"use client";

import { motion } from "framer-motion";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { ButtonCall } from "../ui/button-call";
import { ButtonQuote } from "../ui/button-quote";
import { FlipWords } from "../ui/flip-words";
import { seoWords } from "@/src/data";

export function HeroMobile() {
  return (
    <section className="relative overflow-hidden flex md:hidden justify-center w-full">
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center flex flex-col h-[calc(100vh-120px)]"
        >
          <div className="relative top-0 w-full z-50 flex items-center justify-center bg-white pt-12">
            <Image
              src={"/shape-1.svg"}
              alt="Plombier Montpellier TCS Plomberie"
              width={600}
              height={600}
              quality={100}
              className="absolute -top-28 -right-36 -z-10 overflow-hidden"
            />
            <div className="max-w-3xl px-4">
              <Typography
                as="h1"
                weight="bold"
                className="text-black sm:leading-normal text-3xl min-[580px]:text-4xl sm:text-5xl relative flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3 mb-6"
              >
                <span className="whitespace-nowrap">Besoin d'un</span>{" "}
                <FlipWords words={seoWords} />
                <span className="sr-only">
                  Plomberie, Plombier, Chauffagiste, Climaticien, Climatiseur
                </span>
                <span>à Montpellier ?</span>
              </Typography>
              <Typography
                as="p"
                weight="medium"
                className="text-lg sm:text-xl mb-10 text-dark-gray text-balance"
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
          <div className="relative flex w-full rounded-bl-3xl rounded-br-3xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-white to-white/0 to-30% w-full h-full z-40" />
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={"/plombier-5.webp"}
                alt="Plombier Montpellier TCS Plomberie"
                fill
                sizes="100vw"
                quality={100}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
