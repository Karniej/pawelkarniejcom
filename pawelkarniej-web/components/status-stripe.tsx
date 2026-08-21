/** @format */

import Link from "next/link";
import type { ReactNode } from "react";
import {
  getDesktopNowItems,
  getNowItems,
  type NowItem,
  type NowKind,
} from "@/lib/now-items";

function Icon({ kind, size = "sm" }: { kind: NowKind; size?: "sm" | "md" }) {
  const className =
    size === "md"
      ? "h-5 w-5 shrink-0 text-selfmade"
      : "h-4 w-4 shrink-0 text-selfmade";
  switch (kind) {
    case "video":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M23 7.5v9c0 1.2-1.3 2-2.4 1.4L17 16.2V7.8l3.6-1.7c1.1-.6 2.4.2 2.4 1.4zM3 6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
          />
        </svg>
      );
    case "blog":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 4h10l4 4v12H5zM15 4v4h4M8 12h8M8 16h6"
          />
        </svg>
      );
    case "podcast":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M12 15a3 3 0 0 1-3-3V8a3 3 0 1 1 6 0v4a3 3 0 0 1-3 3zm-6.5-4a6.5 6.5 0 0 0 13 0M12 15v4m-3 0h6"
          />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M14.7 10.3 22 2h-2.2l-6.3 7.1L8.4 2H2l7.7 10.9L2 22h2.2l6.8-7.7L15.6 22H22l-7.3-11.7z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
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

function DesktopItem({ item }: { item: NowItem }) {
  return (
    <NowLink
      item={item}
      className="group flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2"
    >
      <Icon kind={item.kind} />
      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-selfmade">
        {item.label}
      </span>
      <span className="truncate text-[13px] font-medium text-zinc-100 transition group-hover:text-white">
        {item.title}
      </span>
    </NowLink>
  );
}

function MarqueeItem({ item }: { item: NowItem }) {
  return (
    <NowLink
      item={item}
      className="flex shrink-0 items-center gap-2.5 px-4"
    >
      <Icon kind={item.kind} size="md" />
      <span className="text-[15px] font-semibold leading-none text-white">
        {item.title}
      </span>
    </NowLink>
  );
}

export function StatusStripe() {
  const desktopItems = getDesktopNowItems();
  const mobileItems = getNowItems();
  if (desktopItems.length === 0) return null;

  const loop = [...mobileItems, ...mobileItems];

  return (
    <div aria-label="Latest from Paweł">
      <div className="pointer-events-none fixed inset-x-0 top-[4.75rem] z-40 hidden md:block">
        <div className="pointer-events-auto border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl">
            {desktopItems.map((item, index) => (
              <div key={item.kind} className="flex min-w-0 flex-1">
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="w-px shrink-0 bg-white/15"
                  />
                ) : null}
                <DesktopItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-[5.5rem] z-40 md:hidden">
        <div className="now-marquee pointer-events-auto border-y border-white/10 bg-zinc-950/95 backdrop-blur-xl">
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
    </div>
  );
}
