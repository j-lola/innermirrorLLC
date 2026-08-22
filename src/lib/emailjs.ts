import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CIRCLE_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CIRCLE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export type CircleJoinPayload = {
  name: string;
  email: string;
  phone: string;
};

export function isCircleEmailConfigured() {
  return Boolean(SERVICE_ID && CIRCLE_TEMPLATE_ID && PUBLIC_KEY);
}

export async function sendCircleJoinRequest(payload: CircleJoinPayload) {
  if (!isCircleEmailConfigured()) {
    throw new Error("EmailJS environment variables are not configured.");
  }

  await emailjs.send(
    SERVICE_ID,
    CIRCLE_TEMPLATE_ID,
    {
      from_name: payload.name,
      from_email: payload.email,
      phone: payload.phone,
      reply_to: payload.email,
    },
    { publicKey: PUBLIC_KEY },
  );
}
