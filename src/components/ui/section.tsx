import { cn } from "@/src/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large";
}

export function Section({
  children,
  className,
  size = "default",
}: SectionProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 w-full",
        size === "default" ? "max-w-7xl" : "max-w-[1440px]",
        className
      )}
    >
      {children}
    </div>
  );
}
