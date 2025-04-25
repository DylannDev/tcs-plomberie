import Link from "next/link";
import { SeoColumn } from "../ui/seo-column";
import { contactInfo, navigationLinks, socialLinks } from "@/src/data";
import Logo from "../ui/Logo";
import { IconLink } from "../ui/icon-link";
import { Typography } from "../ui/typography";
import { PiEnvelope } from "react-icons/pi";
import { TbMail, TbPhone } from "react-icons/tb";
import Image from "next/image";
import { Section } from "../ui/section";

export function Footer() {
  return (
    <footer className="relative bg-dark-blue text-white rounded-tl-4xl rounded-tr-4xl py-10 overflow-hidden w-full">
      <div className="absolute -top-80 right-0 -rotate-15 w-fit h-[700px] z-0">
        <Image
          src="/wave-1.svg"
          alt="Plombier Montpellier TCS Plomberie"
          width={700}
          height={700}
          quality={100}
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0 -rotate-15 w-full h-[600px] z-0">
        <Image
          src="/wave-1.svg"
          alt="Plombier Montpellier TCS Plomberie"
          width={600}
          height={600}
          quality={100}
          className="object-cover object-center"
          priority
        />
      </div>
      <Section size="large">
        <div className="relative z-10 px-12 pt-10 flex flex-col gap-8 w-full">
          {/* Colonne 1 - Branding & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <div className="flex flex-col gap-4 w-full">
              <Logo size={300} color="white" />
              <Typography as="p" className="text-lg">
                Intervention rapide 7j/7 24h/24
              </Typography>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-col">
                <Typography
                  as="h3"
                  className="text-xl text-yellow font-bold mb-8 uppercase"
                >
                  Menu
                </Typography>
                <div className="space-y-2">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-xl hover:text-yellow transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full items-center">
              <div className="flex flex-col gap-8">
                <Typography
                  as="h3"
                  className="text-xl text-yellow font-bold uppercase"
                >
                  Contact
                </Typography>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <IconLink
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-yellow transition-colors duration-150 text-xl"
                      icon={<TbMail />}
                      iconClassName="text-yellow text-2xl"
                    >
                      {contactInfo.email}
                    </IconLink>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <IconLink
                        href={`tel:${contactInfo.phone}`}
                        className="hover:text-yellow transition-colors duration-150 text-xl"
                        icon={<TbPhone />}
                        iconClassName="text-yellow text-2xl"
                      >
                        {contactInfo.displayPhone}
                      </IconLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full items-end">
              <div className="flex flex-col gap-8">
                <Typography
                  as="h3"
                  className="text-xl text-yellow font-bold whitespace-nowrap uppercase"
                >
                  Suivez-nous
                </Typography>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <IconLink
                      key={link.href}
                      href={link.href}
                      icon={link.icon}
                      className="p-1"
                      iconClassName="text-white hover:text-yellow text-4xl transition-all duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-white my-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Colonnes 3-5 - SEO Local */}
            <SeoColumn service="plomberie" />
            <SeoColumn service="chauffage" />
            <SeoColumn service="climatisation" />
          </div>

          <div className="flex justify-between mt-12 pt-8 border-t text-lg">
            <p>
              © {new Date().getFullYear()} TCS Plomberie. Tous droits réservés.
            </p>
            <p>
              Développé par{" "}
              <a
                href="https://vizionweb.fr/"
                target="blank"
                className="underline underline-offset-8 text-yellow hover:text-white transition-colors duration-150"
              >
                Vizion Web
              </a>{" "}
              💫
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
}
