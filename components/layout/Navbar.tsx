import Link from "next/link";
import NavLinks from "./NavLinks";
import NavMenu from "./NavMenu";
import "@/styles/components/navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link className="navbar__brand" href="/" aria-label="Austerra Group — home">
        <span className="navbar__logo">AUSTERRA GROUP</span>
        <span className="navbar__tagline" aria-hidden="true">
          Environmental · Geotechnical · OccHyg
        </span>
      </Link>

      <NavLinks />
      <NavMenu />
    </nav>
  );
}
