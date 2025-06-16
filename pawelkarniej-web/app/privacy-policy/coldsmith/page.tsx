/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Heart, Database, Lock } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Card,
  CardContent,
  CardDescription,
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

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-zinc-300">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function ColdsmithPrivacyPolicy() {
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
              <span className="gradient-text">Coldsmith</span> Privacy Policy
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              How we protect your health data and privacy in the Coldsmith app
            </p>
          </div>

          <div className="space-y-8">
            <Section
              title="1. Information We Collect"
              icon={Database}
              iconColor="emerald"
            >
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h4 className="font-semibold text-emerald-300 mb-2">
                    Health Data
                  </h4>
                  <p className="text-emerald-100 text-sm">
                    We collect cold exposure session data, including duration,
                    temperature preferences, mood ratings, and completion
                    status. This data is stored locally on your device and
                    optionally synced with Apple Health with your explicit
                    consent.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">
                    Apple Health Integration
                  </h4>
                  <p className="text-blue-100 text-sm">
                    When you choose to connect Apple Health, we may read your
                    heart rate variability, sleep data, and activity levels to
                    provide personalized recommendations. We also write your
                    cold exposure sessions as mindful sessions and workouts to
                    Apple Health.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">
                    Device Data
                  </h4>
                  <p className="text-purple-100 text-sm">
                    We collect basic device information, app usage analytics,
                    and crash reports to improve app performance. No personal
                    health data is included in these analytics.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <h4 className="font-semibold text-yellow-300 mb-2">
                    Subscription Data
                  </h4>
                  <p className="text-yellow-100 text-sm">
                    Payment and subscription information is processed by Apple
                    App Store and RevenueCat. We only receive subscription
                    status (active/inactive) to provide premium features.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              title="2. How We Use Your Information"
              icon={Heart}
              iconColor="blue"
            >
              <BulletList
                items={[
                  "Provide personalized cold exposure coaching and recommendations",
                  "Track your progress and session history",
                  "Sync data between your iPhone and Apple Watch",
                  "Improve app functionality and user experience",
                  "Send optional notifications and reminders",
                ]}
              />
            </Section>

            <Section
              title="3. Data Storage and Security"
              icon={Lock}
              iconColor="purple"
            >
              <div className="space-y-4">
                <p className="text-zinc-300">
                  Your health data is stored locally on your device using iOS
                  secure storage. We use industry-standard encryption to protect
                  your data. Session data shared with Apple Health is governed
                  by Apple&apos;s privacy policies.
                </p>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-green-100 text-sm">
                    <strong>Local Storage:</strong> We do not store your health
                    data on external servers. All processing happens locally on
                    your device to ensure maximum privacy and security.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="4. Data Sharing" icon={Shield} iconColor="red">
              <div className="space-y-4">
                <p className="text-zinc-300">
                  We do not sell, trade, or share your personal health data with
                  third parties. Data may only be shared:
                </p>
                <BulletList
                  items={[
                    "With Apple Health (only with your explicit consent)",
                    "Between your devices (iPhone and Apple Watch) for app functionality",
                    "When required by law or to protect safety",
                  ]}
                />
              </div>
            </Section>

            <Section
              title="5. Your Rights and Controls"
              icon={Database}
              iconColor="emerald"
            >
              <div className="space-y-4">
                <p className="text-zinc-300">
                  You can control your data through:
                </p>
                <BulletList
                  items={[
                    "Deleting individual sessions or all data in the app",
                    "Revoking Apple Health permissions at any time",
                    "Exporting your session data",
                    "Contacting us to request data deletion",
                  ]}
                />
              </div>
            </Section>

            <Section
              title="6. Third-Party Services"
              icon={Database}
              iconColor="blue"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-blue-300 mb-2">
                      Apple Health
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Subject to Apple&apos;s Privacy Policy
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-purple-300 mb-2">
                      RevenueCat
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Processes subscription data subject to their Privacy
                      Policy
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            <Section
              title="7. Children's Privacy"
              icon={Shield}
              iconColor="yellow"
            >
              <p className="text-zinc-300">
                Coldsmith is not intended for children under 18. We do not
                knowingly collect personal information from children. Cold
                exposure should only be practiced by adults or minors under
                proper medical supervision.
              </p>
            </Section>

            <Section
              title="8. Changes to This Policy"
              icon={Database}
              iconColor="purple"
            >
              <p className="text-zinc-300">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy in
                the app and updating the &quot;Last Updated&quot; date.
              </p>
            </Section>

            <Section title="9. Contact Us" icon={Heart} iconColor="emerald">
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-emerald-100 text-sm mb-3">
                  If you have any questions about this Privacy Policy or your
                  data, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-emerald-200 text-sm">
                    <strong>Email:</strong> contact@pawelkarniej.com
                  </p>
                  <p className="text-emerald-200 text-sm">
                    <strong>App:</strong> Coldsmith - Cold Exposure Tracker
                  </p>
                  <p className="text-emerald-200 text-sm">
                    <strong>Last Updated:</strong> December 2024
                  </p>
                </div>
              </div>
            </Section>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GradientButton
              href="/privacy-policy"
              variant="secondary"
              icon={ArrowLeft}
              iconPosition="left"
              className="dark"
            >
              Back to Privacy Policies
            </GradientButton>
            <GradientButton href="/contact" variant="primary">
              Contact Support
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
