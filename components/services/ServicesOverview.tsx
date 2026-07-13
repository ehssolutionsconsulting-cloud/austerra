import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { getServices } from "@/lib/payload";
import "@/styles/components/services-overview.scss";

export default async function ServicesOverview() {
  const services = await getServices();

  return (
    <section className="services-overview" aria-label="Our disciplines">
      {services.map((service) => (
        <article key={service.slug} className="services-overview__discipline">
          <div
            className={`services-overview__accent-bar services-overview__accent-bar--0${service.disciplineNumber}`}
            aria-hidden="true"
          />

          <div className="services-overview__discipline-sidebar">
            <div>
              <span className="services-overview__discipline-number">
                Discipline 0{service.disciplineNumber}
              </span>
              <h2 className="services-overview__discipline-title">{service.title}</h2>
            </div>
            <Link
              className="services-overview__discipline-link"
              href={`/services/${service.slug}`}
            >
              Full Detail →
            </Link>
          </div>

          <div className="services-overview__discipline-body">
            {service.fullDescription ? (
              <div className="services-overview__discipline-desc">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <RichText data={service.fullDescription as SerializedEditorState} className="max-w-none"  />
              </div>
            ) : null}

            <span className="services-overview__services-label">Services include</span>
            <ul
              className="services-overview__services-list"
              role="list"
              aria-label={`${service.title} services`}
            >
              {service.subServices.map((s) => (
                <li key={s} className="services-overview__service-item">{s}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
