import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HalloweenDecor } from "@/components/seasonal/HalloweenDecor";

const trustItems = [
  "Commercial-grade trailers",
  "Clean rental options",
  "Ready for real jobs",
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-black">
      <style>
        {`
          @keyframes tngHeroZoom {
            from {
              transform: scale(1.02);
            }

            to {
              transform: scale(1.09);
            }
          }

          @keyframes tngHeroReveal {
            from {
              opacity: 0;
              transform: translateY(24px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .tng-hero-stage {
            min-height: 0;
          }

          .tng-hero-image {
            animation: tngHeroZoom 20s
              cubic-bezier(0.22, 1, 0.36, 1)
              infinite alternate;
            transform-origin: 72% 58%;
          }

          .tng-hero-reveal {
            animation: tngHeroReveal 850ms
              cubic-bezier(0.22, 1, 0.36, 1)
              both;
          }

          @media (min-width: 1024px) {
            .tng-hero-stage {
              min-height: clamp(560px, 68svh, 620px);
            }
          }

          @media (min-width: 1536px) {
            .tng-hero-stage {
              min-height: clamp(640px, 78svh, 760px);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .tng-hero-image,
            .tng-hero-reveal {
              animation: none !important;
              transform: none !important;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/golden-hour-over-industrial-trailers-and-moun.png"
          alt="Premium Tow-N-Go trailer rentals serving Kelowna and the Okanagan"
          fill
          loading="eager"
          fetchPriority="high"
          quality={75}
          sizes="100vw"
          className="tng-hero-image object-cover object-[66%_center] brightness-[0.88] contrast-[1.08] saturate-[1.06] sm:object-[68%_center] lg:object-[70%_center]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-black/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.91)_27%,rgba(0,0,0,0.64)_51%,rgba(0,0,0,0.18)_78%,rgba(0,0,0,0.06)_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.05)_42%,rgba(0,0,0,0.76)_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 top-1/2 -z-10 h-[760px] w-[760px] -translate-y-1/2 rounded-full bg-[#d4af37]/11 blur-[170px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-12rem] right-[8%] -z-10 h-[520px] w-[760px] rounded-full bg-[#d4af37]/[0.055] blur-[145px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#050505] via-[#050505]/52 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent"
      />

      <Container className="relative max-w-[1500px]">
        <div className="tng-hero-stage flex items-center pb-7 pt-10 sm:pb-8 sm:pt-14 lg:pb-10 lg:pt-16 2xl:pb-20">
          <div className="w-full max-w-[880px]">
            <p
              className="tng-hero-reveal inline-flex max-w-full rounded-full border border-[#d4af37]/40 bg-black/45 px-3.5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#e5c451] shadow-[0_14px_42px_rgba(0,0,0,0.38)] backdrop-blur-md sm:px-4 sm:text-[0.65rem] sm:tracking-[0.25em]"
              style={{ animationDelay: "80ms" }}
            >
              Premium trailer rentals in the Okanagan
            </p>

            <h1
              className="tng-hero-reveal mt-6 max-w-[880px] text-[clamp(2.5rem,5vw,5.25rem)] font-black leading-[0.96] tracking-[-0.055em] text-white [text-shadow:0_10px_38px_rgba(0,0,0,0.72)]"
              style={{ animationDelay: "150ms" }}
            >
              <span className="block">
                Trailer Rentals
              </span>

              <span className="block bg-gradient-to-r from-white via-[#f5f5f5] to-[#bcbcbc] bg-clip-text text-transparent">
                That Look Premium
              </span>

              <span className="block">
                and Work Hard.
              </span>
            </h1>

            <div
              className="tng-hero-reveal mt-6 max-w-[680px]"
              style={{ animationDelay: "230ms" }}
            >
              <p className="text-lg font-semibold text-white sm:text-xl lg:text-[1.4rem]">
                Trailer rentals starting at{" "}
                <span className="text-[#d4af37]">
                  $115/day
                </span>
              </p>

              <p className="mt-3 max-w-[660px] text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7 lg:text-lg">
                Tow it yourself, have an empty trailer delivered, or let Tow-N-Go
                transport your prepared load. Serving Kelowna and the Okanagan.
              </p>
            </div>

            <div
              className="tng-hero-reveal mt-6 grid max-w-[560px] gap-3 sm:grid-cols-2"
              style={{ animationDelay: "310ms" }}
            >
              <Button
                href="/rentals"
                className="min-h-12 w-full justify-center px-6 text-sm sm:min-h-[52px]"
              >
                Browse Trailers
              </Button>

              <Button
                href="#service-options"
                variant="secondary"
                className="min-h-12 w-full justify-center border-white/20 bg-black/45 px-6 text-sm sm:min-h-[52px]"
              >
                Choose Your Service
              </Button>
            </div>

            <div
              className="tng-hero-reveal mt-6 w-full max-w-[790px] overflow-hidden rounded-xl border border-white/10 bg-black/35 shadow-[0_16px_40px_rgba(0,0,0,0.25)] backdrop-blur-md"
              style={{ animationDelay: "390ms" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-stretch">
                {trustItems.map((item, index) => (
                  <div
                    key={item}
                    className={[
                      "flex min-h-10 flex-1 items-center gap-2.5 px-4 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-zinc-300 sm:min-h-12",
                      index > 0
                        ? "border-t border-white/10 sm:border-l sm:border-t-0"
                        : "",
                    ].join(" ")}
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37] shadow-[0_0_16px_rgba(212,175,55,0.9)]"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <HalloweenDecor placement="hero" />

      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 2xl:flex">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em]">
          Explore the fleet
        </span>

        <span className="h-6 w-px bg-gradient-to-b from-[#d4af37]/80 to-transparent" />
      </div>
    </section>
  );
}
