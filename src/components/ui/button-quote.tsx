import { Button } from "./button";
import { RiArrowRightLine } from "react-icons/ri";
import { cn } from "@/src/lib/utils";

interface ButtonQuoteProps {
  color?: "default" | "black" | "outline";
  label?: string;
  className?: string;
  onClick?: () => void;
}

export function ButtonQuote({
  color = "default",
  label = "Demander un devis",
  className,
  onClick,
}: ButtonQuoteProps) {
  return (
    <Button
      as="link"
      href="/contact"
      variant={color}
      className={cn("group flex items-center justify-center gap-2", className)}
      onClick={onClick}
    >
      {label}
      <RiArrowRightLine className="text-xl group-hover:translate-x-1 transition-all duration-300" />
    </Button>
  );
}
