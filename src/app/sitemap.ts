import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (env.SITE_URL || "http://localhost:3000").replace(/\/$/, "");

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
  ];

  const lastModified = new Date();

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified,
    changeFrequency: "weekly",
    priority: r === "/" ? 1 : 0.7,
  }));
}
