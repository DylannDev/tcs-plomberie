import { Typography } from "@/src/components/ui/typography";
import { ContactForm } from "@/src/components/forms/contact-form";
import { contactInfo } from "@/src/data";
import { IconLink } from "@/src/components/ui/icon-link";
import { TbMail, TbPhone } from "react-icons/tb";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:py-12">
      {/* Header */}
      <div className="mb-12">
        <Typography as="h1" variant="6xl" weight="bold" className="text-black">
          Contactez-nous
        </Typography>
        <Typography
          as="p"
          variant="xl"
          weight="medium"
          className="text-dark-gray max-w-2xl"
        >
          Besoin d'un devis, d'une intervention ou d'un simple renseignement ?
          <br /> Notre équipe est à votre écoute.
        </Typography>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        {/* Contact information */}
        <div className="relative z-10 bg-light-blue rounded-3xl p-10 lg:col-span-2 overflow-hidden">
          <div className="absolute -bottom-25 -right-30 -z-10">
            <Image
              src="/shape-1.svg"
              alt=""
              width={500}
              height={500}
              className="object-cover object-center scale-y-[-1]"
              priority
            />
          </div>
          <Typography
            as="h2"
            variant="4xl"
            weight="bold"
            lineHeight="tight"
            className="text-black mb-6"
          >
            Informations <br /> de contact
          </Typography>

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <IconLink
                href={`mailto:${contactInfo.email}`}
                className="hover:text-sky-blue transition-colors duration-150 text-xl font-medium"
                icon={<TbMail />}
                iconClassName="text-sky-blue text-2xl"
              >
                {contactInfo.email}
              </IconLink>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <IconLink
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-sky-blue transition-colors duration-150 text-xl font-medium"
                  icon={<TbPhone />}
                  iconClassName="text-sky-blue text-2xl"
                >
                  {contactInfo.displayPhone}
                </IconLink>
              </div>
            </div>

            <div>
              <Typography
                as="h3"
                variant="2xl"
                weight="medium"
                className="text-black mb-2"
              >
                Horaires d'ouverture
              </Typography>
              <Typography as="p" variant="lg" className="text-dark-gray">
                Intervention 7j/7 – 24h/24
              </Typography>
            </div>
            <div>
              <Typography
                as="h3"
                variant="2xl"
                weight="medium"
                className="text-black mb-2"
              >
                Zones d'intervention
              </Typography>
              <Typography as="p" variant="lg" className="text-dark-gray">
                Montpellier et alentours
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
