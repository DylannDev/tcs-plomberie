import { Hero } from "../components/sections/hero";
import { Services } from "../components/sections/services";
import { WhyUs } from "../components/sections/why-us";
import Testimonials from "../components/sections/testimonials";
import { Coverage } from "../components/sections/coverage";
import { Section } from "../components/ui/section";
import { Faq } from "../components/sections/faq";
import { faqHomepage } from "../data";
import { SimilarPosts } from "../components/sections/similar-posts";

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

      <Faq data={faqHomepage} />

      <Section>
        <Coverage />
        <SimilarPosts title="Consultez nos derniers articles de blog" />
      </Section>
    </main>
  );
}
