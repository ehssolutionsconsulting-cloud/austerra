import Link from "next/link";
import type { Metadata } from "next";
import "@/styles/components/not-found-page.scss";

export const metadata: Metadata = {
  title: "Page Not Found | AUSTERRA CONSULTING",
  description: "The page you requested could not be found.",
};

export default function NotFoundPage() {
  return (
    <section className="not-found" aria-labelledby="not-found-heading">
      <span className="not-found__code" aria-hidden="true">404</span>
      <span className="not-found__label">// Page not found</span>

      <h1 id="not-found-heading" className="not-found__heading">
        This page doesn&apos;t <em>exist</em>
      </h1>

      <p className="not-found__body">
        The page you&apos;re looking for may have moved, been removed, or the
        URL may be incorrect. Try navigating from the home page or get in touch
        with our team directly.
      </p>

      <nav className="not-found__actions" aria-label="Recovery options">
        <Link href="/" className="not-found__btn not-found__btn--primary">
          ← Back to Home
        </Link>
        <Link href="/contact" className="not-found__btn not-found__btn--outline">
          Contact Us
        </Link>
      </nav>
    </section>
  );
}
