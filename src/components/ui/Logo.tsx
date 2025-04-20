import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  color?: "white" | "black" | "rose"; // Couleurs supportées
  size?: string; // Taille personnalisée en pixels
};

const Logo = ({ color = "black", size }: LogoProps) => {
  // let logoSrc = "/logo.svg";
  // switch (color) {
  //   case "white":
  //     logoSrc = "/logo_white.svg";
  //     break;
  //   case "rose":
  //     logoSrc = "/logo_rose.svg";
  //     break;
  //   default:
  //     logoSrc = "/logo.svg";
  // }

  return (
    <Link href={"/"}>
      <div
        className={`relative ${
          size ? `w-[${size}px]` : "w-[150px] sm:w-[200px]"
        }`}
      >
        <Image
          src={"/logo.svg"}
          alt={`Logo TCS Plomberie`}
          width={220}
          height={40}
          className="object-cover"
        />
      </div>
    </Link>
  );
};

export default Logo;
