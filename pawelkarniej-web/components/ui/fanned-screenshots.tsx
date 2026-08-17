/** @format */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FannedScreenshotsProps {
  screenshots: string[];
  title: string;
}

const CARDS = [
  {
    fan: { rotate: -7, x: "-82%", y: 16 },
    straight: { rotate: 0, x: "-105%", y: 0 },
  },
  {
    fan: { rotate: 0, x: "0%", y: -10 },
    straight: { rotate: 0, x: "0%", y: 0 },
  },
  {
    fan: { rotate: 7, x: "82%", y: 16 },
    straight: { rotate: 0, x: "105%", y: 0 },
  },
];

export const FannedScreenshots = ({
  screenshots,
  title,
}: FannedScreenshotsProps) => {
  return (
    <motion.div
      initial="fan"
      animate="fan"
      whileHover="straight"
      className="relative flex h-[400px] w-full items-center justify-center md:h-[540px]"
    >
      {screenshots.slice(0, 3).map((src, i) => (
        <motion.div
          key={src}
          variants={{ fan: CARDS[i].fan, straight: CARDS[i].straight }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className={cn(
            "absolute w-40 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60 md:w-56",
            i === 1 ? "z-10" : "z-0",
          )}
        >
          <Image
            src={src}
            alt={`${title} App Store screenshot ${i + 1}`}
            width={620}
            height={1343}
            className="h-auto w-full"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FannedScreenshots;
