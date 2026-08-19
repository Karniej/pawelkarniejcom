/** @format */

"use client";

import { motion } from "framer-motion";
import { Mail, ArrowLeft, MessageCircle, Clock } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
  const supportEmail = "contact@pawelkarniej.com";
  const appNames = ["Newsletterytics", "Coldsmith"];

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative flex min-h-screen items-center justify-center px-4 py-20">
        <div className="mx-auto w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-6 font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
              Let&apos;s work <span className="gradient-text">together</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ready to build your next AI-powered mobile application? Get in
              touch and let&apos;s discuss your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="modern-card glow-effect h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-emerald-500/30 bg-emerald-500/20 p-3">
                    <Mail className="h-full w-full text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="mb-2 font-heading text-2xl font-bold">
                    Get in touch
                  </CardTitle>
                  <CardDescription className="text-lg text-zinc-600 dark:text-zinc-400">
                    Ready to start your project? Send me an email and let&apos;s
                    discuss your ideas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-center">
                  <div className="space-y-4">
                    <div className="rounded-lg border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/5">
                      <div className="mb-2 flex items-center justify-center gap-3 text-emerald-700 dark:text-emerald-400">
                        <Mail className="h-5 w-5" />
                        <span className="text-lg font-medium">
                          {supportEmail}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        I typically respond within 24 hours
                      </p>
                    </div>

                    <GradientButton
                      href={`mailto:${supportEmail}?subject=Project Inquiry&body=Hi Paweł,%0D%0A%0D%0AI'm interested in discussing a React Native project with you.%0D%0A%0D%0AProject Details:%0D%0A- %0D%0A- %0D%0A- %0D%0A%0D%0ALet's schedule a call to discuss further.%0D%0A%0D%0ABest regards`}
                      variant="primary"
                      icon={MessageCircle}
                      size="lg"
                      className="w-full"
                    >
                      Send Email
                    </GradientButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="modern-card h-full">
                <CardHeader>
                  <div className="mb-4 h-16 w-16 rounded-full border border-blue-500/30 bg-blue-500/20 p-3">
                    <Clock className="h-full w-full text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="mb-2 font-heading text-2xl font-bold">
                    App support
                  </CardTitle>
                  <CardDescription className="text-lg text-zinc-600 dark:text-zinc-400">
                    Official support for my published applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-zinc-700 dark:text-zinc-300">
                      Need help with any of these apps?
                    </p>

                    <div className="space-y-3">
                      {appNames.map((app) => (
                        <div
                          key={app}
                          className="flex items-center gap-3 rounded-lg border border-black/10 bg-black/[0.03] p-3 dark:border-white/10 dark:bg-white/5"
                        >
                          <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                          <span className="font-medium">{app}</span>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <strong>Response time:</strong> Usually within 24-48
                        hours for support requests
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="modern-card rounded-lg p-6">
              <h3 className="mb-3 text-xl font-semibold">
                What can I help you with?
              </h3>
              <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
                <div className="rounded-lg bg-black/[0.03] p-3 dark:bg-white/5">
                  <div className="mb-1 font-medium text-emerald-700 dark:text-emerald-400">
                    React Native Development
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    Mobile app development from concept to deployment
                  </div>
                </div>
                <div className="rounded-lg bg-black/[0.03] p-3 dark:bg-white/5">
                  <div className="mb-1 font-medium text-blue-700 dark:text-blue-400">
                    AI Integration
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    Adding AI capabilities to your mobile applications
                  </div>
                </div>
                <div className="rounded-lg bg-black/[0.03] p-3 dark:bg-white/5">
                  <div className="mb-1 font-medium text-purple-700 dark:text-purple-400">
                    Technical Consulting
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    Architecture review and technical guidance
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <GradientButton
                href="/"
                variant="secondary"
                icon={ArrowLeft}
                iconPosition="left"
                className="dark"
              >
                Back to Home
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
