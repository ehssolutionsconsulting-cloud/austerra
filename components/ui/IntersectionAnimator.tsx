"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function IntersectionAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cleanups: (() => void)[] = [];

    // ── (3) Eyebrow line draw — page-header__eyebrow-line ────────────────────
    document.querySelectorAll<HTMLElement>(".page-header__eyebrow-line").forEach((el) => {
      el.style.transformOrigin = "left";
      el.style.transform = "scaleX(0)";
      el.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).style.transform = "scaleX(1)";
          obs.unobserve(entry.target);
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      cleanups.push(() => obs.disconnect());
    });

    // ── (6) Industries strip entrance — staggered spring scale ──────────────
    const industryCards = Array.from(
      document.querySelectorAll<HTMLElement>(".industries-strip__card")
    );
    if (industryCards.length) {
      industryCards.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "scale(0.88)";
      });

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          obs.disconnect();
          industryCards.forEach((el, i) => {
            setTimeout(() => {
              el.style.transition =
                "opacity 0.45s cubic-bezier(0.34,1.56,0.64,1), transform 0.45s cubic-bezier(0.34,1.56,0.64,1)";
              el.style.opacity = "1";
              el.style.transform = "scale(1)";
            }, i * 80);
          });
        },
        { threshold: 0.15 }
      );

      obs.observe(industryCards[0]);
      cleanups.push(() => obs.disconnect());
    }

    // ── (7) Project card image clip-path reveal ──────────────────────────────
    document.querySelectorAll<HTMLElement>(".project-card__image").forEach((el) => {
      el.style.clipPath = "inset(15px 0 0 0)";
      el.style.transition = "clip-path 0.7s cubic-bezier(0.22,1,0.36,1)";

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).style.clipPath = "inset(0 0 0 0)";
          obs.unobserve(entry.target);
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      cleanups.push(() => obs.disconnect());
    });

    // ── (4) Count-up for [data-countup] elements ─────────────────────────────
    document.querySelectorAll<HTMLElement>("[data-countup]").forEach((el) => {
      const target = parseInt(el.getAttribute("data-countup") ?? "0", 10);
      const suffix = el.getAttribute("data-countup-suffix") ?? "";
      const pad = parseInt(el.getAttribute("data-countup-pad") ?? "0", 10);

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          obs.unobserve(entry.target);

          const duration = 1200;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // cubic ease-out
            const count = Math.round(eased * target);
            const formatted =
              pad > 0 ? String(count).padStart(pad, "0") : String(count);
            el.textContent = t >= 1 ? formatted + suffix : formatted;
            if (t < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        },
        { threshold: 0.15 }
      );

      obs.observe(el);
      cleanups.push(() => obs.disconnect());
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
