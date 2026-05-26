import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { contactFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tow-N-Go Trailers to check trailer rental availability, ask about pickup and delivery, or send a rental inquiry for moving, cleanup, equipment hauling, or contractor work across Kelowna and the Okanagan.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Tow-N-Go Trailers",
    description:
      "Send a trailer rental inquiry and check current availability across Kelowna and the Okanagan.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Tow-N-Go Trailers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tow-N-Go Trailers",
    description:
      "Send a trailer rental inquiry and check current availability across Kelowna and the Okanagan.",
    images: ["/twitter-image.png"],
  },
};

function ContactFormFallback() {
  return (
    <div className="surface p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
        Rental Inquiry
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-white">
        Loading inquiry form...
      </h2>

      <p className="mt-3 text-sm leading-7 text-zinc-400">
        Preparing the trailer rental request form.
      </p>

      <div className="mt-8 grid gap-5">
        <div className="h-12 animate-pulse rounded-2xl bg-white/5" />
        <div className="h-12 animate-pulse rounded-2xl bg-white/5" />
        <div className="h-32 animate-pulse rounded-2xl bg-white/5" />
      </div>
    </div>
  );
}

function ContactInfoPanel() {
  return (
    <aside className="surface h-fit self-start p-6 md:p-8 lg:sticky lg:top-28">
      <h2 className="text-2xl font-semibold text-white">Get in touch</h2>

      <p className="mt-3 text-sm leading-7 text-zinc-400">
        Quick response times. Direct communication. Clear rental details before
        the job starts.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            Phone
          </p>

          <a
            href={siteConfig.phoneHref}
            className="mt-2 block text-lg text-white transition hover:text-[#d4af37]"
          >
            {siteConfig.phone}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            Email
          </p>

          <a
            href={siteConfig.emailHref}
            className="mt-2 block break-words text-lg text-white transition hover:text-[#d4af37]"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            Service Area
          </p>

          <p className="mt-2 text-zinc-300">{siteConfig.serviceArea}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            Payment Methods
          </p>

          <p className="mt-2 text-zinc-300">
            Cash, e-transfer, and credit card payments accepted.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            Pickup & Delivery
          </p>

          <p className="mt-2 text-zinc-300">
            Flexible pickup and delivery options may be available. Pickup and
            delivery can be arranged for a fee as a convenience to renters.
          </p>
        </div>

        <div className="border-t border-white/10 pt-6">
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:border-[#d4af37]/50 hover:bg-white/10"
          >
            Message on Facebook
          </a>
        </div>
      </div>
    </aside>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/industrial-trailers-under-dramatic-skies.png"
            alt="Premium Tow-N-Go trailer rentals in the Okanagan"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.48),rgba(0,0,0,0.20),rgba(0,0,0,0.62))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),rgba(0,0,0,0.38))]" />
        </div>

        <Container className="relative z-10">
          <div className="flex min-h-[430px] flex-col items-center justify-center px-4 py-24 text-center md:min-h-[500px]">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#d4af37]">
              Contact / Booking Inquiry
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Send a rental inquiry.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-xl">
              Tell us what you need, your timing, pickup or delivery
              preference, and any details about the job. We’ll review your
              request and get back to you with availability and next steps.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#050505] py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_24%)]" />

        <Container className="relative">
          <div className="grid items-start gap-8 lg:grid-cols-[0.88fr_1.22fr]">
            <ContactInfoPanel />

            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>

      <FaqSection
        faqs={contactFaqs}
        eyebrow="Rental Inquiry FAQ"
        title="Before you send your request."
        description="These answers help customers understand what information to include, how pickup and delivery works, payment options, and what to expect when asking about trailer availability."
      />
    </>
  );
}