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

export default function RhavaTermsOfService() {
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
              <span className="gradient-text">Rhava</span> Terms of Service
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Important terms and information for using the Rhava app
            </p>
          </div>

          <div className="space-y-8">
            <Section
              title="1. Acceptance of Terms"
              icon={FileText}
              iconColor="blue"
            >
              <p className="text-zinc-300">
                By downloading, installing, or using Rhava, you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, do not use the app.
              </p>
            </Section>

            <Section
              title="2. Age Restrictions"
              icon={Shield}
              iconColor="purple"
            >
              <p className="text-zinc-300">
                You must be at least 18 years old to use this app.
              </p>
            </Section>

            <Section
              title="3. Proper Use Guidelines"
              icon={Heart}
              iconColor="emerald"
            >
              <div className="space-y-4">
                <p className="text-zinc-300">
                  You agree to use the app for its intended purposes and in
                  compliance with all applicable laws.
                </p>
              </div>
            </Section>

            <Section
              title="4. Subscription Terms"
              icon={CreditCard}
              iconColor="blue"
            >
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">
                    Premium Features
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Rhava may offer premium features through an auto-renewing
                    subscription. Payment will be charged to your Apple Account.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">
                    Subscription Management
                  </h4>
                  <p className="text-purple-100 text-sm">
                    You can manage or cancel your subscription at any time in
                    your Apple Account settings at least 24 hours before the end
                    of the current period.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              title="5. Intellectual Property"
              icon={Shield}
              iconColor="yellow"
            >
              <p className="text-zinc-300">
                All content, trademarks, and intellectual property associated
                with Rhava are owned by us. You may not copy, modify, or
                distribute any part of the app without permission.
              </p>
            </Section>

            <Section
              title="6. Disclaimer of Warranties"
              icon={AlertTriangle}
              iconColor="red"
            >
              <p className="text-zinc-300">
                The app is provided &quot;as is&quot; without any warranties. We
                do not guarantee that it will be error-free or uninterrupted.
              </p>
            </Section>

            <Section
              title="7. Limitation of Liability"
              icon={AlertTriangle}
              iconColor="red"
            >
              <p className="text-zinc-300">
                We are not liable for any direct, indirect, or consequential
                damages arising from your use of the app.
              </p>
            </Section>

            <Section
              title="8. Changes to Terms"
              icon={FileText}
              iconColor="purple"
            >
              <p className="text-zinc-300">
                We may update these terms at any time. Your continued use of the
                app constitutes acceptance of the new terms.
              </p>
            </Section>

            <Section title="9. Contact Us" icon={Heart} iconColor="emerald">
              <p className="text-zinc-300">
                For questions about these terms, contact us at{" "}
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
