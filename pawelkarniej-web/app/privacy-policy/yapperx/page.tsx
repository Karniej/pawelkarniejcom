/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export default function YapperXPrivacyPolicy() {
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
            <div className="w-16 h-16 mx-auto mb-6 p-3 rounded-full bg-emerald-500/20 border border-emerald-500/30">
              <Shield className="w-full h-full text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="gradient-text">YapperX</span> Privacy Policy
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              A short overview of how data is handled inside the YapperX app.
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Data We Collect">
              <div className="space-y-3 text-zinc-300">
                <p>
                  The goal is to keep collection minimal. We only gather:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Anonymous crash diagnostics and basic usage analytics</li>
                  <li>
                    The content you save or schedule, which stays on your device
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="2. How Data Is Used">
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>To make core reminders and prompts work reliably</li>
                <li>To understand high-level usage trends</li>
                <li>To fix bugs and improve performance</li>
              </ul>
            </Section>

            <Section title="3. Storage & Security">
              <div className="space-y-3 text-zinc-300">
                <p>
                  Notes and schedules are stored locally on your iOS device. We
                  do not upload your content to external servers.
                </p>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm text-blue-100">
                  Platform security best practices are used (Face ID / Touch ID,
                  encrypted storage) whenever the OS makes them available.
                </div>
              </div>
            </Section>

            <Section title="4. Third-Party Services">
              <p className="text-zinc-300">
                If optional subscriptions are offered, billing is handled by the
                Apple App Store. RevenueCat may be used to verify your purchase
                status. No personal details beyond what Apple shares are stored.
              </p>
            </Section>

            <Section title="5. Your Choices">
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Delete saved data at any time inside the app</li>
                <li>Disable analytics in iOS settings if you prefer</li>
                <li>
                  Reach out and request data deletion by emailing{" "}
                  <a
                    href="mailto:contact@pawelkarniej.com"
                    className="text-emerald-400 hover:underline"
                  >
                    contact@pawelkarniej.com
                  </a>
                </li>
              </ul>
            </Section>

            <Section title="6. Policy Changes">
              <p className="text-zinc-300">
                This privacy policy may evolve as YapperX develops. Updates will
                be posted in the app or on this page. Continued use means you
                agree to the updated policy.
              </p>
            </Section>

            <Section title="7. Contact">
              <p className="text-zinc-300">
                Questions or concerns? Email{" "}
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
