export interface CityFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CityServiceContent {
  heroIntro: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
  faq: CityFaqItem[];
  metaTitle: string;
  metaDescription: string;
}

export interface CityData {
  name: string;
  slug: string;
  postalCode: string;
  population: number;
  distanceKm: number;
  interventionTime: string;
  plomberie: CityServiceContent;
  chauffage: CityServiceContent;
  climatisation: CityServiceContent;
}

// Images par service (réutilisées pour toutes les villes)
export const cityServiceImages = {
  plomberie: [
    "/plombier-1.jpg",
    "/plombier-3.jpg",
    "/plombier-6.jpg",
    "/plombier-4.jpg",
    "/plombier-5.webp",
  ],
  chauffage: [
    "/chauffagiste-1.jpg",
    "/chauffagiste-2.jpg",
    "/chauffagiste-3.jpg",
    "/plombier-6.jpg",
    "/chauffagiste-5.jpg",
  ],
  climatisation: [
    "/climatisation-1.jpg",
    "/climatisation-4.jpg",
    "/climatisation-3.jpg",
    "/climatisation-5.jpg",
    "/climatisation-6.jpg",
  ],
};

import { citiesGroup1 } from "./cities/group1";
import { citiesGroup2 } from "./cities/group2";
import { citiesGroup3 } from "./cities/group3";
import { citiesGroup4 } from "./cities/group4";
import { citiesGroup5 } from "./cities/group5";
import { citiesGroup6 } from "./cities/group6";
import { citiesGroup7 } from "./cities/group7";
import { citiesGroup8 } from "./cities/group8";
import { templateCities } from "./cities/template-cities";

export const citiesData: CityData[] = [
  ...citiesGroup1,
  ...citiesGroup2,
  ...citiesGroup3,
  ...citiesGroup4,
  ...citiesGroup5,
  ...citiesGroup6,
  ...citiesGroup7,
  ...citiesGroup8,
  ...templateCities,
];

export function getCityBySlug(slug: string): CityData | undefined {
  return citiesData.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return citiesData.map((c) => c.slug);
}
