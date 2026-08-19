/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Quote } from "lucide-react";
import FannedScreenshots from "@/components/ui/fanned-screenshots";
import { getAppById, type AppShowcaseItem } from "@/lib/apps-data";
import { TESTIMONIALS } from "@/lib/testimonials";

const proofApps = ["aividly", "vidnotes"]
  .map((id) => getAppById(id))
  .filter((app): app is AppShowcaseItem => Boolean(app));

export function ProductProofSection() {
  return (
    <section
      id="proof"
      className="relative scroll-mt-24 bg-background px-4 py-24 text-foreground"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-selfmade">
            Products I shipped
          </p>
          <h2 className="mt-5 font-heading text-4xl font-bold [text-wrap:balance] md:text-6xl">
            Products I shipped and founders bought
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:pretty]">
            AIVidly and VidNotes show the product, store, and business work
            behind my mobile app offer.
          </p>
        </motion.div>

        <div className="mt-20 space-y-24">
          {proofApps.map((app, index) => (
            <motion.article
              key={app.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-black/10 bg-black/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:border-white/15 dark:bg-white/[0.05] dark:text-zinc-300">
                    {app.category}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                      app.acquired
                        ? "border border-amber-400/40 bg-amber-400/15 text-amber-300"
                        : "border border-selfmade/35 bg-selfmade/10 text-selfmade"
                    }`}
                  >
                    {app.acquired ? "Built and sold" : "Live product"}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-3xl font-bold md:text-5xl">
                  {app.title}
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 [text-wrap:pretty]">
                  {app.detailedDescription || app.description}
                </p>
                <ul className="mt-7 grid gap-3 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
                  {app.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="border-l border-selfmade/50 pl-3"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
                  <Link
                    href={`/apps/${app.id}`}
                    className="inline-flex items-center gap-2 text-selfmade transition hover:text-yellow-200"
                  >
                    Read the product story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {app.appStoreUrl ? (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
                    >
                      Open on the App Store
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>

              <FannedScreenshots
                screenshots={app.screenshots}
                title={app.title}
              />
            </motion.article>
          ))}
        </div>

        <div className="mt-24 space-y-8">
          {TESTIMONIALS.map((item) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-black/10 bg-black/[0.03] p-7 sm:p-10 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                <figcaption className="space-y-5">
                  <div className="flex items-center gap-4">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-black/10 dark:border-white/15"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className={item.objectClass}
                      />
                    </a>
                    <div>
                      <strong className="block font-heading text-2xl">
                        {item.name}
                      </strong>
                      <span className="mt-1 block text-sm text-zinc-600 dark:text-zinc-400">
                        {item.role}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:pretty]">
                    {item.context}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-selfmade-deep dark:text-zinc-300 dark:hover:text-selfmade"
                  >
                    {item.linkLabel}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </figcaption>
                <blockquote>
                  <Quote
                    className="mb-6 h-9 w-9 text-selfmade"
                    aria-hidden="true"
                  />
                  <div className="space-y-5 font-heading text-xl leading-relaxed [text-wrap:pretty] md:text-2xl">
                    {item.quote.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </blockquote>
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#shipped"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 font-semibold text-zinc-800 transition hover:border-selfmade/50 hover:text-selfmade-deep dark:border-white/15 dark:text-zinc-200 dark:hover:text-selfmade"
          >
            More apps I shipped
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductProofSection;
