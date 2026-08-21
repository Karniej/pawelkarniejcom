import type { Metadata } from "next";
import { MobileAppsContent } from "@/components/pages/mobile-apps-content";

export const metadata: Metadata = {
  title: "Apps | Paweł Karniej",
  description:
    "I build iOS and Android apps in four week sprints, and I ship my own. Fixed scope, fixed price from $3,999. Production apps on the App Store, including three sold to new owners.",
  alternates: { canonical: "https://pawelkarniej.com/apps" },
};

export default function AppsPage() {
  return <MobileAppsContent />;
}
