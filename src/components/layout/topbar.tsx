import { contactInfo } from "@/src/data";
import { TbMail, TbPhone } from "react-icons/tb";

export function Topbar() {
  return (
    <div className="w-full bg-sky-blue py-2 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-base text-white font-semibold">
        <p className="whitespace-nowrap">Intervention rapide 7j/7 24h/24</p>
        <div className="container flex justify-end gap-6 items-center max-w-7xl transition-all duration-150 ease-in-out">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 hover:text-light-blue"
          >
            <span className="p-2 rounded-full bg-yellow">
              <TbMail className="text-lg text-white" />
            </span>
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 hover:text-light-blue"
          >
            <span className="p-2 rounded-full bg-yellow">
              <TbPhone className="text-lg text-white" />
            </span>
            {contactInfo.displayPhone}
          </a>
        </div>
      </div>
    </div>
  );
}
