import Link from "next/link";
import "@/styles/components/service-detail.scss";

const disciplines = [
  { number: "01", slug: "environmental", label: "Environmental Services" },
  { number: "02", slug: "occupational-hygiene", label: "Occupational Hygiene" },
  { number: "03", slug: "geotechnical", label: "Geotechnical Engineering" },
];

interface DisciplineNavProps {
  activeSlug: string;
}

export default function DisciplineNav({ activeSlug }: DisciplineNavProps) {
  return (
    <nav className="discipline-nav" aria-label="Discipline navigation">
      <ul className="discipline-nav__list" role="list">
        {disciplines.map((d) => {
          const isActive = d.slug === activeSlug;
          return (
            <li key={d.slug} className="discipline-nav__item">
              <Link
                className={`discipline-nav__link discipline-nav__link--0${d.number}${isActive ? " discipline-nav__link--active" : ""}`}
                href={`/services/${d.slug}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="discipline-nav__number">// {d.number}</span>
                {d.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
