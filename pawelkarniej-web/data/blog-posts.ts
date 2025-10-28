/** @format */

export type BlogPostStatus = "published" | "draft" | "in-progress";

export interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  publishedOn?: string;
  readingTime?: string;
  status: BlogPostStatus;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "From Idea to App Store: Selling AIVidly",
    slug: "from-idea-to-app-store-selling-aividly",
    summary:
      "Lessons from building, launching, and ultimately selling an AI-powered video app.",
    status: "in-progress",
    tags: ["React Native", "AI", "Product Journey"],
  },
  {
    title: "Ship Fast, Learn Faster",
    slug: "ship-fast-learn-faster",
    summary:
      "The workflow I use to validate new mobile ideas within a couple of weekends.",
    status: "draft",
    tags: ["Productivity", "Process"],
  },
];

