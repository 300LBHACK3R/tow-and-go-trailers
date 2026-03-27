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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
      <Container className="flex h-[82px] items-center justify-between">
        
        {/* LOGO ONLY */}
        <Link href="/" aria-label="Go to homepage">
          <div className="relative h-14 w-32 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition hover:border-white/20">
            <Image
              src="/images/logo.png"
              alt="Tow-N-Go Trailers"
              fill
              sizes="128px"
              className="object-contain p-2"
              priority
            />
          </div>
        </Link>

        {/* NAV */}
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