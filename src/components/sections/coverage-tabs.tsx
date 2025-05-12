"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { formatCityUrl } from "@/src/lib/utils";
import { cities, services } from "@/src/data";
import { Button } from "../ui/button";
import Link from "next/link";

export function CoverageTabs() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8"
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {services.map((service) => (
          <Button
            key={service.id}
            variant={activeTab === service.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab(service.id)}
            className="min-w-[135px]"
          >
            {service.label}
          </Button>
        ))}
      </div>

      {/* Cities Grid */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cities.map(
          (city, index) =>
            index < 18 && (
              <Link
                key={city}
                href={`/${activeTab}/${formatCityUrl(city)}`}
                className="group p-4 rounded-xl bg-light-blue active:bg-sky-blue text-sky-blue transition-all duration-500 ease-in-out cursor-pointer"
              >
                <div className="flex justify-center items-center gap-2 text-center h-full ">
                  <span className="font-medium group-hover:text-dark-blue group-active:text-white transition-colors">
                    {city}
                  </span>
                </div>
              </Link>
            )
        )}
      </div>
    </motion.div>
  );
}
