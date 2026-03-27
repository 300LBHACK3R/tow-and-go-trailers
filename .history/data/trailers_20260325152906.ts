export type Trailer = {
  id: string;
  name: string;
  shortName: string;
  status: "Available Now" | "Coming Soon";
  image: string;
  images?: string[];
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
    shortName: "7x20 Dovetail Trailer",
    status: "Coming Soon",
    image: "/images/southland-dovetail-3.jpg",
    images: [
      "/images/southland-dovetail-3.jpg",
      "/images/southland-dovetail-1.jpeg",
      "/images/southland-dovetail-2.jpg",
      "/images/southland-dovetail-4.jpg",
      "/images/southland-dovetail-5.jpg",
      "/images/southland-dovetail-6.jpg",
      "/images/southland-dovetail-7.jpg",
      "/images/southland-dovetail-8.jpg",
    ],
    summary: "Heavy-duty flat deck built for real work.",
    description:
      "This 2026 Southland 7x20 + dovetail trailer with dual 7000lb axles is built for serious hauling. Ideal for equipment, vehicles, and larger loads with the stability and strength needed for heavier jobs.",
    specs: [
      "2026 Southland",
      "7x20 deck + dovetail",
      "Dual 7000lb axles",
      "Heavy-duty flat deck",
    ],
    bestFor: [
      "Equipment hauling",
      "Vehicle transport",
      "Heavy-duty jobs",
    ],
    accessories: [
      "Ramps",
      "Straps",
      "Tie-down support",
    ],
  },
];