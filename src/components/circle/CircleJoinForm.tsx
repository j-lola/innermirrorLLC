import { useEffect, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const SUCCESS_AUTO_CLOSE_MS = 4500;

const fieldClass =
  "mt-2 w-full rounded-xl border border-circle-ivory/20 bg-circle-ivory/[0.08] px-4 py-3 font-sans text-[15px] text-circle-ivory caret-circle-gold outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-circle-ivory/40 focus:border-circle-gold/70 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.22)] disabled:opacity-60";

const labelClass = "block text-[12px] font-semibold uppercase tracking-[0.12em] text-circle-gold";

export function CircleJoinForm() {
  const [status, setStatus] = useState<Status>("idle");

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

    setStatus("submitting");

    // EmailJS will replace this submit handler. For now we collect the fields
    // and show a confirmation so the form is ready to wire.
    await new Promise((resolve) => setTimeout(resolve, 400));
    form.reset();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-circle-gold">
          Thank you
        </p>
        <p className="mt-3 font-serif text-[2rem] leading-tight">You’re on the list.</p>
        <p className="mt-4 text-[15.5px] leading-relaxed text-circle-ivory/80">
          We’ve received your details. We’ll be in touch with membership information for the Inner Mirror Circle.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-circle-gold">
        Join the Inner Mirror Circle
      </p>
      <p className="mt-3 font-serif text-[2rem] leading-tight">Pricing revealed at launch</p>
      <p className="mt-3 text-[13px] text-circle-ivory/70">billed yearly · founding cohort · Aug 2026</p>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="circle-website">Website</label>
        <input id="circle-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-col gap-5">
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
            placeholder="you@email.com"
            className={fieldClass}
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="circle-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="circle-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(404) 555-0100"
            className={fieldClass}
            disabled={status === "submitting"}
          />
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

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-circle-gold px-8 py-4 font-sans text-sm font-semibold tracking-tight text-circle-plum transition-[transform,box-shadow,opacity] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(201,168,76,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-circle-gold active:translate-y-0 disabled:pointer-events-none disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Join the community"}
      </button>
    </form>
  );
}
