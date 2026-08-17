import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { canonical } from "@/lib/blog-seo";

export const metadata: Metadata = {
  title: "The graveyard: apps I built and killed | Paweł Karniej",
  description:
    "Products I shipped to the App Store and later killed, with the honest reason for each one. FIFTN, Fishify, and the rest of the story behind 25+ shipped apps.",
  alternates: { canonical: canonical("/graveyard") },
};

type GraveyardEntry = {
  name: string;
  kind: "iOS app" | "Web app" | "Blog";
  image: string;
  whatItWas: string;
  whyItDied?: string;
  lesson?: string;
  postSlug?: string;
  liveUrl?: string;
};

// Only Paweł's own stated reasons go in whyItDied. Entries without one
// stay reason-less until he writes the story.
const entries: GraveyardEntry[] = [
  {
    name: "FIFTN",
    kind: "iOS app",
    image: "/images/apps/fiftn/icon.png",
    whatItWas:
      "A focus timer and app blocker built on a 15 minute deep work rule. Distracting apps stayed locked until you earned your screen time.",
    whyItDied:
      "The focus and app blocker category is crowded, and I did not love the product. I will not spend years in a category I do not care about, next to a hundred other timers.",
    lesson: "Shipping is not the same as committing.",
    postSlug: "why-i-killed-fiftn-and-fishify",
  },
  {
    name: "Fishify",
    kind: "iOS app",
    image: "/images/apps/fishify/icon.png",
    whatItWas:
      "An AI fish identifier with a catch log and fishing rules guide. Snap a photo, get a species.",
    whyItDied:
      "I built it for App Store search traffic, not for anglers. If I do not care about the user, I will not write the next ten updates they actually need.",
    lesson:
      "A listing that ranks and a product I will not stand behind is a trap.",
    postSlug: "why-i-killed-fiftn-and-fishify",
  },
  {
    name: "The Fitmate App",
    kind: "iOS app",
    image: "/images/fitmate.png",
    whatItWas:
      "A social fitness app for finding a workout partner and staying motivated.",
  },
  {
    name: "Countdown Nuts",
    kind: "Web app",
    image: "/images/countownnuts.png",
    whatItWas:
      "A web app for tracking and managing consumable items before they run out.",
  },
  {
    name: "Themegen.xyz",
    kind: "Web app",
    image: "/images/themegen.png",
    whatItWas:
      "A web tool for creating dependency free themes for React Native apps.",
  },
  {
    name: "Selfmade.dev",
    kind: "Blog",
    image: "/images/selfmadedev.png",
    whatItWas:
      "My first blog about programming and React Native development.",
    whyItDied:
      "It did not die so much as move. The writing now lives on this site.",
    liveUrl: "/blog",
  },
];

export default function GraveyardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <header className="mx-auto max-w-[680px] px-4 pb-16 pt-28 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
            The graveyard
          </p>
          <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight [text-wrap:balance] md:text-6xl">
            Apps I built and killed
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400 [text-wrap:pretty]">
            I have shipped more than 25 products since 2018. Not all of them
            deserved to live. This page holds the ones I retired, with the
            honest reason when I have written it down. No spin, no pivot
            language.
          </p>
        </header>

        <section className="mx-auto max-w-3xl space-y-6 px-4 pb-16 sm:px-6">
          {entries.map((entry) => (
            <article
              key={entry.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white/10 grayscale">
                  <Image
                    src={entry.image}
                    alt={`${entry.name} icon`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-heading text-xl font-semibold">
                      {entry.name}
                    </h2>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400">
                      {entry.kind}
                    </span>
                  </div>
                  <p className="mt-3 text-zinc-300 [text-wrap:pretty]">
                    {entry.whatItWas}
                  </p>
                  {entry.whyItDied ? (
                    <div className="mt-4 border-l-2 border-zinc-700 pl-4">
                      <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                        Why it died
                      </p>
                      <p className="mt-2 text-zinc-400 [text-wrap:pretty]">
                        {entry.whyItDied}
                      </p>
                    </div>
                  ) : (
                    <p className="mt-4 text-sm text-zinc-500">
                      The story is not written yet. It will show up here when it
                      is.
                    </p>
                  )}
                  {entry.lesson && (
                    <p className="mt-4 text-emerald-300 [text-wrap:pretty]">
                      Lesson: {entry.lesson}
                    </p>
                  )}
                  <div className="mt-5 flex flex-wrap gap-4">
                    {entry.postSlug && (
                      <Link
                        href={`/blog/${entry.postSlug}`}
                        className="inline-flex items-center gap-2 text-sm text-emerald-400 transition-colors hover:text-emerald-300"
                      >
                        Read the full story
                      </Link>
                    )}
                    {entry.liveUrl && (
                      <Link
                        href={entry.liveUrl}
                        className="inline-flex items-center gap-2 text-sm text-emerald-400 transition-colors hover:text-emerald-300"
                      >
                        Where it went <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="px-4 pb-24 text-center sm:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="font-heading text-2xl font-semibold [text-wrap:balance]">
              The apps that lived
            </h2>
            <p className="mt-4 text-zinc-400 [text-wrap:pretty]">
              Killing the wrong products is what keeps the right ones alive.
              The survivors are on the App Store today.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/apps"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-emerald-400/40 hover:text-emerald-300"
              >
                See the live apps
              </Link>
              <Link
                href="/mobile-apps"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-emerald-400/40 hover:text-emerald-300"
              >
                Hire me to build yours
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
