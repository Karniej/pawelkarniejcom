/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { AppShowcaseItem } from "@/lib/apps-data";

interface AppQuickNavProps {
  apps: AppShowcaseItem[];
  /**
   * Prefix for each tile link. Defaults to "#" so a page can anchor to
   * its own showcase sections. Pages without those sections pass a real
   * path (for example "/apps/") so the tiles do not link into nothing.
   */
  linkBase?: string;
  acquiredLabel?: string;
  navLabel?: string;
}

// Auto-scrolling wheel of production apps. A rAF loop drives the
// horizontal offset (seamless loop over a doubled list) and, per frame,
// bends the row into an arc. Hover pauses; drag scrubs with momentum.
const SPEED_PX_PER_S = 28;
const ARC_DEPTH_PX = 84;
const TILT_DEG = 14;
const DRAG_SUPPRESS_CLICK_PX = 6;

export const AppQuickNav = ({
  apps,
  linkBase = "#",
  acquiredLabel = "Sold",
  navLabel = "Jump to an app",
}: AppQuickNavProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const movedRef = useRef(0);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const lastPointerX = useRef(0);
  const lastPointerT = useRef(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || apps.length === 0) return;
    const prefersReduced = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || prefersReduced()) {
      track.style.transform = "";
      for (const el of Array.from(track.children)) {
        const wrapper = el as HTMLElement;
        wrapper.style.transform = "";
        wrapper.style.opacity = "";
      }
      return;
    }

    let last = performance.now();
    let frame = 0;

    const step = (now: number) => {
      if (prefersReduced()) return;
      const dt = Math.min(now - last, 100) / 1000;
      last = now;

      if (!draggingRef.current) {
        if (Math.abs(velocityRef.current) > 8) {
          offsetRef.current += velocityRef.current * dt;
          velocityRef.current *= Math.pow(0.05, dt);
        } else if (!pausedRef.current) {
          offsetRef.current -= SPEED_PX_PER_S * dt;
        }
      }

      const half = track.scrollWidth / 2;
      if (half > 0) {
        while (-offsetRef.current >= half) offsetRef.current += half;
        while (offsetRef.current > 0) offsetRef.current -= half;
      }
      track.style.transform = `translateX(${offsetRef.current}px)`;

      const rect = container.getBoundingClientRect();
      const mid = rect.left + rect.width / 2;
      const halfWidth = rect.width / 2;
      for (const el of Array.from(track.children)) {
        const wrapper = el as HTMLElement;
        const tileRect = wrapper.getBoundingClientRect();
        const d = (tileRect.left + tileRect.width / 2 - mid) / halfWidth;
        const clamped = Math.max(-1.15, Math.min(1.15, d));
        wrapper.style.transform = `translateY(${
          ARC_DEPTH_PX * clamped * clamped
        }px) rotate(${TILT_DEG * clamped}deg)`;
        const edge = Math.abs(clamped);
        wrapper.style.opacity = String(
          edge <= 0.55 ? 1 : Math.max(0, 1 - (edge - 0.55) / 0.5),
        );
      }

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [apps.length, reduceMotion]);

  if (apps.length === 0) return null;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    movedRef.current = 0;
    velocityRef.current = 0;
    lastPointerX.current = e.clientX;
    lastPointerT.current = performance.now();
    containerRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastPointerX.current;
    const now = performance.now();
    const dtMs = now - lastPointerT.current;
    offsetRef.current += dx;
    movedRef.current += Math.abs(dx);
    if (dtMs > 0) velocityRef.current = (dx / dtMs) * 1000;
    lastPointerX.current = e.clientX;
    lastPointerT.current = now;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  const items = reduceMotion ? apps : [...apps, ...apps];

  return (
    <section
      className={
        reduceMotion
          ? "bg-black pb-16 pt-10 md:pb-20 md:pt-12"
          : "overflow-hidden bg-black pb-16 pt-10 md:pb-20 md:pt-12"
      }
    >
      <div
        ref={containerRef}
        aria-label={navLabel}
        className={
          reduceMotion
            ? "overflow-x-auto px-4"
            : "cursor-grab select-none active:cursor-grabbing"
        }
        style={reduceMotion ? undefined : { touchAction: "pan-y" }}
        onPointerDown={reduceMotion ? undefined : onPointerDown}
        onPointerMove={reduceMotion ? undefined : onPointerMove}
        onPointerUp={reduceMotion ? undefined : endDrag}
        onPointerCancel={reduceMotion ? undefined : endDrag}
      >
        <div
          ref={trackRef}
          className={
            reduceMotion
              ? "mx-auto flex w-max max-w-full flex-wrap justify-center gap-3"
              : "flex w-max gap-3 will-change-transform"
          }
        >
          {items.map((app, i) => {
            const looped = !reduceMotion && i >= apps.length;
            return (
              <div
                key={looped ? `${app.id}-loop` : app.id}
                className="shrink-0"
                onMouseEnter={
                  reduceMotion
                    ? undefined
                    : () => {
                        pausedRef.current = true;
                      }
                }
                onMouseLeave={
                  reduceMotion
                    ? undefined
                    : () => {
                        pausedRef.current = false;
                      }
                }
              >
                <a
                  href={`${linkBase}${app.id}`}
                  aria-hidden={looped}
                  tabIndex={looped ? -1 : undefined}
                  draggable={false}
                  onClick={(e) => {
                    if (!reduceMotion && movedRef.current > DRAG_SUPPRESS_CLICK_PX) {
                      e.preventDefault();
                    }
                  }}
                  className="group flex w-36 flex-col items-center rounded-2xl border border-white/15 bg-white/[0.04] px-3 py-4 text-center transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:border-emerald-500/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-emerald-500/10 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
                  style={
                    reduceMotion
                      ? undefined
                      : {
                          transitionTimingFunction:
                            "cubic-bezier(0.32, 0.72, 0, 1)",
                        }
                  }
                >
                  <Image
                    src={app.icon}
                    alt={looped ? "" : `${app.title} app icon`}
                    width={64}
                    height={64}
                    draggable={false}
                    className={`h-14 w-14 rounded-[14px] border shadow-lg shadow-black/40 transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
                      app.acquired
                        ? "border-amber-400/60 shadow-amber-500/20"
                        : "border-white/15"
                    }`}
                  />
                  <span className="mt-2.5 text-sm font-semibold leading-tight text-white">
                    {app.title}
                  </span>
                  {app.acquired ? (
                    <span className="mt-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                      {acquiredLabel}
                    </span>
                  ) : (
                    <span className="mt-1 text-xs leading-snug text-zinc-400">
                      {app.tagline}
                    </span>
                  )}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppQuickNav;
