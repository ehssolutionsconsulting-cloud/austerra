"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <ul className="navbar__links" role="list" aria-label="Desktop navigation">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            className={`navbar__link${isActive(link.href) ? " navbar__link--active" : ""}`}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <Link className="navbar__link navbar__link--cta" href="/contact">
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
