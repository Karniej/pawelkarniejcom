/** @format */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import latestPosts from "@/data/latest-posts.json";

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));

// Small on purpose. The blog is a reason to come back, not the reason to hire,
// so it sits near the end of the page as three lines, not three big cards.
export function LatestPosts() {
  if (latestPosts.length === 0) return null;

  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-6"
        >
          <h2 className="font-heading text-2xl font-bold [text-wrap:balance] sm:text-3xl">
            Latest from the blog
          </h2>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-selfmade-deep dark:text-zinc-400 dark:hover:text-selfmade"
          >
            All posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <ul className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
          {latestPosts.map((post, index) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-baseline sm:gap-6"
              >
                <time
                  dateTime={post.date}
                  className="shrink-0 text-xs uppercase tracking-[0.16em] text-zinc-500 sm:w-28"
                >
                  {formatDate(post.date)}
                </time>
                <span className="flex-1 font-heading text-lg font-bold leading-snug text-zinc-900 transition-colors group-hover:text-selfmade-deep dark:text-zinc-100 dark:group-hover:text-selfmade">
                  {post.title}
                </span>
                <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LatestPosts;
