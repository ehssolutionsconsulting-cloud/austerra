import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsights, getInsightBySlug } from "@/lib/payload";
import InsightDetail from "@/components/insights/InsightDetail";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const revalidate = 3600;
export const dynamicParams = true;

const BASE = process.env.NEXT_PUBLIC_SERVER_URL ?? "https://austerra.com.au";

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
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
      publishedTime: insight.publishedAt,
    },
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) notFound();

  return (
    <article>
      <JsonLd
        data={articleSchema({
          title: insight.title,
          description: insight.excerpt,
          slug: insight.slug,
          publishedAt: insight.publishedAt,
          author: insight.author,
          category: insight.category,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: BASE },
          { name: "Insights", url: `${BASE}/insights` },
          { name: insight.title, url: `${BASE}/insights/${insight.slug}` },
        ])}
      />
      <InsightDetail insight={insight} />
    </article>
  );
}
