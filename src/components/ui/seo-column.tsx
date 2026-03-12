"use client";

import Link from "next/link";
import { services, cities } from "@/src/data";
import { formatCityUrl } from "@/src/lib/utils";
import { Typography } from "./typography";
import { Button } from "./button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getAllCitySlugs } from "@/src/data/cities-seo";

interface SeoColumnProps {
  service: "plomberie" | "chauffage" | "climatisation";
}

const INITIAL_DISPLAY_COUNT = 18;

const citySlugsWithPages = getAllCitySlugs();

export function SeoColumn({ service }: SeoColumnProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentService = services.find((s) => s.id === service);
  const prefixes = {
    plomberie: "Plombier",
    chauffage: "Chauffagiste",
    climatisation: "Climatisation",
  };

  const displayedCities = isExpanded
    ? cities
    : cities.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreCities = cities.length > INITIAL_DISPLAY_COUNT;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
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
        {displayedCities.map((city) => {
          const slug = formatCityUrl(city);
          const hasPage =
            city !== "Montpellier" && citySlugsWithPages.includes(slug);
          const href = hasPage ? `/${service}/${slug}` : `/${service}`;

          return (
            <div key={city}>
              <Link
                href={href}
                className="block text-lg hover:text-yellow transition-colors duration-150"
              >
                {prefixes[service]} à {city}
              </Link>
            </div>
          );
        })}
      </div>
      {hasMoreCities && (
        <Button
          variant="outline"
          size="sm"
          className="mt-4 text-yellow hover:text-yellow/80 border-yellow hover:bg-yellow/10 min-w-[165px]"
          onClick={handleToggle}
        >
          {isExpanded ? "Afficher moins" : "Afficher plus"}

          <ChevronDown
            className={`ml-2 w-4 h-4 ${isExpanded ? "rotate-180" : "rotate-0"} transition-transform duration-300 ease-in-out`}
          />
        </Button>
      )}
    </div>
  );
}
