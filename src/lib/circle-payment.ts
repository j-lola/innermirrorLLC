/** PayPal JS SDK client ID (public — safe in frontend). Override via VITE_PAYPAL_CLIENT_ID. */
export const PAYPAL_CLIENT_ID =
  import.meta.env.VITE_PAYPAL_CLIENT_ID ??
  "BAAJS-QVmIMlmVu5gReSowBcT5sKJc32LvDDTIb9WgWPQ3rpLSMCkkz-AIdsfDmg4uuCFeF2ZObMwpfOD8";

/** Hosted button ID from PayPal dashboard. Override via VITE_PAYPAL_HOSTED_BUTTON_ID. */
export const PAYPAL_HOSTED_BUTTON_ID =
  import.meta.env.VITE_PAYPAL_HOSTED_BUTTON_ID ?? "X3AHSBR7NJ86U";

/** Optional display price, e.g. "$199". */
export const CIRCLE_MEMBERSHIP_PRICE = import.meta.env.VITE_CIRCLE_MEMBERSHIP_PRICE ?? "";

export const isCirclePaypalReady = Boolean(PAYPAL_CLIENT_ID && PAYPAL_HOSTED_BUTTON_ID);

/** Set this as the PayPal button return URL after payment. */
export const CIRCLE_PAYPAL_RETURN_PATH = "/circle?paid=1#join";

export const PAYPAL_SDK_URL = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
  PAYPAL_CLIENT_ID,
)}&components=hosted-buttons&enable-funding=venmo&currency=USD`;
