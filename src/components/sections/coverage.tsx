import { CoverageTabs } from "./coverage-tabs";
import { Typography } from "../ui/typography";
import { Badge } from "../ui/badge";
import { ButtonCall } from "../ui/button-call";
import { InView } from "../ui/in-view";

export function Coverage() {
  return (
    <section id="zone-intervention" className="py-20 bg-muted">
      <div className="">
        <InView className="text-center mb-12">
          <Badge>Villes Desservies</Badge>
          <Typography
            as="h2"
            variant="4xl"
            weight="bold"
            lineHeight="tight"
            className="mb-4"
          >
            Nos zones d&apos;intervention{" "}
            <br className="hidden sm:block text-balance" /> autour de
            Montpellier
          </Typography>
          <Typography
            as="p"
            variant="lg"
            className="text-dark-gray text-balance"
          >
            Basés à Montpellier, nous intervenons dans toute la métropole et les
            villes voisines <br className="hidden sm:block" /> de l&apos;Hérault
            pour vos besoins en plomberie, chauffage et climatisation.
          </Typography>
        </InView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <CoverageTabs />

          <InView className="relative rounded-3xl w-full aspect-square overflow-hidden">
            <iframe
              title="Carte Montpellier"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46221.341758509014!2d3.832970158538289!3d43.61000075252693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0725dd9db1%3A0xad8756742894e802!2sMontpellier!5e0!3m2!1sfr!2sfr!4v1745274562379!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </InView>
        </div>
        <InView>
          <div className="mt-12 text-center">
            <Typography as="p" variant="lg" className="text-dark-gray mb-6">
              Vous ne voyez pas votre ville ? Consultez la liste complète de nos
              zones d&apos;intervention dans le pied de page.
            </Typography>

            <ButtonCall />
          </div>
        </InView>
      </div>
    </section>
  );
}
