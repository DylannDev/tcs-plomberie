import { Tarif } from "@/src/data/tarifs";
import { Typography } from "./typography";
import { InView } from "./in-view";
import { Check } from "lucide-react";

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
    <InView
      delay={index * 0.1}
      className="flex items-center justify-between gap-4"
    >
      <div className="flex items-center gap-2">
        <span>
          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-yellow" strokeWidth={3} />
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
    </InView>
  );
}
