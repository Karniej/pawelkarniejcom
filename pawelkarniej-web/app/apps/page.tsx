import type { Metadata } from "next";
import Link from "next/link";
import { DEVELOPER_PAGES, getFeaturedApps } from "@/lib/apps-data";
import { AppQuickNav } from "@/components/sections/app-quick-nav";
import { IndividualAppShowcase } from "@/components/sections/individual-app-showcase";

export const metadata: Metadata = {
  title: "Apps I have built and shipped | Paweł Karniej",
  description:
    "Production apps I have shipped and sold: VidNotes, Aividly, Teleprompter Pro X, Newsletterytics, Coldsmith, YapperX, and FIFTN.",
  alternates: { canonical: "https://pawelkarniej.com/apps" },
};

export default function AppsPage() {
  const apps = getFeaturedApps();

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <header className="mx-auto max-w-[680px] px-4 pb-8 pt-28 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Selected work
          </p>
          <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight [text-wrap:balance] md:text-6xl">
            Apps I have shipped
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400 [text-wrap:pretty]">
            Production apps on the App Store. Two of them sold to new owners.
            Drag the wheel, or scroll for screenshots and the stack.
          </p>
        </header>

        <AppQuickNav apps={apps} navLabel="Jump to an app" />

        {apps.map((app, index) => (
          <IndividualAppShowcase
            key={app.id}
            app={app}
            index={index}
            isReversed={index % 2 !== 0}
          />
        ))}

        <section className="px-4 pb-24 pt-8 text-center">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="font-heading text-2xl font-semibold [text-wrap:balance]">
              Verify the work on the App Store
            </h2>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={DEVELOPER_PAGES.pawelKarniej}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-emerald-400/40 hover:text-emerald-300"
              >
                Paweł Karniej apps
              </a>
              <a
                href={DEVELOPER_PAGES.silphoLLC}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-emerald-400/40 hover:text-emerald-300"
              >
                Silpho LLC apps
              </a>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              <Link href="/mobile-apps" className="text-emerald-300 hover:underline">
                Book a mobile sprint
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
