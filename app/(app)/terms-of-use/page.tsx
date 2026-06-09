import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import "@/styles/components/legal-page.scss";

export const metadata: Metadata = {
  title: "Terms of Use | Austerra Group",
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: `By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.`,
  },
  {
    id: "use",
    title: "Permitted Use",
    body: `This website is provided for informational purposes about Austerra Group's services. You may access and view content for personal, non-commercial purposes. You must not:

- Reproduce, copy, or redistribute our content without written permission
- Use the website in any way that could damage, disable, or impair its operation
- Attempt to gain unauthorised access to any part of the website or its systems
- Use automated tools to scrape or extract content from this website`,
  },
  {
    id: "ip",
    title: "Intellectual Property",
    body: `All content on this website — including text, reports, graphics, and design — is the property of Austerra Group Pty Ltd and is protected by Australian and international copyright laws. Our reports, methodologies, and technical content are the proprietary work product of our firm.`,
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: `The information on this website is provided for general informational purposes only. It does not constitute professional advice and should not be relied upon as such. Austerra Group makes no representations or warranties regarding the accuracy or completeness of information on this website.

Project-specific advice should be sought directly from our qualified professionals.`,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, Austerra Group is not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on information it contains.`,
  },
  {
    id: "governing",
    title: "Governing Law",
    body: `These terms are governed by the laws of Queensland, Australia. Any disputes arising from your use of this website will be subject to the exclusive jurisdiction of the courts of Queensland.

These terms were last updated May 2026.`,
  },
];

const toc = sections.map((s) => ({ id: s.id, title: s.title }));

export default function TermsOfUsePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
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
