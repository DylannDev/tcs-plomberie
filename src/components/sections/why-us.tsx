"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Typography } from "../ui/typography";
import { LiaToolsSolid } from "react-icons/lia";
import { PiLightning, PiNotepad } from "react-icons/pi";
import Image from "next/image";
import { Button } from "../ui/button";
import { RiArrowRightLine } from "react-icons/ri";

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
    <section className="py-20 flex items-center gap-10">
      <div className="w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=""
        >
          <Badge>Nos Atouts</Badge>
          <Typography as="h2" className="text-4xl font-bold mb-4">
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
                <div className="bg-yellow rounded-full p-4 text-black text-2xl">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-dark-gray text-lg">{reason.description}</p>
                </div>
              </div>
              {index !== reasons.length - 1 && (
                <hr className="text-light-gray my-6" />
              )}
            </motion.div>
          ))}
        </div>
        <Button variant="black" className="flex items-center gap-2 mt-10">
          Demander un devis <RiArrowRightLine className="text-xl" />
        </Button>
      </div>
      <div className="relative w-1/2 h-[700px] aspect-square overflow-hidden rounded-3xl">
        <Image
          src="/plombier-7.jpg"
          alt="Plombier - TCS Plomberie"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </section>
  );
}
