/** @format */

"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function MobileAppsRedirectPage() {
  useEffect(() => {
    window.location.replace("/apps/");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <p className="text-center text-lg text-zinc-600 dark:text-zinc-400">
        This page moved.{" "}
        <Link
          href="/apps/"
          className="text-emerald-700 underline dark:text-emerald-300"
        >
          Open Apps
        </Link>
        .
      </p>
    </main>
  );
}
