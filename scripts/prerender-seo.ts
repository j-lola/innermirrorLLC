import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PRERENDER_ROUTES, SITE_IMAGE, SITE_IMAGE_ALT, SITE_NAME, SITE_URL, getSeoForPath } from "../src/lib/seo";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html not found — run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf8");

function escapeAttr(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function canonicalUrl(routePath: string) {
  return `${SITE_URL}${routePath === "/" ? "/" : routePath}`;
}

function buildRouteHead(routePath: string) {
  const seo = getSeoForPath(routePath);
  const url = canonicalUrl(routePath);

  return `
    <title>${escapeAttr(seo.title)}</title>
    <meta name="description" content="${escapeAttr(seo.description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />
    <meta property="og:title" content="${escapeAttr(seo.title)}" />
    <meta property="og:description" content="${escapeAttr(seo.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${SITE_IMAGE}" />
    <meta property="og:image:alt" content="${escapeAttr(SITE_IMAGE_ALT)}" />
    <meta name="twitter:title" content="${escapeAttr(seo.title)}" />
    <meta name="twitter:description" content="${escapeAttr(seo.description)}" />
    <meta name="twitter:image" content="${SITE_IMAGE}" />
  `.trim();
}

function stripInjectedSeo(html: string) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta name="description"[^>]*>\s*/gi, "")
    .replace(/<link rel="canonical"[^>]*>\s*/gi, "")
    .replace(/<meta property="og:site_name"[^>]*>\s*/gi, "")
    .replace(/<meta property="og:title"[^>]*>\s*/gi, "")
    .replace(/<meta property="og:description"[^>]*>\s*/gi, "")
    .replace(/<meta property="og:url"[^>]*>\s*/gi, "")
    .replace(/<meta name="twitter:title"[^>]*>\s*/gi, "")
    .replace(/<meta name="twitter:description"[^>]*>\s*/gi, "");
}

function writeRoute(routePath: string) {
  const html = stripInjectedSeo(template).replace("</head>", `    ${buildRouteHead(routePath)}\n  </head>`);
  const outFile =
    routePath === "/" ? path.join(distDir, "index.html") : path.join(distDir, routePath.slice(1), "index.html");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`SEO HTML: ${routePath}`);
}

for (const route of PRERENDER_ROUTES) {
  writeRoute(route);
}

console.log(`Prerendered SEO for ${PRERENDER_ROUTES.length} routes.`);
