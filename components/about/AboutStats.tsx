"use client";

import { useEffect, useRef, useState } from "react";
import "@/styles/components/about-stats.scss";

interface Stat {
  target: number;
  suffix: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  {
    target: 200,
    suffix: "+",
    label: "Projects Delivered",
    sub: "Across environmental, OccHyg, and geotechnical disciplines",
  },
  {
    target: 15,
    suffix: "+",
    label: "Years Field Experience",
    sub: "Combined principal-level expertise across the firm",
  },
  {
    target: 3,
    suffix: "",
    label: "Core Disciplines",
    sub: "Integrated under a single quality management system",
  },
  {
    target: 2,
    suffix: "",
    label: "Office Locations",
    sub: "Brisbane QLD and Perth WA",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const duration = 1200;
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const t = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // cubic ease-out
          const count = Math.round(eased * target);
          // Suffix appends only on completion
          setDisplay(t >= 1 ? `${target}${suffix}` : String(count));
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <span ref={ref} aria-label={`${target}${suffix}`} suppressHydrationWarning>
      {display}
    </span>
  );
}

export default function AboutStats() {
  return (
    <section className="about-stats" aria-label="Austerra Group by the numbers">
      {stats.map((stat) => (
        <div key={stat.label} className="about-stats__item">
          <p className="about-stats__number">
            <CountUp target={stat.target} suffix={stat.suffix} />
          </p>
          <p className="about-stats__label">{stat.label}</p>
          <p className="about-stats__sub">{stat.sub}</p>
        </div>
      ))}
    </section>
  );
}
