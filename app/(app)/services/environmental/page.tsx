import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import DisciplineNav from "@/components/services/DisciplineNav";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServiceRelatedProjects from "@/components/services/ServiceRelatedProjects";
import OtherDisciplines from "@/components/services/OtherDisciplines";

export const metadata: Metadata = {
  title: "Environmental Services | Austerra Group",
  description:
    "Comprehensive environmental impact assessments, contamination investigation, remediation management, and regulatory compliance across industrial, infrastructure, and development projects.",
};

export default function EnvironmentalPage() {
  return (
    <>
      <ServiceHero
        disciplineNumber="01"
        eyebrow="Discipline 01 — Environmental"
        title={<>Environmental <em>Services</em></>}
        body="Rigorous environmental consulting across Australia's infrastructure, energy, mining, and construction sectors."
        image="/images/services/environmental.jpg"
        imageAlt="Field team conducting environmental site assessment"
      />
      <DisciplineNav activeSlug="environmental" />
      <ServiceDetail slug="environmental" />
      <ServiceRelatedProjects discipline="environmental" />
      <OtherDisciplines currentSlug="environmental" />
    </>
  );
}
