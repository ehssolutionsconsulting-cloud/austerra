import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { getProjects, getServices } from "@/lib/payload";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects | Austerra Group",
  description:
    "Case studies from Austerra Group's environmental, occupational hygiene, and geotechnical engineering projects across Australia.",
};

export default async function ProjectsPage() {
  const [projects, services] = await Promise.all([getProjects(), getServices()]);

  const stateCount = new Set(
    projects.map((p) => p.location.split(",").pop()?.trim()).filter(Boolean)
  ).size;

  return (
    <>
      <ProjectsHero count={projects.length} stateCount={stateCount} disciplineCount={services.length} />
      <ProjectsGrid projects={projects} />
    </>
  );
}
