import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 md:py-28">
      {/* premium background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.20),rgba(0,0,0,0.70))]" />

      <Container className="relative">
        <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-black/45 p-8 text-center backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.60)] md:p-12">
          
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
            Rental Inquiry
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Need a trailer for your next job?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Send a quick inquiry with your dates, trailer needs, and any delivery
            details. Tow-N-Go Trailers will review it and get back to you directly
            with availability, pricing, and the best setup for your job.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" className="min-w-[200px]">
              Request a Rental
            </Button>

            <a
              href="tel:+17782156486"
              className="inline-flex min-w-[200px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/10"
            >
              Call Now
            </a>
          </div>

          {/* trust strip */}
          <div className="mt-10 grid gap-4 text-sm text-zinc-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
              Flexible rental options
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
              Delivery available
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
              Okanagan-based service
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}