export type Trailer = {
  id: string;
  name: string;
  shortName: string;
  status: "Available Now" | "Coming Soon";
  image: string;
  summary: string;
  description: string;
  specs: string[];
  bestFor: string[];
  accessories: string[];
};

export const trailers: Trailer[] = [
  {
    id: "royal-cargo-enclosed",
    name: `2026 Royal Cargo 7'6" x 16' + V-Nose Enclosed Trailer`,
    shortName: "Enclosed Trailer",
    status: "Available Now",
    image: "/images/enclosed-trailer.jpg",
    summary:
      "A secure enclosed trailer ideal for moving, equipment transport, and protected hauling.",
    description:
      "This enclosed trailer is a strong option for customers who want cargo protected from weather and road debris while keeping things clean, secure, and easy to tow.",
    specs: [
      `2026 Royal Cargo`,
      `7'6" x 16' + V-Nose`,
      "Dual 3500lb axles",
      "Currently part of the active rental fleet",
    ],
    bestFor: [
      "Moving boxes and furniture",
      "Transporting tools or equipment",
      "Keeping cargo covered and secure",
    ],
    accessories: [
      "Hitch",
      "Ratchet straps",
      "Cargo nets",
      "Boxes",
      "Moving blankets",
    ],
  },
  {
    id: "suretrac-dump",
    name: "2025 SureTrac 6x10 Dump Trailer",
    shortName: "Dump Trailer",
    status: "Available Now",
    image: "/images/dump-trailer.jpg",
    summary:
      "A practical dump trailer built for cleanup, landscaping, renovation debris, and hauling jobs.",
    description:
      "This dump trailer is designed for real work. It is a strong fit for customers needing a dependable rental option for cleanup, heavier material movement, and general hauling jobs.",
    specs: [
      "2025 SureTrac",
      "6x10",
      "Dual 5000lb axles",
      "Commercially inspected and ready to rent",
    ],
    bestFor: [
      "Landscaping cleanup",
      "Renovation debris",
      "General dump and haul jobs",
    ],
    accessories: ["Hitch", "Ratchet straps", "Cargo support items"],
  },
  {
    id: "southland-dovetail",
    name: "2026 Southland 7x20 + Dovetail Trailer",
    shortName: "Flatbed / Dovetail Trailer",
    status: "Coming Soon",
    image: "/images/flatbed-trailer.jpg",
    summary:
      "A larger trailer option for heavier hauling and future equipment-focused rentals.",
    description:
      "This trailer has already been purchased and is expected in Kelowna soon. It represents the next stage of Tow-N-Go’s premium blacked-out fleet growth.",
    specs: [
      "2026 Southland",
      "7x20 + Dovetail",
      "Dual 7000lb axles",
      "Purchased and coming soon",
    ],
    bestFor: [
      "Larger hauling jobs",
      "Equipment transport",
      "Future transport-focused rentals",
    ],
    accessories: ["Accessory options to expand as the fleet grows"],
  },
];