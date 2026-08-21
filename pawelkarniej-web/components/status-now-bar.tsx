/** @format */

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import type { NowItem, NowKind } from "@/lib/now-items";
import { cn } from "@/lib/utils";

const SNAP = { type: "spring" as const, stiffness: 520, damping: 32 };
const SLIDE = { duration: 0.22, ease: [0.32, 0.72, 0, 1] as const };

function YouTubeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z"
      />
      <path fill="#fff" d="M9.8 15.5V8.5L16.2 12z" />
    </svg>
  );
}

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.7 10.3 22 2h-2.2l-6.3 7.1L8.4 2H2l7.7 10.9L2 22h2.2l6.8-7.7L15.6 22H22l-7.3-11.7z"
      />
    </svg>
  );
}

function BrandMark({ kind }: { kind: NowKind }) {
  if (kind === "video") return <YouTubeLogo />;

  if (kind === "blog") {
    return (
      <span className="flex h-5 w-5 overflow-hidden rounded-[4px] bg-black">
        <Image
          src="/favicon.png"
          alt=""
          width={20}
          height={20}
          className="h-5 w-5 object-cover"
        />
      </span>
    );
  }

  if (kind === "podcast") {
    return (
      <span className="flex h-5 w-5 overflow-hidden rounded-[4px] bg-selfmade p-px">
        <Image
          src="/images/fired-by-robots.png"
          alt=""
          width={20}
          height={20}
          className="h-full w-full rounded-[3px] object-cover"
        />
      </span>
    );
  }

  return <XLogo />;
}

function NowLink({
  item,
  className,
  onActivate,
  children,
}: {
  item: NowItem;
  className: string;
  onActivate?: () => void;
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
        onMouseEnter={onActivate}
        onFocus={onActivate}
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
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      {children}
    </Link>
  );
}

export function StatusNowBar({ items }: { items: NowItem[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || paused || items.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [items.length, paused, reduceMotion]);

  const active = items[index];
  if (!active) return null;

  const title = (
    <span className="block truncate text-[15px] font-semibold text-white hover:text-selfmade">
      {active.title}
    </span>
  );

  return (
    <div
      className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2.5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex shrink-0 items-center gap-1">
        {items.map((item, itemIndex) => {
          const isActive = itemIndex === index;
          return (
            <NowLink
              key={item.kind}
              item={item}
              onActivate={() => setIndex(itemIndex)}
              className="relative flex h-8 w-8 items-center justify-center rounded-[7px] focus:outline-none focus-visible:ring-2 focus-visible:ring-selfmade"
            >
              {isActive && (
                <motion.span
                  layoutId="now-active-ring"
                  className="absolute inset-0 rounded-[7px] bg-white/10 ring-2 ring-selfmade"
                  transition={SNAP}
                />
              )}
              <motion.span
                className="relative flex items-center justify-center"
                animate={
                  reduceMotion ? { scale: 1 } : { scale: isActive ? 1.12 : 0.92 }
                }
                transition={SNAP}
              >
                <BrandMark kind={item.kind} />
              </motion.span>
            </NowLink>
          );
        })}
      </div>
      <div
        className={cn(
          "relative min-w-0 flex-1 overflow-hidden",
          reduceMotion ? "h-auto" : "h-6",
        )}
        aria-live="polite"
      >
        {reduceMotion ? (
          <NowLink item={active} className="block min-w-0">
            {title}
          </NowLink>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.kind}
              initial={{ y: "80%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-80%", opacity: 0 }}
              transition={SLIDE}
              className="absolute inset-0 flex items-center"
            >
              <NowLink item={active} className="block min-w-0 max-w-full">
                {title}
              </NowLink>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
