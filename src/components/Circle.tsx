import { Reveal, RevealGroup } from "./Reveal";
import { motion } from "motion/react";
import { Container, Serif } from "./ui";
import { Button } from "./Button";
import { revealItemVariants } from "../lib/motion";
import { handleAnchorClick } from "../lib/scroll";

const benefits = [
  "Quarterly live circles with your coach and the community",
  "A private space for reflection.",
  "Founding-member pricing, locked for as long as you stay",
];

export function Circle() {
  return (
    <section id="circle" className="bg-sage py-28 text-bone md:py-36">
      <Container>
        <Reveal>
          <div className="mb-5 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-5 bg-gold" aria-hidden="true" />
            Community
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[20ch] font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.05] tracking-tight">
            The Inner Mirror <Serif>Circle.</Serif>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-[540px] text-[16.5px] text-bone/75">
            A yearly membership for women to hold a safe circle and connection.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 rounded-[28px] border border-bone/15 bg-bone/[0.06] p-9 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:p-14">
          <Reveal delay={0.1}>
            <h3 className="font-display text-[22px] font-semibold">What membership holds</h3>
            <RevealGroup as="ul" className="mt-7 flex flex-col gap-4">
              {benefits.map((b) => (
                <motion.li key={b} variants={revealItemVariants} className="flex gap-3.5 text-[15px] text-bone/90">
                  <span className="mt-1 shrink-0 text-[13px] text-gold" aria-hidden="true">
                    ✦
                  </span>
                  {b}
                </motion.li>
              ))}
            </RevealGroup>
          </Reveal>

          <Reveal delay={0.16} className="rounded-[20px] border border-gold/35 bg-forest/20 p-9 text-center">
            <div className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              Annual membership
            </div>
            <div className="my-3 font-display text-[26px] font-semibold text-bone">Pricing revealed at launch</div>
            <div className="mb-7 text-[12.5px] text-bone/60">billed yearly · founding cohort · Aug 2026</div>
            <Button href="#bookings" onClick={handleAnchorClick} variant="primary" className="w-full">
              Join the waitlist
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
