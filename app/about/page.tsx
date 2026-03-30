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
            <div className="surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Our Story</h2>
              <div className="mt-4 space-y-5 leading-8">
                <p>
                  Tow-N-Go Trailers was built through resilience, persistence, and a genuine desire
                  to create something meaningful for our family and the community we serve.
                </p>

                <p>
                  After a life-changing accident in 2018, our path forward looked very different
                  than originally planned. Overnight, there was a complete shift in what the future
                  would look like. Instead of giving up, Chad and Melissa began exploring how they
                  could build something of their own — something practical, dependable, and worth growing.
                </p>

                <p>
                  Through that process, Chad returned to school and completed a Business Management
                  degree, while Melissa supported both the family and the vision every step of the way.
                </p>

                <p>
                  Together, Tow-N-Go Trailers was built with one clear goal: to deliver a better
                  rental experience — one defined by quality equipment, reliability, and genuine
                  customer care.
                </p>

                <p>
                  We’re proud to serve the Okanagan with a standard of service we would expect ourselves.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}