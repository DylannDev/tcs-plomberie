"use client";

import { contactInfo, seoWords } from "@/src/data";
import { AnimatedHeader } from "../ui/animated-header";
import { ButtonCall } from "../ui/button-call";
import { ButtonQuote } from "../ui/button-quote";
import { FlipWords } from "../ui/flip-words";
import { Typography } from "../ui/typography";
import { AnimatedCard } from "../ui/animated-card";

export function PreFooter() {
  return (
    <AnimatedCard>
      <section className="relative w-full bg-yellow py-12 rounded-4xl p-6 sm:p-12 mt-10 sm:mt-20 mb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left w-full md:w-auto">
            <Typography
              as="h2"
              variant="5xl"
              weight="bold"
              lineHeight="tight"
              className="text-black relative flex flex-wrap items-center justify-center md:justify-start gap-2"
            >
              <span>Besoin d'un</span> <FlipWords words={seoWords} />
              <span>?</span>
              <span className="sr-only">
                Plomberie, Plombier, Chauffagiste, Climaticien, Climatiseur
              </span>
            </Typography>
            <Typography as="p" variant="xl" className="text-black mt-2">
              Contactez-nous au{" "}
              <span className="font-semibold">{contactInfo.displayPhone}</span>{" "}
              ou demandez votre devis dès maintenant.
            </Typography>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 w-full md:w-auto">
            <ButtonCall color="black" />
            <ButtonQuote color="outline" />
          </div>
        </div>
      </section>
    </AnimatedCard>
  );
}
