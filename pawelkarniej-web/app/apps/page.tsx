import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DEVELOPER_PAGES, getAllApps } from "@/lib/apps-data";

export const metadata: Metadata = {
  title: "Apps I Have Built and Shipped | Paweł Karniej",
  description:
    "Mobile apps I have built and shipped across AI, productivity, wellness, finance, media, and games.",
  alternates: { canonical: "https://pawelkarniej.com/apps" },
};

export default function AppsPage() {
  const apps = getAllApps();

  return (
    <div className="min-h-screen bg-black px-4 pb-24 pt-20 text-white sm:px-6">
      <main className="mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-emerald-300">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <header className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Selected work</p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">Apps I have built and shipped</h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">I have shipped mobile products across AI, productivity, wellness, finance, media, and games. Open any app to see its scope, features, stack, and live App Store listing.</p>
        </header>

        <section className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link key={app.id} href={`/apps/${app.id}`} className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06]">
              <div className="flex items-center gap-4">
                <Image src={app.icon} alt={`${app.title} icon`} width={64} height={64} className="h-16 w-16 rounded-2xl object-cover" />
                <div>
                  <span className="text-xs uppercase tracking-[0.16em] text-zinc-500">{app.category}</span>
                  <h2 className="mt-1 text-xl font-semibold text-white transition-colors group-hover:text-emerald-300">{app.title}</h2>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-400">{app.description}</p>
              <span className="mt-auto pt-5 text-sm font-medium text-emerald-300">View app →</span>
            </Link>
          ))}
        </section>

        <section className="mx-auto mt-20 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <h2 className="text-2xl font-semibold">Verify the work on the App Store</h2>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={DEVELOPER_PAGES.pawelKarniej} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-emerald-400/40 hover:text-emerald-300">Paweł Karniej apps ↗</a>
            <a href={DEVELOPER_PAGES.silphoLLC} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-emerald-400/40 hover:text-emerald-300">Silpho LLC apps ↗</a>
          </div>
        </section>
      </main>
    </div>
  );
}
