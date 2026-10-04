import Link from "next/link";
import { JobCard } from "@/components/jobs/JobCard";
import { Container } from "@/components/ui/Container";
import { getGalleryEntries } from "@/data/projectGallery";

export function RecentJobs({ fullPage = false }: { fullPage?: boolean }) {
  const allEntries = getGalleryEntries();
  const entries = fullPage ? allEntries : allEntries.slice(0, 2);
  const hasEntries = entries.length > 0;
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
                Customer projects
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                On the Job
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                Our trailers. Your projects. A closer look at customer jobs around the Okanagan.
              </p>
            </div>
            <Link href="/recent-jobs" className="inline-flex min-h-11 shrink-0 items-center gap-4 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-[#e6c354] transition-colors hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]">
              View customer projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}

        {hasEntries ? (
          <div className={`grid items-start gap-6 sm:gap-8 lg:gap-10 ${entries.length === 1 ? "max-w-[700px]" : "md:grid-cols-2"}`}>
            {entries.map((entry) => <JobCard key={entry.project.id} entry={entry} fullPage={fullPage} imageSizes={imageSizes} detailImageSizes={detailImageSizes} />)}
          </div>
        ) : (
          <div className="max-w-3xl rounded-2xl border border-white/10 bg-[#111210] px-6 py-8 sm:px-9 sm:py-10">
            <span aria-hidden="true" className="mb-6 block h-px w-10 bg-[#d4af37]" />
            <EmptyHeading className="text-xl font-semibold tracking-tight text-white sm:text-2xl">Customer job photos are on their way.</EmptyHeading>
            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">See the trailers in use, what they helped move and where the job took them. In the meantime, find the right trailer for your next project.</p>
            <Link href="/rentals" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-[#e6c354] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]">
              Explore the fleet
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
