import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  color?: "white" | "blue"; // Couleurs supportées
  size: number; // Taille personnalisée en pixels
};

const Logo = ({ color = "blue", size }: LogoProps) => {
  let logoSrc = "/logo.svg";
  switch (color) {
    case "white":
      logoSrc = "/logo-white.svg";
      break;
    default:
      logoSrc = "/logo.svg";
  }

  return (
    <Link href={"/"}>
      <div className={`relative w-full`}>
        <Image
          src={logoSrc}
          alt={`Logo TCS Plomberie`}
          width={size}
          height={40}
          className="object-cover"
        />
      </div>
    </Link>
  );
};

export default Logo;
