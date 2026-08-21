/** @format */

import Link from "next/link";
import { getNowItems, type NowItem } from "@/lib/now-items";

function Item({ item }: { item: NowItem }) {
  const className =
    "group flex min-w-[58%] snap-start items-center gap-2 px-4 py-2 md:min-w-0 md:flex-1 md:justify-center md:px-3";

  const inner = (
    <>
      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-selfmade">
        {item.label}
      </span>
      <span className="truncate text-[13px] font-medium text-zinc-100 transition group-hover:text-white">
        {item.title}
      </span>
    </>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {inner}
    </Link>
  );
}

export function StatusStripe() {
  const items = getNowItems();
  if (items.length === 0) return null;

  return (
    <div
      aria-label="Latest video, blog, podcast, and post"
      className="pointer-events-none fixed inset-x-0 z-40 bottom-[5.25rem] md:bottom-auto md:top-[4.75rem]"
    >
      <div className="pointer-events-auto border-y border-white/10 bg-zinc-950/90 backdrop-blur-xl md:border-t-0">
        <div className="mx-auto flex max-w-7xl snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {items.map((item: NowItem, index) => (
            <div key={item.kind} className="flex min-w-0 md:flex-1">
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="hidden w-px shrink-0 bg-white/15 md:block"
                />
              ) : null}
              <Item item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
