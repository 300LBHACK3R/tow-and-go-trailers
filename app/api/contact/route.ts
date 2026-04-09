import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
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

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL as string,
      to: [process.env.CONTACT_TO_EMAIL as string],
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

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Your inquiry was sent successfully. We’ll get back to you soon.",
    });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { message: "Something went wrong while sending your inquiry." },
      { status: 500 }
    );
  }
}