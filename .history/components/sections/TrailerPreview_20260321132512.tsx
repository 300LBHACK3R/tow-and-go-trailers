import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrailerCard } from "@/components/ui/TrailerCard";
import { Button } from "@/components/ui/Button";
import { trailers } from "@/data/trailers";

export function TrailerPreview() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Our Fleet"
          title="Built around real hauling needs."
          description="From enclosed cargo hauling to dump trailer jobs and larger upcoming options, Tow-N-Go Trailers is building a premium fleet designed to keep things simple, safe, and stress-free."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {trailers.map((trailer) => (
            <TrailerCard key={trailer.id} trailer={trailer} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/rentals">See Full Trailer Details</Button>
        </div>
      </Container>
    </section>
  );
}