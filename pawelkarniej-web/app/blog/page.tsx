/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  FilePenLine,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogPosts } from "@/data/blog-posts";
import { cn } from "@/lib/utils";

const statusStyles: Record<
  (typeof blogPosts)[number]["status"],
  { label: string; className: string }
> = {
  published: {
    label: "Published",
    className:
      "border-transparent bg-emerald-500/10 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.35)]",
  },
  "in-progress": {
    label: "In Progress",
    className:
      "border-transparent bg-sky-500/10 text-sky-200 shadow-[0_0_12px_rgba(56,189,248,0.25)]",
  },
  draft: {
    label: "Draft",
    className:
      "border border-white/10 bg-white/5 text-zinc-300 shadow-[0_0_12px_rgba(244,244,245,0.12)]",
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function BlogPage() {
  const publishedPosts = blogPosts.filter((post) => post.status === "published");
  const upcomingPosts = blogPosts.filter((post) => post.status !== "published");

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 pb-24 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-sm text-zinc-500"
        >
          <ArrowLeft className="h-4 w-4 text-zinc-500" />
          <Link
            href="/"
            className="transition-colors hover:text-emerald-400"
            aria-label="Back to home"
          >
            Back to home
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Badge className="inline-flex items-center gap-2 border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.35)]">
            <Sparkles className="h-4 w-4" />
            Field Notes
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading tracking-tight">
            The build-in-public logbook
          </h1>
          <p className="max-w-2xl text-lg text-zinc-400">
            Occasional essays about building AI-powered mobile apps, product
            launches, and everything I&apos;m learning while experimenting in
            public.
          </p>
        </motion.section>

        <section className="space-y-8">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <h2 className="text-2xl font-heading">Latest writing</h2>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <FilePenLine className="h-4 w-4" />
              {publishedPosts.length > 0
                ? `${publishedPosts.length} ${
                    publishedPosts.length === 1 ? "post" : "posts"
                  }`
                : "First posts dropping soon"}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {publishedPosts.length > 0 ? (
              publishedPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  {...fadeInUp}
                  transition={{ duration: 0.45 }}
                >
                  <Card className="group modern-card border border-white/10 bg-white/5 transition-colors duration-300 hover:border-emerald-400/40 hover:bg-white/10">
                    <CardHeader className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                        {post.publishedOn && (
                          <span className="inline-flex items-center gap-2 text-zinc-400">
                            <CalendarDays className="h-4 w-4 text-zinc-500" />
                            {post.publishedOn}
                          </span>
                        )}
                        {post.readingTime && (
                          <span className="inline-flex items-center gap-2 text-zinc-400">
                            <Clock className="h-4 w-4 text-zinc-500" />
                            {post.readingTime}
                          </span>
                        )}
                        <Badge
                          variant="outline"
                          className={cn(
                            "px-3 py-1 text-xs uppercase tracking-wide",
                            statusStyles[post.status].className,
                          )}
                        >
                          {statusStyles[post.status].label}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-emerald-400 transition-colors">
                        <Link href={`/blog/${post.slug}`} className="link-hover">
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-zinc-300">
                        {post.summary}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.article>
              ))
            ) : (
              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                  <FilePenLine className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  First entry coming soon
                </h3>
                <p className="mt-4 text-zinc-400">
                  I&apos;m jotting down the first long-form story right now.
                  Check back shortly or follow me on social for updates.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {upcomingPosts.length > 0 && (
          <section className="space-y-8">
            <motion.h2
              {...fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-2xl font-heading"
            >
              Ideas in the works
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              {upcomingPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  {...fadeInUp}
                  transition={{ duration: 0.45 }}
                  className="h-full"
                >
                  <Card className="modern-card h-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/10">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className={cn(
                            "px-3 py-1 text-xs uppercase tracking-wide",
                            statusStyles[post.status].className,
                          )}
                        >
                          {statusStyles[post.status].label}
                        </Badge>
                        {post.tags && (
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-xl text-white">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-zinc-400">
                        {post.summary}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

