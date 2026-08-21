import { useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { Container } from "./ui";
import { Button } from "./Button";
import { NoticeMark } from "./NoticeMark";
import { handleAnchorClick } from "../lib/scroll";

const disclaimer = "Coaching is not therapy/medical advice; results vary; seek appropriate professional help when needed.";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [hoverFine] = useState(() => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  const canTilt = hoverFine && !shouldReduceMotion;
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 55, damping: 22, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 22, mass: 0.6 });

  const glowX = useTransform(springX, [0, 1], ["30%", "70%"]);
  const glowY = useTransform(springY, [0, 1], ["20%", "55%"]);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    if (!canTilt || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative overflow-hidden bg-bone pb-0 pt-40 text-forest md:pt-48 lg:pt-52"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-24 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) => `radial-gradient(520px circle at ${x} ${y}, rgba(169,130,68,0.1), rgba(102,112,86,0.06) 42%, transparent 70%)`,
          ),
        }}
      />

      <Container className="relative z-10">
        <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-cream bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone shadow-[0_8px_24px_-16px_rgba(44,52,42,0.1)] backdrop-blur-sm">
          <span className="relative flex h-[7px] w-[7px]">
            <motion.span
              className="absolute inset-0 rounded-full bg-gold"
              animate={shouldReduceMotion ? {} : { opacity: [0.9, 0.35, 0.9] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          Doors open · August 2026
        </div>

        <h1 className="mb-8 max-w-[22ch] font-serif text-[clamp(2.75rem,7.2vw,6rem)] font-medium leading-[1.02] tracking-tight">
          Find Your Inner <span className="italic text-gold">Self.</span>
        </h1>

        <p className="mb-11 max-w-[440px] text-lg leading-relaxed text-stone">
          A safe space for self-discovery — helping you see yourself clearly in the inner mirror and reconnect with who you truly are.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Button href="#bookings" onClick={handleAnchorClick} variant="primary">
            Book a discovery call
          </Button>
          <Button href="#about" onClick={handleAnchorClick} variant="outline-dark">
            Meet your coach
          </Button>
        </div>
      </Container>

      <div className="relative z-10 mt-20 overflow-hidden border-t border-cream md:mt-24">
        <div className="marquee-track flex w-max items-center gap-12 py-6">
          {[disclaimer, disclaimer, disclaimer, disclaimer].map((text, i) => (
            <span key={i} className="flex items-center gap-3 font-display text-[13px] uppercase tracking-[0.1em] text-stone">
              <NoticeMark />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
