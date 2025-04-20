import { Typography } from "./typography";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <div className="mb-6">
      <Typography
        as="span"
        className={cn(
          "text-sky-blue bg-light-blue rounded-lg text-base font-semibold px-4 py-3 w-fit",
          className
        )}
      >
        {children}
      </Typography>
    </div>
  );
}
