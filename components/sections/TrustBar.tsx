import { Container } from "@/components/ui/Container";

const items = [
  "Blacked-out premium fleet style",
  "Daily, weekly & monthly rental options",
  "Delivery & pickup available",
  "Accessories available on request",
] as const;

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

export function TrustBar() {
  return (
    <section
      aria-label="Tow-N-Go rental benefits"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#050505]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(120deg,#030303_0%,#0a0906_50%,#020202_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.075),transparent_60%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#d4af37]/45 to-transparent"
      />

      <Container className="max-w-[1500px] py-5 sm:py-6">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item}
              className="group relative flex min-h-16 min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/[0.065] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/65 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] transition duration-300 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/15">
                <CheckIcon />
              </span>

              <span className="min-w-0 flex-1 text-sm font-semibold leading-6 text-zinc-200">
                {item}
              </span>

              <span
                aria-hidden="true"
                className="shrink-0 text-[0.62rem] font-bold tracking-[0.18em] text-zinc-700 transition-colors duration-300 group-hover:text-[#d4af37]/60"
              >
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}