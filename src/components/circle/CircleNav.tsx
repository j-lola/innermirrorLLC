import { Link } from "react-router-dom";
import { Container } from "../ui";
import { Logo } from "../Logo";

export function CircleNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-circle-plum/10 bg-circle-ivory/90 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="transition-opacity duration-200 hover:opacity-80">
          <Logo variant="circle" className="h-12 w-auto md:h-14" />
        </Link>

        <Link to="/" className="text-[13px] text-circle-plum/70 transition-colors duration-200 hover:text-circle-plum">
          Back to home
        </Link>
      </Container>
    </header>
  );
}
