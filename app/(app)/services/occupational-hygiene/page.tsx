import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import DisciplineNav from "@/components/services/DisciplineNav";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServiceRelatedProjects from "@/components/services/ServiceRelatedProjects";
import OtherDisciplines from "@/components/services/OtherDisciplines";

export const metadata: Metadata = {
  title: "Occupational Hygiene | Austerra Group",
  description:
    "Workplace exposure assessments, hazardous materials surveys, and health and safety auditing across mining, construction, and industrial environments.",
};

export default function OccupationalHygienePage() {
  return (
    <>
      <ServiceHero
        disciplineNumber="02"
        eyebrow="Discipline 02 — Occupational Hygiene"
        title={<>Occupational <em>Hygiene</em></>}
        body="Protecting your workforce through evidence-based monitoring, assessment, and risk management."
        image="/images/services/occupational-hygiene.jpg"
        imageAlt="Occupational hygienist conducting workplace exposure assessment"
      />
      <DisciplineNav activeSlug="occupational-hygiene" />
      <ServiceDetail slug="occupational-hygiene" />
      <ServiceRelatedProjects discipline="hygiene" />
      <OtherDisciplines currentSlug="occupational-hygiene" />
    </>
  );
}
