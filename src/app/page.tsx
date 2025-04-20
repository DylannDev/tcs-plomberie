import { Hero } from "../components/sections/hero";
import { Services } from "../components/sections/services";
import { WhyUs } from "../components/sections/why-us";
import { Testimonials } from "../components/sections/testimonials";
import { Coverage } from "../components/sections/coverage";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto max-w-[1200px]">
        <Services />
        <WhyUs />
        <Testimonials />
        <Coverage />
      </div>
    </main>
  );
}
