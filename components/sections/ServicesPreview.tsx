import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const services = [
  {
    title: "Trailer Rentals",
    text: "Flexible rental options built around real jobs, not a one-size setup. Clean equipment, straightforward process, and a growing premium fleet.",
    points: [
      "Daily, weekly, and flexible rentals",
      "Premium blacked-out fleet",
      "Simple booking and support",
    ],
  },
  {
    title: "Delivery & Pickup",
    text: "Delivery and pickup available across the Okanagan to keep your job moving without extra hassle or wasted time.",
    points: [
      "Okanagan-wide coverage",
      "Flexible drop-off & pickup",
      "Quoted based on location",
    ],
  },
  {
    title: "Accessories & Support",
    text: "Optional add-ons to make each rental more capable, secure, and ready for the job.",
    points: [
      "Hitches & adapters",
      "Ratchet straps & tie-downs",
      "Cargo nets, boxes & blankets",
    ],
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/button:translate-x-1 motion-reduce:transition-none"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="m5 12.5 4.25 4.25L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export function ServicesPreview() {
  return (
    <section
      aria-labelledby="services-preview-heading"
      className="relative isolate overflow-hidden border-b border-white/10 bg-black py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(140deg,#030303_0%,#090806_50%,#000000_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.11),transparent_31%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_27%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.7))]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[72vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/55 to-transparent"
      />

      <Container className="max-w-[1500px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
            Services / Add-Ons
          </p>

          <h2
            id="services-preview-heading"
            className="mt-4 text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.04em] text-white [text-wrap:balance]"
          >
            Built to make hauling easier.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            Tow-N-Go Trailers focuses on clean rentals, flexible support, and
            practical add-ons that make every job simpler, more capable, and
            more reliable.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 md:mt-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.052),rgba(255,255,255,0.016))] shadow-[0_24px_75px_rgba(0,0,0,0.38)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_32px_95px_rgba(0,0,0,0.52),0_16px_50px_rgba(212,175,55,0.09)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/85 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d4af37]/[0.045] blur-3xl transition duration-500 group-hover:bg-[#d4af37]/[0.085]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 translate-x-[-120%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.035),transparent)] transition-transform duration-1000 ease-out group-hover:translate-x-[120%] motion-reduce:hidden"
              />

              <div className="relative flex w-full flex-col p-6 sm:p-7 lg:p-8">
                <div className="flex items-center justify-between gap-5">
                  <div className="h-px w-14 bg-gradient-to-r from-[#d4af37] to-transparent" />

                  <span className="text-xs font-bold tracking-[0.22em] text-zinc-600 transition-colors duration-300 group-hover:text-[#d4af37]/70">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em] text-white sm:text-[1.7rem]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                  {service.text}
                </p>

                <ul className="mt-7 space-y-3.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 text-[#d4af37] transition duration-300 group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/15">
                        <CheckIcon />
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Tow-N-Go Support
                    </span>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4af37] opacity-75 transition duration-300 group-hover:opacity-100">
                      Learn more
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Button
            href="/services"
            className="group/button min-h-12 min-w-[220px] justify-center gap-2"
          >
            View Full Services
            <ArrowIcon />
          </Button>
        </div>
      </Container>
    </section>
  );
}