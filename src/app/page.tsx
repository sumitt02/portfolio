import { Preloader } from "@/components/motion/Preloader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Work } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Hero />
      <About />
      <Experience />
      <Expertise />
      <Work />
      <Contact />
    </main>
  );
}
