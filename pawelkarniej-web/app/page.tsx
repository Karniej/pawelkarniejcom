/** @format */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Mail,
  Twitter,
  Smartphone,
  Zap,
  Youtube,
  Instagram,
  Wrench,
} from "lucide-react";
import type { SVGProps } from "react";

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.65 2H15a5.5 5.5 0 0 0 5 5v2.3a8.3 8.3 0 0 1-5-1.7v6.4a5.6 5.6 0 1 1-5.6-5.6c.24 0 .47.02.7.05v2.35a2.9 2.9 0 1 0 2.9 2.9V2z" />
  </svg>
);
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TaglineReveal } from "@/components/tagline-reveal";
import { ProductProofSection } from "@/components/sections/product-proof";
import { AboutAndVideos } from "@/components/sections/about-and-videos";
import { getAllApps } from "@/lib/apps-data";

const SOCIAL_LINKS = [
  {
    label: "Twitter",
    href: "https://twitter.com/pawelkarniej",
    icon: Twitter,
  },
  {
    label: "GitHub",
    href: "https://github.com/karniej",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:contact@pawelkarniej.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pawelkarniej/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@thepawelk",
    icon: TikTokIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@thepawelk",
    icon: Youtube,
  },
];

export default function Home() {
  const marqueeApps = getAllApps();

  const stats = [
    { label: "Apps shipped", value: "20+" },
    { label: "Apps sold", value: "2" },
    { label: "Workflow at a time", value: "1" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Film grain texture */}
      <div className="grain-overlay" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center px-4 pt-16">
        <div className="hero-aurora" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight [text-wrap:balance]"
              >
                <span className="gradient-text block">
                  I build products that ship.
                </span>
                <span className="gradient-text block">
                  I build systems that run.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed [text-wrap:pretty]"
              >
                I&apos;m Paweł Karniej. I build mobile apps and AI automations
                for founders and small teams, shipping React Native since 2018.
                You talk to me directly, and I do the work myself, from the
                first call to the store release.
              </motion.p>

              <motion.dl
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.32,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="grid grid-cols-3 gap-4 max-w-lg"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
                      {stat.value}
                    </dd>
                    <p className="mt-1 text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.dl>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <GradientButton
                  href="#services"
                  variant="primary"
                  icon={ArrowRight}
                  size="lg"
                >
                  See how we can work together
                </GradientButton>
                <a
                  href="#proof"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-zinc-700 dark:text-zinc-300 transition-colors duration-300 hover:text-black dark:hover:text-white focus-ring rounded-full"
                >
                  View my apps
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.label}
                      className="p-3 rounded-xl border border-black/10 dark:border-white/10 text-zinc-500 dark:text-zinc-400 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-black/20 dark:hover:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98] focus-ring group"
                    >
                      <social.icon className="h-5 w-5 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="relative"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 -rotate-3 rounded-3xl border border-selfmade/30 bg-selfmade/10"></div>
                <div className="relative h-full w-full rotate-2 overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 shadow-[0_24px_80px_-24px_rgba(254,198,2,0.35)] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:rotate-0">
                  <Image
                    src="/images/me.jpg"
                    alt="Pawel Karniej"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App icon marquee */}
      <section aria-label="Icons of apps I shipped" className="relative py-12">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 pr-6">
            {[...marqueeApps, ...marqueeApps].map((app, index) => (
              <Link
                key={`${app.id}-${index}`}
                href={`/apps/${app.id}`}
                aria-label={`${app.title} case study`}
                tabIndex={index >= marqueeApps.length ? -1 : undefined}
                className="group relative block h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 grayscale transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110 hover:grayscale-0 focus-ring"
              >
                <Image
                  src={app.icon}
                  alt={`${app.title} app icon`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-zinc-500">
          Every icon is a real app I shipped. Hover one, click it, read its
          story.
        </p>
      </section>

      {/* Two ways to work with me */}
      <section id="services" className="relative py-24 px-4 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 [text-wrap:balance]">
              Two ways to work with me
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto [text-wrap:pretty]">
              Choose mobile apps or AI automations. I scope and deliver both
              directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="modern-card h-full glow-effect transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-selfmade/10 border border-selfmade/25 flex items-center justify-center mb-4">
                    <Smartphone className="h-7 w-7 text-selfmade-deep dark:text-selfmade" />
                  </div>
                  <CardTitle className="text-2xl">Mobile apps</CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400 text-base [text-wrap:pretty]">
                    I take your idea to the App Store and Google Play in four
                    weeks. Fixed scope, fixed price, iOS and Android in one
                    build, paywall and subscriptions included.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-zinc-700 dark:text-zinc-300 mb-6">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-selfmade-deep dark:text-selfmade shrink-0 mt-0.5" />
                      <span>
                        Sprints from $3,999, store submission in four weeks
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-selfmade-deep dark:text-selfmade shrink-0 mt-0.5" />
                      <span>
                        If I miss the agreed deadline, you get a refund and keep
                        the code
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-selfmade-deep dark:text-selfmade shrink-0 mt-0.5" />
                      <span>
                        Built on the same stack as my own 20+ shipped apps
                      </span>
                    </li>
                  </ul>
                  <div className="space-y-4">
                    <GradientButton
                      href="/mobile-apps"
                      variant="primary"
                      icon={ArrowRight}
                    >
                      See the mobile apps offer
                    </GradientButton>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      <Wrench className="inline h-4 w-4 mr-1 text-selfmade-deep dark:text-selfmade" />
                      App built with AI and now broken?{" "}
                      <Link
                        href="/ai-app-rescue"
                        className="text-selfmade-deep dark:text-selfmade hover:text-amber-800 dark:hover:text-amber-300 underline underline-offset-4"
                      >
                        I run a 48 hour rescue audit
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="modern-card h-full glow-effect transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center mb-4">
                    <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl">AI automations</CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400 text-base [text-wrap:pretty]">
                    I map one recurring workflow in your business and turn it
                    into a supervised automation. Work arrives prepared, and the
                    important decisions stay with your team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-zinc-700 dark:text-zinc-300 mb-6">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Free 20 minute fit call to find the right workflow
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Workflow map from $750, delivered in about a week
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Your existing tools stay, approvals stay human
                      </span>
                    </li>
                  </ul>
                  <div className="space-y-4">
                    <GradientButton
                      href="/automations"
                      variant="primary"
                      icon={ArrowRight}
                    >
                      See the automations offer
                    </GradientButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <TaglineReveal
        lines={[
          "Every product on this page",
          "was shipped by one person.",
          "The same person you will talk to.",
        ]}
      />

      <ProductProofSection />

      <AboutAndVideos />

      {/* Final CTA */}
      <section className="relative py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold [text-wrap:balance]">
              Have an app idea, or a workflow that eats your week?
            </h2>
            <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400 [text-wrap:pretty]">
              Tell me what you want to build. You talk to me directly, and I do
              the work myself.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <GradientButton
                href="/mobile-apps"
                variant="primary"
                icon={ArrowRight}
                size="lg"
              >
                See the mobile apps offer
              </GradientButton>
              <GradientButton
                href="/automations"
                variant="secondary"
                className="dark"
                size="lg"
              >
                See the automations offer
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                href="/mobile-apps"
                className="link-hover text-zinc-600 dark:text-zinc-400"
              >
                Mobile apps
              </Link>
              <Link
                href="/automations"
                className="link-hover text-zinc-600 dark:text-zinc-400"
              >
                Automations
              </Link>
              <Link
                href="/ai-app-rescue"
                className="link-hover text-zinc-600 dark:text-zinc-400"
              >
                AI app rescue
              </Link>
              <Link
                href="/graveyard"
                className="link-hover text-zinc-600 dark:text-zinc-400"
              >
                Graveyard
              </Link>
              <Link
                href="/blog"
                className="link-hover text-zinc-600 dark:text-zinc-400"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="link-hover text-zinc-600 dark:text-zinc-400"
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="link-hover text-zinc-600 dark:text-zinc-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="link-hover text-zinc-600 dark:text-zinc-400"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-zinc-500">
              © 2026 Pawel Karniej. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
