import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  content: string;
  data: {
    title: string;
    date: string;
    excerpt?: string;
    tags?: string[];
    featuredImage?: string;
  };
};

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => getPostBySlug(fileName.replace(/\.mdx$/, "")))
    .filter((post): post is Post => Boolean(post))
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );
}

export function getPostBySlug(slug: string): Post | undefined {
  const safeSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${safeSlug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  return { slug: safeSlug, content, data } as Post;
}
