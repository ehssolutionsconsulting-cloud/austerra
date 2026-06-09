"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "@/styles/components/section-label.scss";

interface SectionLabelProps {
  children: React.ReactNode;
  accent?: boolean;
}

export default function SectionLabel({ children, accent }: SectionLabelProps) {
  const text = typeof children === "string" ? children : null;

  // Start with full text so SSR and initial render match
  const [typed, setTyped] = useState<string>(text ?? "");
  const done = useRef(false);
  const labelRef = useRef<HTMLSpanElement>(null);

  // useLayoutEffect — hide text before first browser paint for animated labels
  useLayoutEffect(() => {
    if (!text) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTyped("");
  }, [text]);

  useEffect(() => {
    if (!text || done.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(text);
      return;
    }

    const el = labelRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;
        obs.unobserve(el);

        let i = 0;
        const tick = setInterval(() => {
          i++;
          setTyped(text.slice(0, i));
          if (i >= text.length) clearInterval(tick);
        }, 38);
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [text]);

  // Non-string children (e.g. JSX with nested elements) — render as-is
  if (!text) {
    return (
      <span className={`section-label${accent ? " section-label--accent" : ""}`}>
        {"// "}
        {children}
      </span>
    );
  }

  return (
    <span
      className={`section-label${accent ? " section-label--accent" : ""}`}
      aria-label={`// ${text}`}
    >
      {"// "}
      <span
        ref={labelRef}
        aria-hidden="true"
        suppressHydrationWarning
      >
        {typed}
      </span>
    </span>
  );
}
