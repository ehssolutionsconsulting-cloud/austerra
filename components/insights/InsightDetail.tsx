import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import SectionLabel from "@/components/ui/SectionLabel";
import InsightCard from "./InsightCard";
import ReadingProgressBar from "./ReadingProgressBar";
import { getInsights } from "@/lib/payload";
import "@/styles/components/insights-page.scss";

interface Insight {
  slug: string;
  publishedAt: string;
  category: string;
  title: string;
  author: string;
  readTime: string;
  body: unknown;
}

export default async function InsightDetail({ insight }: { insight: Insight }) {
  const allInsights = await getInsights();

  const date = new Date(insight.publishedAt).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const readMinutes = insight.readTime.replace(/[^0-9]/g, "").padStart(2, "0");

  const related = allInsights
    .filter((i) => i.slug !== insight.slug && i.category === insight.category)
    .slice(0, 3);

  const moreArticles =
    related.length >= 2
      ? related
      : [
          ...related,
          ...allInsights
            .filter(
              (i) =>
                i.slug !== insight.slug &&
                !related.find((r) => r.slug === i.slug),
            )
            .slice(0, 3 - related.length),
        ];

  return (
    <>
      <ReadingProgressBar />

      <div className="insight-detail__back">
        <Link className="insight-detail__back-link" href="/insights">
          ← Back to Insights
        </Link>
      </div>

      <header className="insight-detail__header">
        <div className="insight-detail__header-main">
          <span className="insight-detail__category">{insight.category}</span>
          <h1 className="insight-detail__title">{insight.title}</h1>
          <div className="insight-detail__byline">
            <span className="insight-detail__date">{date}</span>
          </div>
        </div>
        <div
          className="insight-detail__header-meta"
          aria-label="Article metadata"
        >
          <p className="insight-detail__read-number" aria-hidden="true">
            {readMinutes}
          </p>
          <span className="insight-detail__read-label">Min Read</span>
          <hr className="insight-detail__header-rule" aria-hidden="true" />
          {insight.author && (
            <span className="insight-detail__meta-author">
              {insight.author}
            </span>
          )}
        </div>
      </header>

      <div className="insight-detail__body">
        <div className="insight-detail__content">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {insight.body ? (
            <RichText
              data={insight.body as SerializedEditorState}
              className="max-w-none"
            />
          ) : null}
        </div>
        <aside className="insight-detail__sidebar" aria-label="Article details">
          <div className="insight-detail__sidebar-group">
            <span className="insight-detail__sidebar-label">Category</span>
            <span className="insight-detail__sidebar-value">
              {insight.category}
            </span>
          </div>
          {insight.author && (
            <div className="insight-detail__sidebar-group">
              <span className="insight-detail__sidebar-label">Author</span>
              <span className="insight-detail__sidebar-value">
                {insight.author}
              </span>
            </div>
          )}
          <div className="insight-detail__sidebar-group">
            <span className="insight-detail__sidebar-label">Reading Time</span>
            <span className="insight-detail__sidebar-value">
              {insight.readTime}
            </span>
          </div>
        </aside>
      </div>

      {moreArticles.length > 0 && (
        <>
          <div className="insight-detail__article-end">
            <hr className="insight-detail__end-rule" aria-hidden="true" />
            <div className="insight-detail__end-cta">
              <p className="insight-detail__end-cta-text">
                Want to discuss this topic with our team?
              </p>
              <Link className="insight-detail__end-cta-link" href="/contact">
                Contact Us →
              </Link>
            </div>
          </div>

          <section
            className="more-articles"
            aria-labelledby="more-articles-heading"
          >
            <div className="more-articles__header">
              <h2 id="more-articles-heading">
                <SectionLabel>More Articles</SectionLabel>
              </h2>
              <Link className="more-articles__all-link" href="/insights">
                View All Insights →
              </Link>
            </div>
            <ul
              className="more-articles__grid"
              role="list"
              aria-label="More articles"
            >
              {moreArticles.map((article, i) => (
                <li
                  key={article.slug}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <InsightCard insight={article} index={i} dark />
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </>
  );
}
