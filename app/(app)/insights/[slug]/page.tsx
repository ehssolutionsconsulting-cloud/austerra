import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insights } from "@/lib/data";
import InsightDetail from "@/components/insights/InsightDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};
  return {
    title: `${insight.title} | Austerra Group Insights`,
    description: insight.excerpt,
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  return (
    <article>
      <InsightDetail insight={insight} />
    </article>
  );
}
