import { Metadata } from "next";
import { Typography } from "@/src/components/ui/typography";
import { ContactForm } from "@/src/components/forms/contact-form";
import { AnimatedHeader } from "@/src/components/ui/animated-header";
import ContactInfos from "@/src/components/forms/contact-infos";

export const metadata: Metadata = {
  title: "Contactez TCS Plomberie à Montpellier",
  description:
    "Besoin d'un dépannage urgent ou devis gratuit ? Contactez TCS Plomberie à Montpellier. Intervention 7j/7 en plomberie, chauffage et climatisation.",
};

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6  pt-12 lg:py-12">
      {/* Header */}
      <AnimatedHeader className="mb-12">
        <Typography as="h1" variant="6xl" weight="bold" className="text-black">
          Contactez-nous
        </Typography>
        <Typography
          as="p"
          variant="xl"
          weight="medium"
          className="text-dark-gray max-w-2xl"
        >
          Besoin d'un devis, d'une intervention ou d'un simple renseignement ?
          <br /> Notre équipe est à votre écoute.
        </Typography>
      </AnimatedHeader>

      {/* Main content */}
      <div className="grid grid-cols-1 min-[1150px]:grid-cols-5 gap-y-12 min-[1150px]:gap-12">
        {/* Contact form */}
        <AnimatedHeader delay={0.4} className="min-[1150px]:col-span-3">
          <ContactForm />
        </AnimatedHeader>

        {/* Contact information */}
        <AnimatedHeader
          delay={0.8}
          className="min-[1150px]:col-span-2 overflow-hidden w-full"
        >
          <ContactInfos />
        </AnimatedHeader>
      </div>
    </main>
  );
}
