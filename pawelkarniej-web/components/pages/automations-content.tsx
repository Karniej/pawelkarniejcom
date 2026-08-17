/** @format */

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Map,
  Workflow,
  UserCheck,
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

const principles = [
  "Your existing tools stay, nothing gets ripped out",
  "New automations run in shadow mode first",
  "Consequential actions wait for human approval",
  "Every action is traceable to a person or a rule",
];

const steps = [
  {
    icon: UserCheck,
    title: "1. Free fit call, 20 minutes",
    body: "You describe the work that repeats every week. I tell you honestly whether automation will pay for itself, and which single workflow to start with.",
  },
  {
    icon: Map,
    title: "2. Workflow map, from $750",
    body: "In about a week I document how the workflow really runs: the tools, the exceptions, the approval points, and where the hours go. You own the map either way.",
  },
  {
    icon: Workflow,
    title: "3. One production workflow",
    body: "I build the automation around the map, run it in shadow mode next to your team, and hand over a system where work arrives prepared and decisions stay human. Scope and price come from the map, not from a guess.",
  },
];

const faqs = [
  {
    question: "Is this a chatbot?",
    answer:
      "No. Chat is useful for ad hoc thinking, but recurring operational work needs state, controls, and a path to completion. The system I build wakes up on real events, follows an approved playbook, and surfaces only the decisions that need a person.",
  },
  {
    question: "Why start with just one workflow?",
    answer:
      "Because one working automation beats a transformation roadmap. You see real results in weeks, and everything that proves useful earns the right to expand.",
  },
  {
    question: "Will this replace people on my team?",
    answer:
      "It removes the preparation work around decisions, not the decisions. Your team stops gathering context and starts approving prepared work. The judgment stays with them.",
  },
  {
    question: "What tools do you work with?",
    answer:
      "The ones you already have: email, calendars, spreadsheets, CRMs, invoicing, and messaging tools. Keeping existing systems is a design rule, not a compromise.",
  },
  {
    question: "Why is the first deployment not priced on this page?",
    answer:
      "Because the real scope is not knowable before the map exists. Publishing a number here would anchor the project at the cost of the smallest version of it. The map gives us both a scope we can price honestly.",
  },
];

export function AutomationsContent() {
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
            <span className="status-badge">
              AI automations · Human approval built in
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold tracking-tight [text-wrap:balance]"
          >
            <span className="gradient-text">
              Recurring work should
              <br />
              arrive prepared
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-400 leading-relaxed [text-wrap:pretty]"
          >
            I connect your tools, knowledge, and approval rules into a
            supervised automation. The busywork gets done before anyone asks,
            and the important decisions stay with your team.
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
              Book the free fit call
            </GradientButton>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-zinc-500"
          >
            Start with one workflow. Expand what proves useful.
          </motion.p>
        </div>
      </section>

      {/* Principles */}
      <section className="relative px-4 py-24 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 [text-wrap:balance]">
            Four rules I never break
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <motion.li
                key={principle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-lg text-zinc-300 [text-wrap:pretty]"
              >
                <Check className="h-6 w-6 text-blue-400 shrink-0 mt-0.5" />
                <span>{principle}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="relative px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6 [text-wrap:balance]">
            The path from busywork to system
          </h2>
          <p className="text-xl text-zinc-400 text-center max-w-2xl mx-auto mb-16 [text-wrap:pretty]">
            Three steps, each one cheap enough to stop after and valuable
            enough to keep.
          </p>
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
                    <div className="w-12 h-12 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-blue-400" />
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
          "Your team should not manage work",
          "through a chat box.",
          "The work should arrive prepared.",
        ]}
      />

      {/* FAQ */}
      <section className="relative px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 [text-wrap:balance]">
            Common questions
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
            Find your first workflow
          </h2>
          <p className="text-xl text-zinc-400 [text-wrap:pretty]">
            Twenty minutes, free, and honest. If automation will not pay for
            itself in your case, I will say so on the call.
          </p>
          <div className="flex justify-center">
            <GradientButton
              href="/contact"
              variant="primary"
              icon={ArrowRight}
              size="lg"
            >
              Book the free fit call
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}
