import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { CircleJoinForm } from "../components/circle/CircleJoinForm";
import { CircleNav } from "../components/circle/CircleNav";
import { Container } from "../components/ui";
import { Footer } from "../components/Footer";
import { Reveal, RevealGroup } from "../components/Reveal";
import { applySeo, CIRCLE_SEO } from "../lib/seo";
import { revealItemVariants } from "../lib/motion";
import {
  CIRCLE_FAQS,
  CIRCLE_FIT,
  CIRCLE_INCLUDES,
  CIRCLE_INTRO,
  CIRCLE_SEASONS,
} from "../content/circle";

function GoldDot() {
  return (
    <svg viewBox="0 0 8 8" className="mt-1.5 h-2 w-2 shrink-0 text-circle-gold" aria-hidden="true">
      <circle cx="4" cy="4" r="3.25" fill="currentColor" />
    </svg>
  );
}

export function CirclePage() {
  const { hash } = useLocation();

  useEffect(() => {
    applySeo(CIRCLE_SEO);
  }, []);

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

  return (
    <div className="circle-theme min-h-screen">
      <CircleNav />

      <main>
        <section className="overflow-hidden pb-20 pt-12 md:pb-28 md:pt-16">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
              <div>
                <Reveal>
                  <h1 className="max-w-[18ch] font-serif text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.06] tracking-tight text-circle-plum">
                    The Inner Mirror Circle — A Community for People Ready to Change the Pattern
                  </h1>
                </Reveal>
                <Reveal delay={0.06}>
                  <p className="mt-5 font-serif text-[clamp(1.25rem,2.4vw,1.65rem)] italic leading-snug text-circle-mauve">
                    Real Women, Real Connection
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-7 max-w-[52ch] space-y-4 text-[16.5px] leading-relaxed text-circle-plum/80">
                    {CIRCLE_INTRO.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="mt-9">
                    <a
                      href="#join"
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-circle-gold px-8 py-4 font-sans text-sm font-semibold tracking-tight text-circle-plum transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(109,59,71,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-circle-gold"
                    >
                      Join and subscribe
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.08} className="relative">
                <div className="relative overflow-hidden rounded-[28px] shadow-[0_32px_70px_-30px_rgba(109,59,71,0.28)] ring-1 ring-circle-plum/10">
                  <img
                    src="/circle-hero.webp"
                    alt="Women gathered together around a table, talking and building something as a group"
                    className="aspect-[4/5] w-full object-cover object-[center_78%] md:aspect-[5/6]"
                    width={1200}
                    height={1440}
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-circle-plum/55 via-circle-plum/18 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="border-t border-circle-plum/10 py-20 md:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
              <Reveal>
                <h2 className="font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] font-medium leading-tight tracking-tight text-circle-plum">
                  When we meet
                </h2>
                <p className="mt-4 max-w-[42ch] text-[16.5px] leading-relaxed text-circle-plum/80">
                  We gather <span className="font-medium text-circle-plum">three times a year</span>. Dates and location
                  details are shared with members after joining.
                </p>
              </Reveal>

              <div>
                <p className="font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-circle-gold">
                  Typical rhythm
                </p>
                <RevealGroup className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
                  {CIRCLE_SEASONS.map((season) => (
                    <motion.div key={season} variants={revealItemVariants}>
                      <span className="mb-4 block h-px w-8 bg-circle-gold" aria-hidden="true" />
                      <p className="font-serif text-[1.45rem] leading-snug text-circle-plum">{season}</p>
                    </motion.div>
                  ))}
                </RevealGroup>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-circle-plum py-20 text-circle-ivory md:py-28">
          <Container>
            <Reveal>
              <h2 className="font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] font-medium leading-tight tracking-tight">
                Who it’s for
              </h2>
              <p className="mt-4 max-w-[46ch] text-[16.5px] leading-relaxed text-circle-ivory/80">
                This community may be a fit if you’re ready for:
              </p>
            </Reveal>
            <RevealGroup className="mt-12 grid grid-cols-1 gap-x-12 gap-y-9 sm:grid-cols-2">
              {CIRCLE_FIT.map((item) => (
                <motion.div key={item} variants={revealItemVariants}>
                  <span className="mb-4 block h-px w-7 bg-circle-gold" aria-hidden="true" />
                  <p className="max-w-[32ch] font-serif text-[1.35rem] leading-snug">{item}</p>
                </motion.div>
              ))}
            </RevealGroup>
          </Container>
        </section>

        <section className="py-20 md:py-28">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
              <div>
                <Reveal>
                  <h2 className="font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] font-medium leading-tight tracking-tight text-circle-plum">
                    Your membership includes
                  </h2>
                  <p className="mt-4 max-w-[44ch] text-[16.5px] leading-relaxed text-circle-plum/80">
                    The Inner Mirror Circle is a paid yearly subscription membership.
                  </p>
                </Reveal>
                <RevealGroup as="ul" className="mt-10 flex flex-col gap-4">
                  {CIRCLE_INCLUDES.map((item) => (
                    <motion.li
                      key={item}
                      variants={revealItemVariants}
                      className="flex gap-3.5 text-[16px] leading-relaxed text-circle-plum/90"
                    >
                      <GoldDot />
                      {item}
                    </motion.li>
                  ))}
                </RevealGroup>
              </div>

              <Reveal
                id="join"
                className="scroll-mt-32 rounded-[24px] border border-circle-gold/40 bg-circle-plum p-9 text-circle-ivory md:p-11"
              >
                <CircleJoinForm />
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="border-t border-circle-plum/10 py-20 md:py-28">
          <Container>
            <Reveal>
              <h2 className="font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] font-medium leading-tight tracking-tight text-circle-plum">
                FAQ
              </h2>
            </Reveal>
            <dl className="mt-12 max-w-[720px] divide-y divide-circle-plum/10">
              {CIRCLE_FAQS.map((item) => (
                <Reveal key={item.q} className="py-7 first:pt-0">
                  <dt className="font-serif text-[1.35rem] leading-snug text-circle-plum">{item.q}</dt>
                  <dd className="mt-3 text-[16px] leading-relaxed text-circle-plum/80">{item.a}</dd>
                </Reveal>
              ))}
            </dl>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
