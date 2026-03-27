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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <Container className="flex h-[88px] items-center justify-between">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center"
        >
          <div className="relative h-[54px] w-[190px] overflow-hidden rounded-none border-0 bg-transparent shadow-none">
            <Image
              src="/images/logo.png"
              alt="Tow-N-Go Trailers"
              fill
              sizes="190px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
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
            className="rounded-2xl bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Call Now
          </a>
        </nav>
      </Container>
    </header>
  );
}