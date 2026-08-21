/** @format */

import latestPosts from "@/data/latest-posts.json";
import latestX from "@/data/latest-x.json";
import podcastEpisodes from "@/data/podcast-episodes.json";
import youtubeVideos from "@/data/youtube-videos.json";

export type NowKind = "video" | "blog" | "podcast" | "x";

export type NowItem = {
  kind: NowKind;
  label: string;
  title: string;
  href: string;
  external: boolean;
};

const PODCAST_HOME = "https://firedbyrobots.com/";

export function getNowItems(): NowItem[] {
  const items: NowItem[] = [];
  const video = youtubeVideos[0];
  const post = latestPosts[0];
  const episode = podcastEpisodes[0];

  if (video?.title && video.url) {
    items.push({
      kind: "video",
      label: "Video",
      title: video.title,
      href: video.url,
      external: true,
    });
  }

  if (post?.title && post.slug) {
    items.push({
      kind: "blog",
      label: "Blog",
      title: post.title,
      href: `/blog/${post.slug}`,
      external: false,
    });
  }

  if (episode?.title) {
    items.push({
      kind: "podcast",
      label: "Podcast",
      title: episode.title,
      href: PODCAST_HOME,
      external: true,
    });
  }

  if (latestX?.text && latestX.url) {
    items.push({
      kind: "x",
      label: "X",
      title: latestX.text,
      href: latestX.url,
      external: true,
    });
  }

  return items;
}
