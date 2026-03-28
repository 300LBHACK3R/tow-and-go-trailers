import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] border-b border-white/10 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.9))]" />

      <Container className="relative flex min-h-[88vh] items-center">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Premium trailer rentals in the Okanagan
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Trailer Rentals Made Simple, Clean, and Reliable.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
            {siteConfig.shortName} offers a growing premium fleet with flexible
            daily, weekly, and monthly rental options, delivery and pickup
            availability, and the accessories needed to haul with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/rentals">View Trailers</Button>
            <Button href="/contact" variant="secondary">
              Request a Rental
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-300">
            <span>Locally owned & operated</span>
            <span>Flexible rental options</span>
            <span>Delivery available</span>
            <span>Serving Okanagan & beyond</span>
          </div>
        </div>
      </Container>
    </section>
  );
}