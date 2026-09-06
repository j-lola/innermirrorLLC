export const SITE_URL = "https://theinnermirrorcoaching.com";
export const SITE_NAME = "Inner Mirror Coaching";
export const SITE_IMAGE = `${SITE_URL}/og-image.jpg`;
export const SITE_IMAGE_ALT = "Dr. Jejelola Owotomo, founder of Inner Mirror Coaching";

export const HOME_SEO = {
  title: "Life Coach in Atlanta, GA | Dr. Jejelola Owotomo — Inner Mirror Coaching",
  description:
    "1:1 life coaching, a 12-week program, and The Inner Mirror Circle with certified coach Dr. Jejelola Owotomo. Break repeating patterns and return to yourself. Atlanta, GA.",
  path: "/",
} as const;

export const CIRCLE_SEO = {
  title: "The Inner Mirror Circle | Coaching Community in Atlanta",
  description:
    "Join The Inner Mirror Circle — a coaching community for people ready to stop repeating old patterns and reconnect with who they are, led by Dr. Jejelola Owotomo.",
  path: "/circle",
} as const;

export const ABOUT_SEO = {
  title: "Meet Dr. Jejelola Owotomo | Certified Life Coach, Atlanta",
  description:
    "Dr. Jejelola Owotomo is a certified life coach and personal development educator helping clients understand and break the patterns they keep repeating.",
  path: "/about",
} as const;

export const DISCOVERY_SEO = {
  title: "Book a Free Discovery Call | Inner Mirror Coaching",
  description:
    "Ready to see yourself clearly? Book a free discovery call with Dr. Jejelola Owotomo and take the first step back to who you are.",
  path: "/discovery",
} as const;

/** @deprecated Use HOME_SEO.title */
export const SITE_TITLE = HOME_SEO.title;
/** @deprecated Use HOME_SEO.description */
export const SITE_DESCRIPTION = HOME_SEO.description;

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
