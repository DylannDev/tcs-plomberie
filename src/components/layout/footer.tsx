import Link from "next/link";
import { SeoColumn } from "../ui/seo-column";
import { contactInfo, navigationLinks, socialLinks } from "@/src/data";
import Logo from "../ui/Logo";
import { IconLink } from "../ui/icon-link";
import { Typography } from "../ui/typography";
import { TbMail, TbPhone } from "react-icons/tb";
import Image from "next/image";
import { Section } from "../ui/section";
import { AnimatedHeader } from "../ui/animated-header";

function FooterBranding() {
  return (
    <div className="flex flex-col items-center md:items-start gap-2 w-full">
      <Logo color="white" className="w-[250px]" lazyLoading={true} />
      <Typography as="p" className="text-lg whitespace-nowrap">
        Intervention rapide 7j/7 24h/24
      </Typography>
    </div>
  );
}

function FooterContact() {
  return (
    <div className="flex flex-col w-full items-center md:items-start">
      <div className="flex flex-col items-center md:items-start">
        <Typography
          as="h3"
          className="text-xl text-yellow font-bold uppercase mb-4 md:mb-6"
        >
          Contact
        </Typography>
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <IconLink
              href={`mailto:${contactInfo.email}`}
              className="hover:text-yellow transition-colors duration-150 text-xl"
              icon={<TbMail />}
              iconClassName="text-yellow text-2xl"
            >
              {contactInfo.email}
            </IconLink>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1">
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
  );
}

function FooterMenu() {
  return (
    <div className="flex flex-col items-center md:items-start lg:items-end text-center md:text-left w-full">
      <div className="flex flex-col">
        <Typography
          as="h3"
          className="text-xl text-yellow font-bold mb-4 md:mb-6 uppercase"
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
  );
}

function FooterSocial() {
  return (
    <div className="flex flex-col w-full items-center md:items-start lg:items-end">
      <div className="flex flex-col">
        <Typography
          as="h3"
          className="text-xl text-yellow font-bold whitespace-nowrap uppercase mb-4 md:mb-6"
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
  );
}

function FooterLegal() {
  return (
    <div className="flex flex-col lg:flex-row text-center lg:text-left gap-4 justify-between mt-12 pt-8 border-t text-lg">
      <Typography as="p">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">TCS Plomberie</span>. Tous droits
        réservés.
      </Typography>
      <Typography as="p">
        Site web développé par{" "}
        <a
          href="https://vizionweb.fr/"
          target="blank"
          className="underline underline-offset-8 text-yellow hover:text-white transition-colors duration-150 font-semibold"
        >
          Vizion Web
        </a>{" "}
        💫
      </Typography>
    </div>
  );
}

export function Footer() {
  return (
    <AnimatedHeader>
      <footer className="relative bg-dark-blue text-white rounded-tl-4xl rounded-tr-4xl py-10 overflow-hidden w-full">
        <div className="absolute -top-80 right-0 -rotate-15 w-fit h-[700px] z-0">
          <Image
            src="/wave-1.svg"
            alt="Plombier Montpellier TCS Plomberie"
            width={700}
            height={700}
            quality={100}
            className="object-cover object-center"
            loading="lazy"
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
            loading="lazy"
          />
        </div>
        <Section size="large">
          <div className="relative z-10 sm:px-12 pt-10 flex flex-col gap-8 w-full">
            <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-8 w-full">
              <div className="w-full lg:w-1/2 flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between gap-12">
                <FooterBranding />
                <FooterContact />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col md:flex-row lg:flex-row gap-12 md:gap-8">
                <FooterMenu />
                <FooterSocial />
              </div>
            </div>

            <hr className="border-white my-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4">
              <SeoColumn service="plomberie" />
              <SeoColumn service="chauffage" />
              <SeoColumn service="climatisation" />
            </div>

            <FooterLegal />
          </div>
        </Section>
      </footer>
    </AnimatedHeader>
  );
}
