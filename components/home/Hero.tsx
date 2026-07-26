import Image from "next/image";
import Button from "@/components/ui/Button";
import "@/styles/components/hero.scss";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      {/* Left column */}
      <div className="hero__left">
        <div className="hero__content">
          <div className="hero__eyebrow" aria-hidden="true">
            <span className="hero__eyebrow-line" />
            <span className="hero__eyebrow-text">
              Australian Environmental &amp; Engineering Consulting
            </span>
          </div>

          <h1 className="hero__heading">
            <span className="hero__heading-line-wrap">
              <span className="hero__heading-line">
                Grounded in <em>Science.</em>
              </span>
            </span>
            <span className="hero__heading-line-wrap">
              <span className="hero__heading-line">Built for the Field.</span>
            </span>
          </h1>

          <p className="hero__body">
            A specialist consulting firm delivering environmental, occupational
            hygiene, and geotechnical engineering services across
            Australia&apos;s infrastructure, energy, and construction sectors.
          </p>

          <div className="hero__buttons">
            <Button href="/services" variant="primary">
              Our Services
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="hero__right">
        <div className="hero__image-wrap">
          <Image
            src="/images/hero.jpg"
            alt="Austerra field team conducting environmental site assessment"
            fill
            className="hero__image"
            priority
          />
        </div>

        <blockquote className="hero__tagline">
          <p className="hero__tagline-text">
            &ldquo;Southern Earth — where science meets the ground beneath your
            feet.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
