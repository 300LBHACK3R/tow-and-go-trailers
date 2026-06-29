import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

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

  sourcePage?: unknown;
  referrer?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
  utmTerm?: unknown;
  utmContent?: unknown;
  deviceType?: unknown;

  website?: unknown;
  company?: unknown;
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

  sourcePage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  deviceType: string;
};

function sanitizeText(value: unknown, maxLength = 1200): string {
  if (typeof value !== "string") return "";

  return value
    .replace(/\0/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function sanitizeLongText(value: unknown, maxLength = 3000): string {
  if (typeof value !== "string") return "";

  return value.replace(/\0/g, "").trim().slice(0, maxLength);
}

function sanitizeEmail(value: unknown): string {
  const email = sanitizeText(value, 320).toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "";
  }

  return email;
}

function normalizeAddOns(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value
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
    trailer: sanitizeText(body.trailer, 180),
    rentalType: sanitizeText(body.rentalType, 120),
    rentalDate: sanitizeText(body.rentalDate, 80),
    returnDate: sanitizeText(body.returnDate, 80),
    pickupPreference: sanitizeText(body.pickupPreference, 120),
    paymentPreference: sanitizeText(body.paymentPreference, 120),
    addOns: normalizeAddOns(body.addOns),
    haulingDetails: sanitizeLongText(body.haulingDetails, 3000),
    message: sanitizeLongText(body.message, 3000),

    sourcePage: sanitizeText(body.sourcePage, 500),
    referrer: sanitizeText(body.referrer, 500),
    utmSource: sanitizeText(body.utmSource, 160),
    utmMedium: sanitizeText(body.utmMedium, 160),
    utmCampaign: sanitizeText(body.utmCampaign, 220),
    utmTerm: sanitizeText(body.utmTerm, 220),
    utmContent: sanitizeText(body.utmContent, 220),
    deviceType: sanitizeText(body.deviceType, 80),
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

function formatValue(value: string | string[]): string {
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(", ") : "Not specified";
  }

  return value || "Not specified";
}

function emailRow(label: string, value: string | string[]) {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #242424;color:#d4af37;font-weight:700;width:190px;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #242424;color:#f4f4f5;vertical-align:top;">
        ${escapeHtml(formatValue(value))}
      </td>
    </tr>
  `;
}

function getLeadSourceLabel(payload: NormalizedContactRequest): string {
  if (payload.utmSource || payload.utmMedium || payload.utmCampaign) {
    return [payload.utmSource, payload.utmMedium, payload.utmCampaign]
      .filter(Boolean)
      .join(" / ");
  }

  if (payload.referrer && !payload.referrer.toLowerCase().includes("towandgotrailers.ca")) {
    return payload.referrer;
  }

  if (payload.sourcePage) {
    return "Website direct";
  }

  return "Unknown / direct";
}

function buildAdminTextEmail(payload: NormalizedContactRequest) {
  return [
    "New Tow-N-Go rental inquiry",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not specified"}`,
    `City / Area: ${payload.city || "Not specified"}`,
    "",
    `Trailer: ${payload.trailer || "Not specified"}`,
    `Rental Type: ${payload.rentalType || "Not specified"}`,
    `Start Date: ${payload.rentalDate || "Not specified"}`,
    `Return Date: ${payload.returnDate || "Not specified"}`,
    `Pickup / Delivery: ${payload.pickupPreference || "Not specified"}`,
    `Payment Preference: ${payload.paymentPreference || "Not specified"}`,
    `Add-ons: ${payload.addOns.length ? payload.addOns.join(", ") : "Not specified"}`,
    "",
    `Hauling Details: ${payload.haulingDetails || "Not specified"}`,
    "",
    `Message: ${payload.message}`,
    "",
    "Lead Source",
    `Lead Source Summary: ${getLeadSourceLabel(payload)}`,
    `Submitted From: ${payload.sourcePage || "Not specified"}`,
    `Referrer: ${payload.referrer || "Not specified"}`,
    `UTM Source: ${payload.utmSource || "Not specified"}`,
    `UTM Medium: ${payload.utmMedium || "Not specified"}`,
    `UTM Campaign: ${payload.utmCampaign || "Not specified"}`,
    `Device Type: ${payload.deviceType || "Not specified"}`,
  ].join("\n");
}

function buildAdminHtmlEmail(payload: NormalizedContactRequest) {
  return `
    <div style="margin:0;padding:0;background:#050505;color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:760px;margin:0 auto;padding:28px;">
        <div style="border:1px solid #2d2d2d;border-radius:22px;overflow:hidden;background:#0b0b0b;">
          <div style="padding:26px 28px;background:linear-gradient(135deg,#000000,#17130a);border-bottom:1px solid #2d2d2d;">
            <p style="margin:0 0 8px;color:#d4af37;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:700;">
              New Rental Inquiry
            </p>
            <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:1.2;">
              Tow-N-Go Trailers
            </h1>
            <p style="margin:10px 0 0;color:#d4d4d8;font-size:15px;line-height:1.6;">
              A new customer submitted the website rental inquiry form.
            </p>
          </div>

          <div style="padding:22px 28px;">
            <h2 style="margin:0 0 12px;color:#ffffff;font-size:20px;">Customer Details</h2>
            <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;background:#090909;border:1px solid #242424;border-radius:14px;overflow:hidden;">
              ${emailRow("Name", payload.name)}
              ${emailRow("Email", payload.email)}
              ${emailRow("Phone", payload.phone)}
              ${emailRow("City / Area", payload.city)}
            </table>

            <h2 style="margin:28px 0 12px;color:#ffffff;font-size:20px;">Rental Details</h2>
            <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;background:#090909;border:1px solid #242424;border-radius:14px;overflow:hidden;">
              ${emailRow("Trailer", payload.trailer)}
              ${emailRow("Rental Type", payload.rentalType)}
              ${emailRow("Preferred Start", payload.rentalDate)}
              ${emailRow("Preferred Return", payload.returnDate)}
              ${emailRow("Pickup / Delivery", payload.pickupPreference)}
              ${emailRow("Payment Preference", payload.paymentPreference)}
              ${emailRow("Add-ons", payload.addOns)}
              ${emailRow("Hauling Details", payload.haulingDetails)}
              ${emailRow("Message", payload.message)}
            </table>

            <h2 style="margin:28px 0 12px;color:#ffffff;font-size:20px;">Lead Source Tracking</h2>
            <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;background:#090909;border:1px solid #242424;border-radius:14px;overflow:hidden;">
              ${emailRow("Lead Source", getLeadSourceLabel(payload))}
              ${emailRow("Submitted From", payload.sourcePage)}
              ${emailRow("Referrer", payload.referrer)}
              ${emailRow("UTM Source", payload.utmSource)}
              ${emailRow("UTM Medium", payload.utmMedium)}
              ${emailRow("UTM Campaign", payload.utmCampaign)}
              ${emailRow("UTM Term", payload.utmTerm)}
              ${emailRow("UTM Content", payload.utmContent)}
              ${emailRow("Device Type", payload.deviceType)}
            </table>

            <p style="margin:22px 0 0;color:#a1a1aa;font-size:13px;line-height:1.7;">
              Reply directly to this email to respond to the customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildCustomerTextEmail(payload: NormalizedContactRequest) {
  return [
    `Hi ${payload.name},`,
    "",
    "Thanks for contacting Tow-N-Go Trailers. We received your rental inquiry and will follow up with availability, pickup or delivery options, payment details, and next steps.",
    "",
    "Inquiry summary:",
    `Trailer: ${payload.trailer || "Not specified"}`,
    `Rental Type: ${payload.rentalType || "Not specified"}`,
    `Preferred Start: ${payload.rentalDate || "Not specified"}`,
    `Preferred Return: ${payload.returnDate || "Not specified"}`,
    `Pickup / Delivery: ${payload.pickupPreference || "Not specified"}`,
    `Add-ons: ${payload.addOns.length ? payload.addOns.join(", ") : "Not specified"}`,
    "",
    "Tow-N-Go Trailers",
    "Clean trailers. Reliable service. Ready when you need us.",
  ].join("\n");
}

function buildCustomerHtmlEmail(payload: NormalizedContactRequest) {
  return `
    <div style="margin:0;padding:0;background:#050505;color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:680px;margin:0 auto;padding:28px;">
        <div style="border:1px solid #2d2d2d;border-radius:22px;overflow:hidden;background:#0b0b0b;">
          <div style="padding:26px 28px;background:linear-gradient(135deg,#000000,#17130a);border-bottom:1px solid #2d2d2d;">
            <p style="margin:0 0 8px;color:#d4af37;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:700;">
              Inquiry Received
            </p>
            <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:1.2;">
              Thanks for contacting Tow-N-Go Trailers
            </h1>
            <p style="margin:12px 0 0;color:#d4d4d8;font-size:15px;line-height:1.7;">
              Hi ${escapeHtml(payload.name)}, we received your rental inquiry and will follow up with availability, pickup or delivery options, payment details, and next steps.
            </p>
          </div>

          <div style="padding:22px 28px;">
            <h2 style="margin:0 0 12px;color:#ffffff;font-size:20px;">Your Inquiry Summary</h2>
            <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;background:#090909;border:1px solid #242424;border-radius:14px;overflow:hidden;">
              ${emailRow("Trailer", payload.trailer)}
              ${emailRow("Rental Type", payload.rentalType)}
              ${emailRow("Preferred Start", payload.rentalDate)}
              ${emailRow("Preferred Return", payload.returnDate)}
              ${emailRow("Pickup / Delivery", payload.pickupPreference)}
              ${emailRow("Add-ons", payload.addOns)}
            </table>

            <p style="margin:22px 0 0;color:#d4d4d8;font-size:14px;line-height:1.7;">
              This confirmation means your inquiry was received. It does not guarantee availability until Tow-N-Go confirms the rental details with you.
            </p>

            <p style="margin:18px 0 0;color:#d4af37;font-size:15px;font-weight:700;">
              Tow-N-Go Trailers — clean trailers, reliable service, ready when you need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export async function POST(request: Request) {
  try {
    const resendApiKey = getRequiredEnv("RESEND_API_KEY");
    const contactToEmail = getRequiredEnv("CONTACT_TO_EMAIL");
    const contactFromEmail = getRequiredEnv("CONTACT_FROM_EMAIL");

    const body = (await request.json()) as ContactRequestBody;

    const honeypot = sanitizeText(body.website) || sanitizeText(body.company);

    if (honeypot) {
      return NextResponse.json({
        success: true,
        message:
          "Your rental inquiry has been sent. Tow-N-Go Trailers will follow up with availability and next steps.",
      });
    }

    const payload = normalizePayload(body);

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please include your name, email, and message.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(resendApiKey);

    const adminResult = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: payload.email,
      subject: `New Tow-N-Go Rental Inquiry — ${payload.name}`,
      html: buildAdminHtmlEmail(payload),
      text: buildAdminTextEmail(payload),
    });

    if (adminResult.error) {
      console.error("Tow-N-Go contact email failed:", adminResult.error);

      return NextResponse.json(
        {
          success: false,
          message:
            "The inquiry could not be sent right now. Please try again shortly.",
        },
        { status: 500 }
      );
    }

    let customerConfirmationSent = false;

    try {
      const customerResult = await resend.emails.send({
        from: contactFromEmail,
        to: [payload.email],
        replyTo: contactToEmail,
        subject: "Tow-N-Go Trailers — We received your rental inquiry",
        html: buildCustomerHtmlEmail(payload),
        text: buildCustomerTextEmail(payload),
      });

      customerConfirmationSent = !customerResult.error;

      if (customerResult.error) {
        console.error(
          "Tow-N-Go customer confirmation email failed:",
          customerResult.error
        );
      }
    } catch (error) {
      console.error("Tow-N-Go customer confirmation exception:", error);
    }

    return NextResponse.json({
      success: true,
      message:
        "Your rental inquiry has been sent. Tow-N-Go Trailers will follow up with availability and next steps.",
      id: adminResult.data?.id || null,
      customerConfirmationSent,
    });
  } catch (error) {
    console.error("Tow-N-Go contact route error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "The inquiry could not be sent right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}