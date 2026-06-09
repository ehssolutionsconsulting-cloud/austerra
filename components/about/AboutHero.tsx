import Image from "next/image";
import "@/styles/components/about-hero.scss";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__left">
        <p className="about-hero__eyebrow" aria-hidden="true">// About Austerra Group</p>

        <h1 className="about-hero__heading">
          Built by Scientists.
          <br />
          <em>Trusted by Industry.</em>
        </h1>

        <p
          className="about-hero__discipline"
          aria-label="Environmental. Geotechnical. Occupational Hygiene."
        >
          <span className="about-hero__discipline-word" aria-hidden="true">Environmental.</span>
          <span className="about-hero__discipline-word" aria-hidden="true">Geotechnical.</span>
          <span className="about-hero__discipline-word" aria-hidden="true">OccHyg.</span>
        </p>

        <p className="about-hero__body">
          A specialist consulting firm delivering environmental, occupational hygiene, and
          geotechnical engineering services across Australia&apos;s most demanding project
          environments.
        </p>
      </div>

      <div className="about-hero__right" aria-hidden="true">
        <div className="about-hero__image-wrap">
          <Image
            src="/images/about/hero-field.jpg"
            alt=""
            fill
            className="about-hero__img"
            sizes="50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
