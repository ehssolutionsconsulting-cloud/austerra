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
  title: "Occupational Hygiene | Austerra Group",
  description:
    "Workplace exposure assessments, hazardous materials surveys, and health and safety auditing across mining, construction, and industrial environments.",
  openGraph: {
    title: "Occupational Hygiene | Austerra Group",
    description:
      "Workplace exposure assessments, hazardous materials surveys, and health and safety auditing across mining, construction, and industrial environments.",
    type: "website",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "What does an occupational hygienist assess?",
    answer:
      "An occupational hygienist identifies, evaluates, and controls workplace health hazards. These include chemical exposures (dusts, solvents, mineral fibres), physical hazards (noise, vibration, thermal stress, ionising radiation), and biological agents. Assessments involve personal and area monitoring against occupational exposure standards (OES), analysis of results relative to regulatory limits, and recommendations for engineering controls, administrative measures, or respiratory and hearing protective equipment.",
  },
  {
    question: "When is a hazardous materials survey required?",
    answer:
      "A hazardous materials survey is required before any demolition, refurbishment, or disturbance of buildings constructed prior to 1990. It identifies the presence of asbestos-containing materials, lead-based paint, silica-containing materials, and other regulated substances. In Australia, the survey requirement is mandated under the Work Health and Safety Regulations 2011 (Cth) and equivalent state legislation, and must be completed by a competent person prior to works commencing.",
  },
  {
    question: "What is a workplace noise assessment and when is it required?",
    answer:
      "A workplace noise assessment measures employee noise exposure relative to the action level of 85 dB(A) as an eight-hour time-weighted average (L_Aeq,8h) and the peak noise exposure standard of 140 dB(C). Where exposure exceeds these limits, the assessment identifies control measures required under the hierarchy of controls. Noise assessments are required wherever workers may be exposed to hazardous noise, and are mandated under the WHS Regulations for ongoing monitoring where engineering controls cannot fully eliminate the risk.",
  },
  {
    question: "What industries does Austerra service for occupational hygiene?",
    answer:
      "Austerra provides occupational hygiene services across mining and resources, construction, manufacturing, oil and gas, infrastructure, and government facilities. Our team of qualified hygienists are experienced in both routine workplace monitoring and complex, multi-hazard industrial environments.",
  },
];

export default async function OccupationalHygienePage() {
  const [service, relatedProjects] = await Promise.all([
    getServiceBySlug("occupational-hygiene"),
    getProjects({ discipline: "hygiene", limit: 3 }),
  ]);

  const subServices = service?.subServices ?? [
    "Workplace Exposure Assessment",
    "Hazardous Materials Surveys",
    "Asbestos Management Plans",
    "Noise and Vibration Assessment",
    "Health Risk Assessment",
    "Respiratory Protective Equipment Selection",
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Occupational Hygiene",
          description: metadata.description as string,
          slug: "occupational-hygiene",
          subServices,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au" },
          { name: "Services", url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au"}/services` },
          { name: "Occupational Hygiene", url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au"}/services/occupational-hygiene` },
        ])}
      />
      <ServiceHero
        disciplineNumber="02"
        eyebrow="Discipline 02 — Occupational Hygiene"
        title={<>Occupational <em>Hygiene</em></>}
        body="Protecting your workforce through evidence-based monitoring, assessment, and risk management."
        image="/images/services/occupational-hygiene.jpg"
        imageAlt="Occupational hygienist conducting workplace exposure assessment"
      />
      <DisciplineNav activeSlug="occupational-hygiene" />
      {service && <ServiceDetail service={service} />}
      <ServiceFaq faqs={FAQS} />
      <ServiceRelatedProjects projects={relatedProjects} />
      <OtherDisciplines currentSlug="occupational-hygiene" />
    </>
  );
}
