import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServicesTabsClient from "@/components/services/ServicesTabsClient";
import { getServices } from "@/lib/payload";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Services | AUSTERRA CONSULTING",
  description:
    "Environmental consulting, occupational hygiene, and geotechnical engineering services across Australia's infrastructure, energy, mining, and construction sectors.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        eyebrow="Our Disciplines"
        title="Three disciplines. One integrated team."
        body="We bring environmental science, occupational hygiene, and geotechnical engineering together under a single firm — so your project has consistent quality standards across every discipline."
      />
      <ServicesTabsClient services={services} />
    </>
  );
}
