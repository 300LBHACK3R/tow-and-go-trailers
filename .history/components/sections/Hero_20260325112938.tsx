import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/10 pt-[140px]">
      {/* REAL BACKGROUND IMAGE */}
      <Image
        src="/images/hero.jpg"
        alt="Tow-N-Go trailer in use"
        fill
        priority
        className="object-cover"
      />

      {/* DARK BASE OVERLAY */}
      <div className="absolute inset-0 bg-black/68" />

      {/* PREMIUM GOLD ATMOSPHERIC GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.34),transparent_30%),radial-gradient(circle_at_75%_20%,rgba(212,175,55,0.26),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)]" />

      {/* CINEMATIC VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.25)_65%,rgba(0,0,0,0.65)_100%)]" />

      {/* DEPTH GRADIENT */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.70),rgba(0,0,0,0.45),rgba(0,0,0,0.88))]" />

      {/* SUBTLE LIGHT BEAM */}
      <div className="absolute inset-y-0 left-[55%] hidden w-[32rem] -translate-x-1/2 rotate-[10deg] bg-[linear-gradient(to_bottom,rgba(212,175,55,0.14),rgba(212,175,55,0.05),transparent)] blur-3xl xl:block" />

      <Container className="relative py-20 md:py-28">
        <div className="grid items-center gap-14 xl:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Premium Trailer Rentals in the Okanagan
            </p>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Trailer Rentals
              <span className="block text-zinc-400">That Look Premium</span>
              <span className="block">and Work Hard.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              {siteConfig.shortName} offers a growing premium fleet with flexible
              daily, weekly, and monthly rental options, delivery and pickup
              availability, and the accessories needed to haul with confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/rentals" className="min-w-[170px]">
                View Trailers
              </Button>
              <Button href="/contact" variant="secondary" className="min-w-[170px]">
                Request a Rental
              </Button>
            </div>

            <div className="mt-12 grid gap-4 text-sm text-zinc-300 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-sm">
                Locally owned & operated
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-sm">
                Flexible rental options
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-sm">
                Delivery available
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-sm">
                Serving Okanagan & beyond
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_60%)] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 p-6 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.70)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#d4af37]">
                    Featured Fleet
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Built for Real Jobs
                  </h2>
                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                  Tow-N-Go
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Available Now
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Enclosed Trailer
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">
                    Secure, clean, and ideal for moving, equipment hauling, and protected cargo.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Available Now
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Dump Trailer
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">
                    Reliable for cleanup, landscaping, renovation debris, and heavier hauling jobs.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/10 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">
                    Coming Soon
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    7x20 Dovetail Trailer
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-200">
                    A larger premium hauling option expanding the fleet soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}