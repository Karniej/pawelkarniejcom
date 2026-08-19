import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PostContent } from "@/components/blog/post-content";
import { articleSchema, breadcrumbSchema, buildArticleMetadata, canonical, SITE_NAME, SITE_URL } from "@/lib/blog-seo";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return buildArticleMetadata({
    title: post.data.title,
    description: post.data.excerpt ?? post.data.title,
    slug: post.slug,
    image: post.data.featuredImage,
    publishedTime: post.data.date,
    keywords: post.data.tags,
  });
}

function readingTime(content: string): number {
  return Math.max(1, Math.round(content.split(/\s+/).filter(Boolean).length / 220));
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const url = canonical(`/blog/${post.slug}`);
  const image = post.data.featuredImage ? `${SITE_URL}${post.data.featuredImage}` : undefined;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={articleSchema({ url, headline: post.data.title, description: post.data.excerpt ?? post.data.title, datePublished: post.data.date, image, keywords: post.data.tags })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: post.data.title, url }])} />
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-20 sm:px-6">
        <nav className="mb-10 text-sm text-zinc-500">
          <Link href="/blog" className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-300">← Back to blog</Link>
        </nav>
        <header className="mb-12">
          {post.data.tags?.length ? <div className="mb-5 flex flex-wrap gap-2">{post.data.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs uppercase tracking-wider text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">{tag}</span>)}</div> : null}
          <h1 className="text-3xl font-bold leading-[1.12] tracking-tight md:text-5xl">{post.data.title}</h1>
          {post.data.excerpt ? <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">{post.data.excerpt}</p> : null}
          <div className="mt-7 border-b border-black/10 pb-7 text-sm text-zinc-500 dark:border-white/10">
            <span>{SITE_NAME}</span><span className="mx-2">·</span>
            <time>{new Date(post.data.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span className="mx-2">·</span><span>{readingTime(post.content)} min read</span>
          </div>
        </header>
        {post.data.featuredImage && post.data.featuredImage !== "/favicon.png" ? <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10"><Image src={post.data.featuredImage} alt={post.data.title} fill className="object-cover" priority /></div> : null}
        <PostContent content={post.content} />
        <aside className="mt-20 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.06] p-8 text-center md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">Need help with a mobile app or an automation?</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">Tell me what is blocked. I will help you choose the smallest useful next step.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Contact me</Link>
        </aside>
      </article>
    </div>
  );
}
