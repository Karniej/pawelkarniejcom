/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Smartphone,
  Rocket,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TaglineReveal } from "@/components/tagline-reveal";
import { AppQuickNav } from "@/components/sections/app-quick-nav";
import { ProductProofSection } from "@/components/sections/product-proof";
import { getFeaturedApps } from "@/lib/apps-data";

const sprints = [
  {
    name: "Product Build Sprint: Launch",
    price: "$3,999",
    delivery: "Store submission in 4 weeks",
    highlight: false,
    features: [
      "One core loop, built to earn from day one",
      "iOS and Android from a single React Native codebase",
      "Paywall and subscriptions wired end to end",
      "Essential analytics so you see what users do",
      "Submission to the App Store and Google Play",
    ],
  },
  {
    name: "Product Build Sprint: Launch + Growth",
    price: "$5,999",
    delivery: "Store submission in 4 weeks",
    highlight: true,
    features: [
      "Everything in Launch",
      "Complete store asset system: icons, screenshots, preview video",
      "ASO keyword research and conversion focused listings",
      "A post launch optimization pass",
    ],
  },
];

const smallerOptions = [
  {
    name: "Kickstart",
    price: "$499",
    description:
      "My full React Native boilerplate plus a live 1 on 1 build session, code review, architecture guidance, and four weeks of priority email support.",
  },
  {
    name: "Embedded product partner",
    price: "$6,999 / month",
    description:
      "For companies with a live product and an active roadmap: one prioritized workstream and my reserved senior capacity, month to month.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "1. We scope it on a call",
    body: "You tell me what the app must do. I cut it to the one core loop that earns money and give you one fixed price.",
  },
  {
    icon: Smartphone,
    title: "2. I build it in four weeks",
    body: "I do the design, code, paywall, and analytics myself. You test progress builds on your own phone along the way.",
  },
  {
    icon: Rocket,
    title: "3. Your app goes to the stores",
    body: "I handle App Store and Google Play submission, including the review back and forth. You end the sprint with a submitted store build and the full repository.",
  },
];

const faqs = [
  {
    question: "Why is the price fixed?",
    answer:
      "Because the scope is fixed. Every sprint ships one core loop with a paywall, subscriptions, and analytics. When we both know what is included, an hourly meter serves nobody.",
  },
  {
    question: "What does the four week guarantee mean exactly?",
    answer:
      "If I miss the agreed store submission deadline, you receive a refund and you keep the code. The reservation deposit is refundable any time before the agreed kickoff.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "I handle the first call, write the code, and submit the app myself.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes. You get the full repository with the complete history. It is a standard React Native and Expo project that any developer can pick up after me.",
  },
  {
    question: "What if my idea needs more than one core loop?",
    answer:
      "Then we sequence it. The first sprint ships the loop that proves people will pay. Follow up work is scoped after real users have touched the first version.",
  },
  {
    question: "Can you fix an app that another developer or an AI tool built?",
    answer:
      "Yes, that is a separate service. The 48 hour rescue audit costs $499, ends in a clear repair or rebuild decision, and is credited in full if I do the build.",
  },
];

export function MobileAppsContent() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Hero */}
      <section className="relative px-4 pt-32 pb-24">
        <div className="mx-auto max-w-[680px] text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-badge">Mobile apps · Fixed price</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold tracking-tight [text-wrap:balance]"
          >
            <span className="gradient-text">
              Your app in the stores
              <br />
              in four weeks
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-400 leading-relaxed [text-wrap:pretty]"
          >
            I design, build, and submit revenue ready iOS and Android apps
            myself. One fixed price, one person responsible, and a deadline with
            a refund behind it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <GradientButton
              href="/contact"
              variant="primary"
              icon={ArrowRight}
              size="lg"
            >
              Book a scoping call
            </GradientButton>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-zinc-500"
          >
            20+ apps shipped since 2018, including two that sold to new owners.
          </motion.p>
        </div>
      </section>

      <AppQuickNav
        apps={getFeaturedApps()}
        linkBase="/apps/"
        navLabel="Apps I have shipped"
      />

      <ProductProofSection />

      {/* Pricing */}
      <section id="pricing" className="relative px-4 py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 [text-wrap:balance]">
              Two sprint scopes
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto [text-wrap:pretty]">
              Both include iOS and Android, a paywall, subscriptions, and store
              submission. The difference is how much launch firepower comes with
              it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sprints.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={
                    tier.highlight
                      ? "modern-card h-full glow-effect border-emerald-400/30"
                      : "modern-card h-full"
                  }
                >
                  <CardHeader>
                    {tier.highlight && (
                      <Badge className="w-max mb-2">Most chosen</Badge>
                    )}
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="font-heading text-4xl font-bold mt-2">
                      {tier.price}
                    </div>
                    <CardDescription className="text-zinc-400">
                      {tier.delivery}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-zinc-300"
                        >
                          <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <GradientButton
                      href="/contact"
                      variant={tier.highlight ? "primary" : "secondary"}
                      className={tier.highlight ? undefined : "dark"}
                      icon={ArrowRight}
                    >
                      Book a scoping call
                    </GradientButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-8">
            {smallerOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card h-full">
                  <CardHeader>
                    <div className="flex items-baseline justify-between gap-4">
                      <CardTitle className="text-xl">{option.name}</CardTitle>
                      <span className="font-heading text-xl font-bold shrink-0">
                        {option.price}
                      </span>
                    </div>
                    <CardDescription className="text-zinc-400 [text-wrap:pretty]">
                      {option.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="relative px-4 py-24 bg-white/[0.02]">
        <div className="mx-auto max-w-[680px] text-center space-y-6">
          <ShieldCheck className="h-10 w-10 mx-auto text-emerald-400" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold [text-wrap:balance]">
            The four week guarantee
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed [text-wrap:pretty]">
            If I miss the agreed store submission deadline, you receive a refund
            and you keep the code. Your reservation deposit is refundable any
            time before kickoff. The risk of the deadline sits with me, where it
            belongs.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="relative px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 [text-wrap:balance]">
            How a sprint works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-zinc-400 [text-wrap:pretty]">
                      {step.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TaglineReveal
        lines={[
          "A deadline with a refund behind it",
          "changes how a project gets run.",
        ]}
      />

      {/* Rescue cross link */}
      <section className="relative px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Card className="modern-card">
            <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <Wrench className="h-8 w-8 text-emerald-400 shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-lg">
                  Already have an app that is broken or stuck?
                </p>
                <p className="text-zinc-400 [text-wrap:pretty]">
                  My 48 hour rescue audit tells you whether to repair, rebuild,
                  or start clean. The $499 fee is credited in full if I do the
                  build.
                </p>
              </div>
              <GradientButton
                href="/ai-app-rescue"
                variant="secondary"
                className="dark shrink-0"
                icon={ArrowRight}
              >
                See the rescue audit
              </GradientButton>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 [text-wrap:balance]">
            Questions founders ask me
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <CardDescription className="text-zinc-400 text-base [text-wrap:pretty]">
                      {faq.answer}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 py-24 bg-white/[0.02]">
        <div className="mx-auto max-w-[680px] text-center space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold [text-wrap:balance]">
            Ready to scope your app?
          </h2>
          <p className="text-xl text-zinc-400 [text-wrap:pretty]">
            Tell me what you want to build. I will turn it into a fixed scope
            and price.
          </p>
          <div className="flex justify-center">
            <GradientButton
              href="/contact"
              variant="primary"
              icon={ArrowRight}
              size="lg"
            >
              Book a scoping call
            </GradientButton>
          </div>
          <p className="text-sm text-zinc-500">
            <Link href="/" className="link-hover hover:text-zinc-300">
              Back to the homepage
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
