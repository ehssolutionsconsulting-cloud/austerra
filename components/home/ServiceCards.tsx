import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCardsSlider from "./ServiceCardsSlider";
import { getServices } from "@/lib/payload";
import "@/styles/components/service-cards.scss";

interface ServiceCardsProps {
  hideLink?: boolean;
}

export default async function ServiceCards({ hideLink }: ServiceCardsProps) {
  const services = await getServices({ limit: 5 });

  return (
    <section className="service-cards" aria-labelledby="services-heading">
      <div className="service-cards__header container">
        <h2 id="services-heading">
          <SectionLabel>Services</SectionLabel>
        </h2>
        <div className="service-cards__header-actions">
          {!hideLink && (
            <Link className="service-cards__all-link" href="/services">
              View All Services →
            </Link>
          )}
        </div>
      </div>

      <ServiceCardsSlider services={services} />
    </section>
  );
}
