import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { HalloweenPageDecor } from "@/components/seasonal/HalloweenDecor";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  image?: { src: string; alt: string };
  parent?: { label: string; href: string };
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  image,
  parent,
  children,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-heading"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#111210]"
    >
      {image && (
        <div className="pointer-events-none absolute inset-0 -z-20">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
        </div>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,11,10,0.97)_0%,rgba(10,11,10,0.89)_38%,rgba(10,11,10,0.42)_100%)]"
      />
      <HalloweenPageDecor />
      <Container className="relative z-10 pb-12 pt-7 sm:pb-14 sm:pt-8 lg:pb-16">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400">
          <Link href="/" className="transition-colors hover:text-[#d4af37]">Home</Link>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          {parent && (
            <>
              <Link href={parent.href} className="transition-colors hover:text-[#d4af37]">{parent.label}</Link>
              <span aria-hidden="true" className="text-zinc-600">/</span>
            </>
          )}
          <span aria-current="page" className="text-zinc-200">{breadcrumb}</span>
        </nav>

        <div className="mt-9 max-w-[760px] sm:mt-11">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.23em] text-[#d4af37] sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-[#d4af37]" />
            {eyebrow}
          </p>
          <h1 id="page-heading" className="mt-5 text-[clamp(2.4rem,5.3vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-white [text-wrap:balance]">
            {title}
          </h1>
          <p className="mt-5 max-w-[650px] text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            {description}
          </p>
          {children && <div className="mt-7">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
