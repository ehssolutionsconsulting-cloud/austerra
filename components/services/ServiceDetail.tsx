import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import "@/styles/components/service-detail.scss";

interface Service {
  slug: string;
  title: string;
  fullDescription: unknown;
  subServices: string[];
  tags: string[];
  stats: { value: string; label: string }[];
}

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const stats = service.stats;

  return (
    <section
      className="service-detail"
      aria-labelledby="service-detail-heading"
    >
      <div className="service-detail__main" data-aos="fade-right">
        <div className="service-detail__label">
          <SectionLabel>About This Service</SectionLabel>
        </div>

        <h2 id="service-detail-heading" className="service-detail__heading">
          {service.title}
        </h2>

        {service.fullDescription ? (
          <div className="service-detail__body">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <RichText
              data={service.fullDescription as SerializedEditorState}
              className="max-w-none"
            />
          </div>
        ) : null}

        {stats.length > 0 && (
          <ul
            className="service-detail__stats"
            role="list"
            aria-label="Key statistics"
          >
            {stats.map((stat) => (
              <li key={stat.label} className="service-detail__stat">
                <span className="service-detail__stat-value">{stat.value}</span>
                <span className="service-detail__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        )}

        <ul
          className="service-detail__tags"
          role="list"
          aria-label="Relevant topics"
        >
          {service.tags.map((tag) => (
            <li key={tag} className="service-detail__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="service-detail__sidebar"
        data-aos="fade-left"
        data-aos-delay="200"
      >
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
          Enquire about this service
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
