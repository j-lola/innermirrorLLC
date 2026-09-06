import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";

if (typeof window !== "undefined") {
  const rootEl = document.getElementById("root");

  if (rootEl) {
    const app = (
      <StrictMode>
        <App />
      </StrictMode>
    );

    if (import.meta.env.PROD && rootEl.childNodes.length > 0) {
      hydrateRoot(rootEl, app);
    } else {
      createRoot(rootEl).render(app);
    }
  }
}

export async function prerender(data: { url: string }) {
  const { renderToString } = await import("react-dom/server");
  const { parseLinks } = await import("vite-prerender-plugin/parse");
  const { buildPrerenderHead, getSeoForPath } = await import("./lib/seo.ts");

  const pathname = data.url === "/" ? "/" : data.url.replace(/\/$/, "") || "/";
  const html = renderToString(
    <StrictMode>
      <App url={pathname} />
    </StrictMode>,
  );

  return {
    html,
    links: new Set(parseLinks(html)),
    head: buildPrerenderHead(getSeoForPath(pathname)),
  };
}
