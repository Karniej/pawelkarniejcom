/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-selfmade-deep dark:text-selfmade">
            What founders say
          </p>
          <h2 className="mt-5 font-heading text-4xl font-bold [text-wrap:balance] md:text-5xl">
            One bought my app. One hired me and shipped in four weeks.
          </h2>
        </motion.div>

        <div className="mt-14 space-y-8">
          {TESTIMONIALS.map((item) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-black/10 bg-black/[0.03] p-7 dark:border-white/10 dark:bg-white/[0.04] sm:p-10"
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
                    className="mb-6 h-9 w-9 text-selfmade-deep dark:text-selfmade"
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
            href="/apps"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 font-semibold text-zinc-700 transition hover:border-selfmade/50 hover:text-selfmade-deep dark:border-white/15 dark:text-zinc-200 dark:hover:text-selfmade"
          >
            See all live and sold apps
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
