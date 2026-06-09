import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import "@/styles/components/project-detail.scss";

interface Project {
  slug: string;
  projectId: string;
  client: string;
  year: number;
  location: string;
  discipline: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  highlights?: string[];
}

const disciplineLabel: Record<string, string> = {
  environmental: "Environmental",
  hygiene: "Occupational Hygiene",
  geotechnical: "Geotechnical Engineering",
};

export default function ProjectDetail({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const related = projects
    .filter((p) => p.slug !== project.slug && p.discipline === project.discipline)
    .slice(0, 3);

  const allRelated =
    related.length >= 2
      ? related
      : [
          ...related,
          ...projects
            .filter((p) => p.slug !== project.slug && !related.find((r) => r.slug === p.slug))
            .slice(0, 3 - related.length),
        ];

  return (
    <div className={`project-detail project-detail--${project.discipline}`}>
      {/* Discipline accent band */}
      <div className="project-detail__band" aria-hidden="true" />

      {/* Back nav */}
      <div className="project-detail__back">
        <Link className="project-detail__back-link" href="/projects">
          ← Back to Projects
        </Link>
      </div>

      {/* Header */}
      <div className="project-detail__header">
        <div className="project-detail__header-main">
          <span className="project-detail__project-id">{project.projectId}</span>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__discipline-tag">
            {disciplineLabel[project.discipline] ?? project.discipline}
          </p>
        </div>

        <dl className="project-detail__header-meta">
          <div className="project-detail__meta-item">
            <dt className="project-detail__meta-label">Client</dt>
            <dd className="project-detail__meta-value">{project.client}</dd>
          </div>
          <div className="project-detail__meta-item">
            <dt className="project-detail__meta-label">Year</dt>
            <dd className="project-detail__meta-value">{project.year}</dd>
          </div>
          <div className="project-detail__meta-item">
            <dt className="project-detail__meta-label">Location</dt>
            <dd className="project-detail__meta-value">{project.location}</dd>
          </div>
          <div className="project-detail__meta-item">
            <dt className="project-detail__meta-label">Discipline</dt>
            <dd className="project-detail__meta-value">
              {disciplineLabel[project.discipline] ?? project.discipline}
            </dd>
          </div>
        </dl>
      </div>

      {/* Highlights stats strip */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="project-detail__highlights" aria-label="Project highlights">
          {project.highlights.map((h) => {
            const [num, ...rest] = h.split(" ");
            return (
              <div key={h} className="project-detail__highlight">
                <span className="project-detail__highlight-value">{num}</span>
                <span className="project-detail__highlight-label">{rest.join(" ")}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Body */}
      <div className="project-detail__body">
        <div className="project-detail__content">
          <section aria-labelledby="challenge-heading">
            <span id="challenge-heading" className="project-detail__section-label">
              // The Challenge
            </span>
            <p className="project-detail__description">{project.challenge}</p>
          </section>

          <section aria-labelledby="approach-heading">
            <span id="approach-heading" className="project-detail__section-label">
              // Our Approach
            </span>
            <p className="project-detail__description">{project.approach}</p>
          </section>

          <section aria-labelledby="outcome-heading">
            <span id="outcome-heading" className="project-detail__section-label">
              // Outcome
            </span>
            <p className="project-detail__description">{project.outcome}</p>
          </section>
        </div>

        <aside className="project-detail__sidebar" aria-label="Project details">
          <span className="project-detail__tags-label">Keywords</span>
          <ul className="project-detail__tags" role="list" aria-label="Project keywords">
            {project.tags.map((tag) => (
              <li key={tag} className="project-detail__tag">{tag}</li>
            ))}
          </ul>

          <div className="project-detail__sidebar-meta">
            <div className="project-detail__sidebar-item">
              <span className="project-detail__sidebar-label">Year</span>
              <span className="project-detail__sidebar-value">{project.year}</span>
            </div>
            <div className="project-detail__sidebar-item">
              <span className="project-detail__sidebar-label">Location</span>
              <span className="project-detail__sidebar-value">{project.location}</span>
            </div>
            <div className="project-detail__sidebar-item">
              <span className="project-detail__sidebar-label">Discipline</span>
              <span className="project-detail__sidebar-value">
                {disciplineLabel[project.discipline] ?? project.discipline}
              </span>
            </div>
          </div>
        </aside>
      </div>

      {/* Related projects */}
      {allRelated.length > 0 && (
        <section className="related-projects" aria-labelledby="related-heading">
          <div className="related-projects__header">
            <h2 id="related-heading">
              <SectionLabel>Related Projects</SectionLabel>
            </h2>
            <Link className="related-projects__all-link" href="/projects">
              View All Projects →
            </Link>
          </div>
          <ul className="related-projects__grid" role="list" aria-label="Related projects">
            {allRelated.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Next project teaser */}
      {nextProject && (
        <div className={`project-next project-next--${nextProject.discipline}`}>
          <span className="project-next__label" aria-hidden="true">// Next Project</span>
          <Link className="project-next__link" href={`/projects/${nextProject.slug}`}>
            <div className="project-next__inner">
              <span className="project-next__discipline">
                {disciplineLabel[nextProject.discipline] ?? nextProject.discipline}
              </span>
              <span className="project-next__title">{nextProject.title}</span>
            </div>
            <span className="project-next__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
