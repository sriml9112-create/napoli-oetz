import type { MetadataRoute } from "next";
import { restaurant } from "@/data/restaurant";

export default function robots(): MetadataRoute.Robots {
  const base = restaurant.url.replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
