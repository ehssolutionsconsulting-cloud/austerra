"use client";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import InsightCard from "./InsightCard";
import "@/styles/components/insights-page.scss";

type Category = "All" | "Environmental" | "Geotechnical" | "OccHyg";
const CATEGORIES: Category[] = [
  "All",
  "Environmental",
  "Geotechnical",
  "OccHyg",
];

interface Insight {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  publishedAt: string;
}

export default function InsightsFilterGrid({
  insights,
}: {
  insights: Insight[];
}) {
  const [active, setActive] = useState<Category>("All");
  const filtered =
    active === "All" ? insights : insights.filter((i) => i.category === active);
  const isFiltered = active !== "All";

  return (
    <section className="insights-grid" aria-labelledby="insights-grid-heading">
      <div className="insights-grid__header">
        <h2 id="insights-grid-heading">
          <SectionLabel>All Articles</SectionLabel>
        </h2>
        <nav
          className="insights-filter"
          aria-label="Filter articles by discipline"
        >
          <ul className="insights-filter__list" role="list">
            {CATEGORIES.map((cat) => (
              <li key={cat} className="insights-filter__item">
                <button
                  className={`insights-filter__btn${active === cat ? " insights-filter__btn--active" : ""}`}
                  onClick={() => setActive(cat)}
                >
                  {cat === "OccHyg" ? "Occ Hyg" : cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {filtered.length === 0 ? (
        <p className="insights-grid__empty">
          No articles in this category yet.
        </p>
      ) : (
        <ul className="insights-editorial" role="list" aria-label="Articles">
          {filtered.map((insight, i) => {
            const isWide = i === 0 && !isFiltered;
            const isHalf = i === 4 && !isFiltered;
            const itemClass = [
              "insights-editorial__item",
              isWide && "insights-editorial__item--wide",
              isHalf && "insights-editorial__item--half",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <li key={insight.slug} className={itemClass}>
                <InsightCard insight={insight} index={i} wide={isWide} />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
