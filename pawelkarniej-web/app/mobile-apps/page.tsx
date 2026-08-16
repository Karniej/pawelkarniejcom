/** @format */

import type { Metadata } from "next";
import { MobileAppsContent } from "@/components/pages/mobile-apps-content";

export const metadata: Metadata = {
  title: "Mobile app development with Paweł Karniej | Fixed price, 4 weeks",
  description:
    "I build revenue ready iOS and Android apps in four week sprints. Fixed scope, fixed price from $3,999, paywall and subscriptions included, store submission handled.",
};

export default function MobileAppsPage() {
  return <MobileAppsContent />;
}
