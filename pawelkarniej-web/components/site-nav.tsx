/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/mobile-apps", label: "Mobile apps" },
  { href: "/automations", label: "Automations" },
  { href: "/apps", label: "My apps" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Desktop: floating glass pill */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto mt-6 flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
                isActive(link.href)
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile: hamburger that morphs into an X, full screen glass overlay */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
        >
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
              open ? "rotate-45" : "-translate-y-1.5",
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
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
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-3xl md:hidden"
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
                        isActive(link.href) ? "text-white" : "text-zinc-400",
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
