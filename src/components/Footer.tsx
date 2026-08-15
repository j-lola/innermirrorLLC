import { Link } from "react-router-dom";
import { Container } from "./ui";
import { Logo } from "./Logo";
import { handleAnchorClick } from "../lib/scroll";

const exploreLinks = [
  { href: "#about", label: "About Me" },
  { href: "#coaching", label: "Coaching" },
  { href: "#book", label: "The Book" },
  { to: "/circle", label: "Inner Mirror Circle" },
] as const;

const beginLinks = [
  { href: "#bookings", label: "Book a discovery call" },
  { to: "/circle", label: "Join the circle" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-cream bg-cream pt-20 pb-9 text-stone">
      <Container>
        <div className="flex flex-wrap justify-between gap-12 border-b border-bone pb-12">
          <div>
            <Link to="/" className="mb-4 inline-block transition-opacity duration-200 hover:opacity-80">
              <Logo className="h-14 w-auto" />
            </Link>
            <p className="max-w-[260px] text-[13.5px] text-stone">
              A dedicated space to see yourself clearly, break repeating patterns, and return to who you truly are.
              <br />
              intheinnermirrorcoaching.com
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h5 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.1em] text-gold">Explore</h5>
              <div className="flex flex-col gap-2.5">
                {exploreLinks.map((l) =>
                  "to" in l ? (
                    <Link key={l.label} to={l.to} className="text-sm text-stone transition-colors hover:text-forest">
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={handleAnchorClick}
                      className="text-sm text-stone transition-colors hover:text-forest"
                    >
                      {l.label}
                    </a>
                  ),
                )}
              </div>
            </div>
            <div>
              <h5 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.1em] text-gold">Begin</h5>
              <div className="flex flex-col gap-2.5">
                {beginLinks.map((l) =>
                  "to" in l ? (
                    <Link key={l.label} to={l.to} className="text-sm text-stone transition-colors hover:text-forest">
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={handleAnchorClick}
                      className="text-sm text-stone transition-colors hover:text-forest"
                    >
                      {l.label}
                    </a>
                  ),
                )}
              </div>
            </div>
            <div>
              <h5 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.1em] text-gold">Contact</h5>
              <div className="flex flex-col gap-2.5 text-sm text-stone">
                <a href="mailto:help@innermirror.com" className="transition-colors hover:text-forest">
                  help@innermirror.com
                </a>
                <p>Atlanta, Georgia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-7 text-[12.5px] text-stone">
          <span>© 2026 Inner Mirror Coaching. Launching August 2026.</span>
          <span>Powered by Radiksez Ltd</span>
        </div>
      </Container>
    </footer>
  );
}
