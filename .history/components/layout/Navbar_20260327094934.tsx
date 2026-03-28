"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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

        {/* Logo */}
        <Link href="/" aria-label="Go to homepage" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Tow-N-Go Trailers"
            width={280}
            height={80}
            priority
            className="h-auto w-[200px] md:w-[260px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-10">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="xl:hidden bg-black/95 border-t border-white/10">
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