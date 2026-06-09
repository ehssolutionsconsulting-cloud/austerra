import SectionLabel from "@/components/ui/SectionLabel";
import "@/styles/components/contact-page.scss";

const details = [
  { label: "Email", value: "enquiries@austerra.com.au", href: "mailto:enquiries@austerra.com.au" },
  { label: "Phone", value: "+61 7 1234 5678", href: "tel:+61712345678" },
  { label: "Brisbane", value: "Level 12, 123 Eagle Street\nBrisbane QLD 4000", href: null },
  { label: "Perth", value: "Level 3, 45 St Georges Terrace\nPerth WA 6000", href: null },
  { label: "ABN", value: "12 345 678 901", href: null },
];

export default function ContactDetails() {
  return (
    <div className="contact-details">
      <div className="contact-details__label">
        <SectionLabel>Get in Touch</SectionLabel>
      </div>

      <h2 className="contact-details__heading">
        Talk to a scientist,
        <br />
        <em>not a call centre.</em>
      </h2>

      <p className="contact-details__body">
        Every enquiry is reviewed by one of our principals. We&apos;ll respond within one business
        day with a direct point of contact for your project.
      </p>

      <ul className="contact-details__items" role="list" aria-label="Contact information">
        {details.map((item, i) => (
          <li
            key={item.label}
            className="contact-details__item"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <span className="contact-details__item-label">{item.label}</span>
            <span className="contact-details__item-value">
              {item.href ? (
                <a href={item.href}>{item.value}</a>
              ) : (
                item.value.split("\n").map((line, i) => (
                  <span key={i} className="contact-details__item-line">{line}</span>
                ))
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
