import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Why } from "../components/Why";
import { Coaching } from "../components/Coaching";
import { Testimonials } from "../components/Testimonials";
import { Book } from "../components/Book";
import { Circle } from "../components/Circle";
import { Bookings } from "../components/Bookings";
import { Footer } from "../components/Footer";
import { ABOUT_SEO, applySeo, DISCOVERY_SEO, HOME_SEO } from "../lib/seo";

const SEO_BY_PATH: Record<string, { title: string; description: string; path: string }> = {
  "/": HOME_SEO,
  "/about": ABOUT_SEO,
  "/discovery": DISCOVERY_SEO,
};

const SCROLL_BY_PATH: Record<string, string> = {
  "/about": "about",
  "/discovery": "bookings",
};

export function HomePage() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    applySeo(SEO_BY_PATH[pathname] ?? HOME_SEO);
  }, [pathname]);

  useEffect(() => {
    const sectionId = SCROLL_BY_PATH[pathname] ?? (hash ? hash.slice(1) : "");
    if (!sectionId) return;
    const target = document.getElementById(sectionId);
    if (!target) return;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname, hash]);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Why />
        <Coaching />
        <Testimonials />
        <Bookings />
        <Book />
        <Circle />
      </main>
      <Footer />
    </>
  );
}
