import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import "@/styles/components/about-band.scss";

const differentiators = [
  {
    number: "01",
    heading: "Science-Led",
    desc: "Evidence-based, field-validated.",
    body: "Every assessment is grounded in site data, laboratory analysis, and current Australian standards — not desk assumptions.",
  },
  {
    number: "02",
    heading: "Driven by Outcomes",
    desc: "Practical results, not paperwork.",
    body: "We work alongside your team to deliver clear, defensible recommendations that move your project forward.",
  },
];

export default function AboutBand() {
  return (
    <section className="about-band" aria-labelledby="about-heading">
      <div className="about-band__left">
        <div className="about-band__label">
          <SectionLabel>Who We Are</SectionLabel>
        </div>

        <h2 id="about-heading" className="about-band__heading">
          Built by Experience.
          <br />
          <em>Trusted by Industry.</em>
        </h2>

        <blockquote className="about-band__quote">
          <p>
            &ldquo;The best science happens in the field with experience.&rdquo;
          </p>
        </blockquote>

        <p className="about-band__body">
          Our team of environmental scientists, occupational hygienists, and
          geotechnical engineers partners with clients in infrastructure,
          mining, and construction — delivering outcomes that hold up to
          scrutiny, regulation, and the field itself.
        </p>

        <Link className="about-band__btn" href="/about">
          Learn About Our Team
        </Link>
      </div>

      <div className="about-band__right" aria-label="Why choose Austerra">
        <ul className="about-band__differentiators" role="list">
          {differentiators.map((d, i) => (
            <li
              key={d.number}
              className="about-band__differentiator"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span
                className="about-band__diff-number"
                aria-hidden="true"
                data-countup={String(parseInt(d.number, 10))}
                data-countup-pad="2"
              >
                {d.number}
              </span>
              <strong className="about-band__diff-heading">{d.heading}</strong>
              <span className="about-band__diff-desc">{d.desc}</span>
              <span className="about-band__diff-body">{d.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
