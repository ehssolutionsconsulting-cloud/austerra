import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import "@/styles/components/service-cards.scss";

const disciplines = [
  {
    modifier: "01",
    title: "Environmental Services",
    href: "/services/environmental",
    image: "/images/services/environmental.jpg",
    imageAlt: "Field team conducting environmental site assessment",
    body: "Comprehensive environmental impact assessments, contamination investigation, remediation management, and regulatory compliance across industrial, infrastructure, and development projects.",
    subServices: [
      "Environmental Impact Assessment",
      "Contamination Investigation",
      "Remediation Management",
      "Regulatory Compliance",
    ],
  },
  {
    modifier: "02",
    title: "Occupational Hygiene",
    href: "/services/occupational-hygiene",
    image: "/images/services/occupational-hygiene.jpg",
    imageAlt: "Occupational hygienist conducting workplace exposure assessment",
    body: "Workplace exposure assessments, hazardous materials surveys, health and safety audits, and biological risk management across mining, construction, and industrial environments.",
    subServices: [
      "Exposure Assessments",
      "Hazardous Materials Surveys",
      "Health & Safety Audits",
      "Biological Risk Management",
    ],
  },
  {
    modifier: "03",
    title: "Geotechnical Engineering",
    href: "/services/geotechnical",
    image: "/images/services/geotechnical.jpg",
    imageAlt: "Geotechnical engineer reviewing slope stability on site",
    body: "Foundation design, site characterisation, slope stability analysis, and infrastructure geotechnics for demanding environments in the resources and construction sectors.",
    subServices: [
      "Foundation Design",
      "Site Characterisation",
      "Slope Stability Analysis",
      "Infrastructure Geotechnics",
    ],
  },
];

interface ServiceCardsProps {
  hideLink?: boolean;
}

export default function ServiceCards({ hideLink }: ServiceCardsProps) {
  return (
    <section className="service-cards" aria-labelledby="disciplines-heading">
      <div className="service-cards__header">
        <h2 id="disciplines-heading">
          <SectionLabel>Core Disciplines</SectionLabel>
        </h2>
        {!hideLink && (
          <Link className="service-cards__all-link" href="/services">
            View All Services →
          </Link>
        )}
      </div>

      <ul className="service-cards__grid" role="list">
        {disciplines.map((d, i) => (
          <li
            key={d.modifier}
            className={`service-cards__card service-cards__card--${d.modifier}`}
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >

            <div className="service-cards__card-image">
              <Image
                src={d.image}
                alt={d.imageAlt}
                fill
                className="service-cards__card-img"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="service-cards__card-content">
              <p className="service-cards__card-number" aria-hidden="true">
                Discipline {d.modifier}
              </p>

              <h3 className="service-cards__card-title">{d.title}</h3>

              <p className="service-cards__card-body">{d.body}</p>

              <ul className="service-cards__card-services" role="list" aria-label={`${d.title} services`}>
                {d.subServices.map((s) => (
                  <li key={s} className="service-cards__card-service">{s}</li>
                ))}
              </ul>
            </div>

            <Link className="service-cards__card-link" href={d.href}>
              Learn More
              <span className="sr-only"> about {d.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
