"use client";

import { useEffect } from "react";

export default function NavbarScrollHandler() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".navbar");
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 80) {
        nav.classList.add("navbar--scrolled");
      } else {
        nav.classList.remove("navbar--scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
