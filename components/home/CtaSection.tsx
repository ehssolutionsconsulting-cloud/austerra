import { Fragment } from "react";
import Link from "next/link";
import { CERTIFICATIONS } from "@/lib/constants";
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
          <Link
            className="cta-section__btn cta-section__btn--ghost"
            href="/projects"
          >
            View Our Work
          </Link>
        </div>
      </div>

      <div className="cta-section__meta" aria-hidden="true">
        {CERTIFICATIONS.map((cert, i) => (
          <Fragment key={cert.name}>
            <span className="cta-section__meta-item">{cert.name}</span>
            {i < CERTIFICATIONS.length - 1 && (
              <span className="cta-section__meta-sep">·</span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
