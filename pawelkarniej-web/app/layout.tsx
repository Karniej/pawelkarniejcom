/** @format */

import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/site-nav";
import { getNowItems } from "@/lib/now-items";
import localFont from "next/font/local";
import AnalyticsScripts from "@/components/analytics-scripts";
import { PwaRegister } from "@/components/pwa-register";

// Body font - Geist (using variable font for better performance)
const geist = localFont({
  src: "../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist",
  display: "swap",
});

// Heading font - Outfit (modern, clean)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pawelkarniej.com"),
  manifest: "/manifest.webmanifest",
  // Next 13 keeps these inside metadata. The phone paints the status bar and
  // the task switcher with the theme colour, and viewport-fit lets the bottom
  // bar sit inside the safe area.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FEC602" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport:
    "width=device-width, initial-scale=1, viewport-fit=cover",
  appleWebApp: {
    capable: true,
    title: "pawelkarniej.com",
    statusBarStyle: "black-translucent",
  },
  title: "Paweł Karniej | Mobile apps and AI automations",
  description:
    "I build mobile apps and AI automations for founders and small teams. Shipping React Native since 2018, with 20+ apps launched and three sold.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.png" }],
  },
  openGraph: {
    title: "Paweł Karniej | Mobile apps and AI automations",
    description:
      "I build mobile apps and AI automations for founders and small teams. Shipping React Native since 2018, with 20+ apps launched and three sold.",
    url: "https://pawelkarniej.com",
    siteName: "Pawel Karniej",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pawel Karniej - React Native Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paweł Karniej | Mobile apps and AI automations",
    description:
      "I build mobile apps and AI automations for founders and small teams. Shipping React Native since 2018, with 20+ apps launched and three sold.",
    creator: "@pawelkarniej",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geist.variable} ${outfit.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-black"
          >
            Skip to content
          </a>
          <SiteNav nowItems={getNowItems()} />
          <main
            id="main-content"
            className="flex min-h-screen flex-col pb-36 md:pb-0 md:pt-6"
          >
            {children}
          </main>
          <AnalyticsScripts />
          <PwaRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
