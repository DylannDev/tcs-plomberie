import { Button } from "./button";
import { RiArrowRightLine } from "react-icons/ri";
import { cn } from "@/src/lib/utils";

interface ButtonQuoteProps {
  color?: "default" | "black";
}

export function ButtonQuote({ color = "default" }: ButtonQuoteProps) {
  return (
    <Button variant={color} className="group flex items-center gap-2">
      Demander un devis
      <RiArrowRightLine className="text-xl group-hover:translate-x-1 transition-all duration-300" />
    </Button>
  );
}
