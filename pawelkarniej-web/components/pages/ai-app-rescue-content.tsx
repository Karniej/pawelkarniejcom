/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Stethoscope,
  FileSearch,
  GitBranch,
  ShieldCheck,
} from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TaglineReveal } from "@/components/tagline-reveal";

const symptoms = [
  "Cursor, Bolt, Lovable, Replit, or Rork built the prototype, and now nothing ships",
  "The paywall shows but RevenueCat never unlocks anything",
  "TestFlight crashes that never happened in the simulator",
  "EAS builds fail and every fix from the AI makes it worse",
  "Auth works for you and breaks for everyone else",
  "Apple rejected the app and the review notes read like a foreign language",
];

const steps = [
  {
    icon: FileSearch,
    title: "1. I read the codebase",
    body: "You give me repository access. Within 48 hours I map what actually works, what silently fails, and what will get the app rejected in review.",
  },
  {
    icon: Stethoscope,
    title: "2. You get one clear decision",
    body: "The audit ends in a written verdict: repair the current foundation, rebuild the critical path, or start clean. Each option comes with a fixed price and timeline.",
  },
  {
    icon: GitBranch,
    title: "3. I do the fix, or you take the report",
    body: "If I do the build, the $499 audit fee is credited in full. If you take the report to another developer, it is specific enough for them to act on. Either way you leave unstuck.",
  },
];

const faqs = [
  {
    question: "Why is the audit paid?",
    answer:
      "Because it is real work: I read the code, run the builds, and write a verdict you can act on. And it is credited in full against a build, so if we continue, it costs you nothing extra.",
  },
  {
    question: "My app was built by a no code or AI tool. Can you even fix it?",
    answer:
      "Usually yes. Most AI built React Native and Expo apps share the same failure patterns: broken subscription logic, fragile auth, dependency chaos, and missing store requirements. I have seen and fixed each of them repeatedly.",
  },
  {
    question: "What do I need to give you?",
    answer:
      "Repository access and, if they exist, access to the Expo, App Store Connect, and RevenueCat accounts. If you only have a zip file from a tool, that works too.",
  },
  {
    question: "What if the verdict is to start clean?",
    answer:
      "Then I say so and show the math. Sometimes rescuing a codebase costs more than rebuilding the one loop that matters. You decide with real numbers instead of hope.",
  },
  {
    question: "How fast can the actual fix happen after the audit?",
    answer:
      "Repairs are scoped per case. A full rebuild runs as my standard four week sprint with the same guarantee: if I miss the agreed store submission deadline, you get a refund and keep the code.",
  },
  {
    question: "Is my code safe with you?",
    answer:
      "Yes. I sign an NDA on request, access stays read only during the audit, and nothing from your codebase is reused anywhere else.",
  },
];

export function AiAppRescueContent() {
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
            <span className="status-badge">AI app rescue · 48 hours</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold tracking-tight [text-wrap:balance]"
          >
            <span className="gradient-text">
              The AI built your app.
              <br />
              I get it launched.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-400 leading-relaxed [text-wrap:pretty]"
          >
            In 48 hours I audit your React Native or Expo codebase and give
            you one decision: repair, rebuild, or start clean. $499, credited
            in full if I do the build.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <GradientButton
              href="/contact"
              variant="primary"
              icon={ArrowRight}
              size="lg"
            >
              Book the rescue audit
            </GradientButton>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-zinc-500"
          >
            Written verdict in 48 hours. Fixed prices for every path forward.
          </motion.p>
        </div>
      </section>

      {/* Symptoms */}
      <section className="relative px-4 py-24 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 [text-wrap:balance]">
            Sound familiar?
          </h2>
          <ul className="space-y-4">
            {symptoms.map((symptom, index) => (
              <motion.li
                key={symptom}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-lg text-zinc-300 [text-wrap:pretty]"
              >
                <Check className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </motion.li>
            ))}
          </ul>
          <p className="text-lg text-zinc-400 mt-10 text-center [text-wrap:pretty]">
            None of this means your idea is bad. It means the prototype tool
            did its job and stopped. Getting from a prototype to a store
            approved product is a different discipline, and it is the one I
            have practiced since 2018.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="relative px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 [text-wrap:balance]">
            How the rescue works
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
          "A prototype that almost works",
          "is the most expensive place to be stuck.",
        ]}
      />

      {/* Risk reversal */}
      <section className="relative px-4 py-24 bg-white/[0.02]">
        <div className="mx-auto max-w-[680px] text-center space-y-6">
          <ShieldCheck className="h-10 w-10 mx-auto text-emerald-400" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold [text-wrap:balance]">
            The audit pays for itself
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed [text-wrap:pretty]">
            The $499 fee is credited in full against any build I do afterward.
            If the honest answer is that you should not spend more money, the
            report says exactly that, and you have spent $499 to avoid a five
            figure mistake.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 [text-wrap:balance]">
            Questions people ask before they send me the repository
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
            Get unstuck this week
          </h2>
          <p className="text-xl text-zinc-400 [text-wrap:pretty]">
            Send me the repository today and you will have a written verdict
            with fixed prices in 48 hours.
          </p>
          <div className="flex justify-center">
            <GradientButton
              href="/contact"
              variant="primary"
              icon={ArrowRight}
              size="lg"
            >
              Book the rescue audit
            </GradientButton>
          </div>
          <p className="text-sm text-zinc-500">
            Building from scratch instead?{" "}
            <Link
              href="/mobile-apps"
              className="link-hover text-emerald-400 hover:text-emerald-300"
            >
              See the sprint offer
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
