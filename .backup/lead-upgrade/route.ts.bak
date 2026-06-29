import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  city?: unknown;
  trailer?: unknown;
  rentalType?: unknown;
  rentalDate?: unknown;
  returnDate?: unknown;
  pickupPreference?: unknown;
  paymentPreference?: unknown;
  addOns?: unknown;
  haulingDetails?: unknown;
  message?: unknown;
  website?: unknown;
};

type NormalizedContactRequest = {
  name: string;
  email: string;
  phone: string;
  city: string;
  trailer: string;
  rentalType: string;
  rentalDate: string;
  returnDate: string;
  pickupPreference: string;
  paymentPreference: string;
  addOns: string[];
  haulingDetails: string;
  message: string;
  website: string;
};

function sanitizeText(value: unknown, maxLength = 1600): string {
  if (typeof value !== "string") return "";

  return value
    .replace(/\0/g, "")
    .trim()
    .slice(0, maxLength);
}

function sanitizeEmail(value: unknown): string {
  const email = sanitizeText(value, 254).toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "";
  }

  return email;
}

function normalizeAddOns(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => sanitizeText(item, 80))
    .filter(Boolean)
    .slice(0, 12);
}

function normalizePayload(body: ContactRequestBody): NormalizedContactRequest {
  return {
    name: sanitizeText(body.name, 120),
    email: sanitizeEmail(body.email),
    phone: sanitizeText(body.phone, 80),
    city: sanitizeText(body.city, 120),
    trailer: sanitizeText(body.trailer, 160),
    rentalType: sanitizeText(body.rentalType, 80),
    rentalDate: sanitizeText(body.rentalDate, 40),
    returnDate: sanitizeText(body.returnDate, 40),
    pickupPreference: sanitizeText(body.pickupPreference, 80),
    paymentPreference: sanitizeText(body.paymentPreference, 80),
    addOns: normalizeAddOns(body.addOns),
    haulingDetails: sanitizeText(body.haulingDetails, 1600),
    message: sanitizeText(body.message, 2200),
    website: sanitizeText(body.website, 200),
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function emailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#111827;width:230px;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">
        ${escapeHtml(value || "Not provided")}
      </td>
    </tr>
  `;
}

function buildTextEmail(payload: NormalizedContactRequest): string {
  return [
    "New trailer rental inquiry from the Tow-N-Go Trailers website",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `City / Area: ${payload.city || "Not provided"}`,
    "",
    `Specific Trailer: ${payload.trailer || "Not specified"}`,
    `Rental Type: ${payload.rentalType || "Not specified"}`,
    `Preferred Start Date: ${payload.rentalDate || "Not provided"}`,
    `Preferred Return Date: ${payload.returnDate || "Not provided"}`,
    `Pickup / Delivery Preference: ${payload.pickupPreference || "Not specified"}`,
    `Payment Preference: ${payload.paymentPreference || "Not specified"}`,
    `Requested Add-Ons: ${
      payload.addOns.length > 0 ? payload.addOns.join(", ") : "None selected"
    }`,
    "",
    "What they are hauling:",
    payload.haulingDetails || "Not provided",
    "",
    "Extra Details:",
    payload.message || "Not provided",
    "",
    "---",
    "Sent automatically from the Tow-N-Go Trailers website contact form.",
  ].join("\n");
}

function buildHtmlEmail(payload: NormalizedContactRequest): string {
  const addOns =
    payload.addOns.length > 0 ? payload.addOns.join(", ") : "None selected";

  return `
    <div style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:780px;margin:0 auto;padding:28px 16px;">
        <div style="background:#050505;color:#ffffff;border-radius:18px 18px 0 0;padding:26px 28px;border-bottom:4px solid #d4af37;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:4px;text-transform:uppercase;color:#d4af37;font-weight:700;">
            Tow-N-Go Trailers
          </p>
          <h1 style="margin:0;font-size:28px;line-height:1.25;">
            New Trailer Rental Inquiry
          </h1>
          <p style="margin:12px 0 0;color:#d1d5db;font-size:15px;line-height:1.6;">
            A customer submitted a rental inquiry from the website contact form.
          </p>
        </div>

        <div style="background:#ffffff;border:1px solid #e5e7eb;border-top:0;">
          <table style="width:100%;border-collapse:collapse;font-size:15px;">
            <tbody>
              ${emailRow("Name", payload.name)}
              ${emailRow("Email", payload.email)}
              ${emailRow("Phone", payload.phone || "Not provided")}
              ${emailRow("City / Area", payload.city || "Not provided")}
              ${emailRow("Specific Trailer", payload.trailer || "Not specified")}
              ${emailRow("Rental Type", payload.rentalType || "Not specified")}
              ${emailRow("Preferred Start Date", payload.rentalDate || "Not provided")}
              ${emailRow("Preferred Return Date", payload.returnDate || "Not provided")}
              ${emailRow("Pickup / Delivery", payload.pickupPreference || "Not specified")}
              ${emailRow("Payment Preference", payload.paymentPreference || "Not specified")}
              ${emailRow("Requested Add-Ons", addOns)}
            </tbody>
          </table>

          <div style="padding:24px 28px;border-top:1px solid #e5e7eb;">
            <h2 style="margin:0 0 10px;font-size:16px;color:#111827;">
              What they are hauling
            </h2>
            <p style="margin:0;color:#374151;line-height:1.7;white-space:pre-wrap;">
              ${escapeHtml(payload.haulingDetails || "Not provided")}
            </p>
          </div>

          <div style="padding:24px 28px;border-top:1px solid #e5e7eb;">
            <h2 style="margin:0 0 10px;font-size:16px;color:#111827;">
              Extra Details
            </h2>
            <p style="margin:0;color:#374151;line-height:1.7;white-space:pre-wrap;">
              ${escapeHtml(payload.message || "Not provided")}
            </p>
          </div>
        </div>

        <div style="background:#111827;color:#d1d5db;border-radius:0 0 18px 18px;padding:18px 28px;font-size:13px;line-height:1.6;">
          Sent automatically from the Tow-N-Go Trailers website.
        </div>
      </div>
    </div>
  `;
}

function getRequiredEnv(name: string): string {
  return process.env[name]?.trim() || "";
}

export async function POST(request: Request) {
  try {
    const resendApiKey = getRequiredEnv("RESEND_API_KEY");
    const contactToEmail = getRequiredEnv("CONTACT_TO_EMAIL");
    const contactFromEmail = getRequiredEnv("CONTACT_FROM_EMAIL");

    if (!resendApiKey || !contactToEmail || !contactFromEmail) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Contact form email settings are missing. Please check RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.",
        },
        { status: 500 }
      );
    }

    let body: ContactRequestBody;

    try {
      body = (await request.json()) as ContactRequestBody;
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form submission. Please refresh and try again.",
        },
        { status: 400 }
      );
    }

    const payload = normalizePayload(body);

    // Honeypot spam protection. Real customers should never fill this.
    if (payload.website) {
      return NextResponse.json({
        success: true,
        message:
          "Your rental inquiry has been sent. Tow-N-Go Trailers will follow up with availability and next steps.",
      });
    }

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please include your name, email, and extra details.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(resendApiKey);
    const subject = `New Tow-N-Go Rental Inquiry — ${payload.name}`;

    const result = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: payload.email,
      subject,
      html: buildHtmlEmail(payload),
      text: buildTextEmail(payload),
    });

    if (result.error) {
      console.error("RESEND ERROR:", result.error);

      return NextResponse.json(
        {
          success: false,
          message:
            typeof result.error.message === "string"
              ? result.error.message
              : "The rental inquiry could not be sent right now. Please try again shortly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your rental inquiry has been sent. Tow-N-Go Trailers will follow up with availability and next steps.",
      id: result.data?.id || null,
    });
  } catch (error) {
    console.error("CONTACT ROUTE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "The rental inquiry could not be sent right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}