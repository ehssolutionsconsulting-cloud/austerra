import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import InsightsFilterGrid from "@/components/insights/InsightsFilterGrid";
import { insights } from "@/lib/data";
import "@/styles/components/insights-page.scss";

export const metadata: Metadata = {
  title: "Insights | Austerra Group",
  description:
    "Technical articles and field perspectives from Austerra Group's environmental scientists, occupational hygienists, and geotechnical engineers.",
};

function categoryAccent(category: string): string {
  switch (category) {
    case "Environmental":
      return "insights-featured--environmental";
    case "Geotechnical":
      return "insights-featured--geotechnical";
    case "OccHyg":
      return "insights-featured--occhyg";
    default:
      return "insights-featured--occhyg";
  }
}

function extractPullQuote(text: string): string {
  return text.match(/[^.!?]+[.!?]/)?.[0]?.trim() ?? text.slice(0, 140);
}

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  const date = new Date(featured.publishedAt).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const pullQuote = extractPullQuote(featured.bodyParagraphs[0]);
  const accentClass = categoryAccent(featured.category);

  return (
    <>
      <PageHeader
        eyebrow="Technical Insights"
        title={
          <>
            From the <em>field.</em>
          </>
        }
        body="Practical perspectives from our scientists and engineers — written for project teams, not just specialists."
      />

      <section
        className={`insights-featured ${accentClass}`}
        aria-labelledby="featured-insight-heading"
      >
        <div className="insights-featured__content">
          <div className="insights-featured__label">
            <SectionLabel>Featured Article</SectionLabel>
          </div>
          <span className="insights-featured__category">
            {featured.category}
          </span>
          <h2
            id="featured-insight-heading"
            className="insights-featured__title"
          >
            <Link href={`/insights/${featured.slug}`}>{featured.title}</Link>
          </h2>
          <p className="insights-featured__excerpt">{featured.excerpt}</p>
          <div className="insights-featured__footer">
            <span className="insights-featured__byline">
              {featured.author} · {date} · {featured.readTime}
            </span>
            <Link
              className="insights-featured__link"
              href={`/insights/${featured.slug}`}
            >
              Read Article →
            </Link>
          </div>
        </div>
        <div className="insights-featured__pull" aria-hidden="true">
          <blockquote className="insights-featured__pull-quote">
            {pullQuote}
          </blockquote>
        </div>
      </section>

      <InsightsFilterGrid insights={rest} />
    </>
  );
}
