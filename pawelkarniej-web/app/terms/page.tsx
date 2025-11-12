/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, FileText, Smartphone, Scale, Shield } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TermsOfService() {
  const router = useRouter();

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
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Legal terms and conditions for using my applications and services
            </p>
          </div>

          <div className="grid gap-8">
            {/* App-specific Terms Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="modern-card glow-effect">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                      <Smartphone className="w-full h-full text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        App-Specific Terms
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        Detailed terms of service for each application
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      onClick={() => router.push("/terms/coldsmith")}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group hover:scale-105"
                    >
                      <h3 className="font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                        Coldsmith
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        Cold exposure tracking with health and safety terms
                      </p>
                      <span className="text-blue-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Terms →
                      </span>
                    </div>

                    <div
                      onClick={() => router.push("/terms/aividly")}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer group hover:scale-105"
                    >
                      <h3 className="font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                        AIVidly
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        AI video generation terms and usage policies
                      </p>
                      <span className="text-emerald-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Terms →
                      </span>
                    </div>

                    <div
                      onClick={() => router.push("/terms/teleprompterx")}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group hover:scale-105"
                    >
                      <h3 className="font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                        TeleprompterX
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        Basic terms for TeleprompterX usage
                      </p>
                      <span className="text-blue-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Terms →
                      </span>
                    </div>

                    <div
                      onClick={() => router.push("/terms/moonlatte")}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer group hover:scale-105"
                    >
                      <h3 className="font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                        MoonLatte
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        Simple caffeine tracker with no tracking
                      </p>
                      <span className="text-emerald-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Terms →
                      </span>
                    </div>

                    <div
                      onClick={() => router.push("/terms/vidnotes")}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 cursor-pointer group hover:scale-105"
                    >
                      <h3 className="font-semibold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">
                        VidNotes
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        Private-first video notes with no tracking
                      </p>
                      <span className="text-pink-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Terms →
                      </span>
                    </div>

                    <div
                      onClick={() => router.push("/terms/yapperx")}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 cursor-pointer group hover:scale-105"
                    >
                      <h3 className="font-semibold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">
                        YapperX
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        Lightweight terms for the simple companion app
                      </p>
                      <span className="text-amber-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Terms →
                      </span>
                    </div>

                    <div
                      onClick={() => router.push("/terms/beatai")}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-500/30 transition-all duration-300 cursor-pointer group hover:scale-105"
                    >
                      <h3 className="font-semibold text-sky-400 mb-2 group-hover:text-sky-300 transition-colors">
                        BeatAI
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        AI-powered practice coach usage guidelines
                      </p>
                      <span className="text-sky-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Terms →
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* General Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="modern-card">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                      <Scale className="w-full h-full text-emerald-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">General Terms</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Universal terms that apply to all my applications and
                        services
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        Acceptance of Terms
                      </h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                          <span>
                            By using any of my applications, you agree to these
                            terms
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                          <span>
                            Terms may be updated periodically with notice
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                          <span>
                            Continued use implies acceptance of updated terms
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        User Responsibilities
                      </h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                          <span>Use applications lawfully and responsibly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                          <span>Respect intellectual property rights</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                          <span>
                            Provide accurate information when required
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        Service Availability
                      </h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                          <span>
                            Services provided &quot;as is&quot; without
                            warranties
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                          <span>May experience downtime for maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                          <span>Features may be modified or discontinued</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        Limitation of Liability
                      </h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0"></div>
                          <span>Limited liability for damages or losses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0"></div>
                          <span>Users assume risk for app usage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0"></div>
                          <span>
                            Consult professionals for health-related apps
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <h4 className="font-semibold text-blue-300 mb-2">
                      Subscription Services
                    </h4>
                    <p className="text-sm text-blue-100">
                      Some applications offer premium features through
                      subscription. All subscriptions are processed through the
                      Apple App Store and subject to Apple&apos;s terms.
                      Subscriptions automatically renew unless cancelled at
                      least 24 hours before the current period ends.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="p-6 rounded-lg modern-card mb-8">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Questions About Terms?
                </h3>
                <p className="text-zinc-400 mb-4">
                  If you have any questions about these terms of service or need
                  clarification on any policies, please don&apos;t hesitate to
                  reach out.
                </p>
                <GradientButton href="/contact" variant="primary" size="lg">
                  Contact Me
                </GradientButton>
              </div>

              <GradientButton
                href="/"
                variant="secondary"
                icon={ArrowLeft}
                iconPosition="left"
                className="dark"
              >
                Back to Home
              </GradientButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
