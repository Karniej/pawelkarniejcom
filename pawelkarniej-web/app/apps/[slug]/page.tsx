import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ExternalLink } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { appShowcases, getAppById } from "@/lib/apps-data";
import { canonical, SITE_URL } from "@/lib/blog-seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return appShowcases.map((app) => ({ slug: app.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const app = getAppById(params.slug);
  if (!app) return {};
  const description = app.detailedDescription?.slice(0, 200) ?? app.description;
  return {
    title: `${app.title}: ${app.tagline} | Built by Paweł Karniej`,
    description,
    alternates: { canonical: canonical(`/apps/${app.id}`) },
    openGraph: { title: app.title, description, url: canonical(`/apps/${app.id}`), images: [{ url: `${SITE_URL}${app.screenshots[0]}` }], type: "article" },
  };
}

export default function AppPage({ params }: Props) {
  const app = getAppById(params.slug);
  if (!app) notFound();
  const url = canonical(`/apps/${app.id}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.title,
    description: app.detailedDescription ?? app.description,
    url,
    applicationCategory: "MobileApplication",
    operatingSystem: app.platforms.join(", "),
    image: `${SITE_URL}${app.screenshots[0]}`,
    author: { "@type": "Person", name: "Paweł Karniej", url: SITE_URL },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={schema} />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6">
        <Link href="/apps" className="text-sm text-zinc-500 transition-colors hover:text-emerald-700 dark:hover:text-emerald-300">← Back to apps</Link>
        <section className="mx-auto mt-14 max-w-4xl text-center">
          <Image src={app.icon} alt={`${app.title} icon`} width={96} height={96} className="mx-auto h-24 w-24 rounded-[1.5rem] object-cover shadow-2xl" priority />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">{app.category} · {app.platforms.join(" / ")}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{app.title}</h1>
          <p className="mt-4 text-2xl text-zinc-700 dark:text-zinc-300">{app.tagline}</p>
          {app.acquired ? (
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
              Built and sold
            </p>
          ) : null}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{app.detailedDescription ?? app.description}</p>
          {app.appStoreUrl ? <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">View on the App Store <ExternalLink className="h-4 w-4" /></a> : null}
        </section>

        <section className="mt-20 grid gap-5 md:grid-cols-2">
          {app.features.map((feature) => <div key={feature} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-black/[0.03] p-5 dark:border-white/10 dark:bg-white/[0.03]"><Check className="mt-0.5 h-5 w-5 flex-none text-emerald-400" /><span className="leading-relaxed text-zinc-700 dark:text-zinc-300">{feature}</span></div>)}
        </section>

        <section className="mt-20">
          <h2 className="text-center text-3xl font-bold">In the app</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {app.screenshots.map((src) => <div key={src} className="overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03]"><Image src={src} alt={`${app.title} screenshot`} width={390} height={844} className="h-auto w-full" /></div>)}
          </div>
        </section>

        {app.techStack?.length ? <section className="mx-auto mt-20 max-w-3xl text-center"><h2 className="text-3xl font-bold">How I built it</h2><div className="mt-7 flex flex-wrap justify-center gap-2">{app.techStack.map((tech) => <span key={tech} className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">{tech}</span>)}</div></section> : null}
        <aside className="mx-auto mt-20 max-w-3xl rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.06] p-8 text-center"><h2 className="text-3xl font-bold">Need help with your mobile app?</h2><p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">Tell me what you are building or what has stopped working. I will suggest the smallest useful next step.</p><Link href="/contact" className="mt-7 inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Contact me</Link></aside>
      </main>
    </div>
  );
}
