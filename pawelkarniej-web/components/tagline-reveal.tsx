/** @format */

"use client";

import { motion } from "framer-motion";

// Large statement section: each word fades from muted to full color in
// reading order as the block scrolls into view.
export function TaglineReveal({ lines }: { lines: string[] }) {
  const words = lines.flatMap((line, lineIndex) => {
    const lineWords = line.split(" ").map((word) => ({ word, lineIndex }));
    return lineWords;
  });

  let wordCounter = 0;

  return (
    <section className="relative py-24 px-4">
      <div className="mx-auto max-w-[680px]">
        <p className="font-heading text-4xl md:text-5xl font-bold tracking-tight [text-wrap:balance]">
          {lines.map((line, lineIndex) => (
            <span key={lineIndex} className="block">
              {line.split(" ").map((word) => {
                const index = wordCounter++;
                return (
                  <motion.span
                    key={`${lineIndex}-${index}`}
                    initial={{ color: "rgba(255,255,255,0.3)" }}
                    whileInView={{ color: "rgba(255,255,255,1)" }}
                    viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.06,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                    {" "}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
