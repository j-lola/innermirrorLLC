import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { bookSummary } from "../content/book-summary";

type BookSummaryModalProps = {
  open: boolean;
  onClose: () => void;
};

export function BookSummaryModal({ open, onClose }: BookSummaryModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[120] flex items-end justify-center p-4 sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Close summary"
            className="absolute inset-0 bg-forest/55 backdrop-blur-[2px]"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[min(88vh,820px)] w-full max-w-[680px] flex-col overflow-hidden rounded-[24px] border border-ink/10 bg-[#f7f2e8] shadow-[0_40px_100px_-30px_rgba(42,51,35,0.55)]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative border-b border-ink/10 px-6 py-5 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">Summary</p>
                  <h2 id={titleId} className="mt-2 font-serif text-[clamp(1.75rem,4vw,2.35rem)] leading-[1.05] text-ink">
                    {bookSummary.title}
                  </h2>
                  <p className="mt-1 font-serif text-[15px] italic text-ink/60">{bookSummary.subtitle}</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-cream/70 font-display text-lg leading-none text-ink/70 transition-colors duration-200 hover:border-ink/20 hover:bg-cream hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>

            <div className="relative overflow-y-auto px-6 py-7 sm:px-10 sm:py-9">
              <article className="mx-auto max-w-[34rem] space-y-6">
                {bookSummary.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="book-prose-body font-serif text-[17px] leading-[1.9] text-ink/78">
                    {paragraph}
                  </p>
                ))}

                <p className="mt-4 border-t border-ink/10 pt-8 text-center font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                  {bookSummary.author}
                </p>
              </article>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
