import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PostThumb } from "@/components/blog/post-thumb";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Mobile Apps and AI Product Notes | Paweł Karniej",
  description:
    "Practical guides and case studies about React Native, AI mobile apps, subscriptions, App Store launches, and product delivery.",
  alternates: { canonical: "https://pawelkarniej.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-60 blur-3xl" />
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 pt-20 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-emerald-300">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <header className="mb-14 mt-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Writing by Paweł Karniej</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Mobile apps, AI products, and shipping lessons</h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">Practical guides and case studies from building React Native apps, AI products, subscription systems, and App Store releases.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06]">
              <PostThumb slug={post.slug} title={post.data.title} tags={post.data.tags} featuredImage={post.data.featuredImage} />
              <article className="flex flex-1 flex-col p-6">
                <time className="text-xs uppercase tracking-[0.16em] text-zinc-500">{new Date(post.data.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                <h2 className="mt-3 text-xl font-semibold leading-snug text-white transition-colors group-hover:text-emerald-300">{post.data.title}</h2>
                {post.data.excerpt ? <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">{post.data.excerpt}</p> : null}
                <span className="mt-auto pt-5 text-sm font-medium text-emerald-300">Read article →</span>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
