"use client";

import { motion } from "framer-motion";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { ButtonCall } from "../ui/button-call";
import { ButtonQuote } from "../ui/button-quote";

export function Hero() {
  return (
    <section className="relative overflow-hidden flex justify-center w-full">
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative min-h-[calc(100dvh-218px)] flex w-full rounded-4xl overflow-hidden">
            <Image
              src={"/shape-1.svg"}
              alt="Plombier Montpellier TCS Plomberie"
              width={600}
              height={600}
              quality={100}
              className="absolute -top-28 -right-36 z-49 overflow-hidden"
            />
            <div className="absolute top-0 bottom-0 bg-linear-to-l from-light-blue via-light-blue via-55% to-light-blue/0 w-full h-full z-40 rounded-4xl overflow-hidden"></div>
            <div className="relative w-1/2 aspect-video overflow-hidden">
              <Image
                src={"/plombier-6.jpg"}
                alt="Plombier Montpellier TCS Plomberie"
                fill
                sizes="100vw"
                quality={100}
                className="object-cover object-left brightness-90 rounded-tl-4xl rounded-bl-4xl"
                priority
              />
            </div>
          </div>
          <div className="absolute top-0 w-full h-full z-50 flex items-center justify-center">
            <div className="max-w-4xl">
              <Typography
                as="h1"
                variant="6xl"
                weight="extrabold"
                className="text-dark-blue"
              >
                Votre plombier à Montpellier
              </Typography>
              <Typography
                as="h2"
                variant="5xl"
                weight="extrabold"
                lineHeight="tight"
                className="text-dark-blue mb-6"
              >
                Plomberie - Climatisation - Chauffage
              </Typography>
              <Typography
                as="p"
                variant="2xl"
                weight="medium"
                className="mb-4 text-dark-gray"
              >
                Besoin d'un dépannage en urgence, installation ou entretien à
                Montpellier ? <br /> TCS Plomberie intervient 7j/7 pour la
                plomberie, le chauffage et la climatisation.
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonCall />
                <ButtonQuote color="black" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
    </section>
  );
}
