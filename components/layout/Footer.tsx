import Link from "next/link";
import "@/styles/components/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-name">AUSTERRA GROUP</span>
          <span className="footer__brand-tagline">Environmental · Geotechnical · OccHyg</span>
        </div>

        <div className="footer__meta">
          <ul className="footer__legal-links" role="list">
            <li>
              <Link className="footer__legal-link" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="footer__legal-link" href="/terms-of-use">
                Terms of Use
              </Link>
            </li>
          </ul>
          <p className="footer__copyright">
            © {new Date().getFullYear()} Austerra Group Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
