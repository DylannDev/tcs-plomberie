/* eslint-disable @next/next/no-img-element */

import { capitalizeFirstLetter, cn } from "@/src/lib/utils";
import { PiStarDuotone, PiStarFill, PiUser } from "react-icons/pi";
import React from "react";
import { FcGoogle } from "react-icons/fc";

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
                <PiStarFill key={index} className="text-yellow" />
              ) : (
                <PiStarDuotone key={index} className="text-yellow" />
              )
            )}
          </div>
        </div>
        <div className="p-2 bg-white rounded-full">
          <FcGoogle className="text-2xl" />
        </div>
      </div>

      <blockquote className="font-semibold text-lg line-clamp-4">
        {capitalizeFirstLetter(message)}
      </blockquote>
    </figure>
  );
};
