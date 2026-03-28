import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Tow-N-Go Trailers</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Premium trailer rentals in the Okanagan with flexible rental options,
              delivery availability, and a growing modern fleet.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Quick Links
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link href="/rentals" className="text-zinc-300 hover:text-white">
                Trailer Rentals
              </Link>
              <Link href="/services" className="text-zinc-300 hover:text-white">
                Services / Add-Ons
              </Link>
              <Link href="/about" className="text-zinc-300 hover:text-white">
                About Us
              </Link>
              <Link href="/contact" className="text-zinc-300 hover:text-white">
                Contact / Inquiry
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Contact
            </h4>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <p>Kelowna, British Columbia</p>
              <a href="tel:+17782156486" className="block hover:text-white">
                778-215-6486
              </a>
              <a
                href="mailto:Chad@towandgotrailers.ca"
                className="block hover:text-white"
              >
                Chad@towandgotrailers.ca
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Tow-N-Go Trailers Ltd. All rights reserved.
          </p>

          <p className="mt-2">
            Website by{" "}
            <a
              href="https://yourdomain.ca" // 🔥 change this to your real site
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition hover:text-[#d4af37]"
            >
              L&L Tech Solutions
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}