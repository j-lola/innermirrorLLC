import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Container } from "./ui";
import { Logo } from "./Logo";

const links = [
  { to: "/#about", label: "About" },
  { to: "/#coaching", label: "Coaching" },
  { to: "/#book", label: "Book" },
  { to: "/circle", label: "Circle" },
] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <Container className="!px-0">
        <nav
          className={`flex items-center justify-between rounded-full border py-2.5 pl-4 pr-3 transition-all duration-300 ease-out ${
            scrolled
              ? "border-cream bg-bone/95 shadow-[0_12px_40px_-20px_rgba(44,52,42,0.12)]"
              : "border-cream/80 bg-bone/85 backdrop-blur-md"
          }`}
        >
          <Link to="/" className="transition-opacity duration-200 hover:opacity-80">
            <Logo className="h-12 w-auto md:h-14" />
          </Link>

          <div className="hidden items-center gap-8 text-[13.5px] text-stone md:flex">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors duration-200 hover:text-forest">
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/#bookings"
            className="hidden rounded-full bg-gold px-5 py-2.5 font-sans text-[13px] font-semibold text-bone transition-transform duration-200 hover:-translate-y-0.5 md:inline-block"
          >
            Book a coaching session
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-forest md:hidden"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <motion.path
                d="M1 1H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                animate={{ rotate: open ? 45 : 0, translateY: open ? 6 : 0 }}
                style={{ originX: "9px", originY: "1px" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
              <motion.path
                d="M1 7H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.path
                d="M1 13H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                animate={{ rotate: open ? -45 : 0, translateY: open ? -6 : 0 }}
                style={{ originX: "9px", originY: "13px" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </svg>
          </button>
        </nav>

        <motion.div
          initial={false}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden md:hidden"
        >
          <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-cream bg-bone p-4 shadow-[0_16px_40px_-20px_rgba(44,52,42,0.1)]">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-stone transition-colors hover:bg-cream hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#bookings"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-4 py-3 text-center font-sans text-sm font-semibold text-bone"
            >
              Book a coaching session
            </Link>
          </div>
        </motion.div>
      </Container>
    </header>
  );
}
