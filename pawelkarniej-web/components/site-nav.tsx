/** @format */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/mobile-apps", label: "Mobile apps" },
  { href: "/automations", label: "Automations" },
  { href: "/apps", label: "My apps" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
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
      {/* Desktop: yellow glass pill — tinted, not solid, so the CTA stays the loud yellow */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto mt-6 flex items-center gap-1 rounded-full border border-selfmade/35 bg-selfmade/45 px-3 py-2 shadow-[0_10px_30px_-16px_rgba(254,198,2,0.45)] backdrop-blur-xl dark:border-selfmade/25 dark:bg-selfmade/30">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
                isActive(link.href)
                  ? "bg-black/10 text-zinc-950 dark:bg-white/15 dark:text-white"
                  : "text-zinc-800 hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-100 dark:hover:bg-white/10 dark:hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle className="ml-1 h-9 w-9 text-zinc-800 hover:bg-black/10 hover:text-zinc-950 dark:text-zinc-100 dark:hover:bg-white/10 dark:hover:text-white" />
        </div>
      </nav>

      {/* Mobile: yellow glass hamburger that morphs into an X */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3 md:hidden">
        <ThemeToggle className="h-12 w-12 border border-selfmade/35 bg-selfmade/45 text-zinc-900 backdrop-blur-xl hover:bg-selfmade/60 hover:text-zinc-950 dark:border-selfmade/25 dark:bg-selfmade/30 dark:text-zinc-100 dark:hover:bg-selfmade/45 dark:hover:text-white" />
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-selfmade/35 bg-selfmade/45 backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-selfmade active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] dark:border-selfmade/25 dark:bg-selfmade/30"
        >
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-zinc-950 dark:bg-zinc-100 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
              open ? "rotate-45" : "-translate-y-1.5",
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-zinc-950 dark:bg-zinc-100 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-zinc-950 dark:bg-zinc-100 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
              open ? "-rotate-45" : "translate-y-1.5",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-selfmade/80 backdrop-blur-3xl md:hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul className="space-y-6 text-center">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + index * 0.05,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={cn(
                        "font-heading text-3xl font-bold",
                        isActive(link.href)
                          ? "text-zinc-950"
                          : "text-zinc-800",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
