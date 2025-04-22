"use client";

import { ButtonCall } from "../ui/button-call";
import { ButtonQuote } from "../ui/button-quote";
import { Typography } from "../ui/typography";

export function PreFooter() {
  return (
    <section className="w-full bg-yellow py-12 rounded-4xl p-12 mb-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <Typography
            as="h2"
            variant="5xl"
            weight="bold"
            className="text-black"
          >
            Besoin d'un expert ?
          </Typography>
          <Typography as="p" variant="xl" className="text-black mt-2">
            Nous intervenons rapidement sur Montpellier et ses alentours
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
