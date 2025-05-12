"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./service-card";
import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import { PiPipe, PiSnowflake } from "react-icons/pi";
import { VscFlame } from "react-icons/vsc";
import { ButtonQuote } from "../ui/button-quote";
import { cn } from "@/src/lib/utils";

const services = [
  {
    imgCard: "/plombier-2.jpg",
    title: "plomberie",
    description:
      "Fuites d'eau, robinet cassé, WC bouché ou canalisation à déboucher ? Notre plombier intervient rapidement pour tous vos travaux de plomberie à Montpellier et dans les alentours.",
    icon: <PiPipe />,
  },
  {
    imgCard: "/climatisation-1.jpg",
    title: "climatisation",
    description:
      "Installation, entretien ou dépannage de climatisation split ou multisplit. Artisan local, devis rapide et intervention dans toute la métropole de Montpellier.",
    icon: <PiSnowflake />,
  },
  {
    imgCard: "/chauffagiste-1.jpg",
    title: "chauffage",
    description:
      "Entretien, dépannage ou installation de votre système de chauffage. Chaudière gaz, électrique ou ballon d'eau chaude : un chauffagiste réactif intervient à Montpellier et dans tout l'Hérault.",
    icon: <VscFlame />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge>Nos Services</Badge>
        <Typography
          as="h2"
          weight="bold"
          lineHeight="tight"
          className="text-2xl sm:text-4xl mb-4 text-balance"
        >
          Services de plomberie, chauffage <br className="hidden lg:block" /> et
          climatisation à Montpellier
        </Typography>
        <Typography as="p" variant="lg" className="text-dark-gray">
          Dépannage, entretien ou installation à Montpellier et alentours.
          Intervention rapide 7j/7 24h/24.
        </Typography>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={cn(
              "w-full",
              index === 2 &&
                "md:col-span-2 lg:col-span-1 md:max-w-[calc(50%-16px)] md:mx-auto lg:max-w-none"
            )}
          >
            <ServiceCard service={service} index={index} />
          </div>
        ))}
      </div>
      <div className="pt-10 sm:pt-20 flex justify-center">
        <ButtonQuote />
      </div>
    </section>
  );
}
