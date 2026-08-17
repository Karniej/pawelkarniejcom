/** @format */

import type { Metadata } from "next";
import { AutomationsContent } from "@/components/pages/automations-content";

export const metadata: Metadata = {
  title: "AI automations with Paweł Karniej | Supervised workflows from $750",
  description:
    "I map one recurring workflow in your business and turn it into a supervised AI automation. Free 20 minute fit call, workflow map from $750, human approval built in.",
};

export default function AutomationsPage() {
  return <AutomationsContent />;
}
