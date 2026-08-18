import { Reveal } from "./Reveal";
import { Container, Serif } from "./ui";

export function Why() {
  return (
    <section id="why" className="bg-sage py-28 text-bone md:py-36">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-5 bg-gold" aria-hidden="true" />
            Philosophy
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[20ch] font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.05] tracking-tight">
            Why Inner Mirror <Serif>Coaching?</Serif>
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-12 max-w-[680px]">
          <p className="font-serif text-[26px] italic leading-snug text-bone md:text-[30px]">
            Transformation doesn&apos;t happen by attempting to fix external symptoms; it begins
            when you gain clarity on what is happening within.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="my-9 h-px w-14 bg-gold" />

        <Reveal delay={0.2} className="max-w-[600px]">
          <p className="text-[16.5px] leading-relaxed text-bone/80">
            At Inner Mirror Coaching, we believe that your external life, your relationships,
            career, stress levels, and boundaries, are direct reflections of your internal
            state. Our practice provides a transformative, safe space to look beyond
            surface-level habits and uncover the underlying patterns shaping your daily reality.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
