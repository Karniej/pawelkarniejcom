/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Quote } from "lucide-react";
import FannedScreenshots from "@/components/ui/fanned-screenshots";
import { getAppById, type AppShowcaseItem } from "@/lib/apps-data";

const proofApps = ["aividly", "vidnotes"]
  .map((id) => getAppById(id))
  .filter((app): app is AppShowcaseItem => Boolean(app));

const buyerQuote = {
  quote:
    "I bought AIVidly from him because the app shipped as a real business — subscriptions, analytics, App Store execution, retention loops, all done. I didn't have to fix anything.",
  name: "Duc Lai",
  context: "AIVidly buyer and VidNotes co-founder",
};

const RHAVA_APP_STORE_URL =
  "https://apps.apple.com/gb/app/bibleily-speak-god-bible/id6747157033";

export function ProductProofSection() {
  return (
    <section
      id="proof"
      className="relative scroll-mt-24 bg-black px-4 py-24 text-white"
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
            Product proof
          </p>
          <h2 className="mt-5 font-heading text-4xl font-bold [text-wrap:balance] md:text-6xl">
            Real products, real stores, real handoffs
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-zinc-400 [text-wrap:pretty]">
            These are not portfolio mockups. You can open the products, inspect
            the store listings, and read what happened after launch.
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
                  <span className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
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
                <p className="mt-5 text-lg leading-relaxed text-zinc-300 [text-wrap:pretty]">
                  {app.detailedDescription || app.description}
                </p>
                <ul className="mt-7 grid gap-3 text-sm text-zinc-400 sm:grid-cols-2">
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
                      className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
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

        <div className="mt-24 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-selfmade/25 bg-selfmade/[0.06] p-7 sm:p-10"
          >
            <Quote className="h-9 w-9 text-selfmade" aria-hidden="true" />
            <blockquote className="mt-6 font-heading text-2xl leading-relaxed [text-wrap:pretty] md:text-3xl">
              “{buyerQuote.quote}”
            </blockquote>
            <figcaption className="mt-7 border-t border-white/10 pt-5">
              <span className="block font-semibold">{buyerQuote.name}</span>
              <span className="mt-1 block text-sm text-zinc-400">
                {buyerQuote.context}
              </span>
            </figcaption>
          </motion.figure>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
                <Image
                  src="/images/rhava.svg"
                  alt="Rhava app icon"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                  Second app sold
                </p>
                <h3 className="mt-1 font-heading text-2xl font-bold">Rhava</h3>
              </div>
            </div>
            <p className="mt-6 flex-1 text-lg leading-relaxed text-zinc-300 [text-wrap:pretty]">
              I sold Rhava in 2025. Its new owner turned it into Bibleily and
              brought the distribution that the original product did not have.
            </p>
            <a
              href={RHAVA_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-selfmade transition hover:text-yellow-200"
            >
              See what Rhava became
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.article>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-zinc-200 transition hover:border-selfmade/50 hover:text-selfmade"
          >
            See all live and sold apps
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductProofSection;
