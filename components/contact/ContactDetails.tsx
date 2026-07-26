import "@/styles/components/contact-page.scss";

const details = [
  { label: "Email", value: "enquiries@austerra.com.au", href: "mailto:ehssolutionsconsulting@gmail.com" },
  { label: "Phone", value: "-", href: null },
  { label: "Location", value: "Sydney, Australia", href: null },
];

export default function ContactDetails() {
  return (
    <div className="contact-details">
      <p className="contact-details__label" aria-hidden="true">{"// Get in Touch"}</p>

      <ul className="contact-details__items" role="list" aria-label="Contact information">
        {details.map((item) => (
          <li key={item.label} className="contact-details__item">
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

      <p className="contact-details__statement">
        Every enquiry goes directly to a principal — not a sales team.
      </p>
    </div>
  );
}
