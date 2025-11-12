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

export default function BeatAIPrivacyPolicy() {
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
              <span className="gradient-text">BeatAI</span> Privacy Policy
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              How the AI coach processes audio and keeps practice data private.
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Data We Collect">
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Audio snippets you record for analysis</li>
                <li>Practice metadata (tempo, instrument, session length)</li>
                <li>Anonymous diagnostics such as crash logs and usage counts</li>
              </ul>
            </Section>

            <Section title="2. How Audio Is Used">
              <p className="text-zinc-300">
                Recordings are processed on-device to generate timing and
                accuracy feedback. Short fingerprints may be uploaded to secure
                servers to improve ML models, but raw audio stays on your device
                unless you explicitly opt in to sharing for support.
              </p>
            </Section>

            <Section title="3. Storage & Security">
              <div className="space-y-3 text-zinc-300">
                <p>
                  Practice history is stored locally using iOS secure storage.
                  When synced, data travels through encrypted channels. We do
                  not sell or rent any personal data.
                </p>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm text-blue-100">
                  Face ID / Touch ID locks and Apple Keychain are leveraged
                  whenever possible to keep your progress private.
                </div>
              </div>
            </Section>

            <Section title="4. Third-Party Services">
              <p className="text-zinc-300">
                RevenueCat may be used to verify subscriptions and Apple handles
                all billing. Anonymous analytics (e.g., Apple metrics) help us
                understand feature adoption. These partners receive only the
                minimum data needed to operate.
              </p>
            </Section>

            <Section title="5. Your Choices">
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Delete recordings at any time inside the app</li>
                <li>Disable analytics and diagnostics in iOS settings</li>
                <li>
                  Email{" "}
                  <a
                    href="mailto:contact@pawelkarniej.com"
                    className="text-emerald-400 hover:underline"
                  >
                    contact@pawelkarniej.com
                  </a>{" "}
                  to request data deletion or export
                </li>
              </ul>
            </Section>

            <Section title="6. Children’s Privacy">
              <p className="text-zinc-300">
                BeatAI is built for adults and not directed at children under
                13. We do not knowingly collect data from children.
              </p>
            </Section>

            <Section title="7. Policy Updates & Contact">
              <p className="text-zinc-300">
                We may update this policy as BeatAI evolves. Any significant
                changes will be posted in the app or on this page. Questions?
                Email{" "}
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
