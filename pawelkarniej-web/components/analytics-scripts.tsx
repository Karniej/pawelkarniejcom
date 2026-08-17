import Script from "next/script";

const DEFAULT_WEBSITE_ID = "";

const ALLOWED_DOMAINS =
  process.env.NEXT_PUBLIC_UMAMI_DOMAINS?.trim() ||
  "pawelkarniej.com,www.pawelkarniej.com";

const WEBSITE_ID =
  process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim() || DEFAULT_WEBSITE_ID;

const SRC =
  process.env.NEXT_PUBLIC_UMAMI_SRC?.trim() ||
  "https://cloud.umami.is/script.js";

export default function AnalyticsScripts() {
  if (!WEBSITE_ID) return null;

  return (
    <Script
      src={SRC}
      data-website-id={WEBSITE_ID}
      data-domains={ALLOWED_DOMAINS}
      strategy="afterInteractive"
      defer
    />
  );
}
