/** @format */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle, Youtube } from "lucide-react";
import youtubeVideos from "@/data/youtube-videos.json";

const milestones = [
  {
    label: "Before software",
    title: "I learned operations in logistics.",
    body: "That work taught me to look for handoffs, delays, exceptions, and the point where a process loses its owner.",
  },
  {
    label: "Since 2018",
    title: "I learned products by shipping my own.",
    body: "I moved into mobile development, shipped more than 20 apps, operated them after launch, and sold two to new owners.",
  },
  {
    label: "Now",
    title: "I build the product and the system around it.",
    body: "I work directly with founders and small teams, from the first product decision through release.",
  },
];

const formatPublishedDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));

export function AboutAndVideos() {
  const videos = youtubeVideos.slice(0, 3);

  return (
    <>
      <section className="relative px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-selfmade-deep dark:text-selfmade">
              About me
            </p>
            <h2 className="mt-5 font-heading text-4xl font-bold [text-wrap:balance] md:text-6xl">
              I learned to ship by putting my own products on the line.
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:pretty]">
              I have owned launches, support, subscriptions, store reviews, and
              product bets from the first build through the result.
            </p>
          </motion.div>

          <ol className="space-y-4">
            {milestones.map((milestone, index) => (
              <motion.li
                key={milestone.label}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="grid grid-cols-[auto_1fr] gap-5 rounded-3xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.04] sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-selfmade font-heading text-lg font-bold text-black">
                  {index + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    {milestone.label}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold sm:text-2xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:pretty]">
                    {milestone.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {videos.length > 0 ? (
        <section className="relative px-4 py-24 bg-black/[0.03] dark:bg-white/[0.02]">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <div className="max-w-3xl">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-selfmade-deep dark:text-selfmade">
                  <Youtube className="h-5 w-5" />
                  From my channel
                </p>
                <h2 className="mt-5 font-heading text-4xl font-bold [text-wrap:balance] md:text-5xl">
                  What I am building and learning now
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  The latest videos from my work on apps, automation, and the
                  systems behind both.
                </p>
              </div>
              <a
                href="https://www.youtube.com/@thepawelk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold transition hover:text-selfmade-deep dark:hover:text-selfmade"
              >
                Open YouTube
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {videos.map((video, index) => (
                <motion.a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:-translate-y-1 hover:border-selfmade/50 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="relative aspect-video overflow-hidden bg-zinc-900">
                    <Image
                      src={video.thumbnail}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/15 transition group-hover:bg-black/5">
                      <PlayCircle className="h-14 w-14 fill-black/50 text-white drop-shadow-lg" />
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {formatPublishedDate(video.publishedAt)}
                    </p>
                    <h3 className="mt-3 font-heading text-xl font-bold leading-snug [text-wrap:pretty]">
                      {video.title}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default AboutAndVideos;
