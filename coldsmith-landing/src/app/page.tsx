/** @format */

"use client";

import { motion } from "framer-motion";
import { Snowflake, Timer, TrendingUp, Heart, Zap, Apple } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <Card className="coldsmith-card relative">
    <CardHeader>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 p-2.5 rounded-xl bg-blue-500/20 border border-blue-400/30">
          <Icon className="w-full h-full text-blue-300" />
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-zinc-300 leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default function ColdsmithLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Ice/Snow Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-200/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-8 p-4 rounded-3xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-400/40"
            >
              <Snowflake className="w-full h-full text-blue-300" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
            >
              <span className="gradient-text">Coldsmith</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl text-blue-200/90 mb-4 font-medium"
            >
              Wim Hof Method & Cold Plunge Coach
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Track your cold exposure progress, build consistent habits, and
              master breathwork with personalized coaching and health insights.
            </motion.p>

            {/* App Store Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <a
                href="https://apps.apple.com/pl/app/wim-hof-method-whm-coldsmith/id6469033824"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <Apple className="w-6 h-6" />
                Download on App Store
              </a>
            </motion.div>
          </div>

          {/* App Screenshot Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center mb-20"
          >
            <div className="relative">
              <div className="w-72 h-[600px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] border-8 border-slate-700 shadow-2xl">
                <div className="absolute inset-8 bg-gradient-to-b from-blue-950 to-slate-950 rounded-[2rem] flex flex-col items-center justify-center">
                  <Snowflake className="w-16 h-16 text-blue-300 mb-4" />
                  <h3 className="text-blue-200 font-semibold text-lg mb-2">
                    Coldsmith
                  </h3>
                  <p className="text-zinc-400 text-sm text-center px-4">
                    App Screenshot
                    <br />
                    Placeholder
                  </p>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-cyan-500/20 rounded-[3rem] blur-xl -z-10"></div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            <FeatureCard
              icon={Timer}
              title="Cold Exposure Tracker"
              description="Track your cold showers, ice baths, and cold plunges with detailed logs including duration, temperature, and mood."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Progress & Habits"
              description="Build consistency with routine tracking, smart reminders, and motivational achievements."
            />
            <FeatureCard
              icon={Heart}
              title="Health Integration"
              description="Connect to Apple Health for smart coaching based on your activity, sleep, and heart rate variability."
            />
            <FeatureCard
              icon={Zap}
              title="Breathwork Support"
              description="Learn breathing techniques that support cold adaptation and mental clarity with text-based tips."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Visual Progress"
              description="Monitor your journey with charts, achievements, and mood trends to stay motivated."
            />
            <FeatureCard
              icon={Snowflake}
              title="Cold Challenges"
              description="Push your limits with cold exposure challenges and track your longest streaks."
            />
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              <span className="gradient-text">Why Cold Exposure?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                "Boost energy and mental clarity",
                "Support your immune system",
                "Build discipline through controlled discomfort",
                "Reduce stress and improve mood",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/20"
                >
                  <p className="text-blue-100 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <h3 className="text-2xl font-heading font-bold mb-4 text-blue-200">
              Start your cold journey today
            </h3>
            <p className="text-zinc-400 mb-8">
              Track every win—one chill at a time.
            </p>
            <GradientButton href="https://apps.apple.com/pl/app/wim-hof-method-whm-coldsmith/id6469033824">
              <Apple className="w-5 h-5 mr-2" />
              Get Coldsmith Now
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
