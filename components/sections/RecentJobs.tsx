import Link from "next/link";
import { JobCard } from "@/components/jobs/JobCard";
import { Container } from "@/components/ui/Container";
import { getGalleryEntries } from "@/data/projectGallery";

export function RecentJobs({ fullPage = false }: { fullPage?: boolean }) {
  const allEntries = getGalleryEntries();
  const entries = fullPage ? allEntries : allEntries.slice(0, 2);
  const hasEntries = entries.length > 0;
  const hasExamples = entries.some((entry) => entry.kind === "example");
  const EmptyHeading = fullPage ? "h2" : "h3";
  const imageSizes = entries.length === 1
    ? "(max-width: 639px) calc(100vw - 34px), (max-width: 767px) calc(100vw - 50px), 698px"
    : "(max-width: 639px) calc(100vw - 34px), (max-width: 767px) calc(100vw - 50px), (max-width: 1023px) calc(50vw - 42px), (max-width: 1279px) calc(50vw - 54px), 586px";
  const detailImageSizes = entries.length === 1
    ? "(max-width: 639px) calc(100vw - 76px), (max-width: 767px) calc(50vw - 64px), 310px"
    : "(max-width: 639px) calc(100vw - 76px), (max-width: 767px) calc(50vw - 64px), (max-width: 1023px) calc(25vw - 60px), (max-width: 1279px) calc(25vw - 66px), 254px";

  return (
    <section
      id={fullPage ? "project-gallery" : "recent-jobs"}
      aria-label="On the Job"
      className={`bg-[#080907] ${fullPage ? "pb-20 pt-8 sm:pb-28 sm:pt-12" : "border-y border-white/[0.06] py-20 sm:py-28"}`}
    >
      <Container>
        {!fullPage && (
          <div className="mb-9 flex flex-col items-start justify-between gap-5 sm:mb-12 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                The gallery
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                On the Job
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                {hasExamples
                  ? "A little inspiration for the job ahead."
                  : hasEntries
                    ? "Recent trailer projects around the Okanagan."
                    : "A move, a cleanup or a load to deliver. We’ll help you find the right setup."}
              </p>
              {hasExamples && <p className="mt-2 text-xs leading-6 text-zinc-400">Illustrative scenes, not completed customer jobs.</p>}
            </div>
            <Link href="/recent-jobs" className="inline-flex min-h-11 shrink-0 items-center gap-4 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-[#e6c354] transition-colors hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]">
              Explore the gallery <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}

        {fullPage && hasExamples && (
          <div className="mb-8 flex flex-col gap-2 border-b border-white/10 pb-5 text-xs leading-6 text-zinc-400 sm:mb-10 sm:flex-row sm:justify-between sm:gap-6">
            <p>Illustrative scenes, not completed customer jobs.</p>
            <p>Open any image for a closer look.</p>
          </div>
        )}

        {hasEntries ? (
          <div className={`grid items-start gap-6 sm:gap-8 lg:gap-10 ${entries.length === 1 ? "max-w-[700px]" : "md:grid-cols-2"}`}>
            {entries.map((entry) => <JobCard key={entry.project.id} entry={entry} fullPage={fullPage} imageSizes={imageSizes} detailImageSizes={detailImageSizes} />)}
          </div>
        ) : (
          <div className="max-w-2xl py-6">
            <EmptyHeading className="text-xl font-semibold tracking-tight text-white sm:text-2xl">Project photos are on their way.</EmptyHeading>
            <p className="mt-4 text-sm leading-7 text-zinc-400">Explore the fleet while we put together our customer project gallery.</p>
            <Link href="/rentals" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-[#e6c354] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]">
              Explore the fleet
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
