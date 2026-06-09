import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data";
import "@/styles/components/service-related-projects.scss";

type Discipline = "environmental" | "hygiene" | "geotechnical";

interface ServiceRelatedProjectsProps {
  discipline: Discipline;
}

export default function ServiceRelatedProjects({ discipline }: ServiceRelatedProjectsProps) {
  const related = projects.filter((p) => p.discipline === discipline).slice(0, 3);
  if (related.length === 0) return null;

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
        {related.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
