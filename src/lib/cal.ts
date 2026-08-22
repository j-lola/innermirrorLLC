export const CAL_USERNAME = "innermirrorcoaching";

export const CAL_EVENTS = {
  discovery: "discovery-session",
  session: "coaching",
} as const;

export type CalEventKey = keyof typeof CAL_EVENTS;

export type BookingType = CalEventKey;

export function getCalLinkForBooking(type: BookingType): string {
  return `${CAL_USERNAME}/${CAL_EVENTS[type]}`;
}

export function getCalLink(event: CalEventKey): string {
  return `${CAL_USERNAME}/${CAL_EVENTS[event]}`;
}
