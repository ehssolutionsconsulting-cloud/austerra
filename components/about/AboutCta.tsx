import Link from "next/link";
import "@/styles/components/about-page.scss";

export default function AboutCta() {
  return (
    <section className="about-cta" aria-labelledby="about-cta-heading">
      <p className="about-cta__eyebrow" aria-hidden="true">// Work With Us</p>

      <h2 id="about-cta-heading" className="about-cta__heading">
        Work with people who&apos;ve{" "}
        <em>been in the field.</em>
      </h2>

      <Link className="about-cta__btn" href="/contact">
        Contact Us
      </Link>
    </section>
  );
}
