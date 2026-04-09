import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey) {
      return NextResponse.json(
        { message: "Missing RESEND_API_KEY in environment variables." },
        { status: 500 }
      );
    }

    if (!contactToEmail) {
      return NextResponse.json(
        { message: "Missing CONTACT_TO_EMAIL in environment variables." },
        { status: 500 }
      );
    }

    if (!contactFromEmail) {
      return NextResponse.json(
        { message: "Missing CONTACT_FROM_EMAIL in environment variables." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json();

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const trailer = String(body.trailer || "").trim();
    const rentalDates = String(body.rentalDates || "").trim();
    const message = String(body.message || "").trim();
    const company = String(body.company || "").trim();

    if (company) {
      return NextResponse.json({ message: "Spam detected." }, { status: 400 });
    }

    if (!name || !phone || !email || !trailer || !rentalDates || !message) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: email,
      subject: `New Tow-N-Go Rental Inquiry — ${name}`,
      html: `
        <h2>New Trailer Rental Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Trailer:</strong> ${trailer}</p>
        <p><strong>Rental Dates:</strong> ${rentalDates}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (result.error) {
      console.error("RESEND ERROR:", result.error);
      return NextResponse.json(
        {
          message:
            typeof result.error.message === "string"
              ? result.error.message
              : "Failed to send email.",
        },
        { status: 500 }
      );
    }

    console.log("RESEND SUCCESS:", result);

    return NextResponse.json({
      message: "Your inquiry was sent successfully. We’ll get back to you soon.",
    });
  } catch (err) {
    console.error("CONTACT ROUTE ERROR:", err);

    return NextResponse.json(
      {
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong while sending your inquiry.",
      },
      { status: 500 }
    );
  }
}