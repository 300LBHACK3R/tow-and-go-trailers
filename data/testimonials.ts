export type Testimonial = {
  name: string;
  rating: number;
  dateLabel?: string;
  quote: string;
  source?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "K R",
    rating: 5,
    dateLabel: "Recent Google review",
    source: "Google",
    quote:
      "Tow N Go Trailers was fantastic. The trailer I rented was nearly brand new. Mechanically perfect and towed easily. Chadwick provided excellent service in all regards, provided the proper hitch, helped with hook-up, and drop off as well. Highly recommend renting from them. Everything was top notch!",
  },
];