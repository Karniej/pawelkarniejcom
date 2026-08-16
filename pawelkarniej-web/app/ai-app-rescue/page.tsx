/** @format */

import type { Metadata } from "next";
import { AiAppRescueContent } from "@/components/pages/ai-app-rescue-content";

export const metadata: Metadata = {
  title: "AI app rescue: 48 hour audit by Paweł Karniej | $499",
  description:
    "Your AI built React Native or Expo app broke before launch? I audit the codebase in 48 hours and give you one clear decision: repair, rebuild, or start clean. $499, credited against a build.",
};

export default function AiAppRescuePage() {
  return <AiAppRescueContent />;
}
