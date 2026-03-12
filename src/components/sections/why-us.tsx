import { Badge } from "../ui/badge";
import { Typography } from "../ui/typography";
import { Zap, FileText, Wrench } from "lucide-react";
import Image from "next/image";
import { ButtonCall } from "../ui/button-call";
import { InView } from "../ui/in-view";

const reasons = [
  {
    title: "Intervention rapide",
    description:
      "Votre urgence ne peut pas attendre ? Nous intervenons 7j/7 à Montpellier et ses alentours, souvent dans la journée.",
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Devis transparent",
    description:
      "Pas de surprise : vous recevez un devis clair avant chaque intervention. Tout est expliqué, sans frais cachés.",
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Artisan qualifié",
    description:
      "Chaque intervention est réalisée avec soin, selon les normes en vigueur. Notre priorité, un travail bien fait, et un client satisfait.",
    icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
];

export function WhyUs() {
  return (
    <section className="pb-20 flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        <InView className="text-center lg:text-left">
          <Badge>Nos Atouts</Badge>
          <Typography as="h2" variant="3xl" weight="bold" className="mb-4">
            Pourquoi nous choisir ?
          </Typography>
          <hr className="text-light-gray my-6" />
        </InView>

        <div className="flex flex-col">
          {reasons.map((reason, index) => (
            <InView key={reason.title} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="bg-yellow rounded-full p-2 sm:p-3 text-black">
                  {reason.icon}
                </div>
                <div>
                  <Typography
                    as="h3"
                    variant="2xl"
                    weight="semibold"
                    className="mb-2"
                  >
                    {reason.title}
                  </Typography>
                  <Typography as="p" variant="lg" className="text-dark-gray">
                    {reason.description}
                  </Typography>
                </div>
              </div>
              {index !== reasons.length - 1 && (
                <hr className="text-light-gray my-6" />
              )}
            </InView>
          ))}
        </div>
        <div className="pt-10">
          <ButtonCall />
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 lg:h-[700px] min-h-[300px] aspect-video lg:aspect-square overflow-hidden rounded-3xl">
        <Image
          src="/plombier-7.jpg"
          alt="Plombier - TCS Plomberie"
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          loading="lazy"
          className="object-cover object-top lg:object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </section>
  );
}
