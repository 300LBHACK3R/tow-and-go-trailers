import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="section-padding">
      <Container>
        <div className="surface p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
            Rental Inquiry
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Need a trailer? Let’s get you set up.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            Send a quick inquiry with your dates, trailer needs, and any delivery
            details. Tow-N-Go Trailers will review it and get back to you directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Request a Rental</Button>
            <Button href="/services" variant="secondary">
              View Add-Ons
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}