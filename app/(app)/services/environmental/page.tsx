import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import DisciplineNav from "@/components/services/DisciplineNav";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServiceRelatedProjects from "@/components/services/ServiceRelatedProjects";
import OtherDisciplines from "@/components/services/OtherDisciplines";
import { getServiceBySlug, getProjects } from "@/lib/payload";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Environmental Services | Austerra Group",
  description:
    "Comprehensive environmental impact assessments, contamination investigation, remediation management, and regulatory compliance across industrial, infrastructure, and development projects.",
};

export default async function EnvironmentalPage() {
  const [service, relatedProjects] = await Promise.all([
    getServiceBySlug("environmental"),
    getProjects({ discipline: "environmental", limit: 3 }),
  ]);

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
      {service && <ServiceDetail service={service} />}
      <ServiceRelatedProjects projects={relatedProjects} />
      <OtherDisciplines currentSlug="environmental" />
    </>
  );
}
