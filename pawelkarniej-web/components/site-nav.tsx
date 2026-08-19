/** @format */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  Home,
  Menu,
  Moon,
  Smartphone,
  Sun,
  X,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/automations", label: "Automations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// The three the bottom bar shows without opening the sheet.
const PRIMARY_LINKS = [
  { href: "/", label: "Home", short: "Home", icon: Home },
  { href: "/apps", label: "Apps", short: "Apps", icon: Smartphone },
  { href: "/automations", label: "Automations", short: "Automate", icon: Zap },
];

function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex items-center justify-center rounded-full text-zinc-600 hover:bg-black/5 hover:text-black dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-selfmade",
        className,
      )}
    >
      {/* Render both icons until mounted so server and client markup match */}
      {!mounted ? (
        <span className="h-4 w-4" />
      ) : isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Desktop: the same pill as the phone. The active item carries a black
          lozenge that slides between the links, so both sizes behave alike. */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto mt-6 flex items-center gap-1 rounded-full border border-white/25 bg-selfmade/90 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_18px_45px_-14px_rgba(0,0,0,0.55)] backdrop-blur-xl backdrop-saturate-200">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  // The pill is the brand yellow, so the resting text stays near
                  // black in both themes. Light text on this yellow is unreadable.
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300",
                  active
                    ? "text-selfmade"
                    : "text-zinc-900 hover:text-black dark:text-zinc-900",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill-desktop"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-full bg-black/80"
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
          <span className="mx-1 h-6 w-px bg-black/20" aria-hidden="true" />
          <ThemeToggle className="h-9 w-9 text-zinc-900 hover:bg-black/20 hover:text-black dark:text-zinc-900 dark:hover:bg-black/20 dark:hover:text-black" />
        </div>
      </nav>

      {/* Mobile: a compact floating pill, not a full width slab. The active
          item carries a black lozenge that slides between the icons, which is
          where the glass feels alive. */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:hidden">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/25 bg-selfmade/90 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_18px_45px_-12px_rgba(0,0,0,0.65)] backdrop-blur-2xl backdrop-saturate-200">
          {PRIMARY_LINKS.map((link) => {
            const active = isActive(link.href) && !open;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-label={link.label}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="relative flex h-12 items-center gap-2 rounded-full px-4 text-zinc-900 transition-transform duration-300 active:scale-[0.96]"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-full bg-black/80"
                  />
                )}
                <link.icon
                  className={cn(
                    "relative h-5 w-5 transition-colors duration-300",
                    active ? "text-selfmade" : "text-zinc-900",
                  )}
                />
                {active && (
                  <span className="relative text-[13px] font-semibold text-selfmade">
                    {link.short}
                  </span>
                )}
              </Link>
            );
          })}

          <span className="mx-0.5 h-6 w-px bg-black/20" aria-hidden="true" />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-12 items-center gap-2 rounded-full px-4 text-zinc-900 transition-transform duration-300 active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
          >
            {open && (
              <motion.span
                layoutId="nav-pill"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                className="absolute inset-0 rounded-full bg-black/80"
              />
            )}
            {open ? (
              <X className="relative h-5 w-5 text-selfmade" />
            ) : (
              <Menu className="relative h-5 w-5 text-zinc-900" />
            )}
            {open && (
              <span className="relative text-[13px] font-semibold text-selfmade">
                Close
              </span>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md md:hidden"
            />
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-x-4 bottom-24 z-40 overflow-hidden rounded-[28px] border border-white/25 bg-selfmade/90 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_28px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl backdrop-saturate-200 md:hidden"
            >
              <nav aria-label="Mobile navigation">
                <ul>
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-[20px] px-4 py-3 font-heading text-lg font-bold text-zinc-900 transition-colors duration-300",
                          isActive(link.href)
                            ? "bg-black/80 text-selfmade"
                            : "hover:bg-black/10",
                        )}
                      >
                        {link.label}
                        <ArrowUpRight className="h-4 w-4 opacity-60" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-1 flex items-center justify-between border-t border-black/20 px-4 pt-3 pb-1">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800">
                  Theme
                </span>
                <ThemeToggle className="h-10 w-10 text-zinc-900 hover:bg-black/20 hover:text-black dark:text-zinc-900 dark:hover:bg-black/20" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
