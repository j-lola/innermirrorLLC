import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PRERENDER_ROUTES = [
  "/about",
  "/discovery",
  "/circle",
  "/privacy",
  "/terms",
  "/disclaimer",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: path.resolve(__dirname, "src/main.tsx"),
      additionalPrerenderRoutes: PRERENDER_ROUTES,
    }),
  ],
});
