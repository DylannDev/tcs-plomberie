import Link from "next/link";
import { services, cities } from "@/src/data";
import { formatCityUrl } from "@/src/lib/utils";
import { Typography } from "./typography";

interface SeoColumnProps {
  service: "plomberie" | "chauffage" | "climatisation";
}

export function SeoColumn({ service }: SeoColumnProps) {
  const currentService = services.find((s) => s.id === service);
  const prefixes = {
    plomberie: "Plombier",
    chauffage: "Chauffagiste",
    climatisation: "Climaticien",
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
        {cities.map((city) => (
          <Link
            key={city}
            href={`/${service}/${formatCityUrl(city)}`}
            className="block text-lg hover:text-yellow transition-colors duration-150"
          >
            {prefixes[service]} à {city}
          </Link>
        ))}
      </div>
    </div>
  );
}
