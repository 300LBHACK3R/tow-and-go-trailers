import { NextResponse } from "next/server";

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

    return NextResponse.json({
      message: "Inquiry received successfully.",
    });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong while sending your inquiry." },
      { status: 500 }
    );
  }
}