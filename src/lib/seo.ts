import { env } from "@/lib/env";

export function absoluteUrl(path: string) {
  const base = (env.SITE_URL || "http://localhost:3000").replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    // svenska tecken
    .replace(/å|ä/g, "a")
    .replace(/ö/g, "o")
    // & → "och" (valfritt men nice)
    .replace(/&/g, " och ")
    // ta bort allt som inte är bokstav/siffra/space/-
    .replace(/[^a-z0-9\s-]/g, "")
    // spaces → -
    .replace(/\s+/g, "-")
    // flera - → en
    .replace(/-+/g, "-")
    // trimma - i början/slut
    .replace(/^-+|-+$/g, "");
}
