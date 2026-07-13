import Image from "next/image";
import Link from "next/link";
import "@/styles/components/projects-page.scss";

interface Project {
  slug: string;
  projectId: string;
  client: string;
  year: number;
  location: string;
  discipline?: string;
  title: string;
  shortDescription: string;
  tags: string[];
  featured?: boolean;
  image?: string | null;
}

function PinIcon() {
  return (
    <svg className="project-card__pin-icon" width="9" height="12" viewBox="0 0 9 12" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M4.5 0C2.015 0 0 2.015 0 4.5 0 7.875 4.5 12 4.5 12S9 7.875 9 4.5C9 2.015 6.985 0 4.5 0zm0 6.375a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75z"/>
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const isRecent = project.year >= 2024;
  const disciplineClass = project.discipline ? ` project-card--${project.discipline}` : "";

  return (
    <article className={`project-card${disciplineClass}`}>
      <div className="project-card__image">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} — site photograph`}
            fill
            className="project-card__img"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
      </div>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__id">
            {isRecent && <span className="project-card__id-dot" aria-label="Recent project" />}
            {project.projectId}
          </span>
          <span className="project-card__year">{project.year}</span>
        </div>

        <p className="project-card__client">{project.client}</p>

        <h3 className="project-card__title">
          <Link className="project-card__link" href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        <p className="project-card__body">{project.shortDescription}</p>

        <ul className="project-card__tags" role="list" aria-label="Project tags">
          {project.tags.slice(0, 3).map((tag) => (
            <li key={tag} className="project-card__tag">{tag}</li>
          ))}
        </ul>

        <p className="project-card__location">
          <PinIcon />
          {project.location}
        </p>
      </div>

      <Link className="project-card__cta" href={`/projects/${project.slug}`}>
        View Case Study
        <span className="sr-only"> — {project.title}</span>
      </Link>
    </article>
  );
}
