import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.SITE_URL || "http://localhost:3000").replace(/\/$/, "");

  const routes = [
    "/",
    "/services",
    "/pricing",
    "/case-studies",
    "/blog",
    "/contact",
    "/seo",
    "/google-ads",
    "/meta-ads",
    "/design",
    "/web",
    "/about",
    "/process",
  ];

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "/" ? 1 : 0.7,
  }));
}
