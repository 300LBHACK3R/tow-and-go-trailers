import Image from "next/image";
import Link from "next/link";
import type { GalleryEntry } from "@/data/projectGallery";
import { getServiceLabel, serviceInquiryHref } from "@/data/servicePathways";

type JobCardProps = {
  entry: GalleryEntry;
  fullPage: boolean;
  imageSizes: string;
  detailImageSizes: string;
};

export function JobCard({ entry, fullPage, imageSizes, detailImageSizes }: JobCardProps) {
  const { project } = entry;
  const Heading = fullPage ? "h2" : "h3";
  const headingId = `project-${project.id}-heading`;
  const additionalPhotos = entry.kind === "job" ? entry.project.photos ?? [] : [];
  const photoClassName = "group/photo relative block aspect-[3/2] overflow-hidden bg-[#0b0b0b] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d4af37]";
  const photo = (
    <>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes={imageSizes}
        className="object-contain transition-transform duration-700 motion-safe:group-hover/photo:scale-[1.025]"
      />
      <span className="absolute bottom-4 right-4 inline-flex min-h-9 items-center gap-2 rounded-full border border-white/20 bg-black/75 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-sm transition-colors group-hover/photo:border-[#d4af37]/60 group-hover/photo:text-[#e6c354] sm:bottom-5 sm:right-5">
        {fullPage ? "View image" : "Take a closer look"}
        <span aria-hidden="true">{fullPage ? "↗" : "→"}</span>
      </span>
    </>
  );

  return (
    <article id={project.id} aria-labelledby={headingId} className="min-w-0 scroll-mt-32 overflow-hidden rounded-2xl border border-white/10 bg-[#111210] transition-colors duration-300 hover:border-white/20 sm:rounded-[1.35rem]">
      {fullPage ? (
        <a href={project.image.src} target="_blank" rel="noopener noreferrer" className={photoClassName}>
          {photo}
          <span className="sr-only">Open full-size image in a new tab</span>
        </a>
      ) : (
        <Link href={`/recent-jobs#${project.id}`} className={photoClassName}>
          {photo}
          <span className="sr-only">: {project.title}</span>
        </Link>
      )}

      <div className="px-5 pb-6 pt-6 sm:px-7 sm:pb-7 sm:pt-7">
        <p className="text-[11px] font-semibold uppercase leading-5 tracking-[0.16em] text-[#d4af37]">
          {entry.kind === "photo" ? "Trailers in use" : getServiceLabel(project.service)}
        </p>
        <Heading id={headingId} className="mt-2.5 text-xl font-semibold leading-snug tracking-[-0.025em] text-white sm:text-2xl">
          {project.title}
        </Heading>
        <p className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm leading-6 text-zinc-400">
          <span>{project.trailer}</span>
          {entry.kind === "job" && (
            <>
              <span aria-hidden="true" className="text-zinc-600">/</span>
              <span>{entry.project.location}</span>
            </>
          )}
        </p>

        {entry.kind === "photo" && (
          <>
            <p className="mt-5 max-w-xl border-t border-white/10 pt-5 text-sm leading-7 text-zinc-300">{project.summary}</p>
            <Link
              href={entry.project.rentalHref}
              className="mt-3 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-[#e6c354] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              Explore trailer rentals<span className="sr-only">: {project.trailer}</span><span aria-hidden="true">→</span>
            </Link>
          </>
        )}

        {fullPage && entry.kind === "job" && (
          <details className="mt-5 border-t border-white/10 pt-2">
            <summary className="w-fit min-h-11 cursor-pointer rounded-sm py-3 text-sm font-semibold text-[#e6c354] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]">
              Project details{additionalPhotos.length > 0 ? ` & ${additionalPhotos.length} more ${additionalPhotos.length === 1 ? "photo" : "photos"}` : ""}
              <span className="sr-only">: {project.title}</span>
            </summary>
            <div className="pb-1 pt-2">
              <p className="max-w-xl text-sm leading-7 text-zinc-300">{project.summary}</p>
              {additionalPhotos.length > 0 && (
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {additionalPhotos.map((image) => (
                    <figure key={image.src} className="min-w-0">
                      <a href={image.src} target="_blank" rel="noopener noreferrer" className={`${photoClassName} rounded-lg`}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes={detailImageSizes}
                          className="object-contain"
                        />
                        <span className="sr-only">Open full-size photo in a new tab</span>
                      </a>
                      {image.caption && <figcaption className="mt-2 text-xs leading-6 text-zinc-400">{image.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}
              <Link
                href={serviceInquiryHref(project.service, project.trailer)}
                className="mt-3 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-[#e6c354] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              >
                Plan a similar job<span className="sr-only">: {project.title}</span><span aria-hidden="true">→</span>
              </Link>
            </div>
          </details>
        )}
      </div>
    </article>
  );
}
