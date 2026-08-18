import { Reveal, RevealGroup } from "./Reveal";
import { motion } from "motion/react";
import { Container, Serif } from "./ui";
import { Button } from "./Button";
import { revealItemVariants } from "../lib/motion";

const benefits = [
  "3 in-person Circle gatherings per year",
  "Guided reflection practices + prompts",
  "Community connection + supportive discussion",
  "Integration steps you can take into real life between gatherings",
  "Priority access to future offerings and special community moments",
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
          <div className="mt-5 max-w-[58ch] space-y-4 text-[16.5px] leading-relaxed text-bone/80">
            <p>The Inner Mirror Circle is an in-person community created for women ages 25–50, and open to any woman who feels called to join.</p>
            <p>
              This is a space for guided reflection, meaningful connection, and aligned action—so you can keep building a
              life that feels like yours, without losing yourself in the process.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 rounded-[28px] border border-bone/15 bg-bone/[0.06] p-9 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:p-14">
          <Reveal delay={0.1}>
            <p className="max-w-[42ch] text-[15.5px] leading-relaxed text-bone/80">
              The Inner Mirror Circle is a paid yearly subscription membership.
            </p>
            <h3 className="mt-8 font-display text-[22px] font-semibold">Your membership includes</h3>
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
              Join the Inner Mirror Circle
            </div>
            <div className="my-3 font-display text-[26px] font-semibold leading-snug text-bone">Pricing revealed at launch</div>
            <div className="mb-7 text-[12.5px] text-bone/60">billed yearly · founding cohort · Aug 2026</div>
            <Button href="/circle" variant="primary" className="w-full">
              Join the community
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
