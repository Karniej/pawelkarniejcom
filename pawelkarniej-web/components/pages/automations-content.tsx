/** @format */

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Map,
  Workflow,
  UserCheck,
  X,
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

// One day in a supervised system. The numbers and the rows are illustrative,
// and the page says so, because inventing client metrics is not proof.
const queue = {
  counts: [
    { value: "7", label: "Needs a decision", tone: "text-amber-300" },
    { value: "12", label: "Awaiting response", tone: "text-blue-300" },
    { value: "4", label: "Running now", tone: "text-emerald-300" },
    { value: "18", label: "Completed today", tone: "text-zinc-200" },
  ],
  items: [
    {
      title: "New lead asks about Saturday availability",
      action: "Reply with the approved weekend options",
      state: "Draft prepared",
      risk: "Low risk",
      dot: "bg-emerald-400",
    },
    {
      title: "One star review mentions a missed appointment",
      action: "Escalate before any public answer",
      state: "Escalation recommended",
      risk: "High risk",
      dot: "bg-red-400",
    },
    {
      title: "Carrier invoice is $430 above the approved quote",
      action: "Compare the quote, the invoice, and the shipment record",
      state: "3 records attached",
      risk: "Needs approval",
      dot: "bg-amber-400",
    },
    {
      title: "Weekly report is ready",
      action: "Send the checked draft for review",
      state: "Sources checked",
      risk: "Ready for review",
      dot: "bg-blue-400",
    },
  ],
};

// The three shapes most small teams need first. Ported from the work I do on
// my own operations, then written as what you get, not as a feature list.
const systems = [
  {
    index: "01",
    title: "Revenue and inbox",
    description:
      "Turns calls, forms, and email into qualified next steps, and keeps the whole thread in one place.",
    capabilities: [
      "Sort and summarize new enquiries",
      "Prepare replies and proposal drafts",
      "Hold the context across a long thread",
      "Schedule the follow up",
      "Update the CRM after you approve",
      "Escalate an unusual commercial request",
    ],
    example:
      "A new enquiry matches your standard service area. The system prepares the reply, attaches the correct service information, and schedules a follow up if the lead stays quiet.",
  },
  {
    index: "02",
    title: "Operations and exceptions",
    description:
      "Watches the work that repeats and pulls the exceptions out of inboxes, documents, and spreadsheets.",
    capabilities: [
      "Find missing information and mismatches",
      "Compare records across two sources",
      "Prepare the customer or supplier update",
      "Route a high risk case to a person",
      "Watch deadlines and open items",
      "Produce one daily summary",
    ],
    example:
      "A delivery date in a customer email conflicts with the date in your system. The system collects both records and sends the difference to you for a decision.",
  },
  {
    index: "03",
    title: "Content and reputation",
    description:
      "Turns approved material into useful content, and handles review and reputation work without losing your voice.",
    capabilities: [
      "Watch reviews and mentions",
      "Draft answers from approved wording",
      "Turn one source into several formats",
      "Keep every claim traceable to a source",
      "Hold anything sensitive for a person",
      "Report what was published",
    ],
    example:
      "A new review arrives. The system drafts an answer in your words, attaches the booking record it refers to, and waits for you before it posts.",
  },
];

const comparison = {
  chat: [
    "Waits for a person to write a prompt",
    "Returns an answer, not a finished job",
    "Forgets what is already running",
    "Hides the records behind the answer",
    "Stops when the conversation stops",
    "Is hard to measure",
  ],
  system: [
    "Starts on a real event in your business",
    "Finishes the job, or asks one clear question",
    "Holds the state of every open item",
    "Attaches the records it used",
    "Runs while nobody watches it",
    "Reports hours, money, and errors",
  ],
};

const measures = [
  {
    title: "Revenue",
    body: "Faster first answer, fewer lost enquiries, more follow ups that actually happen.",
  },
  {
    title: "Cost",
    body: "Hours returned to the people who do the work, and fewer handoffs per job.",
  },
  {
    title: "Risk",
    body: "Fewer missed deadlines, fewer wrong invoices paid, and a written record of every action.",
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
            Pick the job that eats your week. I map how it really runs, then
            build a system that does the preparation for you. Your team stops
            gathering context and starts approving finished work.
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

      {/* One day in the system */}
      <section className="relative px-4 pb-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <p className="font-heading text-lg font-bold">Your work queue</p>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Illustrative
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4">
              {queue.counts.map((count) => (
                <div
                  key={count.label}
                  className="border-b border-r border-white/10 px-6 py-5 last:border-r-0"
                >
                  <p
                    className={`font-heading text-3xl font-bold ${count.tone}`}
                  >
                    {count.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500">
                    {count.label}
                  </p>
                </div>
              ))}
            </div>

            <ul className="divide-y divide-white/10">
              {queue.items.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-2 h-2 w-2 shrink-0 rounded-full ${item.dot}`}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-zinc-100">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-zinc-400 [text-wrap:pretty]">
                        Proposed action: {item.action}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2 pl-5 sm:pl-0">
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-300">
                      {item.state}
                    </span>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-300">
                      {item.risk}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <p className="mt-5 text-center text-sm text-zinc-500 [text-wrap:pretty]">
            An example queue, not a client screenshot. Nothing in it sends
            before a person approves it.
          </p>
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

      {/* Three systems */}
      <section className="relative px-4 py-24 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6 [text-wrap:balance]">
            The three systems I build most often
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-xl text-zinc-400 [text-wrap:pretty]">
            Your first workflow usually sits inside one of these three. We pick
            one on the call.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {systems.map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="font-heading text-sm font-bold text-blue-400">
                  {system.index}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-bold">
                  {system.title}
                </h3>
                <p className="mt-4 leading-relaxed text-zinc-400 [text-wrap:pretty]">
                  {system.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                  {system.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto border-l border-blue-400/40 pl-4 pt-6 text-sm leading-relaxed text-zinc-400 [text-wrap:pretty]">
                  {system.example}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-zinc-500 [text-wrap:pretty]">
            These are examples, not products on a shelf. The scope depends on
            your workflow, your data, and the access I get to your tools.
          </p>
        </div>
      </section>

      {/* Chat against a supervised system */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6 [text-wrap:balance]">
            This is not a chat box with your logo on it
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-xl text-zinc-400 [text-wrap:pretty]">
            Chat is useful when you think. Work that repeats needs state,
            controls, and an end.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 p-7">
              <h3 className="font-heading text-xl font-bold text-zinc-300">
                A chat assistant
              </h3>
              <ul className="mt-6 space-y-4">
                {comparison.chat.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-zinc-400"
                  >
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-zinc-600" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-blue-400/30 bg-blue-400/[0.06] p-7">
              <h3 className="font-heading text-xl font-bold">
                A supervised system
              </h3>
              <ul className="mt-6 space-y-4">
                {comparison.system.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-zinc-200"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we measure */}
      <section className="relative px-4 py-24 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6 [text-wrap:balance]">
            Every workflow must move revenue, cost, or risk
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-xl text-zinc-400 [text-wrap:pretty]">
            We agree the measure on the map, before I build anything.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {measures.map((measure) => (
              <div
                key={measure.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <h3 className="font-heading text-2xl font-bold">
                  {measure.title}
                </h3>
                <p className="mt-4 leading-relaxed text-zinc-400 [text-wrap:pretty]">
                  {measure.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-zinc-500 [text-wrap:pretty]">
            If the workflow cannot be measured yet, the map defines the measure
            first. I do not publish invented percentages.
          </p>
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
            Questions people ask me
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
            Which job eats your week?
          </h2>
          <p className="text-xl text-zinc-400 [text-wrap:pretty]">
            Twenty minutes, free, and honest. If automation will not pay for
            itself in your case, I say so on the call and we stop there.
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
