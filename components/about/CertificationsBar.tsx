import SectionLabel from "@/components/ui/SectionLabel";
import "@/styles/components/about-page.scss";

const certifications = [
  { name: "ISO 9001:2015", sub: "Quality Management System" },
  { name: "NATA", sub: "Accredited Testing Laboratory" },
  { name: "ISO 45001", sub: "Occupational Health & Safety" },
  { name: "ISO 14001", sub: "Environmental Management System" },
];

export default function CertificationsBar() {
  return (
    <section className="certs-bar" aria-labelledby="certs-heading">
      <div className="certs-bar__label">
        <h2 id="certs-heading">
          <SectionLabel>Certifications &amp; Accreditations</SectionLabel>
        </h2>
      </div>

      <ul
        className="certs-bar__grid"
        role="list"
        aria-label="Certifications and accreditations"
      >
        {certifications.map((cert, i) => (
          <li
            key={cert.name}
            className="certs-bar__item"
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <span className="certs-bar__name">{cert.name}</span>
            <span className="certs-bar__sub">{cert.sub}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
