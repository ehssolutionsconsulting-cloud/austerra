import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  enquiryType: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, enquiryType, message } = body;

  if (!firstName?.trim() || !lastName?.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 422 });
  }
  if (!email?.trim() || !isValidEmail(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 422 });
  }
  if (!enquiryType?.trim()) {
    return NextResponse.json({ error: "Enquiry type is required" }, { status: 422 });
  }
  if (!message?.trim()) {
    return NextResponse.json({ error: "Message is required" }, { status: 422 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn("[contact form] RESEND_API_KEY not set — logging only");
    console.log("[contact form]", { from: `${firstName} ${lastName} <${email}>`, enquiryType, message: message.slice(0, 120) });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const toAddress = process.env.CONTACT_EMAIL ?? "ehssolutionsconsulting@gmail.com";
  const fromAddress = process.env.CONTACT_FROM ?? "AUSTERRA CONSULTING <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: toAddress,
    replyTo: email,
    subject: `Website Enquiry — ${enquiryType} from ${firstName} ${lastName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Enquiry type: ${enquiryType}`,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n"),
  });

  if (error) {
    console.error("[contact form] Resend error", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
