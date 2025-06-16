/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  AlertTriangle,
  FileText,
  Heart,
  Shield,
  CreditCard,
} from "lucide-react";
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

export default function ColdsmithTermsOfService() {
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
              <FileText className="w-full h-full text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="gradient-text">Coldsmith</span> Terms of Service
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Important terms and safety information for using the Coldsmith app
            </p>
          </div>

          {/* Medical Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Card className="border-red-500/30 bg-red-500/10">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 p-1.5 rounded-lg bg-red-500/20 border border-red-500/30">
                    <AlertTriangle className="w-full h-full text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-red-300">
                    IMPORTANT MEDICAL DISCLAIMER
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-red-100 leading-relaxed">
                  This app is for educational and informational purposes only.
                  It is not intended to replace professional medical advice,
                  diagnosis, or treatment. Cold exposure can be dangerous and
                  may not be suitable for everyone. Always consult with a
                  qualified healthcare provider before beginning any cold
                  exposure program, especially if you have any medical
                  conditions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-8">
            <Section
              title="1. Acceptance of Terms"
              icon={FileText}
              iconColor="blue"
            >
              <p className="text-zinc-300">
                By downloading, installing, or using Coldsmith, you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, do not use the app.
              </p>
            </Section>

            <Section
              title="2. Health and Safety Warnings"
              icon={AlertTriangle}
              iconColor="red"
            >
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <h4 className="font-semibold text-red-300 mb-2">
                    Cold Exposure Risks
                  </h4>
                  <p className="text-red-100 text-sm">
                    Cold exposure therapy carries inherent risks including but
                    not limited to hypothermia, cardiac events, respiratory
                    distress, and injury. You assume all risks associated with
                    cold exposure activities.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">
                    Medical Conditions
                  </h4>
                  <p className="text-orange-100 text-sm">
                    Do not use cold exposure if you have heart conditions, high
                    blood pressure, pregnancy, diabetes, eating disorders, or
                    any other medical conditions without physician approval.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <h4 className="font-semibold text-yellow-300 mb-2">
                    Emergency Situations
                  </h4>
                  <p className="text-yellow-100 text-sm">
                    If you experience chest pain, difficulty breathing,
                    dizziness, or any concerning symptoms during cold exposure,
                    stop immediately and seek medical attention.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              title="3. Age Restrictions"
              icon={Shield}
              iconColor="purple"
            >
              <p className="text-zinc-300">
                You must be at least 18 years old to use this app. Cold exposure
                is not recommended for minors without proper medical supervision
                and parental consent.
              </p>
            </Section>

            <Section
              title="4. Proper Use Guidelines"
              icon={Heart}
              iconColor="emerald"
            >
              <div className="space-y-4">
                <p className="text-zinc-300">
                  For your safety, please follow these guidelines:
                </p>
                <BulletList
                  items={[
                    "Start slowly with shorter durations and warmer temperatures",
                    "Never practice cold exposure alone; have someone nearby",
                    "Always have a way to exit cold exposure immediately",
                    "Listen to your body and stop if you feel unwell",
                    "Follow all safety protocols and never exceed your limits",
                  ]}
                />
              </div>
            </Section>

            <Section
              title="5. Subscription Terms"
              icon={CreditCard}
              iconColor="blue"
            >
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">
                    Premium Features
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Certain features require a paid subscription processed
                    through the Apple App Store. Subscription automatically
                    renews unless cancelled.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">Billing</h4>
                  <p className="text-green-100 text-sm">
                    You will be charged through your Apple ID account.
                    Subscriptions renew automatically unless auto-renewal is
                    turned off at least 24 hours before the current period ends.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">
                    Cancellation
                  </h4>
                  <p className="text-purple-100 text-sm">
                    You can cancel your subscription anytime through your Apple
                    ID account settings. Cancellation takes effect at the end of
                    the current billing period.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <h4 className="font-semibold text-yellow-300 mb-2">
                    Refunds
                  </h4>
                  <p className="text-yellow-100 text-sm">
                    Refund requests are handled by Apple according to their
                    refund policy. We cannot process refunds directly.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              title="6. Limitation of Liability"
              icon={Shield}
              iconColor="red"
            >
              <div className="space-y-4">
                <p className="text-zinc-300">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE
                  FOR ANY DAMAGES ARISING FROM YOUR USE OF THE APP, INCLUDING
                  BUT NOT LIMITED TO:
                </p>
                <BulletList
                  items={[
                    "Personal injury or health complications from cold exposure",
                    "Loss of data or device malfunction",
                    "Interruption of service or app unavailability",
                    "Any indirect, incidental, or consequential damages",
                  ]}
                />
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-red-100 text-sm">
                    <strong>Important:</strong> You use this app at your own
                    risk. We strongly recommend consulting with healthcare
                    professionals before beginning any cold exposure regimen.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              title="7. User Responsibilities"
              icon={Heart}
              iconColor="emerald"
            >
              <div className="space-y-4">
                <p className="text-zinc-300">
                  As a user of Coldsmith, you agree to:
                </p>
                <BulletList
                  items={[
                    "Use the app responsibly and follow all safety guidelines",
                    "Consult healthcare providers before starting cold exposure",
                    "Not hold us liable for any health issues or injuries",
                    "Provide accurate information when using the app",
                    "Respect intellectual property rights",
                  ]}
                />
              </div>
            </Section>

            <Section
              title="8. Intellectual Property"
              icon={Shield}
              iconColor="purple"
            >
              <p className="text-zinc-300">
                All content, features, and functionality of Coldsmith are owned
                by us and protected by copyright, trademark, and other
                intellectual property laws. You may not copy, modify, or
                distribute any part of the app without permission.
              </p>
            </Section>

            <Section title="9. Termination" icon={FileText} iconColor="red">
              <p className="text-zinc-300">
                We may terminate or suspend your access to the app at any time
                for violation of these terms or for any other reason. You may
                stop using the app at any time by deleting it from your device.
              </p>
            </Section>

            <Section
              title="10. Changes to Terms"
              icon={FileText}
              iconColor="blue"
            >
              <p className="text-zinc-300">
                We may update these terms from time to time. We will notify you
                of any changes by posting the new terms in the app. Your
                continued use of the app after changes constitutes acceptance of
                the new terms.
              </p>
            </Section>

            <Section
              title="11. Contact Information"
              icon={Heart}
              iconColor="emerald"
            >
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-emerald-100 text-sm mb-3">
                  If you have any questions about these Terms of Service, please
                  contact us:
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
              href="/terms"
              variant="secondary"
              icon={ArrowLeft}
              iconPosition="left"
              className="dark"
            >
              Back to Terms
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
