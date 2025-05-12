import { Typography } from "../ui/typography";
import { TarifPerService } from "../ui/tarif-per-service";
import { Tarifs } from "@/src/data/tarifs";
import { Badge } from "../ui/badge";

export function TarifsCard({ label, tarifs, description }: Tarifs) {
  return (
    <div className="bg-light-gray-2 rounded-3xl py-10 sm:py-16 px-5 sm:px-10 h-full">
      <div className="text-center mb-12">
        <Badge variant="dark">{label}</Badge>
        <Typography
          as="h2"
          variant="3xl"
          weight="bold"
          className="text-black mb-8"
        >
          {description}
        </Typography>
      </div>
      <div className="grid gap-4">
        {tarifs.map((tarif, index) => (
          <TarifPerService
            key={index}
            title={tarif.title}
            price={tarif.price}
            from={tarif.from}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
