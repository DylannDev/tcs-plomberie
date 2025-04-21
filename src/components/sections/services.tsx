"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./service-card";
import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { RiArrowRightLine } from "react-icons/ri";
import { PiPipe, PiSnowflake } from "react-icons/pi";
import { VscFlame } from "react-icons/vsc";
import { ButtonQuote } from "../ui/button-quote";

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
        <Typography as="h2" className="text-4xl font-bold mb-4">
          Services de plomberie, chauffage et <br />
          climatisation à Montpellier
        </Typography>
        <Typography as="p" variant="lg" className="text-dark-gray">
          Dépannage, entretien ou installation à Montpellier et alentours.
          Intervention rapide 7j/7 24h/24.
        </Typography>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
      <div className="pt-20 flex justify-center">
        <ButtonQuote />
      </div>
    </section>
  );
}
