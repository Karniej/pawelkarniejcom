/** @format */

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import type { NowItem, NowKind } from "@/lib/now-items";

const SLIDE = { duration: 0.28, ease: [0.32, 0.72, 0, 1] as const };

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

function ItemRow({ item }: { item: NowItem }) {
  return (
    <NowLink
      item={item}
      className="flex h-full min-w-0 items-center gap-3 hover:text-selfmade"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center">
        <BrandMark kind={item.kind} />
      </span>
      <span className="min-w-0 truncate pr-1 text-[14px] font-semibold text-white group-hover:text-selfmade">
        {item.title}
      </span>
    </NowLink>
  );
}

export function StatusNowBar({ items }: { items: NowItem[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [items.length, paused]);

  const active = items[index];
  if (!active) return null;

  return (
    <div
      className="group px-2 py-1"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-7 overflow-hidden" aria-live="off">
        {reduceMotion ? (
          <ItemRow item={active} />
        ) : (
          <AnimatePresence initial={false}>
            <motion.div
              key={active.kind}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={SLIDE}
              className="absolute inset-0"
            >
              <ItemRow item={active} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
