import { CityData } from "../cities-seo";
import {
  sectionsPlomberie,
  sectionsChauffage,
  sectionsClimatisation,
  faqPlomberie,
  faqChauffage,
  faqClimatisation,
} from "..";

interface TemplateCityInfo {
  name: string;
  slug: string;
  postalCode: string;
  population: number;
  distanceKm: number;
  interventionTime: string;
}

const templateCityInfos: TemplateCityInfo[] = [
  { name: "Saint-Georges-d'Orques", slug: "saint-georges-d'orques", postalCode: "34680", population: 5676, distanceKm: 8, interventionTime: "20 minutes" },
  { name: "Saint-Clément-de-Rivière", slug: "saint-clement-de-riviere", postalCode: "34980", population: 5218, distanceKm: 12, interventionTime: "20 minutes" },
  { name: "Teyran", slug: "teyran", postalCode: "34820", population: 4787, distanceKm: 12, interventionTime: "20 minutes" },
  { name: "Saint-Aunès", slug: "saint-aunes", postalCode: "34130", population: 4530, distanceKm: 10, interventionTime: "15 minutes" },
  { name: "Montarnaud", slug: "montarnaud", postalCode: "34570", population: 4208, distanceKm: 18, interventionTime: "25 minutes" },
  { name: "Montferrier-sur-Lez", slug: "montferrier-sur-lez", postalCode: "34980", population: 4135, distanceKm: 8, interventionTime: "15 minutes" },
  { name: "Saint-Brès", slug: "saint-bres", postalCode: "34670", population: 3623, distanceKm: 12, interventionTime: "20 minutes" },
  { name: "Vic-la-Gardiole", slug: "vic-la-gardiole", postalCode: "34110", population: 3428, distanceKm: 25, interventionTime: "30 minutes" },
  { name: "Lavérune", slug: "laverune", postalCode: "34880", population: 3302, distanceKm: 8, interventionTime: "15 minutes" },
  { name: "Mireval", slug: "mireval", postalCode: "34110", population: 3301, distanceKm: 20, interventionTime: "25 minutes" },
  { name: "Lansargues", slug: "lansargues", postalCode: "34130", population: 3233, distanceKm: 18, interventionTime: "25 minutes" },
  { name: "Mudaison", slug: "mudaison", postalCode: "34130", population: 3009, distanceKm: 15, interventionTime: "20 minutes" },
  { name: "Sussargues", slug: "sussargues", postalCode: "34160", population: 2840, distanceKm: 15, interventionTime: "20 minutes" },
  { name: "Vailhauquès", slug: "vailhauques", postalCode: "34570", population: 2722, distanceKm: 15, interventionTime: "20 minutes" },
  { name: "Restinclières", slug: "restinclieres", postalCode: "34160", population: 2612, distanceKm: 18, interventionTime: "25 minutes" },
  { name: "Beaulieu", slug: "beaulieu", postalCode: "34160", population: 2264, distanceKm: 15, interventionTime: "20 minutes" },
  { name: "Valergues", slug: "valergues", postalCode: "34130", population: 2238, distanceKm: 18, interventionTime: "25 minutes" },
  { name: "Murviel-lès-Montpellier", slug: "murviel-les-montpellier", postalCode: "34570", population: 2075, distanceKm: 12, interventionTime: "20 minutes" },
  { name: "Saussan", slug: "saussan", postalCode: "34570", population: 2069, distanceKm: 12, interventionTime: "20 minutes" },
  { name: "Les Matelles", slug: "les-matelles", postalCode: "34270", population: 2068, distanceKm: 18, interventionTime: "25 minutes" },
];

function generateTemplateCity(info: TemplateCityInfo): CityData {
  const city = info.name;

  return {
    ...info,
    plomberie: {
      heroIntro: `Besoin d'un plombier à ${city} ? TCS Plomberie intervient rapidement pour le dépannage, l'installation et l'entretien de vos équipements de plomberie. Nous arrivons en ${info.interventionTime} depuis notre base à Montpellier.`,
      sections: sectionsPlomberie.map((s) => ({
        title: s.title(city),
        content: s.content(city),
      })),
      faq: faqPlomberie(city),
      metaTitle: `Plombier à ${city} (${info.postalCode}) - Dépannage rapide | TCS`,
      metaDescription: `Plombier à ${city} : TCS Plomberie intervient en ${info.interventionTime} pour vos urgences, installations et rénovations. Devis gratuit, 7j/7.`,
    },
    chauffage: {
      heroIntro: `Chauffagiste à ${city} : TCS Plomberie installe, entretient et dépanne vos systèmes de chauffage. Intervention en ${info.interventionTime} depuis Montpellier, 7j/7.`,
      sections: sectionsChauffage.map((s) => ({
        title: s.title(city),
        content: s.content(city),
      })),
      faq: faqChauffage(city),
      metaTitle: `Chauffagiste à ${city} (${info.postalCode}) - Installation | TCS`,
      metaDescription: `Chauffagiste à ${city} : installation de pompe à chaleur, dépannage et entretien par TCS Plomberie. Devis gratuit, intervention en ${info.interventionTime}.`,
    },
    climatisation: {
      heroIntro: `Climatisation à ${city} : TCS Plomberie installe et entretient votre climatisation. Nous intervenons en ${info.interventionTime} depuis Montpellier pour votre confort toute l'année.`,
      sections: sectionsClimatisation.map((s) => ({
        title: s.title(city),
        content: s.content(city),
      })),
      faq: faqClimatisation(city),
      metaTitle: `Climatisation à ${city} (${info.postalCode}) - Devis gratuit | TCS`,
      metaDescription: `Climatisation à ${city} : installation, dépannage et entretien par TCS Plomberie. Intervention en ${info.interventionTime}, devis gratuit 7j/7.`,
    },
  };
}

export const templateCities: CityData[] = templateCityInfos.map(generateTemplateCity);
