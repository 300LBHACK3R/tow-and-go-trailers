import Image from "next/image";
import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-[#070707]">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/golden-hour-over-industrial-trailers-and-mountains.png"
            alt="Tow-N-Go Trailers built on resilience, family, and dependable service"
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
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.24)_42%,rgba(0,0,0,0.74)_100%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.10),transparent_42%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#070707] to-transparent"
        />

        <Container className="relative">
          <div className="mx-auto flex min-h-[520px] max-w-5xl flex-col items-center justify-center py-20 text-center sm:min-h-[580px] sm:py-24 lg:min-h-[640px] lg:py-28">
            <p className="rounded-full border border-[#d4af37]/35 bg-black/35 px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#e4c456] shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-md sm:text-xs sm:tracking-[0.42em]">
              About Tow-N-Go Trailers
            </p>

            <h1 className="mt-6 max-w-5xl text-[clamp(2.6rem,6vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white [text-wrap:balance]">
              Built on resilience, family, and doing things the right way.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-200 [text-wrap:balance] sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              Tow-N-Go Trailers is a family-owned business built to provide
              safe, dependable trailer rentals with honest service, strong
              values, and a long-term vision for growth.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.07),transparent_65%)]"
        />

        <Container className="relative max-w-5xl">
          <div className="space-y-8 sm:space-y-10">
            <article
              aria-labelledby="our-story-heading"
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent"
              />

              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d4af37]/[0.045] blur-3xl"
              />

              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="h-px w-9 shrink-0 bg-[#d4af37]"
                  />

                  <h2
                    id="our-story-heading"
                    className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                  >
                    Our Story
                  </h2>
                </div>

                <div className="mt-6 space-y-5 text-[0.98rem] leading-8 text-zinc-300 sm:text-base sm:leading-8">
                  <p>
                    Tow-N-Go Trailers was built through resilience, persistence,
                    and a genuine desire to create something meaningful for our
                    family and the community we serve.
                  </p>

                  <p>
                    After a life-changing accident in 2018, our path forward
                    looked very different than originally planned. Overnight,
                    there was a complete shift in what the future would look
                    like. Instead of giving up, Chad and Melissa began exploring
                    how they could build something of their own — something
                    practical, dependable, and worth growing.
                  </p>

                  <p>
                    Through that process, Chad returned to school and completed
                    a Business Management degree, while Melissa supported both
                    the family and the vision every step of the way.
                  </p>

                  <p>
                    Together, Tow-N-Go Trailers was built with one clear goal:
                    to deliver a better rental experience — one defined by
                    quality equipment, reliability, and genuine customer care.
                  </p>

                  <p>
                    We’re proud to serve the Okanagan with a standard of service
                    we would expect ourselves.
                  </p>
                </div>
              </div>
            </article>

            <article
              aria-labelledby="why-we-started-heading"
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/55 to-transparent"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-[#d4af37]/[0.035] blur-3xl"
              />

              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="h-px w-9 shrink-0 bg-[#d4af37]"
                  />

                  <h2
                    id="why-we-started-heading"
                    className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                  >
                    Why We Started
                  </h2>
                </div>

                <div className="mt-6 space-y-5 text-[0.98rem] leading-8 text-zinc-300 sm:text-base sm:leading-8">
                  <p>
                    We saw a gap in the market. Trailer rentals were often
                    overpriced, poorly maintained, limited in selection, and
                    frustrating to deal with.
                  </p>

                  <p>
                    We wanted to offer something different — a clean, safe, and
                    dependable option with real customer service behind it.
                  </p>

                  <p>
                    Whether someone is moving, hauling equipment, or dealing
                    with a stressful situation, the last thing they should worry
                    about is the trailer they rented.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}