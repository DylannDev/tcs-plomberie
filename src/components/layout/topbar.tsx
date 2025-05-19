import { contactInfo } from "@/src/data";
import { TbMail, TbPhone } from "react-icons/tb";
import { IconLink } from "../ui/icon-link";

export function Topbar() {
  return (
    <div className="relative z-[95] w-full bg-dark-blue py-2 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full gap-2">
          <p className="hidden md:flex text-base font-semibold whitespace-nowrap">
            Intervention rapide 7j/7 24h/24
          </p>
          <div className="text-xs sm:text-base font-semibold flex justify-between md:justify-end w-full items-center gap-4 sm:gap-6">
            <IconLink
              href={`mailto:${contactInfo.email}`}
              icon={<TbMail className="text-sm sm:text-lg text-white" />}
              className="hover:text-light-blue transition-colors duration-150"
            >
              {contactInfo.email}
            </IconLink>
            <IconLink
              href={`tel:${contactInfo.phone}`}
              icon={<TbPhone className="text-sm sm:text-lg text-white" />}
              className="hover:text-light-blue transition-colors duration-150 whitespace-nowrap"
            >
              {contactInfo.displayPhone}
            </IconLink>
          </div>
        </div>
      </div>
    </div>
  );
}
