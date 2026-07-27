"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { CmsService } from "@/lib/payload";

import "swiper/css";

const disciplineAlt: Record<string, string> = {
  environmental:          "Field team conducting environmental site assessment",
  "occupational-hygiene": "Occupational hygienist conducting workplace exposure assessment",
  geotechnical:           "Geotechnical engineer reviewing slope stability on site",
};

function slugToLabel(slug: string): string {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export default function ServiceCardsSlider({ services }: { services: CmsService[] }) {
  return (
    <div className="service-cards__slider-wrap">
      <button
        className="service-cards__nav-btn service-cards__nav-btn--prev"
        aria-label="Previous service"
      >
        ←
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".service-cards__nav-btn--prev",
          nextEl: ".service-cards__nav-btn--next",
          disabledClass: "service-cards__nav-btn--disabled",
        }}
        slidesPerView={3}
        spaceBetween={2}
        breakpoints={{
          0:   { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        observer
        observeParents
        watchOverflow
      >
        {services.map((service) => {
          const num = service.disciplineNumber.padStart(2, "0");
          const imageSrc = service.featuredImage ?? `/images/services/${service.slug.toLowerCase()}.jpg`;
          const imageAlt = disciplineAlt[service.slug] ?? `${service.title} field work`;

          return (
            <SwiperSlide key={service.slug}>
              <article className={`service-cards__card service-cards__card--${num}`}>
                <div className="service-cards__card-image">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="service-cards__card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="service-cards__card-content">
                  <p className="service-cards__card-number" aria-hidden="true">
                    {slugToLabel(service.slug)}
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
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        className="service-cards__nav-btn service-cards__nav-btn--next"
        aria-label="Next service"
      >
        →
      </button>
    </div>
  );
}
