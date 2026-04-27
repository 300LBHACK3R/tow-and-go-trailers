import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/services-add-ons-premium-trailer-banner.jpg"
            alt="Premium Tow-N-Go trailer services and add-ons in the Okanagan"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.72),rgba(0,0,0,0.42),rgba(0,0,0,0.88))]" />
        </div>

        <Container className="relative flex min-h-[520px] items-center justify-center py-28 text-center md:min-h-[600px]">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Services / Add-Ons
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
              More than just the trailer.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-xl">
              Tow-N-Go Trailers keeps the process flexible and straightforward
              with pickup and delivery options, practical accessories, and a
              service model designed to make hauling easier.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceCards.map((card) => (
              <div key={card.title} className="surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-white">
                  {card.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="surface mt-10 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Built for growth
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-300">
              Tow-N-Go Trailers is starting with rentals and practical support
              done properly. The long-term direction includes expanded
              transport, hotshots within the Okanagan, dump trailer drop-off /
              haul-away style options, and future equipment-focused services.
            </p>

            <div className="mt-7">
              <Button href="/contact">Ask About Availability</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}