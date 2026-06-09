import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";
import "@/styles/components/service-detail.scss";
import "@/styles/components/service-cards.scss";

const disciplineImages: Record<string, { src: string; alt: string }> = {
  environmental: {
    src: "/images/services/environmental.jpg",
    alt: "Field team conducting environmental site assessment",
  },
  "occupational-hygiene": {
    src: "/images/services/occupational-hygiene.jpg",
    alt: "Occupational hygienist conducting workplace exposure assessment",
  },
  geotechnical: {
    src: "/images/services/geotechnical.jpg",
    alt: "Geotechnical engineer reviewing slope stability on site",
  },
};

interface OtherDisciplinesProps {
  currentSlug: string;
}

export default function OtherDisciplines({ currentSlug }: OtherDisciplinesProps) {
  const others = services.filter((s) => s.slug !== currentSlug);

  return (
    <section className="other-disciplines" aria-labelledby="other-disciplines-heading">
      <div className="other-disciplines__header">
        <h2 id="other-disciplines-heading">
          <SectionLabel>Other Disciplines</SectionLabel>
        </h2>
      </div>

      <ul
        className="service-cards__grid service-cards__grid--two-col"
        role="list"
      >
        {others.map((service, i) => {
          const img = disciplineImages[service.slug];
          const num = `0${service.disciplineNumber}` as "01" | "02" | "03";
          return (
            <li
              key={service.slug}
              className={`service-cards__card service-cards__card--${num}`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="service-cards__card-image">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="service-cards__card-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="service-cards__card-content">
                <p className="service-cards__card-number" aria-hidden="true">
                  Discipline {num}
                </p>
                <h3 className="service-cards__card-title">{service.title}</h3>
                <p className="service-cards__card-body">{service.shortDescription}</p>
                <ul
                  className="service-cards__card-services"
                  role="list"
                  aria-label={`${service.title} services`}
                >
                  {service.subServices.slice(0, 4).map((s) => (
                    <li key={s} className="service-cards__card-service">{s}</li>
                  ))}
                </ul>
              </div>

              <Link
                className="service-cards__card-link"
                href={`/services/${service.slug}`}
              >
                Learn More
                <span className="sr-only"> about {service.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
