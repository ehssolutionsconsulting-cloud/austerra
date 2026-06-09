import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Austerra Group",
  description:
    "Case studies from Austerra Group's environmental, occupational hygiene, and geotechnical engineering projects across Australia.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
    </>
  );
}
