import type { Metadata } from "next";

export const SITE_URL = "https://pawelkarniej.com";
export const SITE_NAME = "Paweł Karniej";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function canonical(pathname: string): string {
  if (!pathname || pathname === "/") return SITE_URL;
  return `${SITE_URL}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function buildArticleMetadata(input: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedTime?: string;
  keywords?: string[];
}): Metadata {
  const url = canonical(`/blog/${input.slug}`);
  const image = input.image
    ? input.image.startsWith("http")
      ? input.image
      : `${SITE_URL}${input.image}`
    : DEFAULT_OG_IMAGE;

  return {
    title: `${input.title} | ${SITE_NAME}`,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image }],
      type: "article",
      publishedTime: input.publishedTime,
      authors: [SITE_NAME],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
      creator: "@pawelkarniej",
    },
  };
}

export function articleSchema(input: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  image?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    image: input.image ?? DEFAULT_OG_IMAGE,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    keywords: input.keywords,
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
