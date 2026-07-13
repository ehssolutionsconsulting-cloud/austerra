import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsights, getInsightBySlug } from "@/lib/payload";
import InsightDetail from "@/components/insights/InsightDetail";

export const revalidate = 3600;
export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const insights = await getInsights();
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) return {};
  return {
    title: `${insight.title} | Austerra Group Insights`,
    description: insight.excerpt,
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) notFound();

  return (
    <article>
      <InsightDetail insight={insight} />
    </article>
  );
}
