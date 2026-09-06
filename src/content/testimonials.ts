/**
 * Curated client quotes — replace with real reviews (Google, email, etc.).
 * Keep wording faithful; get permission for non-public sources.
 */

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I came in exhausted and unsure of my next step. Jejelola helped me name the patterns I’d been living with for years — not to fix me, but to help me see myself clearly again.",
    name: "S.J.",
    context: "1:1 coaching client",
  },
  {
    quote:
      "This felt like a true partnership. I stayed in the driver’s seat, but I finally had someone who could witness, observe, and reflect without judgment. The clarity I gained changed how I set boundaries at work.",
    name: "R.M.",
    context: "12-week program",
  },
  {
    quote:
      "Every session left me with something practical — not just insight, but a next step I could actually take. I feel more aligned with who I am, not who I thought I had to be.",
    name: "K.A.",
    context: "1:1 coaching client",
  },
];

/** Paste your Google Business “Reviews” page URL. Leave empty to hide the Google footer link. */
export const GOOGLE_REVIEWS = {
  url: "",
  rating: null as number | null,
  count: null as number | null,
} as const;
