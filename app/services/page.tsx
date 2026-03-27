import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services / Add-Ons"
        title="More than just the trailer."
        description="Tow-N-Go Trailers keeps the process flexible and straightforward with pickup and delivery options, practical accessories, and a service model designed to grow as customer needs grow."
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="surface p-6">
              <h2 className="text-2xl font-semibold text-white">Trailer Rentals</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                Tow-N-Go Trailers currently focuses on straightforward, dependable
                trailer rentals with flexible daily, weekly, and monthly options.
              </p>
            </div>

            <div className="surface p-6">
              <h2 className="text-2xl font-semibold text-white">Delivery & Pickup</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                Delivery and pickup are available throughout the Okanagan Valley.
                For the right job and pricing arrangement, flexibility is part of the service.
              </p>
            </div>

            <div className="surface p-6">
              <h2 className="text-2xl font-semibold text-white">Accessory Options</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                Available accessories can include a hitch, ratchet straps, cargo nets,
                boxes, moving blankets, and related hauling support items depending on
                the trailer and rental need.
              </p>
            </div>
          </div>

          <div className="mt-10 surface p-8">
            <h3 className="text-2xl font-semibold text-white">Built for growth</h3>
            <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
              Tow-N-Go Trailers is starting with rentals and practical support done
              properly. The long-term direction includes expanded transport, hotshots
              within the Okanagan, dump trailer drop-off / haul-away style options,
              and future equipment-focused services.
            </p>

            <div className="mt-8">
              <Button href="/contact">Ask About Availability</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}