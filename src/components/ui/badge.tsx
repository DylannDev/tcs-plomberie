import { Typography } from "./typography";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function Badge({ children, className, variant = "light" }: BadgeProps) {
  return (
    <div className="mb-6">
      <Typography
        as="span"
        className={cn(
          `rounded-lg text-base font-semibold px-4 py-3 w-fit ${
            variant === "light"
              ? "text-sky-blue bg-light-blue"
              : "text-white bg-sky-blue"
          }`,
          className
        )}
      >
        {children}
      </Typography>
    </div>
  );
}
