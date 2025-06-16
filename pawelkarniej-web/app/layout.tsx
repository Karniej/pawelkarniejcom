/** @format */

import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";

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
  title: "Pawel Karniej | React Native Developer",
  description:
    "Hi! I'm Paweł and I build apps using React Native since 2018. Creator of AI-powered mobile applications and technical writer.",
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
    title: "Pawel Karniej | React Native Developer",
    description:
      "Hi! I'm Paweł and I build apps using React Native since 2018. Creator of AI-powered mobile applications and technical writer.",
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
    title: "Pawel Karniej | React Native Developer",
    description:
      "Hi! I'm Paweł and I build apps using React Native since 2018. Creator of AI-powered mobile applications and technical writer.",
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
          <main className="flex min-h-screen flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
