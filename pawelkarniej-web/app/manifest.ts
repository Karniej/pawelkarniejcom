/** @format */

import type { MetadataRoute } from "next";

// Next writes this to /manifest.webmanifest during the static export.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "pawelkarniej.com",
    short_name: "pawelkarniej.com",
    description:
      "Your app in the stores. Your repeat work off your desk. Mobile apps and AI automations, built by one person.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#000000",
    theme_color: "#FEC602",
    categories: ["business", "productivity", "developer"],
    icons: [
      // The "any" icons are the bare mark on a transparent background. The
      // splash screen uses one of these on the black background, so the logo
      // appears without a yellow square around it.
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      // The launcher prefers the maskable icon, so the home screen keeps the
      // yellow square.
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      { name: "Mobile apps", url: "/mobile-apps" },
      { name: "Automations", url: "/automations" },
      { name: "Contact", url: "/contact" },
    ],
  };
}
