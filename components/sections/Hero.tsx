import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/10 pt-[56px] md:pt-[68px]">
      <Image
        src="/images/hero.jpg"
        alt="Tow-N-Go trailer in use"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/68" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.34),transparent_30%),radial-gradient(circle_at_75%_20%,rgba(212,175,55,0.26),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.25)_65%,rgba(0,0,0,0.65)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.70),rgba(0,0,0,0.45),rgba(0,0,0,0.88))]" />
      <div className="absolute inset-y-0 left-[55%] hidden w-[32rem] -translate-x-1/2 rotate-[10deg] bg-[linear-gradient(to_bottom,rgba(212,175,55,0.14),rgba(212,175,55,0.05),transparent)] blur-3xl xl:block" />

      <Container className="relative py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:gap-14">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Premium Trailer Rentals in the Okanagan
            </p>

            <h1 className="text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Trailer Rentals
              <span className="block text-zinc-400">That Look Premium</span>
              <span className="block">and Work Hard.</span>
            </h1>

            <div className="mt-5">
              <p className="text-lg text-zinc-200 md:text-xl">
                Trailer rentals starting at{" "}
                <span className="font-semibold text-[#d4af37]">$115/day</span>
              </p>

              <p className="mt-2 max-w-2xl text-sm text-zinc-400 md:text-base">
                Daily, weekly, and monthly options • No hidden fees • Flexible
                pickup &amp; delivery • Discounts for longer rentals
              </p>
            </div>
            

            <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
              <Button href="/rentals" className="min-w-[170px]">
                View Trailers
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="min-w-[170px]"
              >
                Request a Rental
              </Button>
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-zinc-500">
              Fully insured • Commercial-grade trailers • Ready for real jobs
            </p>

            <div className="mt-10 grid gap-4 text-sm text-zinc-300 sm:grid-cols-2 xl:grid-cols-4">
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

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_60%)] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.70)] backdrop-blur-xl md:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#d4af37]">
                    Featured Fleet
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Available Fleet
                  </h2>
                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                  Tow-N-Go
                </div>
              </div>

              <div className="grid gap-4">
                <Link
                  href="/rentals#royal-cargo-enclosed"
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-black/45 transition hover:border-[#d4af37]/40 hover:bg-white/[0.02]"
                >
                  <div className="grid grid-cols-[96px_1fr] md:grid-cols-[100px_1fr]">
                    <div className="relative min-h-[108px] md:min-h-[110px]">
                      <Image
                        src="/images/tow-and-go-royal-cargo-enclosed-trailer-penticton-side-view-05.jpg"
                        alt="Royal Cargo enclosed trailer rental in Kelowna and the Okanagan"
                        fill
                        sizes="100px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        Available Now
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        Enclosed Trailer
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-zinc-300">
                        Secure, clean, and ideal for moving and protected cargo.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-zinc-400">
                        <span>7&apos;6&quot; x 16&apos;</span>
                        <span>Dual 3500lb</span>
                        <span>Enclosed</span>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/rentals#suretrac-dump"
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-black/45 transition hover:border-[#d4af37]/40 hover:bg-white/[0.02]"
                >
                  <div className="grid grid-cols-[96px_1fr] md:grid-cols-[100px_1fr]">
                    <div className="relative min-h-[108px] md:min-h-[110px]">
                      <Image
                        src="/images/suretrac-6x10-dump-trailer-okanagan-3.jpg"
                        alt="SureTrac 6x10 dump trailer rental in Okanagan"
                        fill
                        sizes="100px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        Available Now
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        Dump Trailer
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-zinc-300">
                        Perfect for landscaping, debris, and heavy hauling jobs.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-zinc-400">
                        <span>6x10</span>
                        <span>Dual 5000lb</span>
                        <span>Hydraulic dump</span>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/rentals#southland-dovetail"
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-black/45 transition hover:border-[#d4af37]/40 hover:bg-white/[0.02]"
                >
                  <div className="grid grid-cols-[96px_1fr] md:grid-cols-[100px_1fr]">
                    <div className="relative min-h-[108px] md:min-h-[110px]">
                      <Image
                        src="/images/tow-and-go-southland-dovetail-deckover-trailer-kelowna-ramp-view-02.jpg"
                        alt="Southland 7x20 dovetail trailer rental in Kelowna"
                        fill
                        sizes="100px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        Available Now
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        7x20 Dovetail Trailer
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-zinc-300">
                        Heavy-duty flat deck built for equipment, vehicles, and
                        serious hauling.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-zinc-400">
                        <span>7x20</span>
                        <span>Dual 7000lb</span>
                        <span>Ramps</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}