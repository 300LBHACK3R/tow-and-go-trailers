"use client";

import { FormEvent, useEffect, useState } from "react";
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

type SubmitStatus = "idle" | "submitting" | "success" | "error";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  trailer: string;
  rentalType: RentalType;
  rentalDate: string;
  returnDate: string;
  pickupPreference: PickupPreference;
  paymentPreference: PaymentPreference;
  addOns: string[];
  haulingDetails: string;
  message: string;
  website: string;
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
    city: "",
    trailer: prefilledTrailer,
    rentalType: "",
    rentalDate: "",
    returnDate: "",
    pickupPreference: "",
    paymentPreference: "",
    addOns: [],
    haulingDetails: "",
    message: "",
    website: "",
  };
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledTrailer = searchParams.get("trailer") ?? "";

  const [form, setForm] = useState<ContactFormState>(() =>
    createInitialFormState(prefilledTrailer)
  );

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const isSubmitting = submitStatus === "submitting";

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

  function updateField<K extends keyof ContactFormState>(
    field: K,
    value: ContactFormState[K]
  ) {
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }

    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleAddOn(addOn: string) {
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitStatus("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "The rental inquiry could not be sent right now. Please try again shortly."
        );
      }

      setSubmitStatus("success");
      setSubmitMessage(
        data.message ||
          "Your rental inquiry has been sent. Tow-N-Go Trailers will follow up with availability and next steps."
      );

      setForm(createInitialFormState(prefilledTrailer));
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "The rental inquiry could not be sent right now. Please try again shortly."
      );
    }
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

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(event) => updateField("website", event.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-8 grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-zinc-300">Name</span>
            <input
              required
              type="text"
              name="name"
              autoComplete="name"
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
              name="email"
              autoComplete="email"
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
              name="phone"
              autoComplete="tel"
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
              name="city"
              autoComplete="address-level2"
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
              name="trailer"
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
              name="rentalType"
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
              name="rentalDate"
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
              name="returnDate"
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
              name="pickupPreference"
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
              name="paymentPreference"
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
            name="haulingDetails"
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
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={5}
            className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
            placeholder="Tell us anything else that would help with availability, timing, location, or trailer needs."
          />
        </label>
      </div>

      {submitMessage && (
        <div
          className={`mt-6 rounded-2xl border px-4 py-3 text-sm leading-6 ${
            submitStatus === "success"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
              : "border-red-400/30 bg-red-400/10 text-red-200"
          }`}
        >
          {submitMessage}
        </div>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-3.5 text-sm font-bold text-black transition hover:-translate-y-[1px] hover:bg-[#f0ce63] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
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
    </form>
  );
}