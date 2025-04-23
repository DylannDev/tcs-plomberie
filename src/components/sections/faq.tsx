import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { faqData } from "@/src/data";
import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import Image from "next/image";

const Faq = () => {
  return (
    <section className="relative">
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
      <div className="flex flex-col gap-10 py-10 md:py-20 w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge>FAQ</Badge>
          <Typography as="h2" variant="4xl" weight="bold">
            Foire Aux Questions
          </Typography>
        </div>
        <Accordion className="flex flex-col gap-6" type="single" collapsible>
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
