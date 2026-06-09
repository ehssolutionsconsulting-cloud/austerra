import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import DisciplineNav from "@/components/services/DisciplineNav";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServiceRelatedProjects from "@/components/services/ServiceRelatedProjects";
import OtherDisciplines from "@/components/services/OtherDisciplines";

export const metadata: Metadata = {
  title: "Geotechnical Engineering | Austerra Group",
  description:
    "Foundation design, slope stability analysis, and site characterisation for infrastructure and resources projects across Australia.",
};

export default function GeotechnicalPage() {
  return (
    <>
      <ServiceHero
        disciplineNumber="03"
        eyebrow="Discipline 03 — Geotechnical"
        title={<>Geotechnical <em>Engineering</em></>}
        body="Ground conditions determine project feasibility, design parameters, and construction risk. We get them right."
        image="/images/services/geotechnical.jpg"
        imageAlt="Geotechnical engineer reviewing slope stability on site"
      />
      <DisciplineNav activeSlug="geotechnical" />
      <ServiceDetail slug="geotechnical" />
      <ServiceRelatedProjects discipline="geotechnical" />
      <OtherDisciplines currentSlug="geotechnical" />
    </>
  );
}
