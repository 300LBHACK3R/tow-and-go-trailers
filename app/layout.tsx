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
    default: "Tow-N-Go Trailers | Premium Trailer Rentals in the Okanagan",
    template: "%s | Tow-N-Go Trailers",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "trailer rentals Kelowna",
    "Okanagan trailer rentals",
    "dump trailer rental",
    "enclosed trailer rental",
    "flat deck trailer rental",
    "dovetail trailer rental",
    "Tow-N-Go Trailers",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Tow-N-Go Trailers | Premium Trailer Rentals in the Okanagan",
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: siteConfig.domain,
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