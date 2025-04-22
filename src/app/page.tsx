import { Hero } from "../components/sections/hero";
import { Services } from "../components/sections/services";
import { WhyUs } from "../components/sections/why-us";
import Testimonials from "../components/sections/testimonials";
import { Coverage } from "../components/sections/coverage";
import { Section } from "../components/ui/section";
import Faq from "../components/sections/faq";
import { PreFooter } from "../components/sections/pre-footer";
import { Footer } from "../components/layout/footer";

export default function Home() {
  return (
    <main className="w-full">
      <Section size="large">
        <Hero />
      </Section>
      <Section>
        <Services />
        <WhyUs />
      </Section>
      <Testimonials />

      <Faq />

      <Section>
        <Coverage />
        <PreFooter />
      </Section>
    </main>
  );
}
