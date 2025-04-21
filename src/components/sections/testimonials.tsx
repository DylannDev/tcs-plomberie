/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Marquee } from "../magicui/marquee";
import { Button } from "../ui/button";
import { reviewLink, reviews } from "@/src/data";
import { ReviewCard } from "./testimonial-card";
import { Badge } from "../ui/badge";
import { Typography } from "../ui/typography";
import { FcGoogle } from "react-icons/fc";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonials = () => {
  return (
    <section className="relative py-20" id="testimonials">
      <div className="">
        <div className="flex justify-between items-end mb-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <Badge>Avis Clients</Badge>
            <Typography as="h2" variant="4xl" weight="bold">
              Ce que nos clients <br /> pensent de nos services
            </Typography>
          </div>
          <div className="w-fit">
            <Button>
              <a
                className="flex items-center gap-1"
                href={reviewLink}
                target="_blank"
              >
                Laisser un avis
                <div className="p-2 bg-white rounded-full ml-2">
                  <FcGoogle className="text-xl" />
                </div>
              </a>
            </Button>
          </div>
        </div>
        <div className="">
          <div className="relative hidden sm:flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:200s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:200s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
          </div>
        </div>
        <div className="relative flex sm:hidden h-[600px] w-full flex-col items-center justify-center overflow-hidden">
          <Marquee vertical pauseOnHover className="[--duration:400s]">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-white to-white/0"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-white to-white/0"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
