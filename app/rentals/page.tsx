import Image from "next/image";
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
        description="Explore the Tow-N-Go Trailers lineup, from secure enclosed hauling to heavy-duty dump and dovetail options. Built for real jobs, presented cleanly, and backed by flexible rental support."
        pricing="$115/day" // 👈 ADDED HERE
      />

      <section className="relative overflow-hidden bg-[#050505] py-24 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.20),rgba(0,0,0,0.70))]" />

        <Container className="relative">
          <div className="space-y-12">
            {trailers.map((trailer) => {
              const galleryImages =
                trailer.images && trailer.images.length > 0
                  ? trailer.images
                  : [trailer.image];

              const mainImage = galleryImages[0];
              const extraImages = galleryImages.slice(1);

              return (
                <article
                  id={trailer.id}
                  key={trailer.id}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_25px_80px_rgba(0,0,0,0.50)] backdrop-blur-sm transition hover:border-[#d4af37]/30"
                >
                  <div className="grid gap-0 xl:grid-cols-[1.1fr_0.9fr]">
                    
                    {/* LEFT SIDE */}
                    <div className="border-b border-white/10 xl:border-b-0 xl:border-r xl:border-white/10">
                      <div className="relative h-[320px] md:h-[420px] overflow-hidden">
                        <Image
                          src={mainImage}
                          alt={trailer.name}
                          fill
                          sizes="(max-width: 1280px) 100vw, 55vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                          {trailer.status}
                        </div>

                        <div className="absolute bottom-5 left-5 right-5">
                          <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">
                            Tow-N-Go Fleet
                          </p>
                          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                            {trailer.shortName}
                          </h2>
                        </div>
                      </div>

                      {/* Gallery */}
                      {extraImages.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-4 md:grid-cols-4">
                          {extraImages.map((image, index) => (
                            <div
                              key={image}
                              className="relative h-28 overflow-hidden rounded-2xl border border-white/10 bg-black/30 md:h-32"
                            >
                              <Image
                                src={image}
                                alt={`${trailer.shortName} photo ${index + 2}`}
                                fill
                                className="object-cover transition duration-300 hover:scale-105"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="p-6 md:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
                        Trailer Details
                      </p>

                      <h2 className="mt-3 text-3xl font-bold text-white">
                        {trailer.name}
                      </h2>

                      {/* 🔥 PRICING (MAIN ADDITION) */}
                      <p className="mt-3 text-lg text-zinc-200">
                        Pricing starting at{" "}
                        <span className="font-semibold text-[#d4af37]">
                          {trailer.startingPrice}
                        </span>
                      </p>

                      <p className="mt-5 text-base leading-8 text-zinc-300">
                        {trailer.description}
                      </p>

                      {/* Quick Specs */}
                      <div className="mt-5 flex flex-wrap gap-3 text-xs text-zinc-400">
                        {trailer.specs.slice(0, 3).map((spec) => (
                          <span
                            key={spec}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                            Key Specs
                          </h3>
                          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                            {trailer.specs.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                            Best For
                          </h3>
                          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                            {trailer.bestFor.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                          Available Add-Ons
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                          {trailer.accessories.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="mt-10 flex flex-wrap gap-4">
                        <Button href="/contact" className="min-w-[200px]">
                          Request This Trailer
                        </Button>

                        <a
                          href="tel:+17782156486"
                          className="inline-flex min-w-[200px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/10"
                        >
                          Call Now
                        </a>
                      </div>

                      <p className="mt-5 text-xs text-zinc-500">
                        Commercial-grade trailers • Clean, maintained, and ready for real jobs
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}