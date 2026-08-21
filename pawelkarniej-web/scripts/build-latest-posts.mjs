#!/usr/bin/env node

/**
 * Writes the three newest blog posts into data/latest-posts.json.
 *
 * The home page is a client component, so it cannot read the file system. The
 * repo already solves this for YouTube and the podcast the same way: a prebuild
 * script turns a source into a small JSON file that the client can import.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const POSTS_DIR = path.resolve(__dirname, "../content/blog");
const DATA_PATH = path.resolve(__dirname, "../data/latest-posts.json");
const HOW_MANY = 3;

const main = () => {
  if (!fs.existsSync(POSTS_DIR)) {
    console.warn("[latest-posts] No content/blog directory. Nothing written.");
    return;
  }

  const posts = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(POSTS_DIR, file), "utf8"));
      if (!data?.title || !data?.date) return null;
      return {
        slug,
        title: data.title,
        date: new Date(data.date).toISOString(),
        excerpt: data.excerpt || "",
        image: data.featuredImage || "/favicon.png",
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, HOW_MANY);

  fs.writeFileSync(DATA_PATH, `${JSON.stringify(posts, null, 2)}\n`);
  console.log(`[latest-posts] Wrote ${posts.length} posts.`);
};

main();
