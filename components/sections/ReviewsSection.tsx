import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

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
] as const;

const trustSignals = [
  "Clean, dependable trailers",
  "Friendly local rental support",
  "Accessories may be available",
  "Pickup and delivery options may be available",
  "Cash, e-transfer, and credit card accepted",
] as const;

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="m12 2.8 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17l-5.56 2.92 1.06-6.2L3 9.33l6.22-.9L12 2.8Z" />
    </svg>
  );
}

function Stars() {
  return (
    <div
      aria-label="5 out of 5 stars"
      className="flex items-center gap-1 text-[#e2bd43]"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}

function ReviewQuote({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="flex h-full flex-col border-t border-white/15 pt-7">
      <Stars />
      <blockquote className="mt-5 flex-1 text-base leading-8 text-zinc-200">
        “{review.quote}”
      </blockquote>
      <div className="mt-6">
        <p className="text-base font-semibold text-white">{review.name}</p>
        <p className="mt-1 text-xs leading-6 text-zinc-500">{review.meta} · {review.tag}</p>
      </div>
    </article>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-[#171717] py-16 text-white sm:py-20 lg:py-24" aria-labelledby="customer-reviews-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Customer feedback</p>
            <h2 id="customer-reviews-heading" className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.035em] sm:text-4xl">
              A local name you can count on.
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-400">
              Clean trailers, straightforward communication, and practical support from inquiry to return.
            </p>

            <div className="mt-8 flex gap-8 border-y border-white/10 py-6">
              <div>
                <p className="text-3xl font-medium tracking-tight text-[#d4af37]">5★</p>
                <p className="mt-1 text-xs text-zinc-400">Google reviews</p>
              </div>
              <div>
                <p className="text-3xl font-medium tracking-tight">7+</p>
                <p className="mt-1 text-xs text-zinc-400">Customer reviews</p>
              </div>
            </div>

            <ul className="mt-7 space-y-3 text-sm leading-6 text-zinc-400">
              {trustSignals.map((signal) => (
                <li key={signal} className="flex gap-3">
                  <span aria-hidden="true" className="text-[#d4af37]">—</span>
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm leading-7 text-zinc-500">
              Serving Kelowna, West Kelowna, Lake Country, Vernon, Penticton, Armstrong, and surrounding Okanagan communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                View Google reviews
              </Button>
              <Button href="/contact">Request a rental</Button>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {reviews.map((review) => <ReviewQuote key={review.name} review={review} />)}
          </div>
        </div>
      </Container>
    </section>
  );
}
