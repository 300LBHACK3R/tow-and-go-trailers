import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-[#090a09]">
      <PageHero
        eyebrow="About Tow-N-Go Trailers"
        title="Built on resilience, family, and doing things the right way."
        description="Tow-N-Go Trailers is a family-owned business built to provide safe, dependable trailer rentals with honest service, strong values, and a long-term vision for growth."
        breadcrumb="About"
        image={{
          src: "/images/heroes/fleet-premium.webp",
          alt: "Black enclosed, dump and flatdeck trailers overlooking the Okanagan at sunset",
          position: "68% 60%",
          mobilePosition: "90% 58%",
        }}
      />

      <section className="py-14 sm:py-20">
        <Container>
          <article aria-labelledby="our-story-heading" className="grid gap-6 border-t border-white/10 py-10 first:border-t-0 first:pt-0 sm:py-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">01 / Our beginning</p>
                <h2 id="our-story-heading" className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">Our Story</h2>
              </div>
              <div className="max-w-[680px] space-y-5 text-base leading-8 text-zinc-300">
                <p>
                  Tow-N-Go Trailers was built through resilience, persistence, and a
                  genuine desire to create something meaningful for our family and the
                  community we serve.
                </p>
                <p>
                  After a life-changing accident in 2018, our path forward looked very
                  different than originally planned. Overnight, there was a complete
                  shift in what the future would look like. Instead of giving up, Chad
                  and Melissa began exploring how they could build something of their
                  own — something practical, dependable, and worth growing.
                </p>
                <p>
                  Through that process, Chad returned to school and completed a
                  Business Management degree, while Melissa supported both the family
                  and the vision every step of the way.
                </p>
                <p>
                  Together, Tow-N-Go Trailers was built with one clear goal: to
                  deliver a better rental experience — one defined by quality
                  equipment, reliability, and genuine customer care.
                </p>
                <p>
                  We’re proud to serve the Okanagan with a standard of service we
                  would expect ourselves.
                </p>
              </div>
          </article>
          <article aria-labelledby="why-we-started-heading" className="grid gap-6 border-t border-white/10 py-10 first:border-t-0 first:pt-0 sm:py-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">02 / Our purpose</p>
                <h2 id="why-we-started-heading" className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">Why We Started</h2>
              </div>
              <div className="max-w-[680px] space-y-5 text-base leading-8 text-zinc-300">
                <p>
                  We saw a gap in the market. Trailer rentals were often overpriced,
                  poorly maintained, limited in selection, and frustrating to deal
                  with.
                </p>
                <p>
                  We wanted to offer something different — a clean, safe, and
                  dependable option with real customer service behind it.
                </p>
                <p>
                  Whether someone is moving, hauling equipment, or dealing with a
                  stressful situation, the last thing they should worry about is the
                  trailer they rented.
                </p>
              </div>
          </article>
        </Container>
      </section>
    </main>
  );
}
