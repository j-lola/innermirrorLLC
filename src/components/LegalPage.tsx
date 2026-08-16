import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./ui";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { NoticeMark } from "./NoticeMark";
import { LEGAL_DOCS, type LegalDoc } from "../content/legal";
import { applySeo } from "../lib/seo";

const paths: Record<LegalDoc["slug"], string> = {
  privacy: "/privacy",
  terms: "/terms",
  disclaimer: "/disclaimer",
};

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const next = visible[0]?.target.id;
        if (next) setActive(next);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  const ids = useMemo(() => doc.sections.map((section) => section.id), [doc]);
  const active = useActiveSection(ids);

  useEffect(() => {
    applySeo({
      title: `${doc.title} | Inner Mirror Coaching`,
      description: doc.description,
      path: paths[doc.slug],
    });
  }, [doc]);

  return (
    <div className="min-h-screen bg-bone text-forest">
      <div className="grain print:hidden" aria-hidden="true" />
      <a
        href="#legal-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-60 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bone"
      >
        Skip to document
      </a>
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="pb-24 pt-36 md:pb-32 md:pt-44">
        <Container>
          <header className="max-w-160 border-b border-cream pb-10 md:pb-12">
            <h1 className="font-serif text-[clamp(2.4rem,5.4vw,4.25rem)] font-medium leading-[1.04] tracking-tight">
              {doc.title}
            </h1>
            <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-forest/80">{doc.description}</p>
            <p className="mt-6 font-display text-[12px] uppercase tracking-[0.12em] text-sage">
              Last updated {doc.updated}
            </p>
          </header>

          {doc.draft ? (
          <aside className="mt-8 max-w-160 rounded-[22px] bg-cream px-5 py-4 md:mt-10 md:px-6 md:py-5">
            <p className="flex items-start gap-3 text-[14.5px] leading-relaxed text-forest/80">
              <NoticeMark className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                Placeholder language for layout and review. This is not legal advice and is not in force until counsel
                replaces it.{" "}
                <a href="mailto:help@innermirror.com" className="text-forest underline decoration-gold/70 underline-offset-4 hover:decoration-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                  help@innermirror.com
                </a>
              </span>
            </p>
          </aside>
          ) : null}

          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,14rem)_minmax(0,40rem)] lg:gap-16 xl:grid-cols-[minmax(0,16rem)_minmax(0,40rem)]">
            <nav
              aria-label="On this page"
              className="print:hidden lg:sticky lg:top-32 lg:self-start"
            >
              <p className="mb-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                On this page
              </p>
              <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0.5">
                {doc.sections.map((section) => {
                  const isActive = active === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`flex min-h-11 items-center rounded-full px-3.5 text-[13.5px] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:min-h-9 lg:rounded-lg lg:px-3 ${
                          isActive
                            ? "bg-cream text-forest"
                            : "text-forest/70 hover:bg-cream/70 hover:text-forest"
                        }`}
                        aria-current={isActive ? "location" : undefined}
                      >
                        {section.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <article id="legal-content" className="legal-prose min-w-0">
              {doc.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32 border-t border-cream py-10 first:border-t-0 first:pt-0 md:py-12">
                  <h2 className="font-serif text-[1.85rem] font-medium leading-tight tracking-tight md:text-[2.05rem]">
                    {section.title}
                  </h2>
                  <p className="mt-3 max-w-[58ch] font-serif text-[1.2rem] italic leading-snug text-sage">
                    {section.inShort}
                  </p>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 max-w-[65ch] text-[16.5px] leading-relaxed text-forest/80">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-4 max-w-[65ch]">
                      {section.bullets.map((item) => (
                        <li key={item} className="text-[16.5px] leading-relaxed text-forest/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.groups?.map((group) => (
                    <div key={group.heading ?? group.paragraphs?.[0] ?? group.bullets?.[0]} className="mt-6">
                      {group.heading ? (
                        <h3 className="font-serif text-[1.35rem] font-medium leading-snug tracking-tight">
                          {group.heading}
                        </h3>
                      ) : null}
                      {group.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="mt-3 max-w-[65ch] text-[16.5px] leading-relaxed text-forest/80">
                          {paragraph}
                        </p>
                      ))}
                      {group.bullets ? (
                        <ul className="mt-3 max-w-[65ch]">
                          {group.bullets.map((item) => (
                            <li key={item} className="text-[16.5px] leading-relaxed text-forest/80">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </section>
              ))}

              <nav
                aria-label="Other legal pages"
                className="mt-4 flex flex-wrap gap-x-8 gap-y-3 border-t border-cream pt-8 print:hidden"
              >
                {LEGAL_DOCS.map((item) => {
                  const href = paths[item.slug];
                  const current = item.slug === doc.slug;
                  return current ? (
                    <span key={item.slug} className="text-sm text-forest" aria-current="page">
                      {item.title}
                    </span>
                  ) : (
                    <Link
                      key={item.slug}
                      to={href}
                      className="text-sm text-forest/70 underline decoration-gold/60 underline-offset-4 transition-colors hover:text-forest hover:decoration-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </article>
          </div>
        </Container>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
