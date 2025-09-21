#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, "../data/youtube-shorts.json");
const CHANNEL_HANDLE = process.env.YOUTUBE_CHANNEL_HANDLE || "thepawelk";
const API_KEY = process.env.YOUTUBE_API_KEY;

const log = (message) => console.log(`[youtube-shorts] ${message}`);
const warn = (message) => console.warn(`[youtube-shorts] ${message}`);
const error = (message) => console.error(`[youtube-shorts] ${message}`);

const persist = (payload) => {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(payload, null, 2));
    log(`Wrote ${payload.length} entries to ${path.relative(process.cwd(), DATA_PATH)}`);
  } catch (err) {
    error(`Failed to write data file: ${err.message}`);
  }
};

const loadFallback = () => {
  const raw = fs.readFileSync(DATA_PATH, "utf8");
  return JSON.parse(raw);
};

const formatDuration = (isoDuration) => {
  const match = /PT(?:(\d+)M)?(?:(\d+)S)?/.exec(isoDuration);
  if (!match) return "0:00";
  const minutes = parseInt(match[1] || "0", 10);
  const seconds = parseInt(match[2] || "0", 10);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const isShort = (duration) => {
  const match = /PT(?:(\d+)M)?(?:(\d+)S)?/.exec(duration);
  if (!match) return false;
  const minutes = parseInt(match[1] || "0", 10);
  const seconds = parseInt(match[2] || "0", 10);
  return minutes === 0 && seconds <= 60;
};

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }
  return response.json();
};

const main = async () => {
  if (!API_KEY) {
    warn("YOUTUBE_API_KEY not provided. Keeping existing data file.");
    return;
  }

  try {
    log(`Resolving channel ID for @${CHANNEL_HANDLE}...`);
    const channelResponse = await fetchJson(
      `https://youtube.googleapis.com/youtube/v3/channels?part=id&forHandle=@${CHANNEL_HANDLE}&key=${API_KEY}`
    );
    const channelId = channelResponse.items?.[0]?.id;
    if (!channelId) {
      throw new Error("Unable to resolve channel ID");
    }

    log(`Fetching latest uploads for channel ${channelId}...`);
    const searchResponse = await fetchJson(
      `https://youtube.googleapis.com/youtube/v3/search?part=id,snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${API_KEY}`
    );

    const videoIds = searchResponse.items?.map((item) => item.id.videoId).filter(Boolean) || [];
    if (!videoIds.length) {
      throw new Error("No videos returned from search API");
    }

    const idsParam = videoIds.slice(0, 10).join(",");
    const videosResponse = await fetchJson(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${idsParam}&key=${API_KEY}`
    );

    const shorts = videosResponse.items
      ?.filter((item) => isShort(item.contentDetails?.duration || ""))
      .slice(0, 3)
      .map((item) => ({
        id: item.id,
        title: item.snippet?.title || "Untitled",
        thumbnail: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`,
        url: `https://www.youtube.com/shorts/${item.id}`,
        duration: formatDuration(item.contentDetails?.duration || "PT0S"),
      }));

    if (!shorts || shorts.length === 0) {
      warn("API returned no shorts. Keeping existing data file.");
      return;
    }

    persist(shorts);
  } catch (err) {
    error(`Failed to update shorts feed: ${err.message}`);
    const fallback = loadFallback();
    persist(fallback);
  }
};

main();
