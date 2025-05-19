import { Button } from "./button";
import { contactInfo } from "@/src/data";

interface ButtonCallProps {
  color?: "default" | "black";
}

export function ButtonCall({ color = "default" }: ButtonCallProps) {
  return (
    <Button
      as="link"
      href={`tel:${contactInfo.phone}`}
      variant={color}
      aria-label="Appeler Thermo Clim Sanitaire"
    >
      Appeler maintenant
    </Button>
  );
}
