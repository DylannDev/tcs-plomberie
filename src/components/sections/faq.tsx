"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { InView } from "../ui/in-view";
import { cn } from "@/src/lib/utils";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  data: FaqItem[];
  title?: string;
  badge?: string;
  className?: string;
  isRichText?: boolean;
}

export function Faq({
  data,
  title = "Foire Aux Questions",
  badge = "FAQ",
  className,
  isRichText = false,
}: FaqProps) {
  return (
    <section className={`relative ${className}`}>
      {!isRichText && (
        <div className="absolute top-0 md:-top-0 lg:-top-10 xl:top-[40%] left-0 w-full aspect-video -z-10 overflow-hidden">
          <Image
            src="/shape-2.svg"
            alt=""
            width={3000}
            height={3000}
            quality={100}
            priority
            className="object-cover object-center scale-105"
          />
        </div>
      )}
      <div
        className={cn(
          "flex flex-col gap-10 py-10 md:py-20 w-full max-w-[1000px] mx-auto",
          !isRichText && "px-4 sm:px-6 lg:px-8"
        )}
      >
        <InView className="text-center">
          <Badge>{badge}</Badge>
          <Typography
            as="h2"
            weight="bold"
            className="text-2xl sm:text-4xl text-balance"
          >
            {title}
          </Typography>
        </InView>
        <InView delay={0.2}>
          <Accordion className="flex flex-col gap-6" type="single" collapsible>
            {data.map((faq, index) => (
              <InView key={faq.id} delay={index * 0.1}>
                <AccordionItem value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {isRichText ? (
                      <div
                        className="rich-text"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              </InView>
            ))}
          </Accordion>
        </InView>
      </div>
    </section>
  );
}
