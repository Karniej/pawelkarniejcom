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
  Code,
  Zap,
  ExternalLink,
  Youtube,
  Instagram,
  Star,
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
import { getAllApps, getFeaturedApps } from "@/lib/apps-data";
// YouTube integration is currently disabled. See YOUTUBE_SETUP.md for details.

export default function Home() {
  const liveApps = getFeaturedApps().filter((app) => !app.acquired);
  const marqueeApps = getAllApps();

  const articles = [
    {
      title: "The best React Native date picker libraries",
      link: "https://blog.logrocket.com/best-react-native-date-picker-libraries/",
      date: "Feb 22, 2024",
      publisher: "LogRocket",
    },
    {
      title: "React Native iOS and Android development guide",
      link: "https://www.netguru.com/blog/react-native-ios-and-android",
      date: "Feb 22, 2024",
      publisher: "Netguru",
    },
    {
      title: "Designing a custom UI using React Native Paper",
      link: "https://blog.logrocket.com/designing-custom-ui-using-react-native-paper/",
      date: "May 2, 2023",
      publisher: "LogRocket",
    },
  ];

  const stats = [
    { label: "Apps shipped since 2018", value: "25+", icon: Smartphone },
    { label: "Years of React Native", value: "8", icon: Code },
    { label: "Apps sold to new owners", value: "2", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Film grain texture */}
      <div className="grain-overlay" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center px-4 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="status-badge">Available for new projects</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight [text-wrap:balance]"
              >
                <span className="gradient-text block">25+ apps shipped.</span>
                <span className="gradient-text block">Yours is next.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
                className="text-xl text-zinc-400 max-w-2xl leading-relaxed [text-wrap:pretty]"
              >
                I&apos;m Paweł Karniej. I build mobile apps and AI automations
                for founders and small teams, shipping React Native since 2018.
                You talk to me directly, and I do the work myself, from the
                first call to the store release.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
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
                  className="group inline-flex items-center gap-2 text-base font-semibold text-zinc-300 transition-colors duration-300 hover:text-white focus-ring rounded-full"
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
                  <a
                    href="https://twitter.com/pawelkarniej"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="p-3 rounded-xl border border-white/10 text-zinc-400 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/20 hover:bg-white/5 active:scale-[0.98] focus-ring group"
                  >
                    <Twitter className="h-5 w-5 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://github.com/karniej"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-3 rounded-xl border border-white/10 text-zinc-400 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/20 hover:bg-white/5 active:scale-[0.98] focus-ring group"
                  >
                    <Github className="h-5 w-5 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="mailto:contact@pawelkarniej.com"
                    aria-label="Email"
                    className="p-3 rounded-xl border border-white/10 text-zinc-400 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/20 hover:bg-white/5 active:scale-[0.98] focus-ring group"
                  >
                    <Mail className="h-5 w-5 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/pawelkarniej/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-3 rounded-xl border border-white/10 text-zinc-400 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/20 hover:bg-white/5 active:scale-[0.98] focus-ring group"
                  >
                    <Instagram className="h-5 w-5 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@thepawelk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="p-3 rounded-xl border border-white/10 text-zinc-400 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/20 hover:bg-white/5 active:scale-[0.98] focus-ring group"
                  >
                    <TikTokIcon className="h-5 w-5 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.youtube.com/@thepawelk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="p-3 rounded-xl border border-white/10 text-zinc-400 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/20 hover:bg-white/5 active:scale-[0.98] focus-ring group"
                  >
                    <Youtube className="h-5 w-5 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="relative"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 -rotate-3 rounded-3xl border border-emerald-400/20 bg-emerald-400/5"></div>
                <div className="relative h-full w-full rotate-2 overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_80px_-24px_rgba(52,211,153,0.25)] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:rotate-0">
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
                className="group relative block h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 grayscale transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110 hover:grayscale-0 focus-ring"
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
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto [text-wrap:pretty]">
              Pick the door that matches your problem. Both end in a direct
              conversation with me, not a sales team.
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
                  <div className="w-14 h-14 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-4">
                    <Smartphone className="h-7 w-7 text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl">Mobile apps</CardTitle>
                  <CardDescription className="text-zinc-400 text-base [text-wrap:pretty]">
                    I take your idea to the App Store and Google Play in four
                    weeks. Fixed scope, fixed price, iOS and Android in one
                    build, paywall and subscriptions included.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-zinc-300 mb-6">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Sprints from $3,999, store submission in four weeks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        If I miss the agreed deadline, you get a refund and keep
                        the code
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Built on the same stack as my own 25+ shipped apps</span>
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
                    <p className="text-sm text-zinc-400">
                      <Wrench className="inline h-4 w-4 mr-1 text-emerald-400" />
                      App built with AI and now broken?{" "}
                      <Link
                        href="/ai-app-rescue"
                        className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
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
                    <Zap className="h-7 w-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl">AI automations</CardTitle>
                  <CardDescription className="text-zinc-400 text-base [text-wrap:pretty]">
                    I map one recurring workflow in your business and turn it
                    into a supervised automation. Work arrives prepared, and
                    the important decisions stay with your team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-zinc-300 mb-6">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Free 20 minute fit call to find the right workflow</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Workflow map from $750, delivered in about a week</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Your existing tools stay, approvals stay human</span>
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

          {/* Proof strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl border border-white/10 bg-white/5 px-4 py-6"
              >
                <stat.icon className="h-6 w-6 mx-auto mb-3 text-emerald-400" />
                <div className="font-heading text-3xl font-bold">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <TaglineReveal
        lines={[
          "Every product on this page",
          "was shipped by one person.",
          "The same person you will talk to.",
        ]}
      />

      {/* Proof of work */}
      <section id="proof" className="relative py-24 px-4 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Proof of work
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto [text-wrap:pretty]">
              Apps I still run, live on the App Store today. Every one built
              start to finish by me.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {liveApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={`/apps/${app.id}`}
                  className="block h-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/10 group-hover:scale-105"
                >
                  <div className="w-16 h-16 relative rounded-2xl overflow-hidden mx-auto mb-4">
                    <Image
                      src={app.icon}
                      alt={`${app.title} app icon`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="font-semibold group-hover:text-emerald-400 transition-colors">
                    {app.title}
                  </div>
                  <div className="text-sm text-zinc-400 mt-1 [text-wrap:balance]">
                    {app.tagline}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <GradientButton href="/apps" variant="secondary" className="dark">
              See all my apps
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* About Me */}
      <section className="relative pt-12 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About me
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto text-lg text-zinc-300 leading-relaxed space-y-6 [text-wrap:pretty]">
            <p>
              Hi, I&apos;m Paweł. My career began in logistics, but in 2018 I
              decided to change direction, taught myself how to code, and
              started working as a mobile app developer. At first I freelanced
              for different companies, which gave me experience across many
              projects and industries.
            </p>
            <p>
              Eventually I wanted more than client work, so I started shipping
              my own apps. Some were small niche products, others were bigger
              bets, but each one taught me something about development, growth,
              and marketing. Today I split my time between client work, both
              mobile apps and automations, and my own portfolio. I also build{" "}
              <a
                href="https://silpho.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-100 underline underline-offset-4 hover:text-white"
              >
                Silpho
              </a>
              , my operations product.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="relative py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Technical writing
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Guides for LogRocket and Netguru, plus my own writing about
              shipping mobile apps
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="modern-card transition-all duration-300 group-hover:glow-effect">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-hover"
                          >
                            {article.title}
                          </a>
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-zinc-400">
                          <span>{article.publisher}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors shrink-0"
                      >
                        Read Article <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <GradientButton href="/blog" variant="secondary" className="dark">
              Read more on my blog
            </GradientButton>
          </motion.div>
        </div>
      </section>

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
            <p className="mt-6 text-xl text-zinc-400 [text-wrap:pretty]">
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
      <footer className="relative py-16 px-4 border-t border-white/10">
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
                className="link-hover text-zinc-400 hover:text-white"
              >
                Mobile apps
              </Link>
              <Link
                href="/automations"
                className="link-hover text-zinc-400 hover:text-white"
              >
                Automations
              </Link>
              <Link
                href="/ai-app-rescue"
                className="link-hover text-zinc-400 hover:text-white"
              >
                AI app rescue
              </Link>
              <Link
                href="/graveyard"
                className="link-hover text-zinc-400 hover:text-white"
              >
                Graveyard
              </Link>
              <Link
                href="/blog"
                className="link-hover text-zinc-400 hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="link-hover text-zinc-400 hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="link-hover text-zinc-400 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="link-hover text-zinc-400 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-zinc-500">
              I also build{" "}
              <a
                href="https://silpho.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover hover:text-zinc-300"
              >
                Silpho
              </a>
              , my operations product.
            </p>
            <p className="text-zinc-500">
              © 2026 Pawel Karniej. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
