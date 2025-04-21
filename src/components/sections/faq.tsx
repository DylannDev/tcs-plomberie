import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { faqData } from "@/src/data";
import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";

const Faq = () => {
  return (
    <div className="flex flex-col gap-10 py-10 md:py-20 w-full max-w-[1000px] mx-auto">
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
  );
};

export default Faq;
