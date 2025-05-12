"use client";

import { Tarif } from "@/src/data/tarifs";
import { Typography } from "./typography";
import { motion } from "framer-motion";
import { PiCheckBold } from "react-icons/pi";

interface TarifPerServiceProps extends Tarif {
  index: number;
}

export function TarifPerService({
  title,
  price,
  from,
  index,
}: TarifPerServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center justify-between gap-4"
    >
      <div className="flex items-center gap-2">
        <span>
          <PiCheckBold className="text-yellow text-base sm:text-lg block" />
        </span>
        <Typography
          as="p"
          weight="medium"
          className="text-black text-sm sm:text-base"
        >
          {title}
        </Typography>
      </div>
      <Typography
        as="p"
        variant="lg"
        weight="bold"
        lineHeight="tight"
        className="text-sky-blue flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-[6px]"
      >
        {from === true && (
          <span className="block text-black text-xs font-medium whitespace-nowrap">
            à partir de
          </span>
        )}
        <span className="whitespace-nowrap">{price} €</span>
      </Typography>
    </motion.div>
  );
}
