import { useSearchParams } from "react-router-dom";
import { CIRCLE_MEMBERSHIP_PRICE, isCirclePaypalReady } from "../../lib/circle-payment";
import { CirclePayPalButton } from "./CirclePayPalButton";

const labelClass = "block text-[12px] font-semibold uppercase tracking-[0.12em] text-circle-gold";

const actionClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-circle-gold px-8 py-4 font-sans text-sm font-semibold tracking-tight text-circle-plum transition-[transform,box-shadow,opacity] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(201,168,76,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-circle-gold active:translate-y-0 disabled:pointer-events-none disabled:opacity-70";

export function CircleJoinForm() {
  const [searchParams] = useSearchParams();
  const returnedFromPaypal = searchParams.get("paid") === "1";

  const priceLine = CIRCLE_MEMBERSHIP_PRICE
    ? `${CIRCLE_MEMBERSHIP_PRICE} / year`
    : "Yearly membership";

  return (
    <div>
      <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-circle-gold">
        Join the Inner Mirror Circle
      </p>
      <p className="mt-3 font-serif text-[2rem] leading-tight">{priceLine}</p>
      <p className="mt-3 text-[13px] text-circle-ivory/70">founding cohort · billed yearly · October 2026</p>

      {returnedFromPaypal && (
        <p
          role="status"
          className="mt-6 rounded-xl border border-circle-gold/35 bg-circle-gold/10 px-4 py-3 text-[14px] leading-relaxed text-circle-ivory"
        >
          Thank you for your payment. We’ll confirm your membership within 1–2 business days and follow up at the
          email you used on PayPal.
        </p>
      )}

      <div className="mt-8">
        <p className={labelClass}>Pay membership</p>
        {isCirclePaypalReady ? (
          <CirclePayPalButton />
        ) : (
          <button type="button" disabled className={`${actionClass} mt-2`}>
            Pay membership
          </button>
        )}

        <div className="mt-5 rounded-xl border border-circle-ivory/15 bg-circle-ivory/[0.06] px-4 py-4 text-[14px] leading-relaxed text-circle-ivory/85">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-circle-gold">
            Before you pay
          </p>
          <p className="mt-2">
            In PayPal, include your <strong className="font-semibold text-circle-ivory">full name</strong>,{" "}
            <strong className="font-semibold text-circle-ivory">email</strong>, and{" "}
            <strong className="font-semibold text-circle-ivory">phone number</strong> in the note or message field
            so we can match your payment and send Circle details.
          </p>
          <p className="mt-3 text-[13px] text-circle-ivory/70">
            Questions? Email{" "}
            <a
              href="mailto:info@theinnermirrorcoaching.com"
              className="text-circle-ivory underline decoration-circle-gold underline-offset-4"
            >
              info@theinnermirrorcoaching.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
