"use client";

import Link from "next/link";
import { services, cities } from "@/src/data";
import { formatCityUrl } from "@/src/lib/utils";
import { Typography } from "./typography";
import { Button } from "./button";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

interface SeoColumnProps {
  service: "plomberie" | "chauffage" | "climatisation";
}

const INITIAL_DISPLAY_COUNT = 18;

export function SeoColumn({ service }: SeoColumnProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentService = services.find((s) => s.id === service);
  const prefixes = {
    plomberie: "Plombier",
    chauffage: "Chauffagiste",
    climatisation: "Climaticien",
  };

  const displayedCities = isExpanded
    ? cities
    : cities.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreCities = cities.length > INITIAL_DISPLAY_COUNT;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    // Scroll après un court délai pour laisser l'animation commencer
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div>
      <Typography
        as="h3"
        className="text-xl text-yellow font-bold mb-6 uppercase"
      >
        {currentService?.label}
      </Typography>
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {displayedCities.map((city, index) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                delay: index * 0.02,
                ease: "easeOut",
              }}
            >
              <Link
                href={`/${service}/${formatCityUrl(city)}`}
                className="block text-lg hover:text-yellow transition-colors duration-150"
              >
                {prefixes[service]} à {city}
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {hasMoreCities && (
        <Button
          variant="outline"
          size="sm"
          className="mt-4 text-yellow hover:text-yellow/80 border-yellow hover:bg-yellow/10 min-w-[165px]"
          onClick={handleToggle}
        >
          {isExpanded ? "Afficher moins" : "Afficher plus"}

          <PiCaretDownBold
            className={`ml-2 ${isExpanded ? "rotate-180" : "rotate-0"} transition-transform duration-300 ease-in-out`}
          />
        </Button>
      )}
    </div>
  );
}
