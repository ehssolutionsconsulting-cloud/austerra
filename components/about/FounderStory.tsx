import SectionLabel from "@/components/ui/SectionLabel";
import "@/styles/components/about-page.scss";

function ScienceIcon() {
  return (
    <svg
      className="founder-story__value-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M9 3v7l-4 8h14l-4-8V3" />
      <path d="M9 3h6" />
      <line x1="7" y1="15" x2="11" y2="15" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg
      className="founder-story__value-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8l-4 4-4-4" strokeLinecap="square" />
      <path d="M12 12l4 4" strokeLinecap="square" />
      <path d="M12 12l-4 4" strokeLinecap="square" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="founder-story__value-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6l-8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="founder-story__value-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

const values = [
  {
    title: "Scientific Rigour",
    body: "We never simplify where precision is required. Our work is built on defensible methodology and peer-reviewed practice.",
    Icon: ScienceIcon,
  },
  {
    title: "Field Honesty",
    body: "What we find in the field is what you hear about — unfiltered. Good data drives good decisions, even when it's inconvenient.",
    Icon: CompassIcon,
  },
  {
    title: "Regulatory Credibility",
    body: "Our reports are written to be read by regulators, not just clients. That standard protects both parties.",
    Icon: ShieldIcon,
  },
  {
    title: "Long-Term Thinking",
    body: "We design solutions that hold up — not just at completion, but through the operational life of the project.",
    Icon: ClockIcon,
  },
];

export default function FounderStory() {
  return (
    <section className="founder-story" aria-labelledby="founder-heading">
      <div className="founder-story__left">
        <div className="founder-story__label">
          <SectionLabel>Our Story</SectionLabel>
        </div>

        <p className="founder-story__year">Est. 2019</p>

        <h2 id="founder-heading" className="founder-story__heading">
          Founded on the principle that <em>rigorous science</em> and field
          experience are inseparable.
        </h2>

        <p className="founder-story__body">
          Austerra Group was established by a group of senior scientists and engineers who had
          spent their careers working on Australia&apos;s largest infrastructure and resources
          projects — and had grown frustrated by the gap between office-bound consulting and
          the realities of the field.
        </p>

        <p className="founder-story__body">
          The name reflects that commitment: <em>Austerra</em> — Southern Earth. A reminder
          that our work is always grounded in the physical world, with all its complexity and
          consequence.
        </p>

        <p className="founder-story__body">
          Today our team of principals and specialists operates across Queensland, New South
          Wales, Western Australia, and South Australia, working with infrastructure
          proponents, mining operators, and government agencies on projects that matter.
        </p>

        <p className="founder-story__watermark" aria-hidden="true">Southern Earth</p>
      </div>

      <div className="founder-story__right">
        <div className="founder-story__values-label">
          <SectionLabel>Our Values</SectionLabel>
        </div>

        <ul className="founder-story__values" role="list" aria-label="Company values">
          {values.map(({ title, body, Icon }, i) => (
            <li
              key={title}
              className="founder-story__value"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <Icon />
              <span className="founder-story__value-title">{title}</span>
              <p className="founder-story__value-body">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
