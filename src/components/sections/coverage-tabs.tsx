"use client";

import { useState } from "react";
import { cities, services } from "@/src/data";
import { formatCityUrl } from "@/src/lib/utils";
import { getAllCitySlugs } from "@/src/data/cities-seo";
import { Button } from "../ui/button";
import Link from "next/link";

const citySlugsWithPages = getAllCitySlugs();

export function CoverageTabs() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <div className="flex flex-col gap-8">
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
      <div
        key={activeTab}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in"
      >
        {cities.map((city, index) => {
          if (index >= 18) return null;
          const slug = formatCityUrl(city);
          const hasPage =
            city !== "Montpellier" && citySlugsWithPages.includes(slug);
          const href = hasPage ? `/${activeTab}/${slug}` : `/${activeTab}`;

          return (
            <Link
              key={city}
              href={href}
              className="group p-4 rounded-xl bg-light-blue active:bg-sky-blue text-sky-blue transition-all duration-500 ease-in-out cursor-pointer"
            >
              <div className="flex justify-center items-center gap-2 text-center h-full ">
                <span className="font-medium group-hover:text-dark-blue group-active:text-white transition-colors">
                  {city}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
