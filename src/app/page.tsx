import { Hero } from "@/components/Hero";
import { TechStrip } from "@/components/TechStrip";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Experience } from "@/components/Experience";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { EngineeringPrinciples } from "@/components/EngineeringPrinciples";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStrip />
      <FeaturedWork />
      <Experience />
      <SystemArchitecture />
      <EngineeringPrinciples />
      <Skills />
      <Education />
      <Certifications />
      <About />
      <Contact />
    </main>
  );
}
