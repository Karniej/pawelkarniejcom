/** @format */

import { getNowItems } from "@/lib/now-items";
import { StatusNowBar } from "@/components/status-now-bar";

export function StatusStripe() {
  const items = getNowItems();
  if (items.length === 0) return null;

  return (
    <div
      aria-label="Latest from Paweł"
      className="pointer-events-none fixed inset-x-0 z-40 bottom-[5.5rem] md:bottom-auto md:top-[4.75rem]"
    >
      <div className="pointer-events-auto border-y border-white/10 bg-zinc-950/95 backdrop-blur-xl md:border-t-0">
        <StatusNowBar items={items} />
      </div>
    </div>
  );
}
