"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn, formatCityUrl } from "@/src/lib/utils";
import { cities, services } from "@/src/data";

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
          <button
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={cn(
              "px-6 py-3 rounded-xl text-lg font-semibold transition-colors cursor-pointer",
              activeTab === service.id
                ? "bg-yellow border border-yellow text-black"
                : "bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
            )}
          >
            {service.label}
          </button>
        ))}
      </div>

      {/* Cities Grid */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cities.map(
          (city, index) =>
            index < 18 && (
              <a
                key={city}
                href={`/${activeTab}/${formatCityUrl(city)}`}
                className="group p-4 rounded-xl bg-light-blue text-sky-blue transition-all"
              >
                <div className="flex justify-center items-center gap-2 text-center h-full">
                  <span className="font-medium group-hover:text-dark-blue transition-colors">
                    {city}
                  </span>
                </div>
              </a>
            )
        )}
      </div>
    </motion.div>
  );
}
