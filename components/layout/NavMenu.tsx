"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Keyboard: Escape closes, Tab traps focus inside drawer
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <>
      {/* Hamburger toggle */}
      <button
        ref={buttonRef}
        className={`navbar__hamburger${open ? " navbar__hamburger--open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="navbar__hamburger-bar" aria-hidden="true" />
        <span className="navbar__hamburger-bar" aria-hidden="true" />
        <span className="navbar__hamburger-bar" aria-hidden="true" />
      </button>

      {/* Backdrop — clicking closes drawer */}
      <div
        className={`navbar__backdrop${open ? " navbar__backdrop--open" : ""}`}
        aria-hidden="true"
        onClick={close}
      />

      {/* Slide-in drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`navbar__mobile-menu${open ? " navbar__mobile-menu--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <ul className="navbar__mobile-links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`navbar__mobile-link${isActive(link.href) ? " navbar__mobile-link--active" : ""}`}
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={close}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="navbar__mobile-link navbar__mobile-link--cta"
              href="/contact"
              tabIndex={open ? 0 : -1}
              onClick={close}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
