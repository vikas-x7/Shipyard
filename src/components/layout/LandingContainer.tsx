import Features from "../sections/Features";
import Footer from "./Footer";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Process from "../sections/Process";
import Projects from "../sections/Projects";
import Stats from "../sections/Stats";
import Testimonials from "../sections/Testimonials";
import Header from "./Header";

export default function LandingContainer() {
  return (
    <div className="w-full bg-black ">
      <Header />
      <Hero />
      <Intro />
      <Process />
      <Features />
      <Projects />
      <Testimonials />
      <Stats />
      <Footer />
    </div>
  );
}
