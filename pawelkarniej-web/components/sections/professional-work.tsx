/** @format */

"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type ProofLink = {
  label: string;
  href: string;
};

type WorkItem = {
  period: string;
  title: string;
  situation: string;
  responsibility: string;
  shipped: string;
  proof: string;
  links?: ProofLink[];
  lead?: boolean;
};

const work: WorkItem[] = [
  {
    period: "2025 to present",
    title: "Bat Around",
    situation:
      "A live sports game turns real batting data into competitive play inside a 3D world.",
    responsibility:
      "I work on the core gameplay loop, ball physics, player-facing animations, debugging, QA, and release delivery.",
    shipped:
      "The production game is available on iOS and Android. The released game credits me as one of its main developers.",
    proof:
      "The product site and store listing are public. My developer credit appears inside the released game.",
    links: [
      { label: "Official site", href: "https://letsbataround.com" },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/bat-around/id6443824059",
      },
    ],
    lead: true,
  },
  {
    period: "2022 to 2024",
    title: "SNØ Oslo",
    situation:
      "A live reservation app needed a rewrite and a cleaner path for continued product work.",
    responsibility:
      "I led the rewrite, introduced a cleaner architecture, moved the app to Expo, and built reservation functionality.",
    shipped:
      "I shipped the rewrite and reservation work while the existing service stayed live.",
    proof: "The SNØ Oslo app remains available on the App Store.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/no/app/sn%C3%B8-oslo/id1638096931",
      },
    ],
  },
  {
    period: "2024 to 2025",
    title: "Mobility and energy maps",
    situation:
      "A production mobile product helped drivers find EV chargers and fuel stations through map and location data.",
    responsibility:
      "I owned API integration, application state, map performance, debugging, estimation, and iOS and Android release readiness.",
    shipped:
      "I shipped map and location features to the production iOS and Android codebase.",
    proof:
      "This was a private engagement. The client name and product link remain confidential.",
  },
];

export function ProfessionalWorkSection() {
  return (
    <section
      id="professional-work"
      className="relative scroll-mt-24 bg-black/[0.02] px-4 py-24 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-selfmade-deep dark:text-selfmade">
            Selected professional work
          </p>
          <h2 className="mt-5 font-heading text-4xl font-bold [text-wrap:balance] md:text-6xl">
            8+ years inside production mobile apps
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 [text-wrap:pretty]">
            My own apps taught me product ownership. Client work taught me how
            to join a live codebase, work with a team, and ship without stopping
            what already works.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {work.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`rounded-3xl border p-7 sm:p-9 ${
                item.lead
                  ? "border-selfmade/40 bg-selfmade/[0.08] lg:col-span-2"
                  : "border-black/10 bg-background dark:border-white/10"
              }`}
            >
              <div
                className={
                  item.lead
                    ? "grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14"
                    : ""
                }
              >
                <header>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
                    {item.title}
                  </h3>
                </header>

                <dl
                  className={`grid gap-6 ${
                    item.lead ? "sm:grid-cols-2" : "mt-8"
                  }`}
                >
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Situation
                    </dt>
                    <dd className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {item.situation}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      My responsibility
                    </dt>
                    <dd className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {item.responsibility}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      What shipped
                    </dt>
                    <dd className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {item.shipped}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Proof
                    </dt>
                    <dd className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {item.proof}
                    </dd>
                    {item.links ? (
                      <div className="mt-4 flex flex-wrap gap-4">
                        {item.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-selfmade-deep transition hover:text-black dark:text-selfmade dark:hover:text-white"
                          >
                            {link.label}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 border-t border-black/10 pt-8 text-sm leading-relaxed text-zinc-600 dark:border-white/10 dark:text-zinc-400">
          Earlier experience, 2018 to 2022. I built React Native products for
          startups at Netguru and worked with international teams across health,
          sales, and consumer applications.
        </p>
      </div>
    </section>
  );
}

export default ProfessionalWorkSection;
