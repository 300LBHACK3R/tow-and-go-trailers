"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/site";

type RentalType =
  | ""
  | "Enclosed Trailer"
  | "Dump Trailer"
  | "Flatdeck / Equipment Trailer"
  | "Not Sure Yet";

type PickupPreference = "" | "Pickup" | "Delivery" | "Either / Flexible";

type PaymentPreference =
  | ""
  | "Cash"
  | "E-transfer"
  | "Credit Card"
  | "Not Sure Yet";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  trailer: string;
  rentalType: RentalType;
  rentalDate: string;
  returnDate: string;
  city: string;
  pickupPreference: PickupPreference;
  paymentPreference: PaymentPreference;
  addOns: string[];
  haulingDetails: string;
  message: string;
};

const addOnOptions = [
  "Hitch",
  "Ratchet straps",
  "Cargo nets",
  "Boxes",
  "Moving blankets",
  "Pickup / delivery",
];

function createInitialFormState(prefilledTrailer: string): ContactFormState {
  return {
    name: "",
    email: "",
    phone: "",
    trailer: prefilledTrailer,
    rentalType: "",
    rentalDate: "",
    returnDate: "",
    city: "",
    pickupPreference: "",
    paymentPreference: "",
    addOns: [],
    haulingDetails: "",
    message: "",
  };
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledTrailer = searchParams.get("trailer") ?? "";

  const [form, setForm] = useState<ContactFormState>(() =>
    createInitialFormState(prefilledTrailer)
  );

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!prefilledTrailer) return;

    setForm((current) => {
      if (current.trailer === prefilledTrailer) return current;

      return {
        ...current,
        trailer: prefilledTrailer,
      };
    });
  }, [prefilledTrailer]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Trailer Rental Inquiry from ${form.name || "Website Visitor"}`
    );

    const body = encodeURIComponent(
      [
        "New trailer rental inquiry from the Tow-N-Go Trailers website:",
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `City / Area: ${form.city || "Not provided"}`,
        "",
        `Specific Trailer: ${form.trailer || "Not specified"}`,
        `Rental Type: ${form.rentalType || "Not specified"}`,
        `Preferred Start Date: ${form.rentalDate || "Not provided"}`,
        `Preferred Return Date: ${form.returnDate || "Not provided"}`,
        `Pickup / Delivery Preference: ${
          form.pickupPreference || "Not specified"
        }`,
        `Payment Preference: ${form.paymentPreference || "Not specified"}`,
        "",
        `Requested Add-Ons: ${
          form.addOns.length > 0 ? form.addOns.join(", ") : "None selected"
        }`,
        "",
        "What they are hauling:",
        form.haulingDetails || "Not provided",
        "",
        "Additional message:",
        form.message || "Not provided",
        "",
        "---",
        "Sent from the Tow-N-Go Trailers website contact form.",
      ].join("\n")
    );

    return `${siteConfig.emailHref}?subject=${subject}&body=${body}`;
  }, [form]);

  function updateField<K extends keyof ContactFormState>(
    field: K,
    value: ContactFormState[K]
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleAddOn(addOn: string) {
    setForm((current) => {
      const exists = current.addOns.includes(addOn);

      return {
        ...current,
        addOns: exists
          ? current.addOns.filter((item) => item !== addOn)
          : [...current.addOns, addOn],
      };
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoHref;
  }

  return (
    <form onSubmit={handleSubmit} className="surface p-6 md:p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
          Rental Inquiry
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-white">
          Tell us what you need.
        </h2>

        <p className="mt-3 text-sm leading-7 text-zinc-400">
          Send the key details and Tow-N-Go Trailers will follow up with
          availability, rental options, pickup or delivery details, and next
          steps.
        </p>
      </div>

      <div className="mt-8 grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-zinc-300">Name</span>
            <input
              required
              type="text"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-300">Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-zinc-300">Phone</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
              placeholder="Best number to reach you"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-300">
              City / Area
            </span>
            <input
              type="text"
              value={form.city}
              onChange={(event) => updateField("city", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
              placeholder="Kelowna, West Kelowna, Vernon..."
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-zinc-300">
              Specific Trailer
            </span>
            <input
              type="text"
              value={form.trailer}
              onChange={(event) => updateField("trailer", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
              placeholder="Trailer name if you know it"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-300">
              Rental Type
            </span>
            <select
              value={form.rentalType}
              onChange={(event) =>
                updateField("rentalType", event.target.value as RentalType)
              }
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#d4af37]/70"
            >
              <option value="">Select trailer type</option>
              <option value="Enclosed Trailer">Enclosed Trailer</option>
              <option value="Dump Trailer">Dump Trailer</option>
              <option value="Flatdeck / Equipment Trailer">
                Flatdeck / Equipment Trailer
              </option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-zinc-300">
              Preferred Start Date
            </span>
            <input
              type="date"
              value={form.rentalDate}
              onChange={(event) =>
                updateField("rentalDate", event.target.value)
              }
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#d4af37]/70"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-300">
              Preferred Return Date
            </span>
            <input
              type="date"
              value={form.returnDate}
              onChange={(event) => updateField("returnDate", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#d4af37]/70"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-zinc-300">
              Pickup / Delivery
            </span>
            <select
              value={form.pickupPreference}
              onChange={(event) =>
                updateField(
                  "pickupPreference",
                  event.target.value as PickupPreference
                )
              }
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#d4af37]/70"
            >
              <option value="">Select preference</option>
              <option value="Pickup">Pickup</option>
              <option value="Delivery">Delivery</option>
              <option value="Either / Flexible">Either / Flexible</option>
            </select>

            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Pickup and delivery may be available for a fee depending on
              location and scheduling.
            </p>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-300">
              Payment Preference
            </span>
            <select
              value={form.paymentPreference}
              onChange={(event) =>
                updateField(
                  "paymentPreference",
                  event.target.value as PaymentPreference
                )
              }
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#d4af37]/70"
            >
              <option value="">Select payment method</option>
              <option value="Cash">Cash</option>
              <option value="E-transfer">E-transfer</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>
          </label>
        </div>

        <div>
          <span className="text-sm font-medium text-zinc-300">
            Add-ons / Support Items
          </span>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {addOnOptions.map((addOn) => {
              const isSelected = form.addOns.includes(addOn);

              return (
                <button
                  key={addOn}
                  type="button"
                  onClick={() => toggleAddOn(addOn)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    isSelected
                      ? "border-[#d4af37]/70 bg-[#d4af37]/15 text-white"
                      : "border-white/10 bg-black/40 text-zinc-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {isSelected ? "✓ " : ""}
                  {addOn}
                </button>
              );
            })}
          </div>
        </div>

        <label className="block">
          <span className="text-sm font-medium text-zinc-300">
            What are you hauling?
          </span>
          <textarea
            value={form.haulingDetails}
            onChange={(event) =>
              updateField("haulingDetails", event.target.value)
            }
            rows={4}
            className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
            placeholder="Furniture, branches, equipment, boxes, landscaping material, dump run, contractor work..."
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-300">
            Extra Details
          </span>
          <textarea
            required
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={5}
            className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
            placeholder="Tell us anything else that would help with availability, timing, location, or trailer needs."
          />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-3.5 text-sm font-bold text-black transition hover:-translate-y-[1px] hover:bg-[#f0ce63]"
        >
          Send Inquiry
        </button>

        <a
          href={siteConfig.social.facebook}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:bg-white/10"
        >
          Message on Facebook
        </a>
      </div>

      {submitted && (
        <p className="mt-4 text-sm leading-6 text-zinc-400">
          Your email app should open with the rental inquiry filled in. If it
          does not open, message Tow-N-Go Trailers through Facebook.
        </p>
      )}
    </form>
  );
}