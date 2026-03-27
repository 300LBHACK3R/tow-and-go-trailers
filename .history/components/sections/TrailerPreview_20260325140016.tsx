import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrailerCard } from "@/components/ui/TrailerCard";
import { Button } from "@/components/ui/Button";
import { trailers } from "@/data/trailers";

export function TrailerPreview() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#060606] py-24 md:py-28">
      {/* premium background atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.55))]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Premium trailers, built for real work."
          description="Tow-N-Go Trailers is growing a blacked-out premium fleet designed to keep hauling simple, clean, and dependable. Explore the current lineup and send an inquiry for availability."
          align="center"
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-3">
          {trailers.map((trailer) => (
            <TrailerCard key={trailer.id} trailer={trailer} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/rentals" className="min-w-[220px]">
            Explore Full Fleet
          </Button>
        </div>
      </Container>
    </section>
  );
}