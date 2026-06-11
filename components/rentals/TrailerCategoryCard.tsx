"use client";

import Image from "next/image";
import Link from "next/link";
import {
  trackRentalCategoryClick,
  type AnalyticsEventProperties,
} from "@/lib/analytics";
import type { TrailerCategory } from "@/data/trailerCategories";

type TrailerCategoryCardProps = {
  category: TrailerCategory;
  previewImage: string;
  trailerCount: number;
};

export function TrailerCategoryCard({
  category,
  previewImage,
  trailerCount,
}: TrailerCategoryCardProps) {
  const analyticsProperties: AnalyticsEventProperties = {
    category_id: category.id,
    category_title: category.title,
    trailer_count: trailerCount,
  };

  return (
    <Link
      href={`/rentals/${category.id}`}
      onClick={() => {
        trackRentalCategoryClick(category.id, category.title);
      }}
      className="group relative flex min-h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_22px_80px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/55 hover:bg-white/[0.06]"
      data-analytics-event="rental_category_click"
      data-analytics-category-id={String(analyticsProperties.category_id)}
      data-analytics-category-title={String(analyticsProperties.category_title)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.13),transparent_34%)] opacity-80" />

      <div className="relative flex w-full flex-col">
        <div className="relative h-64 overflow-hidden border-b border-white/10 bg-black md:h-72">
          <Image
            src={previewImage}
            alt={`${category.title} from Tow-N-Go Trailers`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.76))]" />

          <div className="absolute left-5 top-5 rounded-full border border-[#d4af37]/35 bg-black/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37] backdrop-blur">
            {category.eyebrow}
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {category.title}
            </h2>

            <p className="mt-2 text-sm font-medium text-zinc-300">
              {trailerCount > 0
                ? `${trailerCount} available option${
                    trailerCount === 1 ? "" : "s"
                  }`
                : "Category ready for future fleet additions"}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <p className="text-base leading-8 text-zinc-300">
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

          <div className="mt-auto pt-7">
            <div className="flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm text-zinc-400">View trailers</span>

              <span className="text-sm font-semibold text-[#d4af37] transition group-hover:translate-x-1">
                Open category →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
