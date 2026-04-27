"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/rentals", label: "Trailer Rentals" },
  { href: "/services", label: "Services / Add-Ons" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <Container className="flex h-[84px] items-center justify-between">
        <Link href="/" aria-label="Go to homepage" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Tow-N-Go Trailers"
            width={280}
            height={80}
            priority
            className="h-auto w-[200px] object-contain md:w-[240px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="tel:+17782156486"
            className="rounded-2xl bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Call or Text
          </a>
        </nav>

        {/* Mobile nav */}
        <details className="group relative xl:hidden">
          <summary className="list-none cursor-pointer select-none rounded-xl p-2 text-white">
            <span className="text-2xl leading-none group-open:hidden">☰</span>
            <span className="hidden text-2xl leading-none group-open:inline">✕</span>
          </summary>

          <div className="absolute right-0 top-[52px] w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-black/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-zinc-200 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:+17782156486"
                className="mt-2 rounded-xl bg-[#d4af37] px-5 py-3 text-center font-semibold text-black"
              >
                Call Now
              </a>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}