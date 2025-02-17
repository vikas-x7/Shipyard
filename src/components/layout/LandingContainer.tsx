import Features from "../sections/Features";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Process from "../sections/Process";
import Header from "./Header";

export default function LandingContainer() {
  return (
    <div className="w-full text-white bg-[#101010]">
      <Header />
      <Hero />
      <Intro />
      <Process />
      <Features />
    </div>
  );
}
