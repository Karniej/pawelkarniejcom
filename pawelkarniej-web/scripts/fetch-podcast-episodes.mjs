#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.resolve(__dirname, "../data/podcast-episodes.json");
const FEED_URL = "https://api.riverside.com/hosting/2aslT8FP.rss";

const decodeXml = (value) =>
  value
    .replace(/&quot;/g, String.fromCharCode(34))
    .replace(/&apos;|&#39;/g, String.fromCharCode(39))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const tagValue = (entry, tag) => {
  const openStart = entry.indexOf("<" + tag);
  const openEnd = entry.indexOf(">", openStart);
  const endToken = "</" + tag + ">";
  const end = entry.indexOf(endToken, openEnd + 1);
  if (openStart === -1 || openEnd === -1 || end === -1) return "";
  let value = entry.slice(openEnd + 1, end).trim();
  if (value.startsWith("<![CDATA[") && value.endsWith("]]>")) {
    value = value.slice(9, -3);
  }
  return decodeXml(value);
};

const enclosureUrl = (entry) => {
  const match = entry.match(/<enclosure\b[^>]*\burl="([^"]+)"/);
  return match ? decodeXml(match[1]) : "";
};

const loadCurrent = () => {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  } catch {
    return [];
  }
};

const persist = (episodes) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(episodes, null, 2) + "\n");
  console.log("[podcast-episodes] Wrote " + episodes.length + " RSS episodes.");
};

const main = async () => {
  try {
    const response = await fetch(FEED_URL);
    if (!response.ok) {
      throw new Error("Podcast feed returned " + response.status);
    }

    const xml = await response.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .slice(0, 1)
      .map((match) => match[1]);

    const episodes = items
      .map((item) => {
        const id = tagValue(item, "guid");
        const title = tagValue(item, "title").replace(
          /^Fired By Robots Podcast - /i,
          "",
        );
        const publishedAt = tagValue(item, "pubDate");
        const duration = tagValue(item, "itunes:duration");
        const audioUrl = enclosureUrl(item);
        if (!id || !title || !publishedAt || !audioUrl) return null;
        return { id, title, publishedAt, duration, audioUrl };
      })
      .filter(Boolean);

    if (episodes.length === 0) {
      throw new Error("Podcast feed contained no valid episodes");
    }

    persist(episodes);
  } catch (error) {
    const current = loadCurrent();
    console.warn(
      "[podcast-episodes] " +
        error.message +
        ". Keeping " +
        current.length +
        " verified episodes.",
    );
  }
};

main();
