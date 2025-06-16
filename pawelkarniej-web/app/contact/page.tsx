/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
  const appNames = ["AIVidly", "Newsletterytics", "Coldsmith"];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative flex items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Ready to build your next AI-powered mobile application? Get in
              touch and let&apos;s discuss your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="modern-card glow-effect h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <Mail className="w-full h-full text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold mb-2">
                    Get In Touch
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-lg">
                    Ready to start your project? Send me an email and let&apos;s
                    discuss your ideas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-center">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center justify-center gap-3 text-emerald-400 mb-2">
                        <Mail className="h-5 w-5" />
                        <span className="font-medium text-lg">
                          {supportEmail}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400">
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

            {/* Support Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="modern-card h-full">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
                    <Clock className="w-full h-full text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold mb-2">
                    App Support
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-lg">
                    Official support for my published applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-zinc-300">
                      Need help with any of these apps?
                    </p>

                    <div className="space-y-3">
                      {appNames.map((app, index) => (
                        <div
                          key={app}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                        >
                          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                          <span className="text-white font-medium">{app}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <p className="text-sm text-yellow-200">
                        <strong>Response Time:</strong> Usually within 24-48
                        hours for support requests
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="p-6 rounded-lg modern-card">
              <h3 className="text-xl font-semibold mb-3 text-white">
                What can I help you with?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 rounded-lg bg-white/5">
                  <div className="font-medium text-emerald-400 mb-1">
                    React Native Development
                  </div>
                  <div className="text-zinc-400">
                    Mobile app development from concept to deployment
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <div className="font-medium text-blue-400 mb-1">
                    AI Integration
                  </div>
                  <div className="text-zinc-400">
                    Adding AI capabilities to your mobile applications
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <div className="font-medium text-purple-400 mb-1">
                    Technical Consulting
                  </div>
                  <div className="text-zinc-400">
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
