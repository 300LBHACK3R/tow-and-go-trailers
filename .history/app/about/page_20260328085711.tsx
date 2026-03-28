import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Tow-N-Go Trailers"
        title="Built on resilience, family, and doing things the right way."
        description="Tow-N-Go Trailers is a family-owned business built to provide safe, dependable trailer rentals with honest service, strong values, and a long-term vision for growth."
      />

      <section className="section-padding">
        <Container className="max-w-4xl">
          <div className="space-y-10 text-zinc-300">

            {/* OUR STORY */}
            <div className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Our Story</h2>
              <div className="mt-4 space-y-5 leading-8">
                <p>
                  Tow-N-Go Trailers was built through resilience, persistence, and a real desire
                  to create something meaningful for our family and our community.
                </p>

                <p>
                  After a life-changing accident in 2018, Chad was no longer able to continue
                  his career in welding. What followed was a long and difficult recovery filled
                  with hospital visits, treatments, and a complete shift in what the future would look like.
                </p>

                <p>
                  Instead of giving up, Chad and Melissa began exploring how they could build
                  something of their own — something practical, dependable, and worth growing.
                  Chad returned to school and completed a Business Management degree while Melissa
                  continued supporting the family every step of the way.
                </p>

                <p>
                  Together, they built Tow-N-Go Trailers with one clear goal:
                  to create a better rental experience built on quality, reliability, and real customer care.
                </p>
              </div>
            </div>

            {/* WHY WE STARTED */}
            <div className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Why We Started</h2>
              <div className="mt-4 space-y-5 leading-8">
                <p>
                  We saw a gap in the market. Trailer rentals were often overpriced, poorly maintained,
                  limited in selection, and frustrating to deal with.
                </p>

                <p>
                  We wanted to offer something different — a clean, safe, and dependable option
                  with real customer service behind it.
                </p>

                <p>
                  Whether someone is moving, hauling equipment, or dealing with a stressful situation,
                  the last thing they should worry about is the trailer they rented.
                </p>
              </div>
            </div>

            {/* VALUES */}
            <div className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">What We Value</h2>
              <div className="mt-4 space-y-5 leading-8">
                <p>
                  We are a family-owned business built on integrity, honesty, reliability, and respect.
                </p>

                <p>
                  We believe in helping people, being fair, and treating every customer with
                  professionalism and care.
                </p>

                <p>
                  Quality matters to us — not just in our trailers, but in the experience we provide.
                </p>
              </div>
            </div>

            {/* FUTURE */}
            <div className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Where We’re Going</h2>
              <div className="mt-4 space-y-5 leading-8">
                <p>
                  Our goal is to grow Tow-N-Go Trailers into a full-time family business with a strong fleet
                  and a trusted reputation.
                </p>

                <p>
                  As we expand, we plan to add more trailers, explore equipment rentals, and move into transport services.
                </p>

                <p>
                  We’re building this the right way — with long-term vision, strong values, and a commitment to doing things properly.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}