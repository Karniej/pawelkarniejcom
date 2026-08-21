/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NowItem } from "@/lib/now-items";

function XMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-selfmade" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.7 10.3 22 2h-2.2l-6.3 7.1L8.4 2H2l7.7 10.9L2 22h2.2l6.8-7.7L15.6 22H22l-7.3-11.7z"
      />
    </svg>
  );
}

function Thumb({ item, active }: { item: NowItem; active: boolean }) {
  return (
    <span
      className={`relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-black ring-offset-2 ring-offset-zinc-950 transition ${
        active ? "ring-2 ring-selfmade" : "opacity-55 hover:opacity-90"
      }`}
    >
      {item.image ? (
        <Image
          src={item.image}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 object-cover"
        />
      ) : (
        <XMark />
      )}
    </span>
  );
}

export function StatusNowBar({ items }: { items: NowItem[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [items.length]);

  const active = items[index];
  if (!active) return null;

  const titleClass =
    "block min-w-0 truncate text-[15px] font-semibold text-white transition hover:text-selfmade";

  return (
    <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2.5">
      <div className="flex shrink-0 items-center gap-1.5">
        {items.map((item, itemIndex) => {
          const className = "rounded-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-selfmade";
          const thumb = (
            <Thumb item={item} active={itemIndex === index} />
          );
          if (item.external) {
            return (
              <a
                key={item.kind}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                aria-label={`${item.label}: ${item.title}`}
                onMouseEnter={() => setIndex(itemIndex)}
                onFocus={() => setIndex(itemIndex)}
              >
                {thumb}
              </a>
            );
          }
          return (
            <Link
              key={item.kind}
              href={item.href}
              className={className}
              aria-label={`${item.label}: ${item.title}`}
              onMouseEnter={() => setIndex(itemIndex)}
              onFocus={() => setIndex(itemIndex)}
            >
              {thumb}
            </Link>
          );
        })}
      </div>
      {active.external ? (
        <a
          href={active.href}
          target="_blank"
          rel="noopener noreferrer"
          className={titleClass}
        >
          {active.title}
        </a>
      ) : (
        <Link href={active.href} className={titleClass}>
          {active.title}
        </Link>
      )}
    </div>
  );
}
