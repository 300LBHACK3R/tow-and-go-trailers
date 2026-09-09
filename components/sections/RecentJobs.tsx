import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getPublishedJobs } from "@/data/recentJobs";
import { getServiceLabel, serviceInquiryHref } from "@/data/servicePathways";
import { siteConfig } from "@/lib/site";

export function RecentJobs({ fullPage = false }: { fullPage?: boolean }) {
  const allJobs = getPublishedJobs();
  const jobs = fullPage ? allJobs : allJobs.slice(0, 3);
  const JobHeading = fullPage ? "h2" : "h3";
  return (
    <section
      aria-label="Recent jobs"
      className="border-b border-white/10 bg-[#050505] py-14 sm:py-20"
    >
      <Container className="max-w-[1500px]">
        {!fullPage && (
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
              Out on the job
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Real trailers. Real projects.
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              See how Tow-N-Go fits into moving days, workdays and the projects
              in between.
            </p>
          </div>
        )}
        {jobs.length > 0 ? (
          <>
            <div
              className={`grid gap-7 ${jobs.length === 1 ? "max-w-5xl" : jobs.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}
            >
              {jobs.map((job) => (
                <article
                  key={job.id}
                  id={job.id}
                  className="flex min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/[0.025]"
                >
                  <Image
                    src={job.image.src}
                    alt={job.image.alt}
                    width={job.image.width}
                    height={job.image.height}
                    sizes={
                      jobs.length === 1
                        ? "(max-width: 1024px) 100vw, 1024px"
                        : jobs.length === 2 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    }
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                      {job.location}
                    </p>
                    <JobHeading className="mt-3 text-2xl font-semibold text-white">
                      {job.title}
                    </JobHeading>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">
                      {job.summary}
                    </p>
                    <dl className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm leading-6">
                      <div>
                        <dt className="text-zinc-400">Trailer</dt>
                        <dd className="text-white">{job.trailer}</dd>
                      </div>
                      <div>
                        <dt className="text-zinc-400">Service</dt>
                        <dd className="text-white">
                          {getServiceLabel(job.service)}
                        </dd>
                      </div>
                    </dl>
                    <Button
                      href={serviceInquiryHref(job.service, job.trailer)}
                      variant="secondary"
                      className="mt-7 w-full"
                    >
                      Plan a similar job
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            {!fullPage && (
              <Link
                href="/recent-jobs"
                className="mt-7 inline-flex min-h-11 items-center font-semibold text-[#d4af37] underline-offset-4 hover:underline"
              >
                View all recent jobs{" "}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            )}
          </>
        ) : (
          <div className="grid items-center gap-6 rounded-3xl border border-[#d4af37]/25 bg-[#d4af37]/[0.04] p-6 sm:p-9 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <JobHeading className="text-2xl font-semibold text-white">
                See what Tow-N-Go is working on.
              </JobHeading>
              <p className="mt-3 text-base leading-8 text-zinc-300">
                Visit our Facebook page for the latest trailer photos, project
                updates and ideas for your next rental.
              </p>
            </div>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-4 text-center text-sm font-semibold text-black hover:bg-[#edca52]"
            >
              Latest photos &amp; updates
              <span className="sr-only"> on Facebook (opens in a new tab)</span>
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
