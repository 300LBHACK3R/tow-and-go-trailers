import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/hero.jpg"
        alt="Trailer rental in the Okanagan"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* GRADIENT (TOP FADE INTO NAVBAR) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* CONTENT */}
      <Container className="relative flex min-h-screen items-center pt-[140px]">
        <div className="max-w-3xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Premium trailer rentals in the Okanagan
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Clean. Reliable. Ready When You Are.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-200">
            Tow-N-Go Trailers provides high-quality trailer rentals with flexible
            options, delivery services, and the equipment you need to haul safely
            and confidently.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/rentals">View Trailers</Button>
            <Button href="/contact" variant="secondary">
              Request a Rental
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-300">
            <span>Locally owned</span>
            <span>Flexible rentals</span>
            <span>Delivery available</span>
            <span>Serving Okanagan</span>
          </div>

        </div>
      </Container>
    </section>
  );
}