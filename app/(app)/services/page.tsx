import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServiceCards from "@/components/home/ServiceCards";

export const metadata: Metadata = {
  title: "Services | Austerra Group",
  description:
    "Environmental consulting, occupational hygiene, and geotechnical engineering services across Australia's infrastructure, energy, mining, and construction sectors.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Disciplines"
        title="Three disciplines. One integrated team."
        body="We bring environmental science, occupational hygiene, and geotechnical engineering together under a single firm — so your project has consistent quality standards across every discipline."
      />
      <ServiceCards hideLink />
    </>
  );
}
