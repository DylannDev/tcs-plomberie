import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { Typography } from "../ui/typography";

interface ServiceCardProps {
  service: {
    imgCard: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Link href={`/${service.title}/montpellier`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group cursor-pointer rounded-3xl shadow-md transition-shadow h-full flex flex-col hover:shadow-lg"
      >
        <div className="relative w-full h-[300px] overflow-hidden rounded-tl-3xl rounded-tr-3xl">
          <Image
            src={service.imgCard}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Icon centré */}
        <div className="flex justify-center -mt-9 sm:-mt-10 z-10">
          <div className="text-black text-3xl sm:text-4xl rounded-full bg-yellow border-4 border-white p-4">
            {service.icon}
          </div>
        </div>

        {/* Contenu */}
        <div className="px-8 pb-8 pt-4 flex flex-col justify-between flex-1">
          <div>
            <Typography
              as="h3"
              weight="semibold"
              className="text-2xl mb-4 capitalize text-center transition-colors duration-300 group-hover:text-yellow"
            >
              {service.title}
            </Typography>
            <Typography
              as="p"
              variant="lg"
              className="text-dark-gray min-h-[80px]"
            >
              {service.description}
            </Typography>
          </div>

          <Typography
            as="span"
            className="mt-6 text-lg font-semibold text-center flex items-center justify-center gap-1 transition-colors duration-300 group-hover:text-yellow"
          >
            En savoir plus
            <RiArrowRightLine className="text-xl group-hover:translate-x-1 transition-all duration-300" />
          </Typography>
        </div>
      </motion.div>
    </Link>
  );
}
