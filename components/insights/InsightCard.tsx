import Link from "next/link";
import "@/styles/components/insights-page.scss";

interface Insight {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  publishedAt: string;
}

interface InsightCardProps {
  insight: Insight;
  index?: number;
  wide?: boolean;
  dark?: boolean;
}

export default function InsightCard({
  insight,
  index = 0,
  wide = false,
  dark = false,
}: InsightCardProps) {
  const date = new Date(insight.publishedAt).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const ghostNum = String(index + 1).padStart(2, "0");

  const classes = [
    "insight-card",
    wide && "insight-card--wide",
    dark && "insight-card--dark",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={classes}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <span className="insight-card__ghost-number" aria-hidden="true">
        {ghostNum}
      </span>
      <div className="insight-card__body">
        <span className="insight-card__category">{insight.category}</span>
        <h3 className="insight-card__title">
          <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
        </h3>
        <p className="insight-card__excerpt">{insight.excerpt}</p>
      </div>
      <div className="insight-card__footer">
        <span className="insight-card__author">
          {insight.author} · {date}
        </span>
        <Link
          className="insight-card__link"
          href={`/insights/${insight.slug}`}
        >
          Read More →
          <span className="sr-only">: {insight.title}</span>
        </Link>
      </div>
    </article>
  );
}
