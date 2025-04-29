"use client";

import { ButtonCall } from "../ui/button-call";
import { ButtonQuote } from "../ui/button-quote";
import { FlipWords } from "../ui/flip-words";
import { Typography } from "../ui/typography";

const words = ["Plombier", "Chauffagiste", "Climatiseur"];

export function PreFooter() {
  return (
    <section className="w-full bg-yellow py-12 rounded-4xl p-12 mt-20 mb-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <Typography
            as="h2"
            variant="5xl"
            weight="bold"
            className="text-black"
          >
            Besoin d'un <FlipWords words={words} />?
            <span className="sr-only">
              Plomberie, Plombier, Chauffagiste, Climaticien, Climatiseur
            </span>
          </Typography>
          <Typography as="p" variant="xl" className="text-black mt-2">
            Contactez-nous au{" "}
            <span className="font-semibold">+33 6 99 09 69 25</span> ou demandez
            votre devis dès maintenant.
          </Typography>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <ButtonCall color="black" />
          <ButtonQuote color="outline" />
        </div>
      </div>
    </section>
  );
}
