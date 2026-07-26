import Image from "next/image";
import "@/styles/components/about-hero.scss";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__left">
        <p className="about-hero__eyebrow" aria-hidden="true">
          // About AUSTERRA CONSULTING
        </p>

        <h1 className="about-hero__heading">
          Built by Experience.
          <br />
          <em>Trusted by Industry.</em>
        </h1>

        <p
          className="about-hero__discipline"
          aria-label="Environmental. Geotechnical. Occupational Hygiene."
        >
          <span className="about-hero__discipline-word" aria-hidden="true">
            Environmental.
          </span>
          <span className="about-hero__discipline-word" aria-hidden="true">
            Geotechnical.
          </span>
          <span className="about-hero__discipline-word" aria-hidden="true">
            Occupational Hygiene.
          </span>
        </p>

        <p className="about-hero__body">
          A specialist consulting firm delivering environmental, occupational
          hygiene, and geotechnical engineering services across Australia&apos;s
          most demanding project environments.
        </p>
      </div>

      <div className="about-hero__right" aria-hidden="true">
        <div className="about-hero__image-wrap">
          <Image
            src="/images/about.webp"
            alt=""
            className="about-hero__img"
            fill
          />
        </div>
      </div>
    </section>
  );
}
