"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { trailers, type Trailer } from "@/data/trailers";

type TrailerCategoryId =
  | "enclosed-trailers"
  | "dump-trailers"
  | "flatdeck-equipment-trailers"
  | "other-trailers";

type TrailerCategory = {
  id: TrailerCategoryId;
  title: string;
  eyebrow: string;
  description: string;
  shortDescription: string;
  bestFor: string[];
};

type TrailerGalleryCardProps = {
  trailer: Trailer;
};

const trailerCategories: TrailerCategory[] = [
  {
    id: "enclosed-trailers",
    title: "Enclosed Trailers",
    eyebrow: "Secure Hauling",
    description:
      "Enclosed trailers are built for moves, furniture, boxes, tools, equipment, and cargo that needs protection from weather, road debris, and open exposure.",
    shortDescription:
      "Secure enclosed hauling for moves, furniture, boxes, tools, and protected cargo.",
    bestFor: ["Moves", "Furniture", "Boxes", "Secure Cargo"],
  },
  {
    id: "dump-trailers",
    title: "Dump Trailers",
    eyebrow: "Cleanup & Heavy Loads",
    description:
      "Dump trailers are ideal for yard cleanups, dump runs, branches, debris, landscaping material, renovation waste, property cleanouts, and heavier loads that need practical unloading.",
    shortDescription:
      "Built for dump runs, yard cleanups, debris, landscaping material, and heavy cleanup jobs.",
    bestFor: ["Dump Runs", "Yard Cleanup", "Debris", "Landscaping"],
  },
  {
    id: "flatdeck-equipment-trailers",
    title: "Flatdeck & Equipment Trailers",
    eyebrow: "Equipment Hauling",
    description:
      "Flatdeck and equipment trailers are made for machines, side-by-sides, landscaping equipment, building materials, contractor jobs, and loads that need easy ramp or open-deck access.",
    shortDescription:
      "Open-deck hauling for equipment, machines, materials, contractor work, and larger loads.",
    bestFor: ["Equipment", "Contractors", "Machines", "Materials"],
  },
];

function getTrailerSearchText(trailer: Trailer) {
  return [
    trailer.id,
    trailer.name,
    trailer.shortName,
    trailer.description,
    ...trailer.specs,
    ...trailer.bestFor,
    ...trailer.accessories,
  ]
    .join(" ")
    .toLowerCase();
}

function getTrailerCategoryId(trailer: Trailer): TrailerCategoryId {
  const text = getTrailerSearchText(trailer);

  if (
    text.includes("enclosed") ||
    text.includes("cargo") ||
    text.includes("secure") ||
    text.includes("box") ||
    text.includes("v-nose") ||
    text.includes("nose")
  ) {
    return "enclosed-trailers";
  }

  if (
    text.includes("dump") ||
    text.includes("debris") ||
    text.includes("cleanup") ||
    text.includes("cleanout") ||
    text.includes("branches") ||
    text.includes("landscaping")
  ) {
    return "dump-trailers";
  }

  if (
    text.includes("flatdeck") ||
    text.includes("flat deck") ||
    text.includes("flatbed") ||
    text.includes("dovetail") ||
    text.includes("equipment") ||
    text.includes("machine") ||
    text.includes("skid") ||
    text.includes("atv") ||
    text.includes("side-by-side")
  ) {
    return "flatdeck-equipment-trailers";
  }

  return "other-trailers";
}

function getTrailersForCategory(categoryId: TrailerCategoryId) {
  return trailers.filter(
    (trailer) => getTrailerCategoryId(trailer) === categoryId
  );
}

function CategoryOverviewCard({ category }: { category: TrailerCategory }) {
  const categoryTrailers = getTrailersForCategory(category.id);
  const availableCount = categoryTrailers.length;

  return (
    <a
      href={`/rentals#${category.id}`}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50 hover:bg-white/[0.06] md:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_34%)] opacity-80" />

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
          {category.eyebrow}
        </p>

        <h2 className="mt-4 text-2xl font-bold text-white">
          {category.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-zinc-400">
          {category.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {category.bestFor.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-sm text-zinc-400">
            {availableCount > 0
              ? `${availableCount} option${availableCount === 1 ? "" : "s"} available`
              : "Ready for future fleet expansion"}
          </span>

          <span className="text-sm font-semibold text-[#d4af37] transition group-hover:translate-x-1">
            View →
          </span>
        </div>
      </div>
    </a>
  );
}

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
        className="group scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_25px_80px_rgba(0,0,0,0.50)] backdrop-blur-sm transition hover:border-[#d4af37]/30"
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
                className="bg-black object-contain transition duration-500 group-hover:scale-[1.02]"
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

function CategorySection({ category }: { category: TrailerCategory }) {
  const categoryTrailers = getTrailersForCategory(category.id);

  return (
    <section id={category.id} className="scroll-mt-28">
      <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
            {category.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            {category.title}
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
            {category.description}
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex w-fit items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:border-[#d4af37]/50 hover:bg-white/10"
        >
          Ask About Availability
        </a>
      </div>

      {categoryTrailers.length > 0 ? (
        <div className="space-y-12">
          {categoryTrailers.map((trailer) => (
            <TrailerGalleryCard key={trailer.id} trailer={trailer} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] p-8 text-zinc-400">
          This category is ready for future fleet expansion. As Tow-N-Go adds
          more trailers, this section can be filled without redesigning the
          rentals page.
        </div>
      )}
    </section>
  );
}

export function RentalsClient() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/rentals-premium-fleet-flatdeck-dump-banner.png"
            alt="Flat deck, dump, and enclosed trailer rentals in the Okanagan"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.48),rgba(0,0,0,0.20),rgba(0,0,0,0.62))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),rgba(0,0,0,0.38))]" />
        </div>

        <Container className="relative z-10 flex min-h-[560px] items-center justify-center py-28 text-center md:min-h-[640px]">
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
              Browse Tow-N-Go Trailers by category, from secure enclosed
              hauling to dump trailers, flatdeck options, dovetail trailers, and
              equipment hauling support across the Okanagan.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {trailerCategories.map((category) => (
                <a
                  key={category.id}
                  href={`/rentals#${category.id}`}
                  className="rounded-full border border-white/15 bg-black/45 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-[1px] hover:border-[#d4af37]/60 hover:text-[#d4af37]"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#050505] py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.20),rgba(0,0,0,0.70))]" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
              Browse by Trailer Type
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Find the right trailer faster.
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              Choose the category that matches the job. This keeps the fleet
              easier to browse now and makes the site ready as Tow-N-Go adds
              more trailers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {trailerCategories.map((category) => (
              <CategoryOverviewCard key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#050505] py-24 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.72),rgba(0,0,0,0.95))]" />

        <Container className="relative">
          <div className="space-y-20">
            {trailerCategories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}