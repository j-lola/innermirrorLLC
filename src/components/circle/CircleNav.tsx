import { Link } from "react-router-dom";
import { Container } from "../ui";
import { Logo } from "../Logo";

export function CircleNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-circle-plum/10 bg-circle-ivory">
      <Container>
        <nav className="flex items-center justify-between gap-4 py-2 md:py-3.5">
          <Link
            to="/circle"
            className="shrink-0 transition-opacity duration-200 hover:opacity-85"
            aria-label="The Inner Mirror Circle"
          >
            <Logo variant="circle" className="h-16 w-auto sm:h-[5.5rem] md:h-28 lg:h-[7.5rem]" />
          </Link>

          <div className="flex shrink-0 items-center gap-5 md:gap-8">
            <Link
              to="/"
              className="text-[13px] text-circle-plum/70 transition-colors duration-200 hover:text-circle-plum"
            >
              Back to home
            </Link>
            <a
              href="#join"
              className="rounded-full bg-circle-gold px-4 py-2.5 font-sans text-[12.5px] font-semibold text-circle-plum transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-circle-gold sm:px-5 sm:text-[13px]"
            >
              <span className="sm:hidden">Join</span>
              <span className="hidden sm:inline">Join the community</span>
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
