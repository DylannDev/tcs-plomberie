import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

interface LogoProps {
  size?: number;
  mobileSize?: number;
  className?: string;
  color?: "white" | "default";
  lazyLoading?: boolean;
}

export default function Logo({
  size = 250,
  mobileSize = 160,
  className,
  color = "default",
  lazyLoading = false,
}: LogoProps) {
  const getWidthClass = () => {
    if (size && mobileSize) {
      return `w-[${mobileSize}px] sm:w-[${size}px]`;
    }
    return "w-[160px] sm:w-[250px]";
  };

  return (
    <Link
      href="/"
      className={cn("relative block aspect-[5/1]", getWidthClass(), className)}
    >
      <Image
        src={color === "white" ? "/logo-white.svg" : "/logo.svg"}
        alt="TCS Plomberie"
        fill
        className="object-contain"
        {...(lazyLoading ? { loading: "lazy" } : { priority: true })}
      />
    </Link>
  );
}
