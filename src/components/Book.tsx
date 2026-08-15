import { useState } from "react";
import { Reveal } from "./Reveal";
import { Container, Eyebrow, Serif } from "./ui";
import { Button } from "./Button";
import { BookSummaryModal } from "./BookSummaryModal";
import { BOOK_AMAZON_URL, isBookAmazonLinkReady } from "../lib/book";

export function Book() {
  const [summaryOpen, setSummaryOpen] = useState(false);

  return (
    <>
      <section id="book" className="py-28 md:py-36">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.55fr_1fr] lg:gap-24">
          <Reveal className="mx-auto w-full max-w-[300px] lg:mx-0">
            <div className="group relative aspect-[2/3] -rotate-3 overflow-hidden rounded-[20px] shadow-[0_50px_90px_-30px_rgba(92,107,79,0.4),0_0_0_1px_rgba(176,141,62,0.3)] transition-transform duration-500 ease-out hover:rotate-0">
              <img
                src="/book.png"
                alt="Return To Baseline: A Guide Back To Yourself by Dr. Jejelola Owotomo"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute right-[-32px] top-6 rotate-45 bg-gold px-9 py-1.5 font-display text-[11px] font-bold tracking-[0.06em] text-ink">
                New
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>The book</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-tight">
                She was always at the
                <br />
                <Serif>Top Waiting</Serif>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[480px] text-[16.5px] leading-relaxed text-ink/70">
                <span className="italic">Return To Baseline: A Guide Back To Yourself</span> is the companion to this work — a memoir and
                guide for the woman who lost herself, and the self that&apos;s been waiting at the top all along.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-4">
              {isBookAmazonLinkReady ? (
                <Button href={BOOK_AMAZON_URL} target="_blank" rel="noopener noreferrer" variant="dark">
                  Get the book
                </Button>
              ) : (
                <Button href={BOOK_AMAZON_URL} variant="dark" onClick={(event) => event.preventDefault()}>
                  Get the book
                </Button>
              )}
              <Button type="button" variant="outline-dark" onClick={() => setSummaryOpen(true)}>
                Read summary
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <BookSummaryModal open={summaryOpen} onClose={() => setSummaryOpen(false)} />
    </>
  );
}
