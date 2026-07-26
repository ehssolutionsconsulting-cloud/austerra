"use client";

import { useState } from "react";
import "@/styles/components/contact-page.scss";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
};

const enquiryTypes = [
  "Environmental Services",
  "Occupational Hygiene",
  "Geotechnical Engineering",
  "Multiple Disciplines",
  "General Enquiry",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.firstName.trim()) next.firstName = "First name is required";
    if (!form.lastName.trim()) next.lastName = "Last name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Valid email address is required";
    if (!form.enquiryType) next.enquiryType = "Please select an enquiry type";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form">
        <div className="contact-form__success" role="alert">
          <span className="contact-form__success-marker">{"// Received"}</span>
          <h2 className="contact-form__success-heading">
            Thank you for your enquiry.
          </h2>
          <p className="contact-form__success-body">
            A principal will be in touch within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <form
        className="contact-form__form"
        onSubmit={handleSubmit}
        noValidate
        aria-label="Contact enquiry form"
      >
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label className="contact-form__field-label" htmlFor="firstName">
              First Name <span aria-label="required">*</span>
            </label>
            <input
              className="contact-form__input"
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              aria-required="true"
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="contact-form__error-msg" id="firstName-error" role="alert">
                {errors.firstName}
              </span>
            )}
          </div>

          <div className="contact-form__field">
            <label className="contact-form__field-label" htmlFor="lastName">
              Last Name <span aria-label="required">*</span>
            </label>
            <input
              className="contact-form__input"
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              aria-required="true"
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="contact-form__error-msg" id="lastName-error" role="alert">
                {errors.lastName}
              </span>
            )}
          </div>
        </div>

        <div className="contact-form__row">
          <div className="contact-form__field">
            <label className="contact-form__field-label" htmlFor="email">
              Email Address <span aria-label="required">*</span>
            </label>
            <input
              className="contact-form__input"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-required="true"
              aria-describedby={errors.email ? "email-error" : undefined}
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="contact-form__error-msg" id="email-error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="contact-form__field">
            <label className="contact-form__field-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="contact-form__input"
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <fieldset
          className="contact-form__fieldset"
          aria-required="true"
          aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
        >
          <legend className="contact-form__field-label">
            Enquiry Type <span aria-label="required">*</span>
          </legend>
          <div className="contact-form__chips">
            {enquiryTypes.map((type) => (
              <label
                key={type}
                className={`contact-form__chip${form.enquiryType === type ? " contact-form__chip--selected" : ""}`}
              >
                <input
                  type="radio"
                  name="enquiryType"
                  value={type}
                  checked={form.enquiryType === type}
                  onChange={handleChange}
                />
                {type}
              </label>
            ))}
          </div>
          {errors.enquiryType && (
            <span className="contact-form__error-msg" id="enquiryType-error" role="alert">
              {errors.enquiryType}
            </span>
          )}
        </fieldset>

        <div className="contact-form__field">
          <label className="contact-form__field-label" htmlFor="message">
            Message <span aria-label="required">*</span>
          </label>
          <textarea
            className="contact-form__textarea"
            id="message"
            name="message"
            aria-required="true"
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="Briefly describe your project or enquiry"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className="contact-form__error-msg" id="message-error" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        {status === "error" && (
          <p role="alert" className="contact-form__submit-error">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <button
          className="contact-form__submit"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
}
