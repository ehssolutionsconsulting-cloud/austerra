"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapAnimator() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {

      // ── Hero load sequence (spec 2) ────────────────────────────────────────
      // Only fires if the hero is on this page
      if (document.querySelector(".hero")) {
        // 1. Eyebrow line — width draws via scaleX
        gsap.from(".hero__eyebrow-line", {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.5,
          ease: "power2.out",
        });

        // 2. Eyebrow text — slide in from -8px
        gsap.from(".hero__eyebrow-text", {
          opacity: 0,
          x: -8,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.1,
        });

        // 3. Heading lines — clip reveal via translateY(100%)→0
        gsap.from(".hero__heading-line", {
          y: "100%",
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.25,
        });

        // 4. Body — fade up at 0.5s
        gsap.from(".hero__body", {
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.5,
        });

        // 5. Buttons — fade up at 0.7s
        gsap.from(".hero__buttons", {
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.7,
        });

        // Hero certs
        gsap.from(".hero__certs", {
          opacity: 0,
          duration: 0.4,
          ease: "power1.out",
          delay: 0.9,
        });

        // 6. Image — Ken Burns settle: scale(1.06)→scale(1)
        gsap.from(".hero__image", {
          scale: 1.06,
          duration: 1.2,
          ease: "power1.out",
        });

        // Tagline fade in
        gsap.from(".hero__tagline", {
          opacity: 0,
          duration: 0.7,
          ease: "power1.out",
          delay: 0.6,
        });
      }

      // ── Service discipline hero entrance ───────────────────────────────────
      if (document.querySelector(".service-hero")) {
        const heroEls = document.querySelectorAll(
          ".service-hero__eyebrow, .service-hero__title, .service-hero__body"
        );
        gsap.from(heroEls, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.1,
        });

        gsap.from(".service-hero__image-wrap", {
          opacity: 0,
          duration: 0.9,
          ease: "power1.out",
          delay: 0.2,
        });
      }

    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
