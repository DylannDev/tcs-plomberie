import { Button } from "./button";
import { contactInfo } from "@/src/data";
import { cn } from "@/src/lib/utils";

interface ButtonCallProps {
  color?: "default" | "black";
}

export function ButtonCall({ color = "default" }: ButtonCallProps) {
  return (
    <Button variant={color}>
      <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1">
        Appeler maintenant
      </a>
    </Button>
  );
}
