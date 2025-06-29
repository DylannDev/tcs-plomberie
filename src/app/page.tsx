import { Hero } from "../components/sections/hero";
import { Services } from "../components/sections/services";
import { WhyUs } from "../components/sections/why-us";
import Testimonials from "../components/sections/testimonials";
import { Coverage } from "../components/sections/coverage";
import { Section } from "../components/ui/section";
import { Faq } from "../components/sections/faq";
import { faqHomepage } from "../data";
import { SimilarPosts } from "../components/sections/similar-posts";
import { HeroMobile } from "../components/sections/hero-mobile";
import { Certificate } from "../components/sections/certificate-section";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      {/* <HeroMobile /> */}

      <Section>
        <Services />
        <WhyUs />
      </Section>

      <Section size="large">
        <Certificate />
      </Section>

      <Testimonials />

      <Faq data={faqHomepage} />

      <Section>
        <Coverage />
        <SimilarPosts title="Consultez nos derniers articles de blog" />
      </Section>
    </main>
  );
}
