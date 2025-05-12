import { contactInfo } from "@/src/data";
import { IconLink } from "@/src/components/ui/icon-link";
import { TbMail, TbPhone } from "react-icons/tb";
import Image from "next/image";
import { Typography } from "../ui/typography";

const ContactInfos = () => {
  return (
    <div className="relative z-10 bg-light-blue rounded-3xl p-6 sm:p-10 h-full w-full">
      {/* Image de fond avec overflow hidden */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -bottom-30 sm:-bottom-25 -right-45 sm:-right-30">
          <Image
            src="/shape-1.svg"
            alt=""
            width={500}
            height={500}
            className="object-cover object-center scale-y-[-1]"
            priority
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10">
        <Typography
          as="h2"
          variant="4xl"
          weight="bold"
          lineHeight="tight"
          className="text-black mb-6"
        >
          Informations <br /> de contact
        </Typography>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <IconLink
              href={`mailto:${contactInfo.email}`}
              className="hover:text-sky-blue transition-colors duration-150 text-lg sm:text-xl font-medium break-all"
              icon={<TbMail />}
              iconClassName="text-sky-blue text-xl sm:text-2xl flex-shrink-0"
            >
              {contactInfo.email}
            </IconLink>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <IconLink
                href={`tel:${contactInfo.phone}`}
                className="hover:text-sky-blue transition-colors duration-150 text-lg sm:text-xl font-medium"
                icon={<TbPhone />}
                iconClassName="text-sky-blue text-xl sm:text-2xl flex-shrink-0"
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
  );
};

export default ContactInfos;
