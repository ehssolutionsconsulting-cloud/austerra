import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import "@/styles/components/legal-page.scss";

export const metadata: Metadata = {
  title: "Privacy Policy | Austerra Group",
};

const sections = [
  {
    id: "collection",
    title: "Information We Collect",
    body: `We collect personal information that you voluntarily provide when contacting us, requesting a quote, or subscribing to our communications. This may include your name, email address, phone number, company name, and project details.

We also collect non-personally identifiable information automatically when you visit our website, including IP address, browser type, pages visited, and time spent on pages.`,
  },
  {
    id: "use",
    title: "How We Use Your Information",
    body: `We use the information we collect to:

- Respond to your enquiries and provide requested services
- Deliver proposals, reports, and project communications
- Send relevant technical updates and insights (with your consent)
- Improve our website and service delivery
- Comply with legal and regulatory obligations`,
  },
  {
    id: "disclosure",
    title: "Disclosure of Your Information",
    body: `We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with trusted third parties who assist us in operating our business, provided those parties agree to keep this information confidential.

We may disclose your information where required by law or to protect the rights, property, or safety of Austerra Group, our clients, or others.`,
  },
  {
    id: "retention",
    title: "Data Retention",
    body: `We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Project-related records are retained for a minimum of 7 years in accordance with Australian professional standards.`,
  },
  {
    id: "rights",
    title: "Your Rights",
    body: `Under the Australian Privacy Act 1988, you have the right to access, correct, or request deletion of your personal information held by us. To exercise these rights, please contact us at privacy@austerra.com.au. We will respond to your request within 30 days.`,
  },
  {
    id: "contact",
    title: "Contact",
    body: `For privacy-related enquiries, contact our Privacy Officer at privacy@austerra.com.au or by post to: Austerra Group Pty Ltd, Level 12, 123 Eagle Street, Brisbane QLD 4000.

This policy was last updated May 2026.`,
  },
];

const toc = sections.map((s) => ({ id: s.id, title: s.title }));

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        body="Austerra Group Pty Ltd ABN 12 345 678 901 — effective May 2026."
      />

      <div className="legal">
        <aside className="legal__sidebar">
          <span className="legal__toc-label">Contents</span>
          <ul className="legal__toc" role="list" aria-label="Table of contents">
            {toc.map((item) => (
              <li key={item.id} className="legal__toc-item">
                <a className="legal__toc-link" href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="legal__content">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="legal__section">
              <h2 className="legal__section-title">{section.title}</h2>
              <div className="legal__section-body">
                {section.body.split("\n\n").map((para, i) => {
                  if (para.trim().startsWith("- ")) {
                    return (
                      <ul key={i}>
                        {para.split("\n").filter(Boolean).map((line) => (
                          <li key={line}>{line.replace(/^- /, "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{para}</p>;
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
