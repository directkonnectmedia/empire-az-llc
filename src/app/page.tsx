import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Wizard from "@/components/Wizard";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Reviews />
      <Wizard />
      <PreFooterCTA />
      <Footer />
    </main>
  );
}
