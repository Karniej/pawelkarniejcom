/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, Heart } from "lucide-react";
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

export default function VidNotesTermsOfService() {
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
              <span className="gradient-text">VidNotes</span> Terms of Service
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Simple terms for a private-first video notes companion with no tracking.
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Acceptance of Terms" icon={FileText} iconColor="blue">
              <p className="text-zinc-300">
                By downloading or using VidNotes, you agree to these Terms of Service. If you do not agree, please do not use the app.
              </p>
            </Section>

            <Section title="2. Intended Use" icon={Heart} iconColor="emerald">
              <p className="text-zinc-300">
                VidNotes is intended for personal video note-taking and organization. It is not built for critical compliance or safety workflows.
              </p>
            </Section>

            <Section title="3. Privacy and Data" icon={Shield} iconColor="purple">
              <p className="text-zinc-300">
                VidNotes does not collect personal data or track users. All entries and settings remain on your device. See the Privacy Policy for details.
              </p>
            </Section>

            <Section title="4. Disclaimer" icon={Shield} iconColor="yellow">
              <p className="text-zinc-300">
                The app is provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted or error-free operation.
              </p>
            </Section>

            <Section title="5. Limitation of Liability" icon={Shield} iconColor="red">
              <p className="text-zinc-300">
                To the fullest extent permitted by law, we are not liable for any indirect or consequential damages arising from use of the app.
              </p>
            </Section>

            <Section title="6. Changes to Terms" icon={FileText} iconColor="purple">
              <p className="text-zinc-300">
                We may update these terms in the future. Continued use after updates constitutes acceptance of the new terms.
              </p>
            </Section>

            <Section title="7. Contact" icon={Heart} iconColor="emerald">
              <p className="text-zinc-300">
                Questions? Email {""}
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

