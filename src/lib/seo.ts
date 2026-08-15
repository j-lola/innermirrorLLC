export const SITE_URL = "https://theinnermirrorcoaching.com";
export const SITE_NAME = "Inner Mirror Coaching";
export const SITE_TITLE = "Inner Mirror Coaching | Find Your Inner Self";
export const SITE_DESCRIPTION =
  "1:1 life coaching, a 12-week program, and The Inner Mirror Circle with Dr. Jejelola Owotomo — a safe space to see yourself clearly and return to who you are.";
export const SITE_IMAGE = `${SITE_URL}/og-image.jpg`;
export const SITE_IMAGE_ALT = "Dr. Jejelola Owotomo, founder of Inner Mirror Coaching";

type SeoInput = {
  title: string;
  description: string;
  path: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

export function applySeo({ title, description, path }: SeoInput) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", SITE_IMAGE);
  upsertMeta("property", "og:image:alt", SITE_IMAGE_ALT);
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", SITE_IMAGE);
  upsertCanonical(url);
}
