import { projects } from "@/lib/data";
import "@/styles/components/projects-hero.scss";

function getStateCount(projects: typeof import("@/lib/data").projects) {
  const states = new Set(
    projects.map((p) => p.location.split(",").pop()?.trim()).filter(Boolean)
  );
  return states.size;
}

export default function ProjectsHero() {
  const stats = [
    { value: String(projects.length), label: "Projects" },
    { value: "3", label: "Disciplines" },
    { value: String(getStateCount(projects)), label: "States" },
  ];

  return (
    <header className="projects-hero" aria-labelledby="projects-hero-heading">
      <div className="projects-hero__inner">
        <p className="projects-hero__eyebrow" aria-hidden="true">// Our Work</p>
        <h1 id="projects-hero-heading" className="projects-hero__heading">
          <span className="projects-hero__word">Projects</span>{" "}
          <span className="projects-hero__word">that</span>{" "}
          <em className="projects-hero__word">hold&nbsp;up.</em>
        </h1>
        <p className="projects-hero__sub">
          A selection of completed work across three disciplines — defensible methodology,
          regulatory credibility, and field-tested outcomes.
        </p>
      </div>

      <dl className="projects-hero__stats">
        {stats.map((s) => (
          <div key={s.label} className="projects-hero__stat">
            <dt className="projects-hero__stat-label">{s.label}</dt>
            <dd
              className="projects-hero__stat-value"
              data-countup={s.value}
            >
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
