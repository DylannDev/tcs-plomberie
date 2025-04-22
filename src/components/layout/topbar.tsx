import { contactInfo } from "@/src/data";
import { TbMail, TbPhone } from "react-icons/tb";
import { IconLink } from "../ui/icon-link";

export function Topbar() {
  return (
    <div className="w-full bg-sky-blue py-2 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-base text-white font-semibold">
        <p className="whitespace-nowrap">Intervention rapide 7j/7 24h/24</p>
        <div className="container flex justify-end gap-6 items-center max-w-7xl transition-all duration-150 ease-in-out">
          <IconLink
            href={`mailto:${contactInfo.email}`}
            icon={<TbMail className="text-lg text-white" />}
            className="hover:text-light-blue"
          >
            {contactInfo.email}
          </IconLink>
          <IconLink
            href={`tel:${contactInfo.phone}`}
            icon={<TbPhone className="text-lg text-white" />}
            className="hover:text-light-blue"
          >
            {contactInfo.displayPhone}
          </IconLink>
        </div>
      </div>
    </div>
  );
}
