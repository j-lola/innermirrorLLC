import type { BookingType } from "./cal";

export const BOOKING_DETAILS: Record<
  BookingType,
  {
    label: string;
    price: string;
    intro: string;
    panelTitle: string;
    panelDescription: string;
    steps: string[];
  }
> = {
  discovery: {
    label: "Book a free discovery call",
    price: "",
    intro: "A 20-minute discovery call; no pitch, just a conversation to see if this is the right season to begin.",
    panelTitle: "What to expect",
    panelDescription:
      "Free, unhurried, and pressure-free. You'll leave knowing exactly what working together would look like.",
    steps: [
      "Share a little about where you are right now",
      "Ask anything about 1:1 coaching or working together",
      "Decide together if it's a fit — no obligation either way",
    ],
  },
  session: {
    label: "Book a coaching session",
    price: "",
    intro: "A full 60-minute coaching session — your agenda, your pace, no program required.",
    panelTitle: "Your session",
    panelDescription: "Focused time just for you. Come with what's on your heart; leave with clarity and next steps.",
    steps: [
      "60 minutes via video call — a private, supportive space",
      "Bring one topic or simply where you are right now",
      "Leave with insight, grounding, and practical next steps",
    ],
  },
};

const BOOKING_TYPES: BookingType[] = ["discovery", "session"];

export function parseBookingType(value: string | null): BookingType {
  return value === "session" ? "session" : "discovery";
}

export function bookingHref(type: BookingType): string {
  if (type === "discovery") return "#bookings";
  return "/?booking=session#bookings";
}

export { BOOKING_TYPES };
export type { BookingType } from "./cal";
