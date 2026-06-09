import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";
import "@/styles/components/service-detail.scss";

const disciplineStats: Record<string, Array<{ value: string; label: string }>> = {
  environmental: [
    { value: "80+", label: "EIA processes" },
    { value: "15 yrs", label: "Experience" },
    { value: "QLD · NSW · WA", label: "Key states" },
  ],
  "occupational-hygiene": [
    { value: "500+", label: "Assessments" },
    { value: "NATA", label: "Accredited" },
    { value: "Mining + Construction", label: "Sectors" },
  ],
  geotechnical: [
    { value: "200+", label: "Investigations" },
    { value: "CPEng", label: "Registered" },
    { value: "All states", label: "Coverage" },
  ],
};

interface ServiceDetailProps {
  slug: string;
}

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  const stats = disciplineStats[slug] ?? [];

  return (
    <section className="service-detail" aria-labelledby="service-detail-heading">
      <div className="service-detail__main" data-aos="fade-right">
        <div className="service-detail__label">
          <SectionLabel>About This Discipline</SectionLabel>
        </div>

        <h2 id="service-detail-heading" className="service-detail__heading">
          {service.title}
        </h2>

        <p className="service-detail__body">{service.fullDescription}</p>

        {stats.length > 0 && (
          <ul className="service-detail__stats" role="list" aria-label="Key statistics">
            {stats.map((stat) => (
              <li key={stat.label} className="service-detail__stat">
                <span className="service-detail__stat-value">{stat.value}</span>
                <span className="service-detail__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="service-detail__tags" role="list" aria-label="Relevant topics">
          {service.tags.map((tag) => (
            <li key={tag} className="service-detail__tag">{tag}</li>
          ))}
        </ul>
      </div>

      <div className="service-detail__sidebar" data-aos="fade-left" data-aos-delay="200">
        <span className="service-detail__services-label">Services Include</span>
        <ul
          className="service-detail__services-list"
          role="list"
          aria-label={`${service.title} services`}
        >
          {service.subServices.map((s, i) => (
            <li
              key={s}
              className="service-detail__service-item"
              data-aos="fade-left"
              data-aos-delay={i * 60}
            >
              {s}
            </li>
          ))}
        </ul>
        <Link className="service-detail__sidebar-cta" href="/contact">
          Enquire about this discipline
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
