import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { trailers, type Trailer } from "@/data/trailers";
import { siteConfig } from "@/lib/site";

const featuredTrailers = trailers.slice(0, 3);

const trustItems = [
  "Clean trailers",
  "Flexible rentals",
  "Pickup / delivery may be available",
  "Accessories available",
] as const;

type HomepageTrailerContent = {
  name: string;
  description: string;
};

function getHomepageTrailerContent(
  trailer: Trailer
): HomepageTrailerContent {
  const normalizedName = trailer.name.toLowerCase();

  if (normalizedName.includes("dump")) {
    return {
      name: "Dump Trailer",
      description:
        "Built for dump runs, yard cleanups, debris, landscaping, and heavier cleanup jobs.",
    };
  }

  if (
    normalizedName.includes("dovetail") ||
    normalizedName.includes("flatdeck") ||
    normalizedName.includes("flat deck") ||
    normalizedName.includes("equipment")
  ) {
    return {
      name: "Dovetail Equipment Trailer",
      description:
        "Ready for equipment hauling, contractor jobs, machines, materials, and open-deck loads.",
    };
  }

  if (
    normalizedName.includes("enclosed") ||
    normalizedName.includes("cargo") ||
    normalizedName.includes("v-nose")
  ) {
    return {
      name: "Enclosed Trailer",
      description:
        "Ideal for moving, furniture, tools, boxes, and cargo that should stay protected.",
    };
  }

  return {
    name: trailer.name,
    description:
      "Clean, dependable trailer rental option ready for real hauling jobs.",
  };
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(120deg,#000000_0%,#090806_48%,#000000_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_14%,rgba(212,175,55,0.16),transparent_31%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.07),transparent_25%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[120px] sm:h-[520px] sm:w-[520px] lg:h-[620px] lg:w-[620px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#050505] to-transparent"
      />

      <Container className="relative z-10 max-w-[1500px] py-12 sm:py-14 lg:py-16 xl:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(500px,1.06fr)] lg:gap-12 xl:gap-16">
          <div className="mx-auto w-full max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="inline-flex max-w-full items-center justify-center rounded-full border border-[#d4af37]/35 bg-[#d4af37]/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#e2c052] shadow-[0_12px_40px_rgba(212,175,55,0.1)] backdrop-blur-sm sm:px-5 sm:text-xs sm:tracking-[0.28em]">
              Premium trailer rentals in the Okanagan
            </p>

            <h1 className="mt-6 text-[clamp(3rem,5.2vw,5.75rem)] font-black leading-[0.92] tracking-[-0.06em] text-white [text-wrap:balance]">
              Trailer Rentals
              <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                That Look Premium
              </span>
              <span className="block text-white">
                and Work Hard.
              </span>
            </h1>

            <div className="mx-auto mt-6 max-w-2xl lg:mx-0">
              <p className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                Trailer rentals starting at{" "}
                <span className="text-[#d4af37]">$115/day</span>
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base lg:text-lg lg:leading-8">
                Daily, weekly, and monthly options • Flexible pickup &amp;
                delivery • Discounts for longer rentals
              </p>
            </div>

            <div className="mx-auto mt-7 grid max-w-xl gap-3 sm:grid-cols-2 lg:mx-0">
              <Link
                href="/rentals"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-3.5 text-center text-sm font-black text-black shadow-[0_18px_60px_rgba(212,175,55,0.23)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#edca52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0d36e] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                Browse Trailers
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-center text-sm font-black text-white shadow-[0_14px_38px_rgba(0,0,0,0.18)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 hover:text-[#e4c456] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                Request Rental
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[0.64rem] font-semibold uppercase tracking-[0.17em] text-zinc-500 sm:text-xs sm:tracking-[0.21em] lg:justify-start">
              <span>Commercial-grade trailers</span>
              <span aria-hidden="true" className="text-[#d4af37]">
                •
              </span>
              <span>Clean rental options</span>
              <span aria-hidden="true" className="text-[#d4af37]">
                •
              </span>
              <span>Ready for real jobs</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-3xl lg:max-w-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-[#d4af37]/10 blur-3xl sm:-inset-6 sm:rounded-[3rem]"
            />

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_30px_110px_rgba(0,0,0,0.52)] backdrop-blur-xl sm:p-3.5">
              <div className="rounded-[1.35rem] border border-white/10 bg-black/60 p-4 sm:p-5 lg:p-6">
                <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.27em] text-[#d4af37] sm:text-xs sm:tracking-[0.32em]">
                      Featured Fleet
                    </p>

                    <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      Available Fleet
                    </h2>
                  </div>

                  <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.68rem] font-bold text-zinc-300 sm:text-xs">
                    Tow-N-Go
                  </span>
                </div>

                <div className="space-y-3">
                  {featuredTrailers.map((trailer) => {
                    const content =
                      getHomepageTrailerContent(trailer);

                    return (
                      <Link
                        key={trailer.id}
                        href="/rentals"
                        aria-label={`View ${content.name}`}
                        className="group grid min-w-0 grid-cols-[88px_minmax(0,1fr)] overflow-hidden rounded-2xl border border-white/10 bg-black/45 transition duration-250 hover:-translate-y-0.5 hover:border-[#d4af37]/45 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 sm:grid-cols-[106px_minmax(0,1fr)] xl:grid-cols-[118px_minmax(0,1fr)]"
                      >
                        <div className="relative min-h-24 overflow-hidden bg-zinc-950 sm:min-h-28 xl:min-h-32">
                          <Image
                            src={trailer.image}
                            alt={content.name}
                            fill
                            sizes="(max-width: 639px) 88px, (max-width: 1279px) 106px, 118px"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.045]"
                          />

                          <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/35"
                          />

                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent"
                          />
                        </div>

                        <div className="min-w-0 p-3 sm:p-4">
                          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-zinc-500 sm:text-[0.66rem] sm:tracking-[0.28em]">
                            {trailer.status}
                          </p>

                          <h3 className="mt-1.5 truncate text-base font-bold text-white sm:text-lg">
                            {content.name}
                          </h3>

                          <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-zinc-400 sm:text-sm sm:leading-6">
                            {content.description}
                          </p>

                          {trailer.specs.length > 0 && (
                            <div className="mt-2 hidden flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500 sm:flex">
                              {trailer.specs
                                .slice(0, 2)
                                .map((spec) => (
                                  <span key={spec}>{spec}</span>
                                ))}
                            </div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-2xl border border-[#d4af37]/25 bg-[#d4af37]/10 p-4 sm:p-5">
                  <p className="text-sm font-semibold leading-7 text-zinc-200">
                    Need a specific trailer, add-ons, or pickup/delivery
                    support? Send the details and Tow-N-Go will follow up.
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <Link
                      href="/contact"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#d4af37] px-4 py-3 text-center text-sm font-black text-black transition duration-200 hover:bg-[#edca52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0d36e] focus-visible:ring-offset-3 focus-visible:ring-offset-[#16130c]"
                    >
                      Send Inquiry
                    </Link>

                    <a
                      href={siteConfig.phoneHref}
                      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-black/35 px-4 py-3 text-center text-sm font-black text-white transition duration-200 hover:border-[#d4af37]/50 hover:bg-black/55 hover:text-[#e4c456] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 focus-visible:ring-offset-3 focus-visible:ring-offset-[#16130c]"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:mt-10 xl:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex min-h-14 items-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_16px_48px_rgba(0,0,0,0.22)] backdrop-blur transition duration-200 hover:border-[#d4af37]/35 hover:bg-white/[0.06]"
            >
              <span
                aria-hidden="true"
                className="mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]"
              />

              <p className="text-sm font-semibold leading-6 text-zinc-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}