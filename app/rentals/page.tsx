"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { trailers, type Trailer } from "@/data/trailers";

type TrailerGalleryCardProps = {
  trailer: Trailer;
};

function TrailerGalleryCard({ trailer }: TrailerGalleryCardProps) {
  const galleryImages: string[] = useMemo(
    () =>
      trailer.images && trailer.images.length > 0
        ? trailer.images
        : [trailer.image],
    [trailer.image, trailer.images]
  );

  const [selectedImage, setSelectedImage] = useState<string>(galleryImages[0]!);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const currentIndex = Math.max(galleryImages.indexOf(selectedImage), 0);
  const totalImages = galleryImages.length;

  const goToPreviousImage = () => {
    const prevIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIndex]!);
  };

  const goToNextImage = () => {
    const nextIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    setSelectedImage(galleryImages[nextIndex]!);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (event.key === "ArrowLeft") {
        goToPreviousImage();
      } else if (event.key === "ArrowRight") {
        goToNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, currentIndex, totalImages]);

  return (
    <>
      <article
        id={trailer.id}
        className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_25px_80px_rgba(0,0,0,0.50)] backdrop-blur-sm transition hover:border-[#d4af37]/30"
      >
        <div className="grid gap-0 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-white/10 xl:border-b-0 xl:border-r xl:border-white/10">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="relative block h-[360px] w-full overflow-hidden bg-black md:h-[520px]"
            >
              <Image
                src={selectedImage}
                alt={trailer.name}
                fill
                sizes="(max-width: 1280px) 100vw, 55vw"
                className="object-contain bg-black transition duration-500 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {trailer.status}
              </div>

              {totalImages > 1 && (
                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {currentIndex + 1} / {totalImages}
                </div>
              )}

              <div className="absolute bottom-5 left-5 right-5 text-left">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">
                  Tow-N-Go Fleet
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                  {trailer.shortName}
                </h2>
              </div>
            </button>

            {galleryImages.length > 1 && (
              <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-4 md:grid-cols-4">
                {galleryImages.map((image: string, index: number) => {
                  const isActive = selectedImage === image;

                  return (
                    <button
                      key={`${trailer.id}-gallery-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className={`relative h-28 overflow-hidden rounded-2xl border md:h-32 ${
                        isActive
                          ? "border-[#d4af37] ring-1 ring-[#d4af37]/40"
                          : "border-white/10 bg-black/30"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${trailer.shortName} photo ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition duration-300 hover:scale-105"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
              Trailer Details
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              {trailer.name}
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-300">
              {trailer.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-zinc-400">
              {trailer.specs.slice(0, 3).map((spec: string) => (
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
                  {trailer.specs.map((item: string) => (
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
                  {trailer.bestFor.map((item: string) => (
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
                {trailer.accessories.map((item: string) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href={`/contact?trailer=${encodeURIComponent(trailer.name)}`}
                className="min-w-[200px]"
              >
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
              Commercial-grade trailers • Clean, maintained, and ready for real
              jobs
            </p>
          </div>
        </div>
      </article>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95">
          <div
            className="absolute inset-0"
            onClick={() => setIsLightboxOpen(false)}
          />

          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-6 top-6 z-[110] rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
          >
            ✕ Close
          </button>

          {totalImages > 1 && (
            <>
              <button
                type="button"
                onClick={goToPreviousImage}
                className="absolute left-4 top-1/2 z-[110] -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-3 text-xl font-semibold text-white backdrop-blur hover:bg-white/10 md:left-6"
                aria-label="Previous image"
              >
                ←
              </button>

              <button
                type="button"
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 z-[110] -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-3 text-xl font-semibold text-white backdrop-blur hover:bg-white/10 md:right-6"
                aria-label="Next image"
              >
                →
              </button>

              <div className="absolute left-1/2 top-6 z-[110] -translate-x-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                {currentIndex + 1} / {totalImages}
              </div>
            </>
          )}

          <div className="relative z-[105] flex h-full w-full items-center justify-center p-4 md:p-8">
            <div className="relative h-full w-full">
              <Image
                src={selectedImage}
                alt={trailer.name}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function RentalsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/rentals-premium-fleet-flatdeck-dump-banner.png"
      alt="Flat deck and dump trailer rentals in the Okanagan"
      fill
      priority
      className="object-cover"
    />

    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/65" />

    {/* Gradient blend (top + bottom) */}
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.80),rgba(0,0,0,0.45),rgba(0,0,0,0.90))]" />
  </div>

  {/* Content */}
  <Container className="relative flex min-h-[560px] items-center justify-center py-28 text-center md:min-h-[640px]">
    <div className="mx-auto max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
        Trailer Rentals
      </p>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
        A growing premium fleet built for real work.
      </h1>

      <p className="mt-5 text-lg text-zinc-200 md:text-xl">
        Pricing starting at{" "}
        <span className="font-semibold text-[#d4af37]">$115/day</span>
      </p>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-200 md:text-xl">
        Explore the Tow-N-Go Trailers lineup, from secure enclosed hauling to
        heavy-duty dump and dovetail options. Built for real jobs, presented
        cleanly, and backed by flexible rental support.
      </p>
    </div>
  </Container>
</section>
      <section className="relative overflow-hidden bg-[#050505] py-24 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.20),rgba(0,0,0,0.70))]" />

        <Container className="relative">
          <div className="space-y-12">
            {trailers.map((trailer: Trailer) => (
              <TrailerGalleryCard key={trailer.id} trailer={trailer} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}