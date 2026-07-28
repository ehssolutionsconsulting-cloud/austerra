import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import OtherDisciplines from "@/components/services/OtherDisciplines";
import ServiceFaq, { type FaqItem } from "@/components/services/ServiceFaq";
import JsonLd from "@/components/seo/JsonLd";
import { getServices, getServiceBySlug } from "@/lib/payload";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const revalidate = 3600;
export const dynamicParams = true;

const BASE = process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au";

interface Props {
  params: Promise<{ slug: string }>;
}

// Hero config keyed by disciplineNumber from CMS ("1" | "2" | "3")
const HERO_CONFIG: Record<
  string,
  {
    eyebrow: string;
    title: React.ReactNode;
    body: string;
    image: string;
    imageAlt: string;
    disciplineNumber: "01" | "02" | "03";
    disciplineSlug: string;
    faqs: FaqItem[];
  }
> = {
  "1": {
    eyebrow: "Environmental",
    title: <>Environmental <em>Services</em></>,
    body: "Rigorous environmental consulting across Australia's infrastructure, energy, mining, and construction sectors.",
    image: "/images/services/environmental.jpg",
    imageAlt: "Field team conducting environmental site assessment",
    disciplineNumber: "01",
    disciplineSlug: "environmental",
    faqs: [
      {
        question: "What is an Environmental Impact Assessment (EIA)?",
        answer:
          "An Environmental Impact Assessment is a formal process that identifies, predicts, and evaluates the potential environmental effects of a proposed project or development. In Australia, EIAs are required under state and federal legislation for significant projects including infrastructure, mining, and large-scale construction.",
      },
      {
        question: "When is a Phase 2 Environmental Site Assessment required?",
        answer:
          "A Phase 2 ESA is required when a Phase 1 assessment identifies a Recognised Environmental Condition — any indication that a site may be contaminated by hazardous substances. It involves physical sampling of soil, groundwater, or surface water to confirm or rule out contamination.",
      },
      {
        question: "What does contamination remediation involve?",
        answer:
          "Contamination remediation involves removing or treating hazardous substances in soil or groundwater to achieve risk-based clean-up criteria appropriate to the proposed land use. Options include excavation and off-site disposal, in-situ chemical treatment, bioremediation, and soil vapour extraction.",
      },
    ],
  },
  "2": {
    eyebrow: "Occupational Hygiene",
    title: <>Occupational <em>Hygiene</em></>,
    body: "Protecting your workforce through evidence-based monitoring, assessment, and risk management.",
    image: "/images/services/occupational-hygiene.jpg",
    imageAlt: "Occupational hygienist conducting workplace exposure assessment",
    disciplineNumber: "02",
    disciplineSlug: "occupational-hygiene",
    faqs: [
      {
        question: "What does an occupational hygienist assess?",
        answer:
          "An occupational hygienist identifies, evaluates, and controls workplace health hazards. These include chemical exposures (dusts, solvents, mineral fibres), physical hazards (noise, vibration, thermal stress), and biological agents. Assessments involve personal and area monitoring against occupational exposure standards.",
      },
      {
        question: "When is a hazardous materials survey required?",
        answer:
          "A hazardous materials survey is required before any demolition, refurbishment, or disturbance of buildings constructed prior to 1990. It identifies the presence of asbestos-containing materials, lead-based paint, and other regulated substances. In Australia, this is mandated under the Work Health and Safety Regulations 2011.",
      },
      {
        question: "What is a workplace noise assessment and when is it required?",
        answer:
          "A workplace noise assessment measures employee noise exposure relative to the action level of 85 dB(A) as an eight-hour time-weighted average. Noise assessments are required wherever workers may be exposed to hazardous noise under WHS Regulations.",
      },
    ],
  },
  "3": {
    eyebrow: "Geotechnical",
    title: <>Geotechnical <em>Engineering</em></>,
    body: "Ground conditions determine project feasibility, design parameters, and construction risk. We get them right.",
    image: "/images/services/geotechnical.jpg",
    imageAlt: "Geotechnical engineer reviewing slope stability on site",
    disciplineNumber: "03",
    disciplineSlug: "geotechnical",
    faqs: [
      {
        question: "What is a geotechnical investigation?",
        answer:
          "A geotechnical investigation characterises the subsurface conditions at a site, including soil and rock type, strength, compressibility, permeability, and groundwater levels. It involves drilling or test pitting, field testing, laboratory testing, and engineering interpretation.",
      },
      {
        question: "When is a geotechnical report required?",
        answer:
          "A geotechnical report is required for most construction projects where subsurface conditions are unknown, complex, or variable. This includes buildings, bridges, roads, retaining walls, dams, pipelines, and embankments.",
      },
      {
        question: "What is slope stability analysis?",
        answer:
          "Slope stability analysis assesses the likelihood of a natural or engineered slope failing under static or dynamic loading. It uses geotechnical parameters derived from site investigation to calculate factors of safety using limit equilibrium or numerical modelling methods.",
      },
    ],
  },
};

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-");
  const service =
    (await getServiceBySlug(normalizedSlug)) ?? (await getServiceBySlug(slug));
  if (!service) return {};
  return {
    title: `${service.title} | AUSTERRA CONSULTING`,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      type: "website",
    },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  // Normalize slug before lookup: "Occupational Hygiene" → "occupational-hygiene"
  const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-");
  const service =
    (await getServiceBySlug(normalizedSlug)) ?? (await getServiceBySlug(slug));
  if (!service) notFound();

  const config = HERO_CONFIG[service.disciplineNumber];
  if (!config) notFound();

  const subServices = service.subServices.length > 0
    ? service.subServices
    : [];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.shortDescription,
          slug,
          subServices,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: BASE },
          { name: "Services", url: `${BASE}/services` },
          { name: service.title, url: `${BASE}/services/${slug}` },
        ])}
      />
      <ServiceHero
        disciplineNumber={config.disciplineNumber}
        eyebrow={config.eyebrow}
        title={config.title}
        body={config.body}
        image={service.featuredImage ?? config.image}
        imageAlt={config.imageAlt}
      />
      <ServiceDetail service={service} />
      {config.faqs.length > 0 && <ServiceFaq faqs={config.faqs} />}
      <OtherDisciplines currentSlug={slug} />
    </>
  );
}
