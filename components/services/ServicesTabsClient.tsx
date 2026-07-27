"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CmsService } from "@/lib/payload";
import "@/styles/components/services-tabs.scss";
import "@/styles/components/service-cards.scss";

const TABS = [
  { key: "all", label: "All" },
  { key: "1",   label: "Environmental" },
  { key: "2",   label: "Occupational Hygiene" },
  { key: "3",   label: "Geotechnical" },
];

export default function ServicesTabsClient({ services }: { services: CmsService[] }) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? services
      : services.filter((s) => s.disciplineNumber === activeTab);

  return (
    <section className="services-tabs" aria-label="Services by discipline">
      {/* ── Tab bar ── */}
      <div className="services-tabs__bar" role="tablist" aria-label="Filter by discipline">
        {TABS.map((tab, i) => (
          <button
            key={tab.key}
            id={`tab-${tab.key}`}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls="services-panel"
            tabIndex={activeTab === tab.key ? 0 : -1}
            className={`services-tabs__tab${
              activeTab === tab.key ? " services-tabs__tab--active" : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                setActiveTab(TABS[(i + 1) % TABS.length].key);
              }
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                setActiveTab(TABS[(i - 1 + TABS.length) % TABS.length].key);
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Cards panel ── */}
      <div
        id="services-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="services-tabs__panel"
      >
        {filtered.length === 0 ? (
          <p className="services-tabs__empty">No services available for this discipline.</p>
        ) : (
          <ul className="services-tabs__cards-grid" role="list">
            {filtered.map((service) => (
              <li key={service.slug} className="services-tabs__card-item">
                <article
                  className={`service-cards__card service-cards__card--0${service.disciplineNumber}`}
                >
                  <div className="service-cards__card-image">
                    <Image
                      src={
                        service.featuredImage?.startsWith("http")
                          ? service.featuredImage
                          : `/images/services/${service.slug.toLowerCase()}.jpg`
                      }
                      alt=""
                      fill
                      className="service-cards__card-img"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="service-cards__card-content">
                    <h3 className="service-cards__card-title">{service.title}</h3>
                    {service.shortDescription && (
                      <p className="service-cards__card-body">{service.shortDescription}</p>
                    )}
                    {service.subServices.length > 0 && (
                      <ul
                        className="service-cards__card-services"
                        role="list"
                        aria-label={`${service.title} sub-services`}
                      >
                        {service.subServices.slice(0, 4).map((s) => (
                          <li key={s} className="service-cards__card-service">{s}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="service-cards__card-link"
                  >
                    Learn More
                    <span className="sr-only"> about {service.title}</span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
