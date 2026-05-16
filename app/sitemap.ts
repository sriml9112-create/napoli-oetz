import type { MetadataRoute } from "next";
import { restaurant } from "@/data/restaurant";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = restaurant.url.replace(/\/$/, "");
  const lastModified = new Date();

  const routes = ["", "/speisekarte", "/galerie", "/kontakt", "/impressum", "/datenschutz"];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/speisekarte" ? 0.9 : 0.6,
  }));
}
