"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/rentals", label: "Trailer Rentals" },
  { href: "/services", label: "Services / Add-Ons" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <Container className="flex h-[92px] items-center justify-between">
        <Link href="/" aria-label="Go to homepage" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Tow-N-Go Trailers"
            width={280}
            height={80}
            priority
            className="h-auto w-[200px] object-contain md:w-[260px]"
          />
        </Link>

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
            Call Now
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-white xl:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-2xl leading-none">
            {mobileOpen ? "✕" : "☰"}
          </span>
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 xl:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-zinc-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+17782156486"
              className="mt-4 rounded-xl bg-[#d4af37] px-5 py-3 text-center font-semibold text-black"
            >
              Call Now
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}