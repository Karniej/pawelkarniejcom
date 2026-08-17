import Image from "next/image";

const GENERIC_TAGS = new Set(["ai-built-apps", "vibe-coding"]);

function hashSlug(slug: string): number {
  let hash = 0;
  for (let index = 0; index < slug.length; index += 1) {
    hash = (hash * 31 + slug.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function topicLabel(tags: string[] | undefined, title: string): string {
  const tag = (tags ?? [])
    .filter((candidate) => !GENERIC_TAGS.has(candidate))
    .sort((a, b) => a.length - b.length)[0];
  return tag?.replace(/-/g, " ") ?? title.split(/[:?]/)[0];
}

export function PostThumb({
  slug,
  title,
  tags,
  featuredImage,
}: {
  slug: string;
  title: string;
  tags?: string[];
  featuredImage?: string;
}) {
  if (featuredImage && featuredImage !== "/favicon.png") {
    return (
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={featuredImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  const hue = hashSlug(slug) % 360;
  const label = topicLabel(tags, title);

  return (
    <div
      className="relative flex h-48 w-full items-end overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 45% 12%) 0%, hsl(${(hue + 40) % 360} 40% 7%) 100%)`,
      }}
      aria-hidden
    >
      <div
        className="absolute -right-8 -top-10 h-44 w-44 rounded-full opacity-25 blur-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: `hsl(${hue} 70% 45%)` }}
      />
      <span
        className="relative m-5 max-w-[85%] text-2xl font-bold uppercase leading-none tracking-tight"
        style={{ color: `hsl(${hue} 55% 72%)` }}
      >
        {label}
      </span>
    </div>
  );
}
