import type { ReactNode } from "react";
import { useEffect } from "react";
import { CircleNav } from "../components/circle/CircleNav";
import { Container } from "../components/ui";
import { Reveal } from "../components/Reveal";
import { applySeo } from "../lib/seo";

function CircleEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-circle-mauve">
      <span className="h-px w-5 bg-circle-gold" aria-hidden="true" />
      {children}
    </div>
  );
}

export function CirclePage() {
  useEffect(() => {
    applySeo({
      title: "The Inner Mirror Circle | Inner Mirror Coaching",
      description:
        "A community for women 25–50 to feel seen, supported, and safe enough to grow. Real women, real connection — The Inner Mirror Circle.",
      path: "/circle",
    });
  }, []);

  return (
    <div className="circle-theme min-h-screen">
      <CircleNav />

      <main className="py-28 md:py-36">
        <Container>
          <Reveal>
            <CircleEyebrow>Community</CircleEyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-[16ch] font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.05] tracking-tight text-circle-plum">
              The Inner Mirror Circle
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 max-w-[540px] font-serif text-[clamp(1.25rem,2.5vw,1.6rem)] italic leading-snug text-circle-mauve">
              Real Women, Real Connection
            </p>
          </Reveal>

          <div className="mt-16 max-w-[640px] space-y-14">
            <Reveal delay={0.1}>
              <section>
                <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-circle-gold">
                  Who we serve
                </h2>
                <p className="mt-4 text-[16.5px] leading-relaxed text-circle-plum/80">
                  Inner Mirror Circle holds a special home for women between the ages of 25 and 50. It is a
                  community-first practice — a circle where women feel seen, supported, and safe enough to grow.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.14}>
              <section>
                <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-circle-gold">
                  The Promise
                </h2>
                <p className="mt-4 text-[16.5px] leading-relaxed text-circle-plum/80">
                  You are in the right place. A safe space to reflect, reconnect, and become.
                </p>
              </section>
            </Reveal>
          </div>
        </Container>
      </main>
    </div>
  );
}
