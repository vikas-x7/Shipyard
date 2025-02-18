import Features from "../sections/Features";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Process from "../sections/Process";
import Projects from "../sections/Projects";
import Testimonials from "../sections/Testimonials";
import Header from "./Header";

export default function LandingContainer() {
  return (
    <div className="w-full text-white bg-[#101010]">
      <Header />
      <Hero />
      <Intro />
      <Process />
      <Features />
      <Projects />
      <Testimonials />
    </div>
  );
}
