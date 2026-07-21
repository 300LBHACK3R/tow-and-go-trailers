const googleReviewsUrl =
  "https://www.google.com/search?q=Tow-N-Go+Trailers+Kelowna+reviews";

const reviews = [
  {
    name: "True Standard",
    meta: "Recent Google review",
    quote:
      "I have rented from Tow-N-Go Trailers a few times now, and every experience has been excellent. Chad is friendly, professional, and extremely easy to deal with.",
    tag: "Repeat customer",
  },
  {
    name: "Blake Livley",
    meta: "Google review",
    quote:
      "Rented a trailer from Tow-N-Go for yard work, and it made the whole job way easier than expected.",
    tag: "Yard work",
  },
  {
    name: "Sanjeet Singh",
    meta: "Google review",
    quote:
      "Everything from start to finish was smooth, organized, and professional. The trailer was extremely clean and clearly well-maintained.",
    tag: "Office move",
  },
  {
    name: "K R",
    meta: "Google review",
    quote:
      "Tow N Go Trailers was fantastic. The trailer was nearly brand new, mechanically perfect, and towed easily.",
    tag: "Trailer rental",
  },
  {
    name: "Mark Byers",
    meta: "Google review",
    quote:
      "Absolutely outstanding. Tow-N-Go Trailers is the real deal in Kelowna.",
    tag: "Kelowna rental",
  },
  {
    name: "Jody Dewitt",
    meta: "Local Guide review",
    quote:
      "Just rented an enclosed trailer from Tow-N-Go Trailers and had such a great experience.",
    tag: "Enclosed trailer",
  },
];

const trustSignals = [
  "Clean, dependable trailers",
  "Friendly local rental support",
  "Accessories may be available",
  "Pickup and delivery options may be available",
  "Cash, e-transfer, and credit card accepted",
];

function Stars() {
  return (
    <div aria-label="5 star rating" className="flex gap-1 text-yellow-300">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  );
}

export function ReviewsSection() {
  const featuredReview = reviews[0];
  const secondaryReviews = reviews.slice(1);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black px-5 py-20 text-white sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(234,179,8,0.16),transparent_30%),radial-gradient(circle_at_88%_35%,rgba(234,179,8,0.1),transparent_34%),linear-gradient(135deg,#050505_0%,#0c0902_50%,#000_100%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[70vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-yellow-300">
              Customer Feedback
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Real rentals. Real customers. Real reviews.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              Tow-N-Go Trailers continues to build trust across Kelowna and the
              Okanagan with clean trailer rentals, helpful support, and a rental
              process designed to make hauling easier from start to finish.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:max-w-2xl">
              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <p className="text-3xl font-black text-yellow-300">5★</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-300">
                  Google Reviews
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <p className="text-3xl font-black text-white">7+</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-300">
                  Customer Reviews
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <p className="text-3xl font-black text-white">Local</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-300">
                  Okanagan Service
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-6 shadow-2xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-yellow-300">
                Trust Signals
              </p>

              <div className="mt-5 space-y-3">
                {trustSignals.map((signal) => (
                  <div key={signal} className="flex gap-3 text-sm text-zinc-300">
                    <span className="text-yellow-300">✓</span>
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <article className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-zinc-950/85 p-6 shadow-[0_30px_90px_-45px_rgba(234,179,8,0.45)] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.14),transparent_34%)]" />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <Stars />

                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-300">
                    Latest Review
                  </span>
                </div>

                <p className="mt-7 text-2xl font-black tracking-tight text-white">
                  {featuredReview.name}
                </p>

                <p className="mt-2 text-xs font-black uppercase tracking-[0.28em] text-zinc-500">
                  {featuredReview.meta}
                </p>

                <blockquote className="mt-7 text-lg leading-9 text-zinc-200 sm:text-xl">
                  “{featuredReview.quote}”
                </blockquote>

                <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row">
                  <a
                    href={googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:-translate-y-1 hover:bg-yellow-300"
                  >
                    View Google Reviews
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-yellow-400/45 hover:bg-yellow-400/10"
                  >
                    Request Rental
                  </a>
                </div>
              </div>
            </article>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {secondaryReviews.map((review) => (
                <article
                  key={review.name}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-yellow-400/35 hover:bg-yellow-400/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Stars />
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-yellow-300">
                      {review.tag}
                    </span>
                  </div>

                  <p className="mt-5 text-lg font-black text-white">
                    {review.name}
                  </p>

                  <p className="mt-1 text-[11px] font-black uppercase tracking-[0.24em] text-zinc-500">
                    {review.meta}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-zinc-300">
                    “{review.quote}”
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
