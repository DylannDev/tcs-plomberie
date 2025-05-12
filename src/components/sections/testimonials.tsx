"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Marquee } from "../magicui/marquee";
import { Button } from "../ui/button";
import { reviewLink, reviews } from "@/src/data";
import { ReviewCard } from "./testimonial-card";
import { Badge } from "../ui/badge";
import { Typography } from "../ui/typography";
import { FcGoogle } from "react-icons/fc";
import { AnimatedHeader } from "../ui/animated-header";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonials = () => {
  return (
    <section className="relative pb-20 sm:py-20" id="testimonials">
      <AnimatedHeader>
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-16 sm:mb-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <Badge>Avis Clients</Badge>
            <Typography as="h2" variant="4xl" weight="bold">
              Ce que nos clients <br /> pensent de nos services
            </Typography>
          </div>
          <div className="w-fit hidden sm:flex">
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
        {/* Desktop and Tablets */}

        <div className="relative hidden sm:flex w-full flex-col gap-4 items-center justify-center overflow-hidden">
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

        {/* Mobile */}
        <div className="relative flex sm:hidden h-[700px] w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
          <Marquee vertical pauseOnHover className="[--duration:200s]">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 -top-1 h-1/5 bg-gradient-to-b from-white to-white/0"></div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-1/5 bg-gradient-to-t from-white to-white/0"></div>
        </div>

        <div className="w-full flex justify-center items-center sm:hidden mt-16 px-4 sm:px-6">
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
      </AnimatedHeader>
    </section>
  );
};

export default Testimonials;
