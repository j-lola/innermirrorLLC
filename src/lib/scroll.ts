import type { MouseEvent } from "react";

/** Smooth-scrolls to an in-page anchor without pushing a #hash into the URL. */
export function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const target = document.getElementById(href.slice(1));
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
