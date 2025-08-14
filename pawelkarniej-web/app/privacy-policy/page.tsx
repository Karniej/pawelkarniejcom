/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Database } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PrivacyPolicy() {
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
            <div className="w-16 h-16 mx-auto mb-6 p-3 rounded-full bg-emerald-500/20 border border-emerald-500/30">
              <Shield className="w-full h-full text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Your privacy matters. Here&apos;s how I handle your data across my
              applications.
            </p>
          </div>

          <div className="grid gap-8">
            {/* App-specific Privacy Cards */}
            <div>
              <Card className="bg-card/50 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                      <Eye className="w-full h-full text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        App-Specific Policies
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        Detailed privacy information for each application
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href="/privacy-policy/aividly"
                      className="block p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer group hover:scale-105 no-underline"
                    >
                      <h3 className="font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                        AIVidly
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        AI video generation and processing policies
                      </p>
                      <span className="text-emerald-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Policy →
                      </span>
                    </a>

                    <a
                      href="/privacy-policy/rhava"
                      className="block p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group hover:scale-105 no-underline"
                    >
                      <h3 className="font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                        Rhava
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        General app privacy information for Rhava
                      </p>
                      <span className="text-blue-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Policy →
                      </span>
                    </a>

                    <a
                      href="/privacy-policy/coldsmith"
                      className="block p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group hover:scale-105 no-underline"
                    >
                      <h3 className="font-semibold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                        Coldsmith
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        Health and wellness data privacy
                      </p>
                      <span className="text-purple-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Policy →
                      </span>
                    </a>

                    <a
                      href="/privacy-policy/teleprompterx"
                      className="block p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group hover:scale-105 no-underline"
                    >
                      <h3 className="font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                        TeleprompterX
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">
                        Minimal data policy for TeleprompterX
                      </p>
                      <span className="text-blue-400 text-sm font-medium transition-colors group-hover:underline inline-flex items-center gap-1">
                        View Policy →
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* General Privacy Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="modern-card">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                      <Database className="w-full h-full text-emerald-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        General Principles
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        How I approach privacy across all applications
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        Data Collection
                      </h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                          <span>
                            Only collect data necessary for app functionality
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                          <span>
                            No tracking of personal activities outside the app
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                          <span>
                            Transparent about what data is collected and why
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        Data Usage
                      </h3>
                      <ul className="space-y-2 text-zinc-300">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                          <span>Data used only for stated purposes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                          <span>No selling or sharing with third parties</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                          <span>Secure storage and transmission practices</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <h4 className="font-semibold text-emerald-300 mb-2">
                      Your Rights
                    </h4>
                    <p className="text-sm text-emerald-100">
                      You have the right to access, modify, or delete your data
                      at any time. Contact me at{" "}
                      <a
                        href="mailto:contact@pawelkarniej.com"
                        className="underline hover:no-underline"
                      >
                        contact@pawelkarniej.com
                      </a>{" "}
                      for any privacy-related requests.
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
                  Questions About Privacy?
                </h3>
                <p className="text-zinc-400 mb-4">
                  If you have any questions about these privacy practices or
                  need to exercise your rights, don&apos;t hesitate to reach
                  out.
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
