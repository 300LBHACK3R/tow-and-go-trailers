import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Tow-N-Go Trailers | Trailer Rentals in Kelowna & the Okanagan",
    template: "%s | Tow-N-Go Trailers",
  },
  description:
    "Tow-N-Go Trailers offers premium trailer rentals in Kelowna, West Kelowna, Vernon, Penticton, Armstrong, and the Okanagan. Dump trailers, enclosed trailers, dovetail trailers, pickup, delivery, and flexible rental options.",
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "trailer rentals Kelowna",
    "trailer rental Kelowna",
    "Okanagan trailer rentals",
    "dump trailer rental Kelowna",
    "enclosed trailer rental Kelowna",
    "flat deck trailer rental",
    "dovetail trailer rental",
    "equipment trailer rental",
    "equipment hauling trailer",
    "moving trailer rental",
    "dump trailer Okanagan",
    "trailer rentals Vernon",
    "trailer rentals Penticton",
    "trailer rentals West Kelowna",
    "Tow-N-Go Trailers",
  ],
  authors: [{ name: "Tow-N-Go Trailers" }],
  creator: "Tow-N-Go Trailers",
  publisher: "Tow-N-Go Trailers",
  category: "Trailer Rental Service",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title: "Tow-N-Go Trailers | Trailer Rentals in Kelowna & the Okanagan",
    description:
      "Premium trailer rentals serving Kelowna, West Kelowna, Vernon, Penticton, Armstrong, and the Okanagan. Dump trailers, enclosed trailers, dovetail trailers, pickup, delivery, and flexible rental options.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/okanagan-trailer-rentals-dump-enclosed-flatdeck-black-trailers.jpg",
        width: 1200,
        height: 630,
        alt: "Tow-N-Go Trailers offering black trailer rentals in the Okanagan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tow-N-Go Trailers | Trailer Rentals in Kelowna & the Okanagan",
    description:
      "Premium dump trailer, enclosed trailer, and dovetail trailer rentals across Kelowna and the Okanagan.",
    images: [
      "/images/okanagan-trailer-rentals-dump-enclosed-flatdeck-black-trailers.jpg",
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen overflow-x-hidden bg-zinc-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}