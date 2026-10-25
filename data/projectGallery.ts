import { getPublishedJobs, type JobPhoto, type RecentJob } from "@/data/recentJobs";
import type { ServiceType } from "@/data/servicePathways";

/** User-supplied trailer-use photos, without unverified completed-job details. */
export type GalleryPhoto = {
  id: string;
  title: string;
  summary: string;
  trailer: string;
  service: ServiceType;
  image: JobPhoto;
  rentalHref: string;
  approvedForWebsite: boolean;
};

export type GalleryEntry =
  | { kind: "job"; project: RecentJob }
  | { kind: "photo"; project: GalleryPhoto };

// Approved supplied images, newest first. Existing scenes are not added twice.
// Service/category fields route future enquiries; they do not document a past service.
export const galleryPhotos: readonly GalleryPhoto[] = [
  {
    id: "flatdeck-mini-excavator",
    title: "Mini Excavator Transport",
    summary: "A mini excavator is shown at the rear loading ramps of a black flatdeck trailer. Tow-N-Go offers flatdeck equipment trailer rentals for landscaping and construction projects in Kelowna and the Okanagan. Ask about trailer and ramp suitability for your equipment’s size and weight, or transport for your prepared, customer-loaded equipment.",
    trailer: "Flatdeck equipment trailer",
    service: "rental",
    rentalHref: "/rentals/flatdeck-equipment-trailers",
    approvedForWebsite: true,
    image: {
      src: "/images/jobs/tow-n-go-flatdeck-mini-excavator-transport-okanagan.webp",
      alt: "Mini excavator and operator at the rear ramps of a black flatdeck trailer beside a landscaping project.",
      width: 1448,
      height: 1086,
    },
  },
  {
    id: "enclosed-trailer-event-setup",
    title: "Event Setup & Equipment",
    summary: "An enclosed trailer sits beside event tents, chairs and equipment cases in an autumn orchard. Tow-N-Go’s enclosed trailer rentals provide covered cargo space for event supplies in Kelowna and the Okanagan. Tow it yourself or ask about empty-trailer delivery and collection. You prepare and load your items.",
    trailer: "Enclosed trailer",
    service: "rental",
    rentalHref: "/rentals/enclosed-trailers",
    approvedForWebsite: true,
    image: {
      src: "/images/jobs/tow-n-go-enclosed-trailer-event-equipment-okanagan.webp",
      alt: "Black enclosed trailer beside white event tents, chairs and equipment cases in an autumn orchard.",
      width: 1920,
      height: 1440,
    },
  },
  {
    id: "flatdeck-riding-mower",
    title: "Riding Mower Transport",
    summary: "A riding mower is shown on a flatdeck trailer in an orchard setting. Tow-N-Go offers flatdeck trailer rentals for lawn equipment and property-maintenance projects across Kelowna and the Okanagan. Share your equipment’s dimensions and weight when enquiring so trailer suitability can be confirmed.",
    trailer: "Flatdeck equipment trailer",
    service: "rental",
    rentalHref: "/rentals/flatdeck-equipment-trailers",
    approvedForWebsite: true,
    image: {
      src: "/images/jobs/tow-n-go-flatdeck-riding-mower-transport-okanagan.webp",
      alt: "Green riding mower on a black tandem-axle flatdeck trailer attached to a pickup in an autumn orchard.",
      width: 1920,
      height: 1440,
    },
  },
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

export function getGalleryEntries(): readonly GalleryEntry[] {
  return [
    ...getPublishedJobs().map((project): GalleryEntry => ({ kind: "job", project })),
    ...galleryPhotos.filter((photo) => photo.approvedForWebsite).map((project): GalleryEntry => ({ kind: "photo", project })),
  ];
}
