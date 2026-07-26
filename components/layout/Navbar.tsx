import Link from "next/link";
import NavLinks from "./NavLinks";
import NavMenu from "./NavMenu";
import "@/styles/components/navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link className="navbar__brand" href="/" aria-label="AUSTERRA CONSULTING — home">
        <span className="navbar__logo">AUSTERRA CONSULTING</span>
        <span className="navbar__tagline" aria-hidden="true">
          Environmental · Geotechnical · Occupational Hygiene
        </span>
      </Link>

      <NavLinks />
      <NavMenu />
    </nav>
  );
}
