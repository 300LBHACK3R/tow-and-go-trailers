import type { Metadata } from "next";

import { FaqDirectory } from "@/components/faq/FaqDirectory";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { allFaqItems } from "@/data/faqDirectory";
import { socialImage } from "@/lib/site";

const SITE_URL =
  "https://www.towandgotrailers.ca";

const PAGE_PATH = "/faq";

const CANONICAL_URL =
  `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Trailer Rental FAQ | Tow-N-Go Trailers Kelowna & Okanagan";

const PAGE_DESCRIPTION =
  "Get clear answers about Tow-N-Go trailer rentals, towing requirements, delivery and collection, pickup and transport, loading, pricing, returns, and service throughout Kelowna and the Okanagan.";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },

  description: PAGE_DESCRIPTION,

  applicationName:
    "Tow-N-Go Trailers",

  alternates: {
    canonical: CANONICAL_URL,
  },

  openGraph: {
    images: [socialImage],
    type: "website",
    locale: "en_CA",
    url: CANONICAL_URL,
    siteName:
      "Tow-N-Go Trailers",
    title: PAGE_TITLE,
    description:
      PAGE_DESCRIPTION,
  },

  twitter: {
    images: [socialImage.url],
    card:
      "summary_large_image",
    title: PAGE_TITLE,
    description:
      PAGE_DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview":
        "large",
      "max-snippet": -1,
    },
  },

  category:
    "Trailer Rentals",
};

const faqStructuredData = {
  "@context":
    "https://schema.org",

  "@graph": [
    {
      "@type": "FAQPage",
      "@id":
        `${CANONICAL_URL}#faq`,
      url: CANONICAL_URL,
      name: PAGE_TITLE,
      description:
        PAGE_DESCRIPTION,
      inLanguage: "en-CA",

      isPartOf: {
        "@id":
          `${SITE_URL}/#website`,
      },

      about: {
        "@id":
          `${SITE_URL}/#business`,
      },

      mainEntity:
        allFaqItems.map(
          (item) => ({
            "@type": "Question",
            name:
              item.question,

            acceptedAnswer: {
              "@type": "Answer",
              text:
                item.answer,
            },
          }),
        ),
    },

    {
      "@type":
        "BreadcrumbList",

      "@id":
        `${CANONICAL_URL}#breadcrumb`,

      itemListElement: [
        {
          "@type":
            "ListItem",
          position: 1,
          name: "Home",
          item:
            `${SITE_URL}/`,
        },

        {
          "@type":
            "ListItem",
          position: 2,
          name:
            "Frequently Asked Questions",
          item:
            CANONICAL_URL,
        },
      ],
    },
  ],
};

function serializeJsonLd(
  value: Record<
    string,
    unknown
  >,
): string {
  return JSON.stringify(value)
    .replace(
      /</g,
      "\\u003c",
    )
    .replace(
      /\u2028/g,
      "\\u2028",
    )
    .replace(
      /\u2029/g,
      "\\u2029",
    );
}

const servicePaths = [
  {
    number: "01",
    title:
      "Rent the trailer",
    description:
      "Choose the appropriate enclosed, dump, or flatdeck and dovetail trailer and tow it with an approved vehicle and setup.",
  },

  {
    number: "02",
    title:
      "Have it delivered",
    description:
      "Tow-N-Go may deliver the empty rental trailer to the agreed location and collect it afterward.",
  },

  {
    number: "03",
    title:
      "Have the load hauled",
    description:
      "For suitable customer-prepared loads, Tow-N-Go may provide pickup, transport, and delivery between locations.",
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            serializeJsonLd(
              faqStructuredData,
            ),
        }}
      />

      <main  className="bg-[#171717] text-white">
        <PageHero
          eyebrow="Tow-N-Go support"
          title="Trailer questions, answered."
          description="Clear information about booking, towing, delivery, hauling, loading, and returns throughout Kelowna and the Okanagan."
          breadcrumb="FAQ"
          image={{
            src: "/images/suretrac-6x10-dump-trailer-okanagan-6.jpg",
            alt: "The empty bed and rear gates of a black Sure-Trac dump trailer",
            position: "58% 52%",
            mobilePosition: "50% 55%",
          }}
        >
          <Button href="#faq-directory">Search questions</Button>
          <Button href="/contact" variant="secondary">Request a quote</Button>
        </PageHero>

        <section className="border-b border-white/10 bg-[#111111] py-10 sm:py-12" aria-label="Ways to work with Tow-N-Go">
          <Container>
            <div className="grid gap-8 md:grid-cols-3 md:gap-10">
              {servicePaths.map((path) => (
                <article key={path.number} className="border-l border-[#d4af37]/50 pl-5">
                  <p className="text-xs font-medium tracking-[0.16em] text-[#d4af37]">{path.number}</p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">{path.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{path.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <FaqDirectory />
      </main>
    </>
  );
}
