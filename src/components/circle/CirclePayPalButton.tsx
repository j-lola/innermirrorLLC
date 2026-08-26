import { useEffect, useRef, useState } from "react";
import {
  PAYPAL_HOSTED_BUTTON_ID,
  PAYPAL_SDK_URL,
  isCirclePaypalReady,
} from "../../lib/circle-payment";

const CONTAINER_ID = "paypal-circle-membership";

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: { hostedButtonId: string }) => {
        render: (selector: string) => Promise<void>;
      };
    };
  }
}

function loadPayPalSdk(): Promise<void> {
  if (window.paypal) return Promise.resolve();

  const existing = document.getElementById("paypal-sdk-circle");
  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.paypal) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("PayPal SDK failed to load")), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = "paypal-sdk-circle";
    script.src = PAYPAL_SDK_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("PayPal SDK failed to load"));
    document.body.appendChild(script);
  });
}

export function CirclePayPalButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!isCirclePaypalReady) {
      setStatus("error");
      return;
    }

    let cancelled = false;

    async function init() {
      try {
        await loadPayPalSdk();
        if (cancelled || !containerRef.current || !window.paypal) return;

        await window.paypal.HostedButtons({
          hostedButtonId: PAYPAL_HOSTED_BUTTON_ID,
        }).render(`#${CONTAINER_ID}`);

        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!isCirclePaypalReady) {
    return null;
  }

  return (
    <div className="mt-2">
      <div id={CONTAINER_ID} ref={containerRef} className="paypal-circle-button" />
      {status === "loading" && (
        <p className="mt-2 text-[13px] text-circle-ivory/65">Loading payment options…</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-[13px] text-circle-mauve">
          Payment could not load. Refresh the page and try again.
        </p>
      )}
    </div>
  );
}
