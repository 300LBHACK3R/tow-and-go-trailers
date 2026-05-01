import Image from "next/image";
import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/golden-hour-over-industrial-trailers-and-mountains.png"
            alt="Tow-N-Go Trailers built on resilience, family, and dependable service"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.48),rgba(0,0,0,0.20),rgba(0,0,0,0.62))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),rgba(0,0,0,0.38))]" />
        </div>

        <Container className="relative z-10">
          <div className="flex min-h-[430px] flex-col items-center justify-center px-4 py-24 text-center md:min-h-[500px]">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#d4af37]">
              About Tow-N-Go Trailers
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Built on resilience, family, and doing things the right way.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-xl">
              Tow-N-Go Trailers is a family-owned business built to provide
              safe, dependable trailer rentals with honest service, strong
              values, and a long-term vision for growth.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="max-w-4xl">
          <div className="space-y-10 text-zinc-300">
            <div className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Our Story</h2>

              <div className="mt-4 space-y-5 leading-8">
                <p>
                  Tow-N-Go Trailers was built through resilience, persistence,
                  and a genuine desire to create something meaningful for our
                  family and the community we serve.
                </p>

                <p>
                  After a life-changing accident in 2018, our path forward
                  looked very different than originally planned. Overnight,
                  there was a complete shift in what the future would look like.
                  Instead of giving up, Chad and Melissa began exploring how they
                  could build something of their own — something practical,
                  dependable, and worth growing.
                </p>

                <p>
                  Through that process, Chad returned to school and completed a
                  Business Management degree, while Melissa supported both the
                  family and the vision every step of the way.
                </p>

                <p>
                  Together, Tow-N-Go Trailers was built with one clear goal: to
                  deliver a better rental experience — one defined by quality
                  equipment, reliability, and genuine customer care.
                </p>

                <p>
                  We’re proud to serve the Okanagan with a standard of service
                  we would expect ourselves.
                </p>
              </div>
            </div>

            <div className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">
                Why We Started
              </h2>

              <div className="mt-4 space-y-5 leading-8">
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
                  Whether someone is moving, hauling equipment, or dealing with
                  a stressful situation, the last thing they should worry about
                  is the trailer they rented.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}