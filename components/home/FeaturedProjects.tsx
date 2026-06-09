import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import "@/styles/components/featured-projects.scss";

const projects = [
  {
    id: "PRJ-2024-001",
    year: 2024,
    client: "Tier 1 Infrastructure",
    title: "Contamination Assessment & Remediation",
    body: "Comprehensive site investigation and remediation strategy for a 12-hectare brownfield redevelopment in Western Sydney, including Phase 1 and Phase 2 ESA, risk assessment, and regulatory liaison.",
    tags: ["Environmental", "Remediation", "NSW"],
    location: "Western Sydney, NSW",
    href: "/projects/contamination-assessment-western-sydney",
    image: "/images/projects/contamination-assessment.jpg",
    imageAlt: "Aerial view of brownfield site under environmental investigation",
    featured: true,
  },
  {
    id: "PRJ-2024-012",
    year: 2024,
    client: "Mining Co.",
    title: "Occupational Hygiene — Underground Survey",
    body: null,
    tags: ["OccHyg", "Mining", "WA"],
    location: "Pilbara, WA",
    href: "/projects/underground-hygiene-survey",
    image: "/images/projects/underground-hygiene.jpg",
    imageAlt: "Underground mining tunnel with safety equipment",
    featured: false,
  },
  {
    id: "PRJ-2023-034",
    year: 2023,
    client: "State Roads Authority",
    title: "Geotechnical — Highway Slope Stability",
    body: null,
    tags: ["Geotechnical", "Infrastructure", "QLD"],
    location: "South East QLD",
    href: "/projects/highway-slope-stability-qld",
    image: "/images/projects/slope-stability.jpg",
    imageAlt: "Mountain highway corridor under geotechnical assessment",
    featured: false,
  },
];

export default function FeaturedProjects() {
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
        {projects.map((project, i) => (
          <li
            key={project.id}
            className={`featured-projects__card${project.featured ? " featured-projects__card--featured" : ""}`}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="featured-projects__card-image">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="featured-projects__card-img"
                sizes={project.featured ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 29vw"}
                priority={project.featured}
              />
            </div>

            <div className="featured-projects__card-content">
              <div className="featured-projects__card-meta">
                <span className="featured-projects__card-id">{project.id}</span>
                <span className="featured-projects__card-year">{project.year}</span>
              </div>

              <p className="featured-projects__card-client">{project.client}</p>

              <h3 className="featured-projects__card-title">
                <Link className="featured-projects__card-link" href={project.href}>
                  {project.title}
                </Link>
              </h3>

              {project.body && (
                <p className="featured-projects__card-body">{project.body}</p>
              )}

              <ul className="featured-projects__card-tags" role="list" aria-label="Project tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="featured-projects__card-tag">{tag}</li>
                ))}
              </ul>

              <div className="featured-projects__card-footer">
                <span className="featured-projects__card-location">{project.location}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
