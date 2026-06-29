"use client";

import { type FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/site";
import {
  trackContactFormSubmission,
  trackContactOptionClick,
} from "@/lib/analytics";

type RentalType =
  | ""
  | "Enclosed trailer"
  | "Dump trailer"
  | "Dovetail / equipment trailer"
  | "Not sure yet";

type PickupPreference =
  | ""
  | "Customer pickup"
  | "Delivery requested"
  | "Pickup and delivery requested"
  | "Not sure yet";

type PaymentPreference =
  | ""
  | "Cash"
  | "E-transfer"
  | "Credit card"
  | "Not sure yet";

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

  sourcePage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  deviceType: string;

  website: string;
};

const addOnOptions = [
  "Hitch",
  "Ratchet straps",
  "Cargo net",
  "Boxes",
  "Moving blankets",
  "Other support items",
];

function createInitialFormState(prefilledTrailer = ""): ContactFormState {
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

    sourcePage: "",
    referrer: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmTerm: "",
    utmContent: "",
    deviceType: "",

    website: "",
  };
}

function getDeviceType() {
  if (typeof navigator === "undefined") return "Unknown";

  const userAgent = navigator.userAgent.toLowerCase();

  if (/mobile|iphone|android|ipod/.test(userAgent)) return "Mobile";
  if (/ipad|tablet/.test(userAgent)) return "Tablet";

  return "Desktop";
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledTrailer = searchParams.get("trailer") ?? "";

  const [form, setForm] = useState<ContactFormState>(() =>
    createInitialFormState(prefilledTrailer)
  );
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const isSubmitting = submitStatus === "submitting";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setForm((currentForm) => ({
      ...currentForm,
      trailer: currentForm.trailer || prefilledTrailer,
      sourcePage: `${window.location.pathname}${window.location.search}`,
      referrer: document.referrer || "Direct / unknown",
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmTerm: params.get("utm_term") || "",
      utmContent: params.get("utm_content") || "",
      deviceType: getDeviceType(),
    }));
  }, [prefilledTrailer]);

  function updateField<Field extends keyof ContactFormState>(
    field: Field,
    value: ContactFormState[Field]
  ) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));

    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  }

  function toggleAddOn(addOn: string) {
    setForm((currentForm) => {
      const hasAddOn = currentForm.addOns.includes(addOn);

      return {
        ...currentForm,
        addOns: hasAddOn
          ? currentForm.addOns.filter((item) => item !== addOn)
          : [...currentForm.addOns, addOn],
      };
    });

    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
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
            "The inquiry could not be sent right now. Please try again shortly."
        );
      }

      trackContactFormSubmission("contact_page");

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
          : "The inquiry could not be sent right now. Please try again shortly."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_25px_90px_rgba(0,0,0,0.42)] backdrop-blur md:p-8"
    >
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(event) => updateField("website", event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
          Rental Inquiry
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Tell us what you need.
        </h2>

        <p className="mt-4 text-sm leading-7 text-zinc-400">
          Send the key details and Tow-N-Go Trailers will follow up with
          availability, rental options, pickup or delivery details, and next
          steps. A confirmation email will also be sent to the address provided.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white">
          Name *
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white">
          Email *
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white">
          Phone
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
            placeholder="Best number to reach you"
            autoComplete="tel"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white">
          City / Area
          <input
            type="text"
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
            placeholder="Kelowna, West Kelowna, Vernon..."
            autoComplete="address-level2"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white">
          Specific Trailer
          <input
            type="text"
            value={form.trailer}
            onChange={(event) => updateField("trailer", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
            placeholder="Trailer name if you know it"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white">
          Rental Type
          <select
            value={form.rentalType}
            onChange={(event) =>
              updateField("rentalType", event.target.value as RentalType)
            }
            className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-[#d4af37]/70"
          >
            <option value="">Select trailer type</option>
            <option value="Enclosed trailer">Enclosed trailer</option>
            <option value="Dump trailer">Dump trailer</option>
            <option value="Dovetail / equipment trailer">
              Dovetail / equipment trailer
            </option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white">
          Preferred Start Date
          <input
            type="date"
            value={form.rentalDate}
            onChange={(event) => updateField("rentalDate", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-[#d4af37]/70"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white">
          Preferred Return Date
          <input
            type="date"
            value={form.returnDate}
            onChange={(event) => updateField("returnDate", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-[#d4af37]/70"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white">
          Pickup / Delivery
          <select
            value={form.pickupPreference}
            onChange={(event) =>
              updateField(
                "pickupPreference",
                event.target.value as PickupPreference
              )
            }
            className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-[#d4af37]/70"
          >
            <option value="">Select preference</option>
            <option value="Customer pickup">Customer pickup</option>
            <option value="Delivery requested">Delivery requested</option>
            <option value="Pickup and delivery requested">
              Pickup and delivery requested
            </option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white">
          Payment Preference
          <select
            value={form.paymentPreference}
            onChange={(event) =>
              updateField(
                "paymentPreference",
                event.target.value as PaymentPreference
              )
            }
            className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-[#d4af37]/70"
          >
            <option value="">Select payment method</option>
            <option value="Cash">Cash</option>
            <option value="E-transfer">E-transfer</option>
            <option value="Credit card">Credit card</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-white">Add-ons / Support Items</p>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {addOnOptions.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-300 transition hover:border-[#d4af37]/45"
            >
              <input
                type="checkbox"
                checked={form.addOns.includes(option)}
                onChange={() => toggleAddOn(option)}
                className="h-4 w-4 accent-[#d4af37]"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <label className="mt-6 grid gap-2 text-sm font-semibold text-white">
        What are you hauling?
        <textarea
          value={form.haulingDetails}
          onChange={(event) => updateField("haulingDetails", event.target.value)}
          className="min-h-28 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
          placeholder="Furniture, branches, equipment, boxes, debris, landscaping material..."
        />
      </label>

      <label className="mt-6 grid gap-2 text-sm font-semibold text-white">
        Message *
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-32 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/70"
          placeholder="Tell us anything else that would help with the rental."
        />
      </label>

      {submitMessage && (
        <div
          className={`mt-6 rounded-2xl border px-4 py-3 text-sm leading-7 ${
            submitStatus === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
              : "border-red-500/30 bg-red-500/10 text-red-200"
          }`}
        >
          {submitMessage}
        </div>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex flex-1 items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-3.5 text-sm font-bold text-black shadow-[0_18px_55px_rgba(212,175,55,0.22)] transition hover:-translate-y-[1px] hover:bg-[#f0c94a] disabled:cursor-not-allowed disabled:opacity-65"
        >
          {isSubmitting
            ? "Sending..."
            : submitStatus === "success"
              ? "Inquiry Sent"
              : "Send Inquiry"}
        </button>

        <a
          href={siteConfig.social.facebook}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackContactOptionClick("facebook")}
          className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-[1px] hover:border-[#d4af37]/55 hover:text-[#d4af37]"
        >
          Message on Facebook
        </a>
      </div>
    </form>
  );
}