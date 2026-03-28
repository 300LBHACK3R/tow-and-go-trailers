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
    image: "/images/royal-cargo-enclosed-1.jpg",
    images: [
      "/images/royal-cargo-enclosed-1.JPG",
      "/images/royal-cargo-enclosed-2.JPG",
      "/images/royal-cargo-enclosed-3.JPG",
      "/images/royal-cargo-enclosed-4.JPG",
      "/images/royal-cargo-enclosed-5.jpg",
      "/images/royal-cargo-enclosed-6.jpg",
    ],
    summary:
      "Secure enclosed hauling with a clean blacked-out look and protected cargo space.",
    description:
      `This 2026 Royal Cargo 7'6" x 16' + V-Nose enclosed trailer with dual 3500lb axles is a strong option for customers needing secure, weather-protected hauling. Ideal for moving, equipment transport, and enclosed cargo that needs to stay clean, dry, and protected on the road.`,
    specs: [
      "2026 Royal Cargo",
      `7'6" x 16' + V-Nose`,
      "Dual 3500lb axles",
      "Enclosed cargo protection",
    ],
    bestFor: [
      "Moving boxes and furniture",
      "Transporting tools or equipment",
      "Protected enclosed hauling",
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
    image: "/images/suretrac-dump-2.jpg",
    images: [
      "/images/suretrac-dump-2.jpg",
      "/images/suretrac-dump-1.jpg",
      "/images/suretrac-dump-3.jpg",
      "/images/suretrac-dump-4.jpg",
      "/images/suretrac-dump-5.jpg",
      "/images/suretrac-dump-6.jpg",
      "/images/suretrac-dump-7.jpg",
      "/images/suretrac-dump-8.jpg",
      "/images/suretrac-dump-9.jpg",
    ],
    summary:
      "Heavy-duty dump trailer built for real cleanup, hauling, and job site work.",
    description:
      "This 2025 SureTrac 6x10 dump trailer with dual 5000lb axles is built for real-world jobs. Whether you're handling landscaping cleanup, renovation debris, or hauling gravel and material, this trailer is designed to be reliable, simple to use, and capable under load. The hydraulic dump system makes unloading fast and efficient, saving time on every job.",
    specs: [
      "2025 SureTrac",
      "6x10 dump bed",
      "Dual 5000lb axles",
      "Hydraulic dump system",
      "Heavy-duty steel construction",
    ],
    bestFor: [
      "Landscaping cleanup",
      "Construction debris",
      "Gravel, soil, and material hauling",
      "General dump and haul jobs",
    ],
    accessories: [
      "Hitch",
      "Ratchet straps",
      "Tie-down support",
      "Additional hauling accessories",
    ],
  },

  {
    id: "southland-dovetail",
    name: "2026 Southland 7x20 + Dovetail Trailer",
    shortName: "Dovetail Trailer",
    status: "Available Now",
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
    summary:
      "Heavy-duty flat deck built for equipment, vehicles, and serious hauling.",
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