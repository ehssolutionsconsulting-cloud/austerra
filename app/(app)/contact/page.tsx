import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import "@/styles/components/contact-page.scss";

export const metadata: Metadata = {
  title: "Contact | AUSTERRA CONSULTING",
  description:
    "Get in touch with AUSTERRA CONSULTING. Offices in Brisbane and Perth. Enquiries responded to within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact AUSTERRA CONSULTING"
        title={<>Let&apos;s talk about <em>your project.</em></>}
        body="We respond to all project enquiries within one business day. Your enquiry goes directly to a principal — not a sales team."
      />

      <div className="contact-layout">
        <ContactDetails />
        <ContactForm />
      </div>
    </>
  );
}
