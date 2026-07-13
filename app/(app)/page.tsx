import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import AboutBand from "@/components/home/AboutBand";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import ServiceCards from "@/components/home/ServiceCards";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CtaSection from "@/components/home/CtaSection";

export const revalidate = 3600;

function SectionSkeleton() {
  return (
    <div className="skeleton-section" aria-hidden="true">
      <div className="skeleton-block skeleton-block--heading" />
      <div className="skeleton-block skeleton-block--cards" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBand />
      <IndustriesStrip />
      <Suspense fallback={<SectionSkeleton />}>
        <ServiceCards />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FeaturedProjects />
      </Suspense>
      <CtaSection />
    </>
  );
}
