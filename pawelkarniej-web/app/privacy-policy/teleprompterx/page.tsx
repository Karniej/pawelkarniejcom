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
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card className="modern-card mb-6">
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">{children}</CardContent>
  </Card>
);

export default function TeleprompterXPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
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
              <span className="gradient-text">TeleprompterX</span> Privacy Policy
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              How we handle data and protect your privacy in TeleprompterX.
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Information We Collect">
              <div className="space-y-3 text-zinc-300">
                <p>We keep this simple and minimal:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Basic, anonymous usage analytics to improve the app</li>
                  <li>Crash diagnostics (no personal data)</li>
                </ul>
              </div>
            </Section>

            <Section title="2. How We Use Information">
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>To ensure core features work reliably</li>
                <li>To fix bugs and improve performance</li>
              </ul>
            </Section>

            <Section title="3. Data Storage & Security">
              <div className="space-y-3 text-zinc-300">
                <p>
                  Teleprompter content and preferences are stored locally on your
                  device. We do not store personal content on external servers.
                </p>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-100">
                  We use platform best practices to help keep your data secure.
                </div>
              </div>
            </Section>

            <Section title="4. Sharing">
              <p className="text-zinc-300">
                We do not sell or share your personal data. Data may be shared
                only when required by law.
              </p>
            </Section>

            <Section title="5. Changes to This Policy">
              <p className="text-zinc-300">
                We may update this policy over time. Material changes will be
                communicated in the app or on this page.
              </p>
            </Section>

            <Section title="6. Contact">
              <p className="text-zinc-300">
                Questions or requests? Email {""}
                <a
                  href="mailto:contact@pawelkarniej.com"
                  className="text-emerald-400 hover:underline"
                >
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


