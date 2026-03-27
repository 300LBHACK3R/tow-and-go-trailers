import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              {siteConfig.shortName}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              PREMIUM trailer rentals based in the Okanagan, offering flexible
              rental options, delivery availability, and a growing modern fleet
              built for real work.
            </p>
          </div>

          {/* LINKS */}
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

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Contact
            </h4>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <p>{siteConfig.location}</p>

              <a
                href={siteConfig.phoneHref}
                className="block transition hover:text-white"
              >
                {siteConfig.phone}
              </a>

              <a
                href={siteConfig.emailHref}
                className="block transition hover:text-white"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <p className="mt-2">
            Website designed & developed by{" "}
            <a
              href="https://lltechsolutions.ca" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-400 transition hover:text-[#d4af37]"
            >
              L&L Tech Solutions
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}