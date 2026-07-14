import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import DisciplineNav from "@/components/services/DisciplineNav";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServiceRelatedProjects from "@/components/services/ServiceRelatedProjects";
import OtherDisciplines from "@/components/services/OtherDisciplines";
import ServiceFaq, { type FaqItem } from "@/components/services/ServiceFaq";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceBySlug, getProjects } from "@/lib/payload";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Geotechnical Engineering | Austerra Group",
  description:
    "Foundation design, slope stability analysis, and site characterisation for infrastructure and resources projects across Australia.",
  openGraph: {
    title: "Geotechnical Engineering | Austerra Group",
    description:
      "Foundation design, slope stability analysis, and site characterisation for infrastructure and resources projects across Australia.",
    type: "website",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "What is a geotechnical investigation?",
    answer:
      "A geotechnical investigation characterises the subsurface conditions at a site, including soil and rock type, strength, compressibility, permeability, and groundwater levels. It typically involves drilling or test pitting, field testing (SPT, CPT, pressuremeter), laboratory testing of samples, and engineering interpretation. The results directly inform foundation design, earthwork specifications, pavement design, slope stability assessments, and construction risk management.",
  },
  {
    question: "When is a geotechnical report required?",
    answer:
      "A geotechnical report is required for most construction projects where subsurface conditions are unknown, complex, or variable. This includes buildings, bridges, roads, retaining walls, dams, pipelines, and embankments. Local councils, structural engineers, and infrastructure authorities typically require a geotechnical report as part of the design documentation. In variable ground or Class H site conditions, it is also required for residential construction under AS 2870.",
  },
  {
    question: "What is slope stability analysis?",
    answer:
      "Slope stability analysis assesses the likelihood of a natural or engineered slope failing under static or dynamic (seismic) loading. It uses geotechnical parameters derived from site investigation to calculate factors of safety using limit equilibrium or numerical modelling methods. Applications include cut slopes in road, rail, and mining corridors, mine pit walls, dam embankments, tailings storage facilities, and riverine or coastal erosion assessments. Results guide earthwork design and determine where remediation or monitoring is required.",
  },
  {
    question: "What geotechnical services are needed for infrastructure projects?",
    answer:
      "Infrastructure projects typically require ground investigation, pavement design assessments, foundation recommendations, earthworks design, retaining wall design, and construction material assessments. For linear infrastructure such as roads and pipelines, Austerra provides corridor-scale investigations that balance coverage with cost, combined with risk-based prioritisation of anomalous zones requiring additional investigation.",
  },
];

export default async function GeotechnicalPage() {
  const [service, relatedProjects] = await Promise.all([
    getServiceBySlug("geotechnical"),
    getProjects({ discipline: "geotechnical", limit: 3 }),
  ]);

  const subServices = service?.subServices ?? [
    "Site Investigation & Characterisation",
    "Foundation Design",
    "Slope Stability Analysis",
    "Pavement Design",
    "Retaining Wall Design",
    "Earthworks & Fill Assessment",
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Geotechnical Engineering",
          description: metadata.description as string,
          slug: "geotechnical",
          subServices,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au" },
          { name: "Services", url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au"}/services` },
          { name: "Geotechnical", url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au"}/services/geotechnical` },
        ])}
      />
      <ServiceHero
        disciplineNumber="03"
        eyebrow="Discipline 03 — Geotechnical"
        title={<>Geotechnical <em>Engineering</em></>}
        body="Ground conditions determine project feasibility, design parameters, and construction risk. We get them right."
        image="/images/services/geotechnical.jpg"
        imageAlt="Geotechnical engineer reviewing slope stability on site"
      />
      <DisciplineNav activeSlug="geotechnical" />
      {service && <ServiceDetail service={service} />}
      <ServiceFaq faqs={FAQS} />
      <ServiceRelatedProjects projects={relatedProjects} />
      <OtherDisciplines currentSlug="geotechnical" />
    </>
  );
}
