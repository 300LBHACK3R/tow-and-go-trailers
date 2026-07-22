"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const phone = "778-215-3422";
const phoneHref = "tel:+17782153422";
const logoSrc = "/images/logo.png";

const navItems = [
  { href: "/rentals", label: "Trailer Rentals" },
  { href: "/services", label: "Services / Add-Ons" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/92 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-28">
        <Link
          href="/"
          aria-label="Tow-N-Go Trailers home"
          className="group inline-flex items-center"
        >
          <Image
            src={logoSrc}
            alt="Tow-N-Go Trailers"
            width={260}
            height={90}
            priority
            className="h-14 w-auto object-contain transition duration-300 group-hover:scale-[1.02] sm:h-16"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-sm font-semibold transition hover:text-yellow-300",
                  isActive ? "text-yellow-300" : "text-zinc-200",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href={phoneHref}
            className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-[0_16px_45px_rgba(234,179,8,0.22)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Call or Text
          </a>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:border-yellow-400/45 hover:bg-yellow-400/10 hover:text-yellow-300 lg:hidden"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={[
          "lg:hidden overflow-hidden border-t border-white/10 bg-black/96 transition-[max-height,opacity] duration-300 ease-out",
          isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
          <div className="grid gap-3">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-2xl border px-5 py-4 text-base font-black transition",
                    isActive
                      ? "border-yellow-400/35 bg-yellow-400/10 text-yellow-300"
                      : "border-white/10 bg-white/[0.035] text-white hover:border-yellow-400/35 hover:bg-yellow-400/10 hover:text-yellow-300",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href={phoneHref}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-5 py-4 text-base font-black text-black transition hover:bg-yellow-300"
            >
              Call or Text {phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
