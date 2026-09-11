import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Container } from "./ui";
import { Logo } from "./Logo";

const links = [
  { to: "/about", label: "About" },
  { to: "/#coaching", label: "Coaching" },
  { to: "/#book", label: "Book" },
  { to: "/circle", label: "Circle" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream bg-bone">
      <Container>
        <nav className="flex items-center gap-3 py-2 sm:gap-4 md:py-3.5">
          <Link
            to="/"
            className="shrink-0 transition-opacity duration-200 hover:opacity-85"
            aria-label="Inner Mirror home"
          >
            <Logo className="h-16 w-auto sm:h-[5.5rem] md:h-28 lg:h-[7.5rem]" />
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-6 text-[13.5px] text-stone md:flex lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors duration-200 hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              to="/discovery"
              className="rounded-full bg-gold px-4 py-2.5 font-sans text-[12.5px] font-semibold text-bone transition-transform duration-200 hover:-translate-y-0.5 sm:px-5 sm:text-[13px]"
            >
              <span className="sm:hidden">Book session</span>
              <span className="hidden sm:inline">Book a coaching session</span>
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors duration-200 hover:bg-cream md:hidden"
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
          </div>
        </nav>

        <motion.div
          initial={false}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden md:hidden"
        >
          <div className="flex flex-col gap-1 border-t border-cream py-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-stone transition-colors hover:bg-cream hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </Container>
    </header>
  );
}
