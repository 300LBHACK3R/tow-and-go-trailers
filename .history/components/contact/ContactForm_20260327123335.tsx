"use client";

import { useState } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading", message: "Sending your inquiry..." });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          trailer: formData.get("trailer"),
          rentalDates: formData.get("rentalDates"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      form.reset();
      setState({
        status: "success",
        message: "Your inquiry was sent successfully. We’ll get back to you soon.",
      });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your inquiry.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#d4af37]"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#d4af37]"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#d4af37]"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="trailer" className="mb-2 block text-sm font-medium text-white">
            Trailer Interested In
          </label>
          <select
            id="trailer"
            name="trailer"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#d4af37]"
          >
            <option value="" disabled className="text-black">
              Select a trailer
            </option>
            <option value="2026 Royal Cargo 7'6&quot; x 16' + V-Nose Enclosed Trailer" className="text-black">
              Enclosed Trailer
            </option>
            <option value="2025 SureTrac 6x10 Dump Trailer" className="text-black">
              Dump Trailer
            </option>
            <option value="2026 Southland 7x20 + Dovetail Trailer" className="text-black">
              7x20 Dovetail Trailer
            </option>
            <option value="Not Sure Yet" className="text-black">
              Not Sure Yet
            </option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="rentalDates"
            className="mb-2 block text-sm font-medium text-white"
          >
            Rental Dates / Timing
          </label>
          <input
            id="rentalDates"
            name="rentalDates"
            required
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#d4af37]"
            placeholder="Example: March 24–26 or next weekend"
          />
        </div>

        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            placeholder="Leave blank"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
            Inquiry Details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#d4af37]"
            placeholder="Tell us what you need, whether delivery or pickup is needed, where you're located, and where the trailer will be used."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <button
          type="submit"
          disabled={state.status === "loading"}
          className="inline-flex items-center justify-center rounded-xl bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state.status === "loading" ? "Sending..." : "Send Inquiry"}
        </button>

        {state.message ? (
          <p
            className={`text-sm ${
              state.status === "success"
                ? "text-green-400"
                : state.status === "error"
                ? "text-red-400"
                : "text-zinc-300"
            }`}
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}