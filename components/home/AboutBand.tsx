import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import "@/styles/components/about-band.scss";

const differentiators = [
  {
    number: "01",
    heading: "Science-Led",
    desc: "Field data over templates, every time.",
    body: "Every report is built on site observations, lab results, and peer-reviewed methodology — not desk assumptions.",
  },
  {
    number: "02",
    heading: "Integrated",
    desc: "Three disciplines, one accountable team.",
    body: "Environmental, hygiene, and geotechnical under one roof — no gaps, no hand-offs, faster delivery.",
  },
  {
    number: "03",
    heading: "Regulatory",
    desc: "Approvals on the first submission.",
    body: "We understand the assessment frameworks before we pick up a pen. Our submissions are written to get through.",
  },
  {
    number: "04",
    heading: "Field-First",
    desc: "On-site with your team, not desk-bound.",
    body: "Our consultants embed on project sites. What we observe shapes what we recommend — not the other way around.",
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
          Built by Scientists.
          <br />
          <em>Trusted by Industry.</em>
        </h2>

        <blockquote className="about-band__quote">
          <p>&ldquo;The best science happens in the field, not at a desk.&rdquo;</p>
        </blockquote>

        <p className="about-band__body">
          Our team of environmental scientists, occupational hygienists, and geotechnical engineers
          partners with clients in infrastructure, mining, and construction — delivering outcomes
          that hold up to scrutiny, regulation, and the field itself.
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
