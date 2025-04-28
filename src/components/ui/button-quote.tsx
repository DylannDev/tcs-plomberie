import { Button } from "./button";
import { RiArrowRightLine } from "react-icons/ri";
import { cn } from "@/src/lib/utils";

interface ButtonQuoteProps {
  color?: "default" | "black" | "outline";
  label?: string;
}

export function ButtonQuote({
  color = "default",
  label = "Demander un devis",
}: ButtonQuoteProps) {
  return (
    <Button variant={color} className="group flex items-center gap-2">
      {label}
      <RiArrowRightLine className="text-xl group-hover:translate-x-1 transition-all duration-300" />
    </Button>
  );
}
