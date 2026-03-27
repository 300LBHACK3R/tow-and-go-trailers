import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { trailers } from "@/data/trailers";

export default function RentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Trailer Rentals"
        title="A growing premium fleet built for real work."
        description="Tow-N-Go Trailers Ltd. is building a clean, blacked-out, professional fleet designed to make hauling easier. Explore the current lineup below and send an inquiry for availability, rental dates, and delivery options."
      />

      <section className="section-padding">
        <Container>
          <div className="space-y-10">
            {trailers.map((trailer) => (
              <article
                key={trailer.id}
                className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-[1.1fr_1fr]"
              >
                <div className="flex min-h-[280px] items-center justify-center bg-[linear-gradient(135deg,#18181b,#09090b)] p-8 text-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                      {trailer.status}
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white">
                      {trailer.shortName}
                    </h2>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white">{trailer.name}</h2>
                  <p className="mt-4 leading-7 text-zinc-300">{trailer.description}</p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                        Specs
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        {trailer.specs.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                        Best For
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        {trailer.bestFor.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                      Available Add-Ons
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                      {trailer.accessories.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button href="/contact">Request This Trailer</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}