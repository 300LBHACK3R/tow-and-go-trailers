import { Container } from "@/components/ui/Container";

const tiktokUrl =
  "https://www.tiktok.com/@towngotrailers?is_from_webapp=1&sender_device=pc";

function TikTokMark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
    >
      <svg
        className="h-[55%] w-[55%]"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.4 4.2v10.2a4.6 4.6 0 1 1-3.2-4.39"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
        />

        <path
          d="M14.4 4.2c.85 2.05 2.35 3.45 4.6 3.9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
        />
      </svg>
    </span>
  );
}

function ExternalArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 17 17 7M17 7H8M17 7v9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function TikTokSocialStrip() {
  return (
    <section
      aria-labelledby="tow-n-go-tiktok-heading"
      className="relative isolate overflow-hidden border-y border-white/10 bg-black py-10 sm:py-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(135deg,#030303_0%,#0a0803_50%,#000000_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.13),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.035),transparent_28%)]"
      />

      <Container className="max-w-[1500px]">
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#d4af37]/25 bg-[linear-gradient(145deg,rgba(212,175,55,0.075),rgba(255,255,255,0.025)_45%,rgba(255,255,255,0.012))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] transition duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_30px_95px_rgba(0,0,0,0.5),0_14px_50px_rgba(212,175,55,0.08)] sm:p-8 motion-reduce:transition-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/85 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#d4af37]/[0.055] blur-3xl transition duration-500 group-hover:bg-[#d4af37]/[0.085]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 translate-x-[-120%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.035),transparent)] transition-transform duration-1000 ease-out group-hover:translate-x-[120%] motion-reduce:hidden"
          />

          <div className="relative grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
            <div className="min-w-0">
              <div className="flex items-center gap-4">
                <TikTokMark className="h-11 w-11 rounded-2xl border border-[#d4af37]/30 bg-black/50 text-[#d4af37] shadow-[0_12px_32px_rgba(0,0,0,0.24)]" />

                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d4af37]">
                  Tow-N-Go On TikTok
                </p>
              </div>

              <h2
                id="tow-n-go-tiktok-heading"
                className="mt-5 max-w-5xl text-[clamp(1.75rem,3.3vw,3rem)] font-black leading-[1.04] tracking-[-0.04em] text-white [text-wrap:balance]"
              >
                Follow Tow-N-Go for trailer videos, local hauling content, and
                rental updates.
              </h2>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                See enclosed, dump, and dovetail equipment trailer content from
                Tow-N-Go Trailers serving Kelowna and the Okanagan.
              </p>
            </div>

            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-2xl bg-[#d4af37] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_18px_55px_rgba(212,175,55,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#edca52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0d36e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#090805] sm:w-auto"
            >
              <TikTokMark className="h-7 w-7 rounded-full bg-black text-[#d4af37]" />

              Follow On TikTok

              <ExternalArrowIcon />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function TikTokFooterButton() {
  return (
    <a
      href={tiktokUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Tow-N-Go Trailers on TikTok"
      className="group inline-flex min-h-10 items-center justify-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm font-black uppercase tracking-wide text-[#d4af37] transition duration-200 hover:-translate-y-0.5 hover:border-[#d4af37]/60 hover:bg-[#d4af37] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 focus-visible:ring-offset-3 focus-visible:ring-offset-black"
    >
      <TikTokMark className="h-6 w-6 rounded-full border border-current" />

      TikTok

      <ExternalArrowIcon />
    </a>
  );
}