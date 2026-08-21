/** @format */

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getNowItems, type NowItem, type NowKind } from "@/lib/now-items";

function Icon({ kind }: { kind: NowKind }) {
  const mark = "h-5 w-5 shrink-0";

  switch (kind) {
    case "video":
      return (
        <svg viewBox="0 0 24 24" className={mark} aria-hidden="true">
          <path
            fill="#FF0000"
            d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z"
          />
          <path fill="#fff" d="M9.8 15.5V8.5L16.2 12z" />
        </svg>
      );
    case "blog":
      return (
        <span className={`${mark} overflow-hidden rounded-[4px] bg-black`}>
          <Image
            src="/favicon.png"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-cover"
          />
        </span>
      );
    case "podcast":
      return (
        <span className={`${mark} overflow-hidden rounded-[4px] bg-selfmade p-px`}>
          <Image
            src="/images/fired-by-robots.png"
            alt=""
            width={20}
            height={20}
            className="h-full w-full rounded-[3px] object-cover"
          />
        </span>
      );
    case "x":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${mark} text-selfmade`}
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M14.7 10.3 22 2h-2.2l-6.3 7.1L8.4 2H2l7.7 10.9L2 22h2.2l6.8-7.7L15.6 22H22l-7.3-11.7z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${mark} text-selfmade`}
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${mark} text-selfmade`}
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12.65 2H15a5.5 5.5 0 0 0 5 5v2.3a8.3 8.3 0 0 1-5-1.7v6.4a5.6 5.6 0 1 1-5.6-5.6c.24 0 .47.02.7.05v2.35a2.9 2.9 0 1 0 2.9 2.9V2z"
          />
        </svg>
      );
  }
}

function NowLink({
  item,
  className,
  children,
}: {
  item: NowItem;
  className: string;
  children: ReactNode;
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`${item.label}: ${item.title}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className={className}
      aria-label={`${item.label}: ${item.title}`}
    >
      {children}
    </Link>
  );
}

function MarqueeItem({ item }: { item: NowItem }) {
  return (
    <NowLink item={item} className="flex shrink-0 items-center gap-2.5 px-4">
      <Icon kind={item.kind} />
      <span className="text-[15px] font-semibold leading-none text-white">
        {item.title}
      </span>
    </NowLink>
  );
}

export function StatusStripe() {
  const items = getNowItems();
  if (items.length === 0) return null;

  const loop = [...items, ...items];

  return (
    <div
      aria-label="Latest from Paweł"
      className="pointer-events-none fixed inset-x-0 z-40 bottom-[5.5rem] md:bottom-auto md:top-[4.75rem]"
    >
      <div className="now-marquee pointer-events-auto border-y border-white/10 bg-zinc-950/95 backdrop-blur-xl md:border-t-0">
        <div className="now-marquee-track py-3">
          {loop.map((item, index) => (
            <div key={`${item.kind}-${index}`} className="flex items-center">
              <MarqueeItem item={item} />
              <span
                aria-hidden="true"
                className="h-1 w-1 shrink-0 rounded-full bg-selfmade/80"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
