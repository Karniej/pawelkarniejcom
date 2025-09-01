/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Database, Lock, FileText } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Section = ({
  title,
  children,
  icon: Icon,
  iconColor,
}: {
  title: string;
  children: React.ReactNode;
  icon?: any;
  iconColor?: string;
}) => {
  const getIconClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return "w-8 h-8 p-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30";
      case "blue":
        return "w-8 h-8 p-1.5 rounded-lg bg-blue-500/20 border border-blue-500/30";
      case "purple":
        return "w-8 h-8 p-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30";
      case "red":
        return "w-8 h-8 p-1.5 rounded-lg bg-red-500/20 border border-red-500/30";
      case "yellow":
        return "w-8 h-8 p-1.5 rounded-lg bg-yellow-500/20 border border-yellow-500/30";
      default:
        return "w-8 h-8 p-1.5 rounded-lg bg-gray-500/20 border border-gray-500/30";
    }
  };

  const getIconTextClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return "w-full h-full text-emerald-400";
      case "blue":
        return "w-full h-full text-blue-400";
      case "purple":
        return "w-full h-full text-purple-400";
      case "red":
        return "w-full h-full text-red-400";
      case "yellow":
        return "w-full h-full text-yellow-400";
      default:
        return "w-full h-full text-gray-400";
    }
  };

  return (
    <Card className="modern-card mb-6">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          {Icon && iconColor && (
            <div className={getIconClasses(iconColor)}>
              <Icon className={getIconTextClasses(iconColor)} />
            </div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
};

export default function MoonLattePrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
              <Shield className="w-full h-full text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="gradient-text">MoonLatte</span> Privacy Policy
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              A simple caffeine tracker with no tracking and no data collection.
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. What We Collect" icon={Database} iconColor="emerald">
              <p className="text-zinc-300">
                MoonLatte does not collect, track, or transmit any personal data.
                There are no analytics, no advertising identifiers, and no third-party SDKs for tracking.
              </p>
            </Section>

            <Section title="2. Where Your Data Lives" icon={Lock} iconColor="purple">
              <div className="space-y-4">
                <p className="text-zinc-300">
                  Any caffeine entries or preferences you create are stored locally on your device.
                  They never leave your device unless you explicitly back them up using your own system-level tools.
                </p>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-100 text-sm">
                  <strong>Local-only:</strong> We do not operate servers for MoonLatte and we do not process your data remotely.
                </div>
              </div>
            </Section>

            <Section title="3. Third-Party Services" icon={FileText} iconColor="blue">
              <p className="text-zinc-300">
                MoonLatte does not use third-party analytics, advertising, or tracking services.
                If the app uses platform features (e.g., iCloud device backups), those are governed by Apple&apos;s policies.
              </p>
            </Section>

            <Section title="4. Your Control" icon={Shield} iconColor="yellow">
              <p className="text-zinc-300">
                You can delete all data by removing the app from your device. If a future version adds export or reset features,
                those will act locally and remain optional.
              </p>
            </Section>

            <Section title="5. Changes to This Policy" icon={FileText} iconColor="purple">
              <p className="text-zinc-300">
                If we ever change how MoonLatte handles data, we will update this page. As of December 2024, MoonLatte collects no data.
              </p>
            </Section>

            <Section title="6. Contact" icon={Shield} iconColor="emerald">
              <p className="text-zinc-300">
                Questions? Email
                {" "}
                <a href="mailto:contact@pawelkarniej.com" className="text-emerald-400 hover:underline">
                  contact@pawelkarniej.com
                </a>
                .
              </p>
            </Section>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" passHref>
              <GradientButton>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </GradientButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


