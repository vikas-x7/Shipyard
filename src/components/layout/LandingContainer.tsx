import Hero from "../sections/Hero";
import Header from "./Header";

export default function LandingContainer() {
  return (
    <div className="w-full h-screen text-white p-4 bg-[#111110]">
      <Header />
      <Hero />
    </div>
  );
}
