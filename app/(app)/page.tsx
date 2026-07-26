import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import AboutBand from "@/components/home/AboutBand";
import ServiceCards from "@/components/home/ServiceCards";
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
      <Suspense fallback={<SectionSkeleton />}>
        <ServiceCards />
      </Suspense>
      <CtaSection />
    </>
  );
}
