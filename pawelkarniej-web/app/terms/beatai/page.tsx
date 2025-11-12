/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
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

export default function BeatAITermsOfService() {
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
              <FileText className="w-full h-full text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="gradient-text">BeatAI</span> Terms of Service
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Simple guidelines for using the AI-powered music practice coach.
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Acceptance of Terms">
              <p className="text-zinc-300">
                By downloading or using BeatAI you agree to these Terms of
                Service. If you disagree with any part of the terms you should
                not install or use the app.
              </p>
            </Section>

            <Section title="2. About the Service">
              <p className="text-zinc-300">
                BeatAI listens to short practice snippets, analyzes timing and
                accuracy with on-device AI, and surfaces insights to help you
                improve. The app evolves frequently, so features may change or
                be removed at any time.
              </p>
            </Section>

            <Section title="3. Proper Use">
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Use the app legally and for personal practice only</li>
                <li>Do not attempt to reverse engineer or disrupt the service</li>
                <li>Respect copyrights when uploading reference material</li>
                <li>
                  Do not submit harmful, offensive, or infringing recordings
                </li>
              </ul>
            </Section>

            <Section title="4. Purchases & Subscriptions">
              <p className="text-zinc-300">
                Optional premium features may be offered as in-app purchases or
                subscriptions processed by the Apple App Store. Manage or cancel
                subscriptions in your Apple ID settings at least 24 hours before
                the renewal period ends. We do not collect payment information
                directly.
              </p>
            </Section>

            <Section title="5. Data & Intellectual Property">
              <p className="text-zinc-300">
                You retain ownership of your recordings. By uploading them you
                grant us a limited license to process the audio solely to
                generate feedback within the app. All BeatAI branding, models,
                and source code remain our intellectual property.
              </p>
            </Section>

            <Section title="6. Disclaimer & Liability">
              <p className="text-zinc-300">
                BeatAI is provided &quot;as is&quot; without warranties. We do
                not guarantee accurate scoring or results. To the extent
                permitted by law we are not liable for indirect, incidental, or
                consequential damages arising from use of the app.
              </p>
            </Section>

            <Section title="7. Changes & Contact">
              <p className="text-zinc-300">
                These terms may be updated over time. Continued use after an
                update means you accept the revised version. Questions? Email{" "}
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
