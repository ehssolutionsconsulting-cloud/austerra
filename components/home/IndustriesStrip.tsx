import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import "@/styles/components/industries-strip.scss";

function BoltIcon() {
  return (
    <svg className="industries-strip__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <polygon points="13,2 4,13 11,13 9,22 20,11 13,11" fill="currentColor" />
    </svg>
  );
}

function BridgeIcon() {
  return (
    <svg className="industries-strip__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M2 19h20M6 19v-7M18 19v-7M2 12Q12 4 22 12" />
    </svg>
  );
}

function CraneIcon() {
  return (
    <svg className="industries-strip__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M8 20V5M8 5h12M8 5l7 5M16 8v9M16 17l-1.5 2.5" />
    </svg>
  );
}

function MountainIcon() {
  return (
    <svg className="industries-strip__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M2 20l7-13 4 7 3-5 6 11H2z" />
    </svg>
  );
}

function HardHatIcon() {
  return (
    <svg className="industries-strip__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 4v4M7 8a5 5 0 0 1 10 0H7z" />
      <path d="M5 8h14v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8z" />
      <path d="M3 17h18" />
    </svg>
  );
}

function SkylineIcon() {
  return (
    <svg className="industries-strip__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M1 21h22M3 21V10h4v11M8 21V4h8v17M17 21V9h4v12" />
    </svg>
  );
}

const sectors = [
  { label: "Energy",            Icon: BoltIcon     },
  { label: "Infrastructure",    Icon: BridgeIcon   },
  { label: "Construction",      Icon: CraneIcon    },
  { label: "Geotechnical",      Icon: MountainIcon },
  { label: "Mining",            Icon: HardHatIcon  },
  { label: "Urban Development", Icon: SkylineIcon  },
];

export default function IndustriesStrip() {
  return (
    <section className="industries-strip" aria-label="Sectors we serve">
      <div className="industries-strip__header">
        <SectionLabel>Sectors We Serve</SectionLabel>
        <Link className="industries-strip__cta" href="/services" aria-label="View all services">
          View All Services →
        </Link>
      </div>

      <ul className="industries-strip__grid" role="list" aria-label="Industry sectors">
        {sectors.map(({ label, Icon }) => (
          <li key={label} className="industries-strip__card">
            <Icon />
            <span className="industries-strip__card-label">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
