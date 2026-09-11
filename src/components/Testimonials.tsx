import { useState } from "react";
import { Reveal } from "./Reveal";
import { Container, Serif } from "./ui";
import { GOOGLE_REVIEWS, TESTIMONIALS, type Testimonial } from "../content/testimonials";

const READ_MORE_MIN_CHARS = 220;

function StarRating({ rating }: { rating: number }) {
  const rounded = Math.round(Math.min(5, Math.max(0, rating)) * 2) / 2;
  const fullStars = Math.floor(rounded);
  const hasHalf = rounded - fullStars >= 0.5;

  return (
    <span className="inline-flex gap-0.5 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => {
        if (i < fullStars) return <span key={i}>★</span>;
        if (i === fullStars && hasHalf) return <span key={i} className="text-gold/45">★</span>;
        return <span key={i} className="text-bone/25">★</span>;
      })}
    </span>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = item.quote.length > READ_MORE_MIN_CHARS;

  return (
    <blockquote
      className="flex w-[280px] shrink-0 flex-col rounded-[20px] border border-bone/15 bg-bone/[0.06] p-8 sm:w-[300px] md:w-[320px] md:p-9 lg:w-[340px]"
    >
      <p
        className={`font-serif text-[1.15rem] italic leading-snug text-bone md:text-[1.2rem] ${
          isLong && !expanded ? "line-clamp-5" : ""
        }`}
      >
        &ldquo;{item.quote}&rdquo;
      </p>
      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-3 self-start font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-gold transition-colors hover:text-bone"
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
      <footer className="mt-6 border-t border-bone/10 pt-6">
        <cite className="not-italic">
          <span className="font-display text-sm font-semibold tracking-tight text-bone">{item.name}</span>
          <span className="mt-1 block text-[13px] text-bone/65">{item.context}</span>
        </cite>
      </footer>
    </blockquote>
  );
}

export function Testimonials() {
  const hasGoogleLink = GOOGLE_REVIEWS.url.length > 0;
  const hasGoogleRating = GOOGLE_REVIEWS.rating != null;
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="bg-sage py-28 text-bone md:py-36">
      <Container className="max-w-7xl">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-5 bg-gold" aria-hidden="true" />
            Client voices
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[22ch] font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.05] tracking-tight">
            What shifts when you <Serif>look inward.</Serif>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-[58ch] text-[16.5px] leading-relaxed text-bone/80">
            Real reflections from women who chose coaching as a space to slow down, get honest, and move forward with
            clarity.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-16">
          <div className="testimonial-marquee-scroll testimonial-marquee-fade overflow-hidden">
            <div className="marquee-track testimonial-marquee flex w-max items-stretch gap-6 md:gap-8">
              {marqueeItems.map((item, index) => (
                <TestimonialCard key={`${item.name}-${item.context}-${index}`} item={item} />
              ))}
            </div>
          </div>
        </Reveal>

        {hasGoogleLink ? (
          <Reveal delay={0.14} className="mt-14 flex flex-col items-center text-center">
            {hasGoogleRating ? (
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <StarRating rating={GOOGLE_REVIEWS.rating!} />
                <span className="text-[14px] text-bone/75">
                  {GOOGLE_REVIEWS.rating!.toFixed(1)} on Google
                  {GOOGLE_REVIEWS.count != null ? ` · ${GOOGLE_REVIEWS.count} reviews` : null}
                </span>
              </div>
            ) : null}
            <a
              href={GOOGLE_REVIEWS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-gold/40 px-6 py-3 font-sans text-sm font-semibold tracking-tight text-bone transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-gold hover:bg-bone/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Read all reviews on Google
            </a>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
