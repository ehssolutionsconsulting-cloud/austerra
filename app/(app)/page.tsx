import Hero from "@/components/home/Hero";
import AboutBand from "@/components/home/AboutBand";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import ServiceCards from "@/components/home/ServiceCards";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBand />
      <IndustriesStrip />
      <ServiceCards />
      <FeaturedProjects />
      <CtaSection />
    </>
  );
}
