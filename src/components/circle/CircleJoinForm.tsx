import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import type { Value } from "react-phone-number-input";
import { isCircleEmailConfigured, sendCircleJoinRequest } from "../../lib/emailjs";
import {
  CIRCLE_MEMBERSHIP_PRICE,
  isCirclePaypalReady,
} from "../../lib/circle-payment";
import { CirclePayPalButton } from "./CirclePayPalButton";
import { CirclePhoneInput, isValidCirclePhone } from "./CirclePhoneInput";

type Status = "idle" | "submitting" | "success" | "error";

const SUCCESS_AUTO_CLOSE_MS = 4500;

const fieldClass =
  "mt-2 w-full rounded-xl border border-circle-ivory/20 bg-circle-ivory/[0.08] px-4 py-3 font-sans text-[15px] text-circle-ivory caret-circle-gold outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-circle-ivory/40 focus:border-circle-gold/70 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.22)] disabled:opacity-60";

const labelClass = "block text-[12px] font-semibold uppercase tracking-[0.12em] text-circle-gold";

const actionClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-circle-gold px-8 py-4 font-sans text-sm font-semibold tracking-tight text-circle-plum transition-[transform,box-shadow,opacity] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(201,168,76,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-circle-gold active:translate-y-0 disabled:pointer-events-none disabled:opacity-70";

export function CircleJoinForm() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [phone, setPhone] = useState<Value>();
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const returnedFromPaypal = searchParams.get("paid") === "1";

  useEffect(() => {
    if (status !== "success") return;

    const timer = window.setTimeout(() => setStatus("idle"), SUCCESS_AUTO_CLOSE_MS);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.website instanceof HTMLInputElement && form.website.value) {
      setStatus("success");
      return;
    }

    const nameInput = form.elements.namedItem("name");
    const emailInput = form.elements.namedItem("email");

    if (!(nameInput instanceof HTMLInputElement) || !(emailInput instanceof HTMLInputElement)) {
      setStatus("error");
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) return;

    if (!isValidCirclePhone(phone)) {
      setPhoneInvalid(true);
      return;
    }

    setPhoneInvalid(false);
    setStatus("submitting");

    try {
      if (!isCircleEmailConfigured()) {
        throw new Error("EmailJS is not configured");
      }

      await sendCircleJoinRequest({ name, email, phone: phone as string });
      form.reset();
      setPhone(undefined);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-circle-gold">
          Thank you
        </p>
        <p className="mt-3 font-serif text-[2rem] leading-tight">Registration received.</p>
        <p className="mt-4 text-[15.5px] leading-relaxed text-circle-ivory/80">
          We’ll confirm your membership within 1–2 business days and follow up with Circle details.
        </p>
      </div>
    );
  }

  const priceLine = CIRCLE_MEMBERSHIP_PRICE
    ? `${CIRCLE_MEMBERSHIP_PRICE} / year`
    : "Yearly membership";

  return (
    <div>
      <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-circle-gold">
        Join the Inner Mirror Circle
      </p>
      <p className="mt-3 font-serif text-[2rem] leading-tight">{priceLine}</p>
      <p className="mt-3 text-[13px] text-circle-ivory/70">founding cohort · billed yearly</p>

      {returnedFromPaypal && (
        <p
          role="status"
          className="mt-6 rounded-xl border border-circle-gold/35 bg-circle-gold/10 px-4 py-3 text-[14px] leading-relaxed text-circle-ivory"
        >
          Thank you for your payment. Complete registration below using the same email you used on PayPal.
        </p>
      )}

      <div className="mt-8">
        <p className={labelClass}>Step 1 — Pay membership</p>
        {isCirclePaypalReady ? (
          <CirclePayPalButton />
        ) : (
          <button type="button" disabled className={`${actionClass} mt-2`}>
            Pay membership
          </button>
        )}
        <p className="mt-3 text-[13.5px] leading-relaxed text-circle-ivory/70">
          Complete payment with PayPal, then return here to register.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 border-t border-circle-ivory/15 pt-8">
        <p className={labelClass}>Step 2 — Complete registration</p>
        <p className="mt-2 text-[13.5px] leading-relaxed text-circle-ivory/70">
          After paying, submit your details so we can confirm your membership.
        </p>

        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="circle-website">Website</label>
          <input id="circle-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="mt-6 flex flex-col gap-5">
          <div>
            <label htmlFor="circle-name" className={labelClass}>
              Full name
            </label>
            <input
              id="circle-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your name"
              className={fieldClass}
              disabled={status === "submitting"}
            />
          </div>

          <div>
            <label htmlFor="circle-email" className={labelClass}>
              Email
            </label>
            <input
              id="circle-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Same email used on PayPal"
              className={fieldClass}
              disabled={status === "submitting"}
            />
          </div>

          <div>
            <label htmlFor="circle-phone" className={labelClass}>
              Phone number
            </label>
            <CirclePhoneInput
              id="circle-phone"
              value={phone}
              onChange={(value) => {
                setPhone(value);
                if (phoneInvalid) setPhoneInvalid(false);
              }}
              disabled={status === "submitting"}
              required
              invalid={phoneInvalid}
            />
            {phoneInvalid && (
              <p className="mt-2 text-[13px] text-circle-mauve">Enter a valid phone number using digits only.</p>
            )}
          </div>
        </div>

        {status === "error" && (
          <p role="alert" className="mt-4 text-[14px] text-circle-ivory">
            Something went wrong. Please try again, or email{" "}
            <a
              href="mailto:info@theinnermirrorcoaching.com"
              className="underline decoration-circle-gold underline-offset-4"
            >
              info@theinnermirrorcoaching.com
            </a>
            .
          </p>
        )}

        <button type="submit" disabled={status === "submitting"} className={`${actionClass} mt-7`}>
          {status === "submitting" ? "Sending…" : "Complete registration"}
        </button>
      </form>
    </div>
  );
}
