import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import {
  getTrailerCategoryById,
  getTrailersForCategory,
  trailerCategories,
  type TrailerCategoryId,
} from "@/data/trailerCategories";
import { CategoryRentalsClient } from "./CategoryRentalsClient";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return trailerCategories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categoryParam } = await params;
  const category = getTrailerCategoryById(categoryParam);

  if (!category) {
    return {
      title: "Trailer Rentals",
    };
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/rentals/${category.id}`,
    },
    openGraph: {
      title: `${category.seoTitle} | Tow-N-Go Trailers`,
      description: category.seoDescription,
      url: `${siteConfig.url}/rentals/${category.id}`,
      siteName: siteConfig.name,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: `${category.title} from Tow-N-Go Trailers`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.seoTitle} | Tow-N-Go Trailers`,
      description: category.seoDescription,
      images: ["/twitter-image.png"],
    },
  };
}

export default async function TrailerCategoryPage({
  params,
}: CategoryPageProps) {
  const { category: categoryParam } = await params;
  const category = getTrailerCategoryById(categoryParam);

  if (!category) {
    notFound();
  }

  const categoryTrailers = getTrailersForCategory(
    category.id as TrailerCategoryId
  );

  const categoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/rentals/${category.id}`,
    name: `${category.title} | Tow-N-Go Trailers`,
    description: category.seoDescription,
    url: `${siteConfig.url}/rentals/${category.id}`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Service",
      name: category.title,
      serviceType: "Trailer Rental",
      provider: {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categoryTrailers.map((trailer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: trailer.name,
        url: `${siteConfig.url}/rentals/${category.id}#${trailer.id}`,
      })),
    },
  };

  return (
    <>
      <JsonLd data={categoryJsonLd} />
      <CategoryRentalsClient category={category} trailers={categoryTrailers} />
    </>
  );
}