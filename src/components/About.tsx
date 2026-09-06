import { Reveal } from "./Reveal";
import { Container, Eyebrow, Serif } from "./ui";

const stats = [
  { value: "1:1", label: "Private sessions" },
  { value: "12wk", label: "Program" },
  { value: "Oct '26", label: "Circle opens" },
];

export function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow>About me</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[24ch] font-display text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-tight">
            Meet Your Coach — Dr. Jejelola Owotomo
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-[28ch] font-serif text-[clamp(1.35rem,2.4vw,1.75rem)] italic leading-snug text-ink/80">
            I didn&apos;t find my reflection. <Serif>I built it.</Serif>
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <Reveal
            delay={0.1}
            className="relative h-full min-h-[420px] overflow-hidden rounded-[28px] shadow-[0_32px_70px_-30px_rgba(44,52,42,0.1)] ring-1 ring-cream"
          >
            <img
              src="/me.jpeg"
              alt="Dr. Jejelola Owotomo, life coach and founder of Inner Mirror"
              className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
              loading="lazy"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/88 via-forest/30 to-transparent"
            />
            <div className="relative flex h-full min-h-[420px] items-end p-10">
              <p className="font-serif text-[26px] italic leading-snug text-bone">
                &ldquo;Not fixing you.
                <br />
                Returning you to yourself.&rdquo;
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="flex flex-col justify-center gap-7">
            <p className="text-[16.5px] leading-relaxed text-ink/70">
              I&apos;m Dr. Jejelola Owotomo — a PhD in Public Health (Epidemiology), certified life coach, author of{" "}
              <span className="italic">Return To Baseline: A Guide Back To Yourself</span>, and The Inner Mirror Circle.
            </p>
            <p className="text-[16.5px] leading-relaxed text-ink/70">
              Clarity changes everything, and you don’t have to find it alone. I will partner with you as a coach and co‑pilot—supporting
              your wellness and burnout recovery through reflective, forward‑focused coaching that helps you break repeating patterns so you
              can move with confidence and live in authentic alignment.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-5 border-y border-ink/10 py-6">
              {stats.map((s, i) => (
                <div key={s.label} className={`flex items-baseline gap-2 ${i > 0 ? "border-l border-ink/10 pl-8" : ""}`}>
                  <span className="font-display text-2xl font-semibold text-gold">{s.value}</span>
                  <span className="text-[13px] text-stone">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
