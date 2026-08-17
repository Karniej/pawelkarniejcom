#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.resolve(__dirname, "../data/youtube-videos.json");
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || "UCBrs3Z1NHbj3si5ULKkbwnA";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

const decodeXml = (value) =>
  value
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const tagValue = (entry, tag) => {
  const match = entry.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  return match ? decodeXml(match[1].trim()) : "";
};

const loadCurrent = () => {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  } catch {
    return [];
  }
};

const persist = (videos) => {
  fs.writeFileSync(DATA_PATH, `${JSON.stringify(videos, null, 2)}\n`);
  console.log(`[youtube-videos] Wrote ${videos.length} real uploads.`);
};

const main = async () => {
  try {
    const response = await fetch(FEED_URL);
    if (!response.ok) {
      throw new Error(`YouTube feed returned ${response.status}`);
    }

    const xml = await response.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
      .slice(0, 3)
      .map((match) => match[1]);

    const videos = entries
      .map((entry) => {
        const id = tagValue(entry, "yt:videoId");
        const title = tagValue(entry, "title");
        const publishedAt = tagValue(entry, "published");
        if (!id || !title || !publishedAt) return null;
        return {
          id,
          title,
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          url: `https://www.youtube.com/watch?v=${id}`,
          publishedAt,
        };
      })
      .filter(Boolean);

    persist(videos);
  } catch (error) {
    const current = loadCurrent();
    console.warn(
      `[youtube-videos] ${error.message}. Keeping ${current.length} verified uploads.`,
    );
  }
};

main();
