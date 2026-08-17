/** @format */

"use client";

import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { GradientButton } from "@/components/ui/gradient-button";
import FannedScreenshots from "@/components/ui/fanned-screenshots";
import type { AppShowcaseItem } from "@/lib/apps-data";

interface IndividualAppShowcaseProps {
  app: AppShowcaseItem;
  index: number;
  isReversed?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  featuresLabel?: string;
  techStackLabel?: string;
  acquiredLabel?: string;
}

export const IndividualAppShowcase = ({
  app,
  index,
  isReversed = false,
  ctaHref = "/contact",
  ctaLabel = "Book a scoping call",
  featuresLabel = "What it does",
  techStackLabel = "Stack",
  acquiredLabel = "Sold",
}: IndividualAppShowcaseProps) => {
  return (
    <section
      id={app.id}
      className={cn(
        "relative scroll-mt-20 py-16 md:py-24",
        index % 2 === 0 ? "bg-black" : "bg-white/[0.02]",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex flex-col items-center gap-12",
            "lg:flex-row lg:gap-16",
            isReversed && "lg:flex-row-reverse",
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="max-w-xl flex-1"
          >
            <div className="mb-6">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs uppercase tracking-wider text-zinc-400">
                  {app.category}
                </span>
                {app.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-300"
                  >
                    {platform}
                  </span>
                ))}
                {app.acquired && (
                  <span className="rounded-full border border-amber-400/40 bg-amber-500/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                    {acquiredLabel}
                  </span>
                )}
              </div>
              <h2 className="mb-4 font-heading text-3xl font-bold text-white [text-wrap:balance] md:text-4xl">
                {app.title}
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300 [text-wrap:pretty]">
                {app.detailedDescription || app.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 font-heading text-lg font-semibold uppercase tracking-wide text-white">
                {featuresLabel}
              </h3>
              <ul className="space-y-3">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {app.techStack && (
              <div className="mb-8">
                <h3 className="mb-4 font-heading text-lg font-semibold uppercase tracking-wide text-white">
                  {techStackLabel}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {app.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <GradientButton
                href={ctaHref}
                variant="accent"
                icon={ExternalLink}
              >
                {ctaLabel}
              </GradientButton>
              {app.appStoreUrl && (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  App Store
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isReversed ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="flex w-full flex-1 justify-center"
          >
            <FannedScreenshots
              screenshots={app.screenshots}
              title={app.title}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndividualAppShowcase;
