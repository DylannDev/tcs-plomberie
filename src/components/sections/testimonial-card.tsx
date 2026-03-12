/* eslint-disable @next/next/no-img-element */

import { capitalizeFirstLetter, cn } from "@/src/lib/utils";
import { Star } from "lucide-react";
import React from "react";
import { GoogleIcon } from "../ui/brand-icons";

export const ReviewCard = ({
  name,
  message,
  stars,
}: {
  name: string;
  message: string;
  stars: number;
}) => {
  const MAX_STARS = 5;

  return (
    <figure
      className={cn(
        "relative w-full sm:w-[500px] h-fit sm:h-full cursor-pointer overflow-hidden rounded-3xl p-10",
        "bg-light-blue text-black flex flex-col gap-6"
      )}
    >
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-1">
          <figcaption className="text-xl font-bold capitalize">
            {name}
          </figcaption>
          <div className="flex items-center gap-1">
            {[...Array(MAX_STARS)].map((_, index) =>
              index < stars ? (
                <Star key={index} className="w-4 h-4 text-yellow fill-yellow" />
              ) : (
                <Star key={index} className="w-4 h-4 text-yellow" />
              )
            )}
          </div>
        </div>
        <div className="p-2 bg-white rounded-full">
          <GoogleIcon className="w-6 h-6" />
        </div>
      </div>

      <blockquote className="font-semibold text-lg sm:line-clamp-4">
        {capitalizeFirstLetter(message)}
      </blockquote>
    </figure>
  );
};
