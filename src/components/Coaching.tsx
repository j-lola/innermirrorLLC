import { Reveal, RevealGroup } from "./Reveal";
import { motion } from "motion/react";
import { Container, Eyebrow, Serif } from "./ui";
import { revealItemVariants } from "../lib/motion";

const offerings = [
  {
    title: "Discovery Call",
    description: "An initial conversation to take stock, make you feel comfortable, and see if we are a good fit to work together.",
    features: [
      "20 minutes via video call",
      "Space to share where you are right now",
      "Clarity on what working together could look like",
      "No commitment",
    ],
    price: "Free",
    priceDetail: null,
    featured: false,
  },
  {
    title: "1:1 Session",
    description: "For when you want focused support at your own pace — one session, your agenda, no program required.",
    features: ["60-minute session, virtual", "A safe, supportive coaching space", "Paced to your season of life", "No ongoing commitment"],
    price: "$100",
    priceDetail: "/ session",
    featured: true,
  },
  {
    title: "12-Week Program",
    description: "A structured journey from self-doubt back to self-recognition — three deliberate phases over twelve weeks.",
    features: [
      "12 individual sessions (60 min)",
      "Phase 1 — Unlearn: naming the roles you've outgrown",
      "Phase 2 — Return: reconnecting with what's true",
      "Phase 3 — Reveal: practicing her, out loud",
    ],
    price: "$1,100",
    priceDetail: "/ program",
    featured: false,
  },
] as const;

const approach = [
  {
    title: "A true partnership",
    body: "This is a collaborative coaching relationship—we move forward together.",
  },
  {
    title: "I’m your co-pilot",
    body: "You stay in the driver’s seat; I support your direction, decisions, and momentum.",
  },
  {
    title: "Witness · Observe · Reflect",
    body: "I’m here to listen deeply and reflect what I’m noticing, so you can clarify your thinking and see yourself more clearly.",
  },
  {
    title: "A safe, judgment-free space",
    body: "Bring your real thoughts—no assumptions, no shame, no pressure—just honest exploration and growth.",
  },
] as const;

function DiamondIcon() {
  return (
    <span className="mt-1 shrink-0 text-[10px] text-gold" aria-hidden="true">
      ✦
    </span>
  );
}

export function Coaching() {
  return (
    <section id="coaching" className="bg-cream py-28 md:py-36">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Coaching</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-[12ch] font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.05] tracking-tight text-forest">
                My Coaching <Serif>Approach.</Serif>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[44ch] text-[16.5px] leading-relaxed text-forest/75">
                It&apos;s a human-first, collaborative partnership that sees you as whole and honors you as the expert on your own life.
                Together, we create a safe, judgment-free space where you can drop your armor and return to yourself.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
            {approach.map((item) => (
              <motion.div key={item.title} variants={revealItemVariants}>
                <span className="mb-4 block h-px w-7 bg-gold" aria-hidden="true" />
                <h3 className="font-serif text-[1.28rem] leading-snug text-forest">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-forest/75">{item.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {offerings.map((offering) => (
            <motion.div
              key={offering.title}
              variants={revealItemVariants}
              className={`relative flex flex-col gap-6 rounded-[20px] border p-9 shadow-[0_20px_50px_-24px_rgba(44,52,42,0.1)] transition-shadow duration-300 hover:shadow-[0_28px_60px_-24px_rgba(44,52,42,0.14)] md:p-10 ${
                offering.featured ? "border-gold/45 bg-bone" : "border-cream bg-white"
              }`}
            >
              <span className="absolute inset-x-10 top-0 h-0.5 rounded-full bg-gold/80" aria-hidden="true" />

              {offering.featured ? (
                <span className="absolute right-6 top-6 rounded-full bg-sage px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.08em] text-bone">
                  Popular
                </span>
              ) : null}

              <div className={offering.featured ? "pr-16" : undefined}>
                <h3 className="font-serif text-[clamp(1.55rem,2.6vw,1.8rem)] leading-tight text-forest">{offering.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{offering.description}</p>
              </div>

              <ul className="flex flex-col gap-3 text-[14.5px] text-forest/85">
                {offering.features.map((item) => (
                  <li key={item} className="flex gap-3">
                    <DiamondIcon />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-cream pt-6">
                <p className="font-serif text-[clamp(1.75rem,3vw,2rem)] leading-none text-gold">
                  {offering.price}
                  {offering.priceDetail ? (
                    <span className="ml-1 font-sans text-[14px] font-normal text-stone">{offering.priceDetail}</span>
                  ) : null}
                </p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
