"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

const logoSrc = "/images/logo.png";

const navItems = [
  {
    href: "/rentals",
    label: "Trailer Rentals",
  },
  {
    href: "/services",
    label: "Services / Add-Ons",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
] as const;

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

function isNavItemActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const desktopMediaQuery = window.matchMedia("(min-width: 1280px)");

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopMediaQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopMediaQuery.removeEventListener(
        "change",
        handleDesktopChange
      );
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/[0.94] shadow-[0_12px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl">
      <div className="mx-auto flex h-24 w-full max-w-[1500px] items-center justify-between gap-6 px-4 sm:h-28 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Tow-N-Go Trailers home"
          className="group relative z-10 inline-flex shrink-0 items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
        >
          <Image
            src={logoSrc}
            alt="Tow-N-Go Trailers"
            width={320}
            height={112}
            priority
            sizes="(max-width: 639px) 210px, (max-width: 1279px) 245px, 275px"
            className="h-[72px] w-auto max-w-none object-contain object-left transition-transform duration-300 group-hover:scale-[1.025] sm:h-[82px] xl:h-[90px]"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 items-center gap-5 xl:flex 2xl:gap-7"
        >
          {navItems.map((item) => {
            const isActive = isNavItemActive(
              pathname,
              item.href
            );

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative whitespace-nowrap rounded-md px-1 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black",
                  "after:absolute after:inset-x-1 after:bottom-1 after:h-px after:origin-left after:bg-[#d4af37] after:transition-transform after:duration-200",
                  isActive
                    ? "text-[#e6c354] after:scale-x-100"
                    : "text-zinc-200 after:scale-x-0 hover:text-white hover:after:scale-x-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href={siteConfig.phoneHref}
            className="ml-1 inline-flex min-h-12 shrink-0 items-center justify-center rounded-2xl bg-[#d4af37] px-7 py-3.5 text-sm font-black text-black shadow-[0_16px_45px_rgba(212,175,55,0.23)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#edca52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0d36e] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            Call or Text
          </a>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.045] text-white shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition duration-200 hover:border-[#d4af37]/55 hover:bg-[#d4af37]/10 hover:text-[#e6c354] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black xl:hidden"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={[
          "overflow-hidden border-t bg-black/[0.98] shadow-[0_24px_50px_rgba(0,0,0,0.45)] transition-[max-height,opacity,border-color] duration-300 ease-out xl:hidden",
          isOpen
            ? "max-h-[620px] border-white/10 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        ].join(" ")}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8"
        >
          <div className="grid gap-3">
            {navItems.map((item) => {
              const isActive = isNavItemActive(
                pathname,
                item.href
              );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={[
                    "flex min-h-14 items-center rounded-2xl border px-5 py-4 text-base font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                    isActive
                      ? "border-[#d4af37]/45 bg-[#d4af37]/12 text-[#e6c354]"
                      : "border-white/10 bg-white/[0.035] text-white hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10 hover:text-[#e6c354]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href={siteConfig.phoneHref}
              tabIndex={isOpen ? 0 : -1}
              className="mt-1 inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#d4af37] px-5 py-4 text-center text-base font-black text-black shadow-[0_16px_45px_rgba(212,175,55,0.2)] transition duration-200 hover:bg-[#edca52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0d36e] focus-visible:ring-offset-3 focus-visible:ring-offset-black"
            >
              Call or Text {siteConfig.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}