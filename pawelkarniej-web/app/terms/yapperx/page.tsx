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

export default function YapperXTermsOfService() {
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
              <span className="gradient-text">YapperX</span> Terms of Service
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Straightforward usage guidelines for this lightweight companion
              app.
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Acceptance of Terms">
              <p className="text-zinc-300">
                By downloading or using YapperX you agree to these Terms of
                Service. If you do not agree, uninstall the app and discontinue
                use immediately.
              </p>
            </Section>

            <Section title="2. What YapperX Does">
              <p className="text-zinc-300">
                YapperX helps you capture quick thoughts, organize short prompts
                and keep track of daily conversations. The experience is kept
                intentionally simple and provided on an &quot;as is&quot;
                basis.
              </p>
            </Section>

            <Section title="3. Proper Use">
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Use the app legally and responsibly</li>
                <li>Do not attempt to reverse engineer or disrupt the service</li>
                <li>Respect the privacy of others when saving their data</li>
              </ul>
            </Section>

            <Section title="4. Purchases & Accounts">
              <p className="text-zinc-300">
                Optional upgrades or in-app purchases, when offered, are handled
                through the Apple App Store. Manage or cancel subscriptions in
                your Apple ID settings. No separate account is created by us.
              </p>
            </Section>

            <Section title="5. Limitation of Liability">
              <p className="text-zinc-300">
                YapperX is provided without warranties of any kind. We are not
                responsible for indirect, incidental, or consequential damages
                that result from using the app.
              </p>
            </Section>

            <Section title="6. Changes & Contact">
              <p className="text-zinc-300">
                These terms may be updated at any time. Continued use after an
                update means you accept the new version. Questions? Email{" "}
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
