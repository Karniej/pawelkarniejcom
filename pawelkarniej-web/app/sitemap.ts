import type { MetadataRoute } from "next";
import { appShowcases } from "@/lib/apps-data";
import { SITE_URL } from "@/lib/blog-seo";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/blog", "/apps", "/graveyard", "/contact"];

  return [
    ...staticPaths.map((pathname) => ({
      url: `${SITE_URL}${pathname}`,
      lastModified: now,
      changeFrequency: pathname === "" ? ("weekly" as const) : ("monthly" as const),
      priority: pathname === "" ? 1 : 0.8,
    })),
    ...getAllPosts().map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.data.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...appShowcases.map((app) => ({
      url: `${SITE_URL}/apps/${app.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
