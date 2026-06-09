"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import SectionLabel from "@/components/ui/SectionLabel";
import Pagination from "@/components/ui/Pagination";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import "@/styles/components/projects-page.scss";

const ITEMS_PER_PAGE = 6;

type FilterKey = "All" | "Environmental" | "OccHyg" | "Geotechnical";

const disciplineMap: Record<string, string> = {
  Environmental: "environmental",
  OccHyg: "hygiene",
  Geotechnical: "geotechnical",
};

const counts: Record<FilterKey, number> = {
  All: projects.length,
  Environmental: projects.filter((p) => p.discipline === "environmental").length,
  OccHyg: projects.filter((p) => p.discipline === "hygiene").length,
  Geotechnical: projects.filter((p) => p.discipline === "geotechnical").length,
};

const filters: FilterKey[] = ["All", "Environmental", "OccHyg", "Geotechnical"];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.discipline === disciplineMap[activeFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (f: FilterKey) => {
    setActiveFilter(f);
    setCurrentPage(1);
  };

  // Re-scan for AOS after the grid re-renders with new cards
  useEffect(() => {
    AOS.refresh();
  }, [activeFilter, currentPage]);

  return (
    <>
      <nav className="projects-filter" aria-label="Filter projects by discipline">
        <ul className="projects-filter__options" role="list">
          {filters.map((f) => (
            <li key={f}>
              <button
                className={`projects-filter__option${activeFilter === f ? " projects-filter__option--active" : ""}`}
                onClick={() => handleFilterChange(f)}
                aria-pressed={activeFilter === f}
              >
                {f}
                <span className="projects-filter__badge" aria-label={`${counts[f]} projects`}>
                  {counts[f]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="projects-grid" aria-labelledby="projects-grid-heading">
        <div className="projects-grid__header">
          <h2 id="projects-grid-heading">
            <SectionLabel>
              {activeFilter === "All" ? "All Projects" : `${activeFilter} Projects`}
            </SectionLabel>
          </h2>
          <span className="projects-grid__count" aria-live="polite">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        <ul className="projects-grid__grid" role="list" aria-label="Projects">
          {paginated.map((project, i) => (
            <li
              key={project.slug}
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>
    </>
  );
}
