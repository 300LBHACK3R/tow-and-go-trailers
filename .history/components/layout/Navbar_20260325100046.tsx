import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/rentals", label: "Trailer Rentals" },
  { href: "/services", label: "Services / Add-Ons" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
      <Container className="flex h-[82px] items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <Image
              src="/images/logo.png"
              alt="Tow-N-Go Trailers logo"
              fill
              sizes="48px"
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-lg font-semibold text-white">Tow-N-Go Trailers</p>
            <p className="text-sm text-zinc-400">Premium trailer rentals</p>
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