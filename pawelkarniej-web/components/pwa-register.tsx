/** @format */

"use client";

import { useEffect } from "react";

// Registers the service worker that makes the site installable. It runs only
// in the browser, only in production, and it never blocks the first paint.
export function PwaRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // An install failure must never break the page. The site works without
        // the worker; it just stops being installable.
      });
    };

    if (document.readyState === "complete") {
      register();
      return;
    }

    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}

export default PwaRegister;
