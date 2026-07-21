const tiktokUrl =
  "https://www.tiktok.com/@towngotrailers?is_from_webapp=1&sender_device=pc";

function TikTokMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center ${className}`}
    >
      ♪
    </span>
  );
}

export function TikTokSocialStrip() {
  return (
    <section
      aria-labelledby="tow-n-go-tiktok-heading"
      className="border-y border-white/10 bg-black px-5 py-10 text-white sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[1.75rem] border border-yellow-400/20 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.35)] sm:p-7 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-300">
            Tow-N-Go On TikTok
          </p>

          <h2
            id="tow-n-go-tiktok-heading"
            className="mt-2 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl"
          >
            Follow Tow-N-Go for trailer videos, local hauling content, and rental updates.
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
            See enclosed, dump, and dovetail equipment trailer content from Tow-N-Go Trailers serving Kelowna and the Okanagan.
          </p>
        </div>

        <a
          href={tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:-translate-y-1 hover:bg-yellow-300"
        >
          <TikTokMark className="h-6 w-6 rounded-full bg-black text-base text-yellow-300" />
          Follow On TikTok
        </a>
      </div>
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
      className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-black uppercase tracking-wide text-yellow-300 transition hover:-translate-y-0.5 hover:border-yellow-300 hover:bg-yellow-400 hover:text-black"
    >
      <TikTokMark className="h-5 w-5 rounded-full border border-current text-xs" />
      TikTok
    </a>
  );
}
