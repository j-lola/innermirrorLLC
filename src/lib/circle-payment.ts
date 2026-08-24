/** PayPal payment link — set VITE_CIRCLE_PAYPAL_URL in .env when ready. */
export const CIRCLE_PAYPAL_URL = import.meta.env.VITE_CIRCLE_PAYPAL_URL ?? "";

/** Optional display price, e.g. "$199". Set VITE_CIRCLE_MEMBERSHIP_PRICE when confirmed. */
export const CIRCLE_MEMBERSHIP_PRICE = import.meta.env.VITE_CIRCLE_MEMBERSHIP_PRICE ?? "";

export const isCirclePaypalReady = CIRCLE_PAYPAL_URL.startsWith("http");

export const CIRCLE_PAYPAL_RETURN_PATH = "/circle?paid=1#join";
