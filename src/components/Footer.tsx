import { Link, useLocation } from "react-router-dom";
import { Container } from "./ui";
import { Logo } from "./Logo";

const exploreLinks = [
  { to: "/#about", label: "About Me" },
  { to: "/#coaching", label: "Coaching" },
  { to: "/#book", label: "The Book" },
  { to: "/circle", label: "Inner Mirror Circle" },
] as const;

const legalLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/disclaimer", label: "Disclaimer" },
] as const;

export function Footer() {
  const { pathname } = useLocation();
  const isCircle = pathname === "/circle";

  return (
    <footer className="border-t border-cream bg-cream pt-20 pb-9 text-stone">
      <Container>
        <div className="flex flex-wrap justify-between gap-12 border-b border-bone pb-12">
          <div>
            <Link
              to={isCircle ? "/circle" : "/"}
              className="mb-5 inline-block transition-opacity duration-200 hover:opacity-80"
            >
              <Logo
                variant={isCircle ? "circle" : "coaching"}
                className="h-20 w-auto sm:h-[5.25rem] md:h-28 lg:h-[7rem]"
              />
            </Link>
            <p className="max-w-[260px] text-[13.5px] text-stone">
              {isCircle
                ? "Real women, real connection — an in-person community for guided reflection and meaningful connection."
                : "A dedicated space to see yourself clearly, break repeating patterns, and return to who you truly are."}
              <br />
              theinnermirrorcoaching.com
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            {!isCircle && (
              <div>
                <h5 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.1em] text-gold">
                  Explore
                </h5>
                <div className="flex flex-col gap-2.5">
                  {exploreLinks.map((l) => (
                    <Link key={l.label} to={l.to} className="text-sm text-stone transition-colors hover:text-forest">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h5 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.1em] text-gold">Legal</h5>
              <div className="flex flex-col gap-2.5">
                {legalLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    aria-current={pathname === l.to ? "page" : undefined}
                    className={`text-sm transition-colors hover:text-forest ${
                      pathname === l.to ? "text-forest" : "text-stone"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div id="contact">
              <h5 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.1em] text-gold">Contact</h5>
              <div className="flex flex-col gap-2.5 text-sm text-stone">
                <a href="mailto:info@theinnermirrorcoaching.com" className="transition-colors hover:text-forest">
                  info@theinnermirrorcoaching.com
                </a>
                <p>Atlanta, Georgia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-7 text-[12.5px] text-stone">
          <span>© 2026 Inner Mirror Coaching. Launching August 2026.</span>
          <span>Powered by Radiksez LLC</span>
        </div>
      </Container>
    </footer>
  );
}
