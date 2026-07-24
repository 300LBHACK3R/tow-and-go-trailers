import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Add-Ons",
  description:
    "Explore Tow-N-Go Trailers rental services, pickup and delivery options, practical hauling accessories, and future equipment-focused services across Kelowna and the Okanagan.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Trailer Services & Add-Ons | Tow-N-Go Trailers",
    description:
      "Trailer rentals, pickup and delivery options, hauling accessories, and practical support across Kelowna and the Okanagan.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tow-N-Go Trailers services and add-ons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trailer Services & Add-Ons | Tow-N-Go Trailers",
    description:
      "Trailer rentals, pickup and delivery options, hauling accessories, and practical support across Kelowna and the Okanagan.",
    images: ["/twitter-image.png"],
  },
};

const serviceCards = [
  {
    title: "Trailer Rentals",
    description:
      "Tow-N-Go Trailers currently focuses on straightforward, dependable trailer rentals with flexible daily, weekly, and monthly options.",
  },
  {
    title: "Delivery & Pickup",
    description:
      "Delivery and pickup are available throughout the Okanagan Valley. For the right job and pricing arrangement, flexibility is part of the service.",
  },
  {
    title: "Accessory Options",
    description:
      "Available accessories can include a hitch, ratchet straps, cargo nets, boxes, moving blankets, and related hauling support items depending on the trailer and rental need.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="overflow-x-clip bg-[#050505]">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/services-add-ons-premium-trailer-banner.png"
            alt="Premium Tow-N-Go trailer services and add-ons in the Okanagan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-black/30"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.64)_0%,rgba(0,0,0,0.25)_42%,rgba(0,0,0,0.76)_100%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(212,175,55,0.11),transparent_45%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#050505] to-transparent"
        />

        <Container className="relative">
          <div className="mx-auto flex min-h-[410px] max-w-5xl flex-col items-center justify-center py-16 text-center sm:min-h-[450px] sm:py-20 lg:min-h-[490px]">
            <p className="rounded-full border border-[#d4af37]/35 bg-black/40 px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#e4c456] shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-md sm:text-xs sm:tracking-[0.35em]">
              Services / Add-Ons
            </p>

            <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,5.5vw,5rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white [text-wrap:balance]">
              More than just the trailer.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-200 [text-wrap:balance] sm:text-lg lg:text-xl lg:leading-9">
              Tow-N-Go Trailers keeps the process flexible and straightforward
              with pickup and delivery options, practical accessories, and a
              service model designed to make hauling easier.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.09),transparent_31%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.035),transparent_27%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.68))]"
        />

        <Container className="max-w-[1500px]">
          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((card, index) => (
              <article
                key={card.title}
                className="group relative min-w-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40 sm:p-7 lg:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#d4af37]/[0.045] blur-3xl transition duration-300 group-hover:bg-[#d4af37]/[0.075]"
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="h-px w-9 bg-[#d4af37]"
                    />

                    <span className="text-xs font-semibold tracking-[0.2em] text-zinc-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
                    {card.title}
                  </h2>

                  <p className="mt-5 text-base leading-8 text-zinc-300">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <article className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(255,255,255,0.025)_42%,rgba(255,255,255,0.012))] shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:mt-10">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#d4af37]/[0.055] blur-3xl"
            />

            <div className="relative grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:p-10">
              <div className="min-w-0">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="h-px w-9 shrink-0 bg-[#d4af37]"
                  />

                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Built for growth
                  </h2>
                </div>

                <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-300">
                  Tow-N-Go Trailers is starting with rentals and practical
                  support done properly. The long-term direction includes
                  expanded transport, hotshots within the Okanagan, dump trailer
                  drop-off / haul-away style options, and future
                  equipment-focused services.
                </p>
              </div>

              <div className="shrink-0 lg:self-end">
                <Button href="/contact">Ask About Availability</Button>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </main>
  );
}