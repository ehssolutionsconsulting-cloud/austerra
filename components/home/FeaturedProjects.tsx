import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { getProjects } from "@/lib/payload";
import "@/styles/components/featured-projects.scss";

export default async function FeaturedProjects() {
  const projects = await getProjects({ featured: true, limit: 3 });

  if (projects.length === 0) return null;

  return (
    <section className="featured-projects" aria-labelledby="projects-heading">
      <div className="featured-projects__header">
        <h2 id="projects-heading">
          <SectionLabel>Featured Projects</SectionLabel>
        </h2>
        <Link className="featured-projects__all-link" href="/projects">
          View All Projects →
        </Link>
      </div>

      <ul className="featured-projects__grid" role="list">
        {projects.map((project, i) => {
          const isFeaturedCard = i === 0;
          const tags = project.tags.slice(0, 3);

          return (
            <li
              key={project.projectId}
              className={`featured-projects__card${isFeaturedCard ? " featured-projects__card--featured" : ""}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="featured-projects__card-image">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} — site photograph`}
                    fill
                    className="featured-projects__card-img"
                    sizes={isFeaturedCard ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 29vw"}
                    priority={isFeaturedCard}
                  />
                ) : null}
              </div>

              <div className="featured-projects__card-content">
                <div className="featured-projects__card-meta">
                  <span className="featured-projects__card-id">{project.projectId}</span>
                  <span className="featured-projects__card-year">{project.year}</span>
                </div>

                <p className="featured-projects__card-client">{project.client}</p>

                <h3 className="featured-projects__card-title">
                  <Link
                    className="featured-projects__card-link"
                    href={`/projects/${project.slug}`}
                  >
                    {project.title}
                  </Link>
                </h3>

                {isFeaturedCard && project.shortDescription && (
                  <p className="featured-projects__card-body">{project.shortDescription}</p>
                )}

                {tags.length > 0 && (
                  <ul className="featured-projects__card-tags" role="list" aria-label="Project tags">
                    {tags.map((tag) => (
                      <li key={tag} className="featured-projects__card-tag">{tag}</li>
                    ))}
                  </ul>
                )}

                <div className="featured-projects__card-footer">
                  <span className="featured-projects__card-location">{project.location}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
