import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { getServices } from "@/lib/payload";
import "@/styles/components/service-cards.scss";

const disciplineAlt: Record<string, string> = {
  environmental:        "Field team conducting environmental site assessment",
  "occupational-hygiene": "Occupational hygienist conducting workplace exposure assessment",
  geotechnical:         "Geotechnical engineer reviewing slope stability on site",
};

interface ServiceCardsProps {
  hideLink?: boolean;
}

export default async function ServiceCards({ hideLink }: ServiceCardsProps) {
  const services = await getServices();

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
        {services.map((service, i) => {
          const num = service.disciplineNumber.padStart(2, "0");
          const imageSrc = service.featuredImage ?? `/images/services/${service.slug}.jpg`;
          const imageAlt = disciplineAlt[service.slug] ?? `${service.title} field work`;

          return (
            <li
              key={service.slug}
              className={`service-cards__card service-cards__card--${num}`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="service-cards__card-image">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="service-cards__card-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
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

              <Link className="service-cards__card-link" href={`/services/${service.slug}`}>
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
