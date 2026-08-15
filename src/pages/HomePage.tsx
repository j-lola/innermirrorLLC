import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Why } from "../components/Why";
import { Coaching } from "../components/Coaching";
import { Book } from "../components/Book";
import { Circle } from "../components/Circle";
import { Bookings } from "../components/Bookings";
import { Footer } from "../components/Footer";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Why />
        <Coaching />
        <Bookings />
        <Book />
        <Circle />
      </main>
      <Footer />
    </>
  );
}
