import { db, makeId, nowISO } from "@/lib/db";

db.posts.push(
  {
    id: makeId(),
    title: "Google Ads: Så får du billigare leads",
    slug: "google-ads-billigare-leads",
    excerpt:
      "Enkelt upplägg för sökannonser som sänker CPA och ökar kvaliteten på leads.",
    content:
      "# Google Ads: Så får du billigare leads\n\nSkriv din artikel här i **Markdown**.\n\n## 1) Struktur\n...\n",
    category: "Google Ads",
    tags: [{ label: "PPC", slug: "ppc" }],
    publishedAt: nowISO(),
    status: "published",
  },
  {
    id: makeId(),
    title: "SEO för småföretag: 7 snabba vinster",
    slug: "seo-smaforetag-7-snabba-vinster",
    excerpt:
      "Praktiska SEO-grejer du kan göra direkt för att få mer trafik och leads.",
    content: "# SEO för småföretag: 7 snabba vinster\n\n## 1) Titles\n...\n",
    category: "SEO",
    tags: [{ label: "Content", slug: "content" }],
    publishedAt: nowISO(),
    status: "published",
  }
);

console.log("Seeded posts:", db.posts.length);
