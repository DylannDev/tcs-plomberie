"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Typography } from "../ui/typography";
import { LiaToolsSolid } from "react-icons/lia";
import { PiLightning, PiNotepad } from "react-icons/pi";
import Image from "next/image";
import { ButtonCall } from "../ui/button-call";

const reasons = [
  {
    title: "Intervention rapide",
    description:
      "Votre urgence ne peut pas attendre ? Nous intervenons 7j/7 à Montpellier et ses alentours, souvent dans la journée.",
    icon: <PiLightning />,
  },
  {
    title: "Devis transparent",
    description:
      "Pas de surprise : vous recevez un devis clair avant chaque intervention. Tout est expliqué, sans frais cachés.",
    icon: <PiNotepad />,
  },
  {
    title: "Artisan qualifié",
    description:
      "Chaque intervention est réalisée avec soin, selon les normes en vigueur. Notre priorité, un travail bien fait, et un client satisfait.",
    icon: <LiaToolsSolid />,
  },
];

export function WhyUs() {
  return (
    <section className="pb-20 flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <Badge>Nos Atouts</Badge>
          <Typography as="h2" variant="3xl" weight="bold" className="mb-4">
            Pourquoi nous choisir ?
          </Typography>
          <hr className="text-light-gray my-6" />
        </motion.div>

        <div className="flex flex-col">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="flex items-start gap-4">
                <div className="bg-yellow rounded-full p-2 sm:p-3 text-black text-xl sm:text-2xl">
                  {reason.icon}
                </div>
                <div>
                  <Typography
                    as="h3"
                    variant="2xl"
                    weight="semibold"
                    className="mb-2"
                  >
                    {reason.title}
                  </Typography>
                  <Typography as="p" variant="lg" className="text-dark-gray">
                    {reason.description}
                  </Typography>
                </div>
              </div>
              {index !== reasons.length - 1 && (
                <hr className="text-light-gray my-6" />
              )}
            </motion.div>
          ))}
        </div>
        <div className="pt-10">
          <ButtonCall />
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 lg:h-[700px] min-h-[300px] aspect-video lg:aspect-square overflow-hidden rounded-3xl">
        <Image
          src="/plombier-7.jpg"
          alt="Plombier - TCS Plomberie"
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          loading="lazy"
          className="object-cover object-top lg:object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </section>
  );
}
