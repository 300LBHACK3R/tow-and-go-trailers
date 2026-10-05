import { getPublishedJobs, type JobPhoto, type RecentJob } from "@/data/recentJobs";
import type { ServiceType } from "@/data/servicePathways";

/** Illustrative advertising scenes. Never present these as completed customer jobs. */
export type GalleryExample = {
  id: string;
  title: string;
  summary: string;
  trailer: string;
  service: ServiceType;
  image: JobPhoto;
};

export type GalleryEntry =
  | { kind: "job"; project: RecentJob }
  | { kind: "photo"; project: GalleryPhoto }
  | { kind: "example"; project: GalleryExample };

/** User-supplied trailer-use photos, without unverified completed-job details. */
export type GalleryPhoto = GalleryExample & {
  rentalHref: string;
  approvedForWebsite: boolean;
};

// Tate requested these four supplied images be published on October 4, 2026.
// Service/category fields route future enquiries; they do not document a past service.
export const galleryPhotos: readonly GalleryPhoto[] = [
  {
    id: "renovation-cleanup",
    title: "Renovation Cleanup",
    summary: "A black dump trailer holds old boards and renovation debris beside a home project. Tow-N-Go offers dump trailer rentals for cleanup and material-hauling needs in Kelowna and the Okanagan. Ask about suitable materials, rental availability and empty-trailer delivery and collection.",
    trailer: "Dump trailer",
    service: "rental",
    rentalHref: "/rentals/dump-trailers",
    approvedForWebsite: true,
    image: {
      src: "/images/jobs/tow-n-go-dump-trailer-renovation-cleanup-kelowna.jpg",
      alt: "Black tandem-axle dump trailer holding wood and renovation debris beside a house.",
      width: 1536,
      height: 1024,
    },
  },
  {
    id: "enclosed-trailer-moving-day",
    title: "Moving Day",
    summary: "Furniture and moving boxes are being loaded into an enclosed trailer outside a home. Tow-N-Go’s enclosed trailer rentals provide covered space for moving-day cargo in Kelowna and the Okanagan. Tow it yourself or ask about transport for your prepared, customer-loaded cargo. You load it. Tow-N-Go hauls it.",
    trailer: "Enclosed trailer",
    service: "rental",
    rentalHref: "/rentals/enclosed-trailers",
    approvedForWebsite: true,
    image: {
      src: "/images/jobs/tow-n-go-enclosed-trailer-moving-kelowna.jpg",
      alt: "People loading furniture and boxes into a black enclosed trailer with its rear ramp lowered.",
      width: 1448,
      height: 1086,
    },
  },
  {
    id: "construction-equipment",
    title: "Equipment at the Job Site",
    summary: "A compact skid-steer loader is parked on a flatdeck trailer at a construction site before load securement. Tow-N-Go offers flatdeck trailer rentals for construction and landscaping equipment around Kelowna and the Okanagan. Ask about trailer suitability or transport for your prepared, customer-loaded equipment.",
    trailer: "Flatdeck equipment trailer",
    service: "rental",
    rentalHref: "/rentals/flatdeck-equipment-trailers",
    approvedForWebsite: true,
    image: {
      src: "/images/jobs/tow-n-go-flatdeck-equipment-trailer-okanagan.jpg",
      alt: "Compact skid-steer loader on a black flatdeck trailer at a construction site, with loose tie-downs on the deck.",
      width: 1448,
      height: 1086,
    },
  },
  {
    id: "landscaping-yard-cleanup",
    title: "Landscaping & Yard Cleanup",
    summary: "Branches, pulled plants and yard debris fill a dump trailer during a landscaping project. For seasonal property cleanup in Kelowna and across the Okanagan, ask Tow-N-Go about a suitable dump trailer and delivery options. Load suitability and availability are confirmed when booking.",
    trailer: "Dump trailer",
    service: "rental",
    rentalHref: "/rentals/dump-trailers",
    approvedForWebsite: true,
    image: {
      src: "/images/jobs/tow-n-go-dump-trailer-landscaping-okanagan.jpg",
      alt: "Black dump trailer loaded with branches and green waste beside a residential landscaping area.",
      width: 1448,
      height: 1086,
    },
  },
];

// Retained as marketing artwork references; these never populate On the Job.
export const galleryExamples: readonly GalleryExample[] = [
  {
    id: "enclosed-delivery-idea",
    title: "Space for your next move.",
    summary:
      "Have an enclosed trailer delivered to your place. You load and use it; collection is arranged with Tow-N-Go.",
    trailer: "Enclosed trailer",
    service: "delivery",
    image: {
      src: "/images/gallery/enclosed-trailer-delivery-example.webp",
      alt: "Illustrative scene of a black enclosed trailer with its ramp lowered on an autumn driveway.",
      width: 1536,
      height: 1024,
    },
  },
  {
    id: "landscaping-rental-idea",
    title: "Ready for a garden refresh.",
    summary:
      "Room for mulch, materials and the weekend’s to-do list. Ask about a dump-trailer rental for your next landscaping project.",
    trailer: "Dump trailer",
    service: "rental",
    image: {
      src: "/images/gallery/dump-trailer-landscaping-example.webp",
      alt: "Illustrative scene of a parked black dump trailer carrying bark mulch beside a garden project.",
      width: 1536,
      height: 1024,
    },
  },
];

export function getGalleryEntries(): readonly GalleryEntry[] {
  return [
    ...getPublishedJobs().map((project): GalleryEntry => ({ kind: "job", project })),
    ...galleryPhotos.filter((photo) => photo.approvedForWebsite).map((project): GalleryEntry => ({ kind: "photo", project })),
  ];
}
