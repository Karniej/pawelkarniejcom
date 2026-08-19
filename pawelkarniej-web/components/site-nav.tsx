/** @format */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Home, Menu, Moon, Smartphone, Sun, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/mobile-apps", label: "Mobile apps" },
  { href: "/automations", label: "Automations" },
  { href: "/apps", label: "My apps" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// The three the bottom bar shows without opening the sheet.
const PRIMARY_LINKS = [
  { href: "/", label: "Home", short: "Home", icon: Home },
  { href: "/mobile-apps", label: "Mobile apps", short: "Apps", icon: Smartphone },
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
      {/* Desktop: yellow glass pill — tinted, not solid, so the CTA stays the loud yellow */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto mt-6 flex items-center gap-1 rounded-full border border-selfmade/60 bg-selfmade/90 px-3 py-2 shadow-[0_12px_40px_-12px_rgba(254,198,2,0.8)] backdrop-blur-xl backdrop-saturate-200 dark:border-selfmade/60 dark:bg-selfmade/88">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                // The pill is the brand yellow, so the text stays near black in
                // both themes. Light text on this yellow is unreadable.
                "rounded-full px-3 py-2 text-sm font-semibold text-zinc-900 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] dark:text-zinc-900",
                isActive(link.href)
                  ? "bg-black/15 text-black dark:bg-black/20 dark:text-black"
                  : "hover:bg-black/10 hover:text-black dark:hover:bg-black/15 dark:hover:text-black",
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle className="ml-1 h-9 w-9 text-zinc-900 hover:bg-black/15 hover:text-black dark:text-zinc-900 dark:hover:bg-black/20 dark:hover:text-black" />
        </div>
      </nav>

      {/* Mobile: a bottom bar, the way a phone app puts navigation under the
          thumb. The full list opens as a sheet that slides up from the bar. */}
      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
        <div className="flex items-center justify-around gap-1 rounded-3xl border border-selfmade/60 bg-selfmade/90 px-2 py-2 shadow-[0_16px_40px_-12px_rgba(254,198,2,0.8)] backdrop-blur-2xl backdrop-saturate-200 dark:border-selfmade/60 dark:bg-selfmade/88">
          {PRIMARY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-semibold text-zinc-900 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] dark:text-zinc-900",
                isActive(link.href) && !open
                  ? "bg-black/15 text-black dark:bg-black/20"
                  : "hover:bg-black/10",
              )}
            >
              <link.icon className="h-5 w-5" />
              {link.short}
            </Link>
          ))}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-semibold text-zinc-900 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 dark:text-zinc-900",
              open ? "bg-black/15 text-black dark:bg-black/20" : "hover:bg-black/10",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            {open ? "Close" : "More"}
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
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-x-3 bottom-[5.5rem] z-40 rounded-3xl border border-selfmade/60 bg-selfmade/90 p-4 shadow-[0_24px_60px_-20px_rgba(254,198,2,0.8)] backdrop-blur-2xl backdrop-saturate-150 md:hidden dark:border-selfmade/50 dark:bg-selfmade/85"
            >
              <nav aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.05 + index * 0.04,
                        ease: [0.32, 0.72, 0, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={cn(
                          "block rounded-2xl px-4 py-3 font-heading text-xl font-bold text-zinc-900 transition-colors duration-300 dark:text-zinc-900",
                          isActive(link.href)
                            ? "bg-black/15 text-black dark:bg-black/20"
                            : "hover:bg-black/10",
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="mt-3 flex justify-end border-t border-black/10 pt-3">
                <ThemeToggle className="h-11 w-11 text-zinc-900 hover:bg-black/15 hover:text-black dark:text-zinc-900 dark:hover:bg-black/20" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
