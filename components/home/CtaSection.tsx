import { Fragment } from "react";
import Link from "next/link";
import "@/styles/components/cta-section.scss";

export default function CtaSection() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-section__inner">
        <p className="cta-section__eyebrow" aria-hidden="true">
          Let&apos;s Work Together
        </p>

        <h2 id="cta-heading" className="cta-section__heading">
          Ready to Start Your
          <br />
          <em>Next Project?</em>
        </h2>

        <p className="cta-section__body">
          Tell us about your site, your timeline, and your requirements. Our
          team will respond within one business day.
        </p>

        <div className="cta-section__actions">
          <Link
            className="cta-section__btn cta-section__btn--primary"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
