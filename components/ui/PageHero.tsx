import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { HalloweenPageDecor } from "@/components/seasonal/HalloweenDecor";
import { Container } from "@/components/ui/Container";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  image: { src: string; alt: string; position?: string; mobilePosition?: string };
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
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#0b0d0c]"
      style={{
        "--hero-position": image.position ?? "center",
        "--hero-mobile-position": image.mobilePosition ?? image.position ?? "center",
      } as CSSProperties}
    >
      <div className={styles.media}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          sizes="(min-width: 1024px) 78vw, 100vw"
          className={styles.image}
        />
      </div>
      <div
        aria-hidden="true"
        className={styles.shade}
      />
      <HalloweenPageDecor />
      <Container className={`relative z-10 pt-7 sm:pt-8 ${styles.content}`}>
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

        <div className={`mt-9 sm:mt-11 ${styles.copy}`}>
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
