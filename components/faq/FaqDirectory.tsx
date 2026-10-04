"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  useMemo,
  useState,
} from "react";

import {
  faqCategories,
  type FaqCategoryId,
} from "@/data/faqDirectory";

const ALL_CATEGORIES = "all";

type ActiveCategory =
  | typeof ALL_CATEGORIES
  | FaqCategoryId;

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m16.5 16.5 4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 transition-transform duration-200 group-open:rotate-180"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="m7 9.5 5 5 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function FaqDirectory() {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState<ActiveCategory>(
    ALL_CATEGORIES,
  );

  const [
    searchQuery,
    setSearchQuery,
  ] = useState("");

  const normalizedQuery =
    searchQuery
      .trim()
      .toLowerCase();

  const filteredCategories =
    useMemo(
      () =>
        faqCategories
          .filter(
            (category) =>
              activeCategory ===
                ALL_CATEGORIES ||
              category.id ===
                activeCategory,
          )
          .map((category) => ({
            ...category,
            items:
              normalizedQuery.length === 0
                ? category.items
                : category.items.filter(
                    (item) =>
                      [
                        item.question,
                        item.answer,
                        category.label,
                        category.description,
                      ]
                        .join(" ")
                        .toLowerCase()
                        .includes(
                          normalizedQuery,
                        ),
                  ),
          }))
          .filter(
            (category) =>
              category.items.length > 0,
          ),
      [
        activeCategory,
        normalizedQuery,
      ],
    );

  const resultCount =
    filteredCategories.reduce(
      (
        total,
        category,
      ) =>
        total +
        category.items.length,
      0,
    );

  const hasFilters =
    activeCategory !== ALL_CATEGORIES ||
    normalizedQuery.length > 0;

  function clearFilters() {
    setActiveCategory(
      ALL_CATEGORIES,
    );

    setSearchQuery("");
  }

  return (
    <section
      id="faq-directory"
      className="scroll-mt-24 bg-[#171717] py-16 sm:py-20 lg:py-24"
      aria-labelledby="faq-directory-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">FAQ directory</p>
          <h2 id="faq-directory-heading" className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            Find your answer.
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-400">
            Search a question or choose a topic to prepare for your rental.
          </p>
        </div>

        <div className="mt-8">
          <label
            htmlFor="faq-search"
            className="sr-only"
          >
            Search frequently asked
            questions
          </label>

          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-[#d4af37]">
              <SearchIcon />
            </div>

            <input
              id="faq-search"
              type="search"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(
                  event.target.value,
                )
              }
              placeholder="Search towing, delivery, deposits, loading, returns..."
              autoComplete="off"
              className="min-h-14 w-full rounded-md border border-white/15 bg-[#111111] py-4 pl-14 pr-5 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/15"
            />
          </div>

          <div
            className="mt-5 flex gap-2 overflow-x-auto pb-3 [scrollbar-width:thin] [scrollbar-color:rgba(212,175,55,0.45)_transparent]"
            aria-label="Filter FAQ categories"
          >
            <button
              type="button"
              onClick={() =>
                setActiveCategory(
                  ALL_CATEGORIES,
                )
              }
              aria-pressed={
                activeCategory ===
                ALL_CATEGORIES
              }
              className={`shrink-0 rounded-sm border px-4 py-2.5 text-sm font-medium transition ${
                activeCategory ===
                ALL_CATEGORIES
                  ? "border-[#d4af37] bg-[#d4af37] text-black"
                  : "border-white/12 bg-white/[0.04] text-zinc-300 hover:border-[#d4af37]/45 hover:text-white"
              }`}
            >
              All Questions
            </button>

            {faqCategories.map(
              (category) => (
                <button
                  key={
                    category.id
                  }
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      category.id,
                    )
                  }
                  aria-pressed={
                    activeCategory ===
                    category.id
                  }
                  className={`shrink-0 rounded-sm border px-4 py-2.5 text-sm font-medium transition ${
                    activeCategory ===
                    category.id
                      ? "border-[#d4af37] bg-[#d4af37] text-black"
                      : "border-white/12 bg-white/[0.04] text-zinc-300 hover:border-[#d4af37]/45 hover:text-white"
                  }`}
                >
                  {
                    category.shortLabel
                  }
                </button>
              ),
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-400">
            <p aria-live="polite">
              Showing{" "}
              <strong className="text-white">
                {resultCount}
              </strong>{" "}
              {resultCount === 1
                ? "answer"
                : "answers"}
            </p>

            {hasFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="font-semibold text-[#d4af37] underline decoration-[#d4af37]/35 underline-offset-4 transition hover:text-[#f0d36e]"
              >
                Clear search and filters
              </button>
            ) : null}
          </div>
        </div>

        {resultCount > 0 ? (
          <div className="mt-12 grid gap-12">
            {filteredCategories.map(
              (category) => (
                <section
                  key={
                    category.id
                  }
                  id={
                    category.id
                  }
                  aria-labelledby={`${category.id}-heading`}
                  className="scroll-mt-28"
                >
                  <div className="grid gap-3 pb-5 sm:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] sm:items-end">
                    <div>
                      <h3
                        id={`${category.id}-heading`}
                        className="text-2xl font-semibold tracking-[-0.03em] text-white"
                      >
                        {
                          category.label
                        }
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-zinc-400 sm:text-right">
                      {
                        category.description
                      }
                    </p>
                  </div>

                  <div className="border-t border-white/15">
                    {category.items.map(
                      (
                        item,
                        itemIndex,
                      ) => (
                        <details
                          key={
                            item.id
                          }
                          id={
                            item.id
                          }
                          className="group scroll-mt-28 border-b border-white/10 transition-colors duration-200 open:bg-white/[0.02] hover:bg-white/[0.02]"
                        >
                          <summary className="flex min-h-18 cursor-pointer list-none items-center justify-between gap-5 px-1 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 focus-visible:ring-inset sm:px-4">
                            <span className="flex min-w-0 items-start gap-4">
                              <span className="mt-1 text-xs font-medium tabular-nums text-[#d4af37]">
                                {String(
                                  itemIndex +
                                    1,
                                ).padStart(
                                  2,
                                  "0",
                                )}
                              </span>

                              <span className="text-base font-medium leading-7 text-zinc-200 sm:text-lg">
                                {
                                  item.question
                                }
                              </span>
                            </span>

                            <span className="grid h-8 w-8 shrink-0 place-items-center text-[#d4af37]">
                              <ChevronIcon />
                            </span>
                          </summary>

                          <div className="px-1 pb-6 pl-9 sm:px-4 sm:pb-7 sm:pl-12">
                            <p className="max-w-4xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                              {
                                item.answer
                              }
                            </p>
                          </div>
                        </details>
                      ),
                    )}
                  </div>
                </section>
              ),
            )}
          </div>
        ) : (
          <div className="mt-12 border-y border-white/10 py-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              No matching answer
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              Try a broader search or
              send the job details
              directly.
            </h3>

            <p className="mt-4 text-base leading-8 text-zinc-300">
              Tow-N-Go can review the
              load, locations, timing,
              and trailer requirements
              with you.
            </p>

            <Button onClick={clearFilters} className="mt-6">Show all questions</Button>
          </div>
        )}

        <div className="mt-16 border-t border-white/15 pt-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Still have a question?</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white">Tell us about the job.</h3>
              <p className="mt-5 text-base leading-8 text-zinc-400">
                Include photos, approximate dimensions and weight, both locations when applicable, and your preferred date. We can help identify the trailer and service before confirming availability.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Send an inquiry</Button>
              <Button href="tel:+17782153422" variant="secondary">778-215-3422</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
