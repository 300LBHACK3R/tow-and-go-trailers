const websiteUrl = "https://www.towandgotrailers.ca";

const phone = "778-215-3422";
const phoneHref = "tel:+17782153422";

const email = "info@towandgotrailers.ca";
const emailHref = "mailto:info@towandgotrailers.ca";

const facebookUrl =
  "https://www.facebook.com/profile.php?id=61581311484780";

const tiktokUrl =
  "https://www.tiktok.com/@towngotrailers?is_from_webapp=1&sender_device=pc";

export const siteConfig = {
  name: "Tow-N-Go Trailers Ltd.",
  shortName: "Tow-N-Go Trailers",

  description:
    "Premium trailer rentals in Kelowna and the Okanagan, including enclosed trailers, dump trailers, flat deck trailers, dovetail trailers, flexible rental options, pickup and delivery availability, and equipment ready for real work.",

  shortDescription:
    "Premium trailer rentals across Kelowna and the Okanagan for moving, hauling, cleanup jobs, equipment, and contractor work.",

  phone,
  phoneHref,

  email,
  emailHref,

  domain: websiteUrl,
  url: websiteUrl,

  location: "Kelowna, British Columbia",

  serviceArea:
    "Serving Kelowna, West Kelowna, Vernon, Penticton, Armstrong, Lake Country, the Okanagan, BC, Alberta, and beyond.",

  facebookName: "Tow-N-Go Trailers",
  facebookUrl,

  social: {
    facebook: facebookUrl,
    tiktok: tiktokUrl,
  },

  logo: "/icon.png",
  openGraphImage: "/opengraph-image.png",
  twitterImage: "/twitter-image.png",

  address: {
    locality: "Kelowna",
    region: "BC",
    country: "CA",
  },

  keywords: [
    "Tow-N-Go Trailers",
    "Tow N Go Trailers",
    "Tow and Go Trailers",
    "trailer rentals Kelowna",
    "trailer rentals Okanagan",
    "trailer rentals West Kelowna",
    "trailer rentals Penticton",
    "trailer rentals Vernon",
    "trailer rentals Lake Country",
    "dump trailer rental Kelowna",
    "dump trailer rental Okanagan",
    "enclosed trailer rental Kelowna",
    "flat deck trailer rental",
    "flatdeck trailer rental",
    "dovetail trailer rental",
    "equipment trailer rental",
    "moving trailer rental",
    "yard cleanup trailer rental",
    "dump run trailer rental",
    "contractor trailer rental",
    "equipment hauling Okanagan",
  ],
} as const;

export const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Trailer Rentals",
    href: "/rentals",
  },
  {
    label: "Services / Add-Ons",
    href: "/services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export type NavigationLink = (typeof navigationLinks)[number];