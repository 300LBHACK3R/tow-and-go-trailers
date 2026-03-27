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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white">
            TNG
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Tow-N-Go Trailers</p>
            <p className="text-xs text-zinc-400">Premium trailer rentals</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+17782156486"
            className="rounded-xl bg-[#d4af37] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Call Now
          </a>
        </nav>
      </Container>
    </header>
  );
}