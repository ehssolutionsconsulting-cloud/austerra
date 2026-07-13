import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/projects/ProjectCard";
import "@/styles/components/service-related-projects.scss";

import type { CmsProject } from "@/lib/payload";

interface ServiceRelatedProjectsProps {
  projects: CmsProject[];
}

export default function ServiceRelatedProjects({ projects }: ServiceRelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="service-related" aria-labelledby="service-related-heading">
      <div className="service-related__header">
        <h2 id="service-related-heading">
          <SectionLabel>Related Projects</SectionLabel>
        </h2>
        <Link className="service-related__all-link" href="/projects">
          View All Projects →
        </Link>
      </div>

      <ul className="service-related__grid" role="list" aria-label="Related projects">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
