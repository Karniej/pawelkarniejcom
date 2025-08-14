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

export default function TeleprompterXTermsOfService() {
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
              <span className="gradient-text">TeleprompterX</span> Terms of
              Service
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Key terms and usage conditions for TeleprompterX.
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Acceptance of Terms">
              <p className="text-zinc-300">
                By downloading or using TeleprompterX, you agree to these Terms
                of Service. If you do not agree, do not use the app.
              </p>
            </Section>

            <Section title="2. Proper Use">
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Use the app legally and responsibly</li>
                <li>Do not attempt to disrupt or reverse engineer the app</li>
                <li>Respect intellectual property</li>
              </ul>
            </Section>

            <Section title="3. Subscription & Purchases">
              <p className="text-zinc-300">
                Optional premium features may be offered as in-app purchases or
                subscriptions processed by Apple App Store. Manage your
                subscriptions in your Apple ID settings.
              </p>
            </Section>

            <Section title="4. Disclaimer">
              <p className="text-zinc-300">
                The app is provided &quot;as is&quot; without warranties of any
                kind. We do not guarantee uninterrupted or error-free operation.
              </p>
            </Section>

            <Section title="5. Limitation of Liability">
              <p className="text-zinc-300">
                To the fullest extent permitted by law, we are not liable for
                any indirect or consequential damages arising from use of the
                app.
              </p>
            </Section>

            <Section title="6. Changes to Terms">
              <p className="text-zinc-300">
                We may update these terms from time to time. Continued use of
                the app after updates constitutes acceptance of the new terms.
              </p>
            </Section>

            <Section title="7. Contact">
              <p className="text-zinc-300">
                For questions about these terms, contact {""}
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
