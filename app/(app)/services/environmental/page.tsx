import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import OtherDisciplines from "@/components/services/OtherDisciplines";
import ServiceFaq, { type FaqItem } from "@/components/services/ServiceFaq";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceBySlug } from "@/lib/payload";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Environmental Services | AUSTERRA CONSULTING",
  description:
    "Comprehensive environmental impact assessments, contamination investigation, remediation management, and regulatory compliance across industrial, infrastructure, and development projects.",
  openGraph: {
    title: "Environmental Services | AUSTERRA CONSULTING",
    description:
      "Comprehensive environmental impact assessments, contamination investigation, remediation management, and regulatory compliance across industrial, infrastructure, and development projects.",
    type: "website",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "What is an Environmental Impact Assessment (EIA)?",
    answer:
      "An Environmental Impact Assessment is a formal process that identifies, predicts, and evaluates the potential environmental effects of a proposed project or development. In Australia, EIAs are required under state and federal legislation for significant projects including infrastructure, mining, and large-scale construction. The report assesses impacts on air, water, soil, ecology, and the community, and proposes mitigation measures to bring residual impacts to an acceptable level.",
  },
  {
    question: "When is a Phase 2 Environmental Site Assessment required?",
    answer:
      "A Phase 2 ESA is required when a Phase 1 assessment identifies a Recognised Environmental Condition — any indication that a site may be contaminated by hazardous substances. It involves physical sampling of soil, groundwater, or surface water to confirm or rule out contamination. It is commonly triggered during property transactions, development applications, and site remediation planning, and must comply with the National Environment Protection (Assessment of Site Contamination) Measure (NEPM).",
  },
  {
    question: "What does contamination remediation involve?",
    answer:
      "Contamination remediation involves removing or treating hazardous substances in soil or groundwater to achieve risk-based clean-up criteria appropriate to the proposed land use. The approach depends on contaminant type, concentration, and site conditions. Options include excavation and off-site disposal, in-situ chemical treatment, bioremediation, soil vapour extraction, or risk-based management through engineered controls. All remediation must comply with applicable NEPM, state EPA, and planning authority requirements.",
  },
  {
    question: "What industries does Austerra service for environmental consulting?",
    answer:
      "Austerra delivers environmental consulting across infrastructure (roads, rail, utilities), resources and energy (mining, oil and gas, renewables), construction and development, and government and defence. Our work spans Queensland, New South Wales, Western Australia, and South Australia.",
  },
];

export default async function EnvironmentalPage() {
  const service = await getServiceBySlug("environmental");

  const subServices = service?.subServices ?? [
    "Environmental Impact Assessment",
    "Phase 1 & Phase 2 ESA",
    "Contamination Investigation",
    "Remediation Management",
    "Flora & Fauna Assessment",
    "Acid Sulfate Soils Assessment",
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Environmental Consulting",
          description: metadata.description as string,
          slug: "environmental",
          subServices,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au" },
          { name: "Services", url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au"}/services` },
          { name: "Environmental", url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au"}/services/environmental` },
        ])}
      />
      <ServiceHero
        disciplineNumber="01"
        eyebrow="Environmental"
        title={<>Environmental <em>Services</em></>}
        body="Rigorous environmental consulting across Australia's infrastructure, energy, mining, and construction sectors."
        image={service?.featuredImage ?? "/images/services/environmental.jpg"}
        imageAlt="Field team conducting environmental site assessment"
      />
      {service && <ServiceDetail service={service} />}
      <ServiceFaq faqs={FAQS} />
      <OtherDisciplines currentSlug="environmental" />
    </>
  );
}
