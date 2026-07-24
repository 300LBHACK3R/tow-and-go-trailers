"use client";

import { type FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  trackContactFormSubmission,
  trackContactOptionClick,
} from "@/lib/analytics";
import { siteConfig } from "@/lib/site";

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

type ContactApiResponse = {
  success?: boolean;
  message?: string;
};

const addOnOptions = [
  "Hitch",
  "Ratchet straps",
  "Cargo net",
  "Boxes",
  "Moving blankets",
  "Other support items",
] as const;

const fieldClassName =
  "min-h-12 w-full rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-zinc-600 hover:border-white/20 focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/15 disabled:cursor-not-allowed disabled:opacity-60";

const textareaClassName =
  "w-full resize-y rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm leading-6 text-white outline-none transition duration-200 placeholder:text-zinc-600 hover:border-white/20 focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/15 disabled:cursor-not-allowed disabled:opacity-60";

function createInitialFormState(
  prefilledTrailer = ""
): ContactFormState {
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

function getDeviceType(): string {
  if (typeof navigator === "undefined") {
    return "Unknown";
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const hasTouchScreen = navigator.maxTouchPoints > 1;

  if (
    /ipad|tablet/.test(userAgent) ||
    (/macintosh/.test(userAgent) && hasTouchScreen)
  ) {
    return "Tablet";
  }

  if (/mobile|iphone|android|ipod/.test(userAgent)) {
    return "Mobile";
  }

  return "Desktop";
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledTrailer = searchParams.get("trailer") ?? "";

  const [form, setForm] = useState<ContactFormState>(() =>
    createInitialFormState(prefilledTrailer)
  );

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>("idle");

  const [submitMessage, setSubmitMessage] = useState("");

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

  function clearSubmitFeedback() {
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  }

  function updateField<Field extends keyof ContactFormState>(
    field: Field,
    value: ContactFormState[Field]
  ) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));

    clearSubmitFeedback();
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

    clearSubmitFeedback();
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

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

      const data = (await response
        .json()
        .catch(() => null)) as ContactApiResponse | null;

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message ||
            "The inquiry could not be sent right now. Please try again shortly."
        );
      }

      trackContactFormSubmission("contact_page");

      setSubmitStatus("success");
      setSubmitMessage(
        data.message ||
          "Your rental inquiry has been sent. Tow-N-Go Trailers will follow up with availability and next steps."
      );

      setForm((currentForm) => ({
        ...createInitialFormState(prefilledTrailer),
        sourcePage: currentForm.sourcePage,
        referrer: currentForm.referrer,
        utmSource: currentForm.utmSource,
        utmMedium: currentForm.utmMedium,
        utmCampaign: currentForm.utmCampaign,
        utmTerm: currentForm.utmTerm,
        utmContent: currentForm.utmContent,
        deviceType: currentForm.deviceType,
      }));
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
      className="relative h-fit min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-5 shadow-[0_25px_90px_rgba(0,0,0,0.42)] backdrop-blur sm:p-7 md:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/75 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-[#d4af37]/[0.05] blur-3xl"
      />

      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(event) =>
          updateField("website", event.target.value)
        }
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
            Rental Inquiry
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Tell us what you need.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
            Send the key details and Tow-N-Go Trailers will follow up
            with availability, rental options, pickup or delivery
            details, and next steps. A confirmation email will also be
            sent to the address provided.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white">
            Name *
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={(event) =>
                updateField("name", event.target.value)
              }
              className={fieldClassName}
              placeholder="Your name"
              autoComplete="name"
              maxLength={120}
              disabled={isSubmitting}
            />
          </label>

          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white">
            Email *
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={(event) =>
                updateField("email", event.target.value)
              }
              className={fieldClassName}
              placeholder="you@example.com"
              autoComplete="email"
              inputMode="email"
              maxLength={320}
              disabled={isSubmitting}
            />
          </label>

          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white">
            Phone
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={(event) =>
                updateField("phone", event.target.value)
              }
              className={fieldClassName}
              placeholder="Best number to reach you"
              autoComplete="tel"
              inputMode="tel"
              maxLength={80}
              disabled={isSubmitting}
            />
          </label>

          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white">
            City / Area
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={(event) =>
                updateField("city", event.target.value)
              }
              className={fieldClassName}
              placeholder="Kelowna, West Kelowna, Vernon..."
              autoComplete="address-level2"
              maxLength={120}
              disabled={isSubmitting}
            />
          </label>

          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white">
            Specific Trailer
            <input
              type="text"
              name="trailer"
              value={form.trailer}
              onChange={(event) =>
                updateField("trailer", event.target.value)
              }
              className={fieldClassName}
              placeholder="Trailer name if you know it"
              maxLength={180}
              disabled={isSubmitting}
            />
          </label>

          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white">
            Rental Type
            <select
              name="rentalType"
              value={form.rentalType}
              onChange={(event) =>
                updateField(
                  "rentalType",
                  event.target.value as RentalType
                )
              }
              className={fieldClassName}
              disabled={isSubmitting}
            >
              <option value="">Select trailer type</option>
              <option value="Enclosed trailer">
                Enclosed trailer
              </option>
              <option value="Dump trailer">Dump trailer</option>
              <option value="Dovetail / equipment trailer">
                Dovetail / equipment trailer
              </option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </label>

          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white">
            Preferred Start Date
            <input
              type="date"
              name="rentalDate"
              value={form.rentalDate}
              onChange={(event) =>
                updateField("rentalDate", event.target.value)
              }
              className={fieldClassName}
              disabled={isSubmitting}
            />
          </label>

          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white">
            Preferred Return Date
            <input
              type="date"
              name="returnDate"
              value={form.returnDate}
              onChange={(event) =>
                updateField("returnDate", event.target.value)
              }
              className={fieldClassName}
              disabled={isSubmitting}
            />
          </label>

          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white">
            Pickup / Delivery
            <select
              name="pickupPreference"
              value={form.pickupPreference}
              onChange={(event) =>
                updateField(
                  "pickupPreference",
                  event.target.value as PickupPreference
                )
              }
              className={fieldClassName}
              disabled={isSubmitting}
            >
              <option value="">Select preference</option>
              <option value="Customer pickup">
                Customer pickup
              </option>
              <option value="Delivery requested">
                Delivery requested
              </option>
              <option value="Pickup and delivery requested">
                Pickup and delivery requested
              </option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </label>

          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white">
            Payment Preference
            <select
              name="paymentPreference"
              value={form.paymentPreference}
              onChange={(event) =>
                updateField(
                  "paymentPreference",
                  event.target.value as PaymentPreference
                )
              }
              className={fieldClassName}
              disabled={isSubmitting}
            >
              <option value="">Select payment method</option>
              <option value="Cash">Cash</option>
              <option value="E-transfer">E-transfer</option>
              <option value="Credit card">Credit card</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </label>
        </div>

        <fieldset className="mt-6 min-w-0">
          <legend className="text-sm font-semibold text-white">
            Add-ons / Support Items
          </legend>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {addOnOptions.map((option) => (
              <label
                key={option}
                className="flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-300 transition duration-200 hover:border-[#d4af37]/45 hover:bg-black/50"
              >
                <input
                  type="checkbox"
                  name="addOns"
                  value={option}
                  checked={form.addOns.includes(option)}
                  onChange={() => toggleAddOn(option)}
                  className="h-4 w-4 shrink-0 accent-[#d4af37]"
                  disabled={isSubmitting}
                />

                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="mt-6 grid min-w-0 gap-2 text-sm font-semibold text-white">
          What are you hauling?
          <textarea
            name="haulingDetails"
            value={form.haulingDetails}
            onChange={(event) =>
              updateField("haulingDetails", event.target.value)
            }
            className={`${textareaClassName} min-h-28`}
            placeholder="Furniture, branches, equipment, boxes, debris, landscaping material..."
            maxLength={3000}
            disabled={isSubmitting}
          />
        </label>

        <label className="mt-6 grid min-w-0 gap-2 text-sm font-semibold text-white">
          Message *
          <textarea
            required
            name="message"
            value={form.message}
            onChange={(event) =>
              updateField("message", event.target.value)
            }
            className={`${textareaClassName} min-h-32`}
            placeholder="Tell us anything else that would help with the rental."
            maxLength={3000}
            disabled={isSubmitting}
          />
        </label>

        {submitMessage && (
          <div
            role={submitStatus === "error" ? "alert" : "status"}
            aria-live={
              submitStatus === "error" ? "assertive" : "polite"
            }
            className={`mt-6 rounded-2xl border px-4 py-3 text-sm leading-7 ${
              submitStatus === "success"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                : "border-red-500/30 bg-red-500/10 text-red-200"
            }`}
          >
            {submitMessage}
          </div>
        )}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-3.5 text-center text-sm font-bold text-black shadow-[0_18px_55px_rgba(212,175,55,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f0c94a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0c94a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b0b0b] disabled:cursor-not-allowed disabled:transform-none disabled:opacity-65"
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
            rel="noopener noreferrer"
            onClick={() =>
              trackContactOptionClick("facebook")
            }
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.045] px-6 py-3.5 text-center text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#d4af37]/55 hover:bg-[#d4af37]/10 hover:text-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b0b0b]"
          >
            Message on Facebook
          </a>
        </div>
      </div>
    </form>
  );
}