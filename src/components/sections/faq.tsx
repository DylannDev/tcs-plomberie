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
import { motion } from "framer-motion";

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
            alt="Plombier Montpellier TCS Plomberie"
            width={3000}
            height={3000}
            quality={100}
            priority
            className="object-cover object-center scale-105"
          />
        </div>
      )}
      <div className="flex flex-col gap-10 py-10 md:py-20 w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge>{badge}</Badge>
          <Typography as="h2" variant="4xl" weight="bold">
            {title}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion className="flex flex-col gap-6" type="single" collapsible>
            {data.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
