/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AividlyPrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-heading font-bold mb-4">
                AIVidly Privacy Policy
              </CardTitle>
              <CardDescription className="text-lg">
                Last updated: December 2024
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    AIVidly collects minimal information necessary to provide
                    our AI video generation service:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Text prompts you submit for video generation</li>
                    <li>Generated videos and associated metadata</li>
                    <li>Usage analytics for app improvement</li>
                    <li>Device information for optimization</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information is used exclusively to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Generate AI videos based on your prompts</li>
                    <li>Improve our AI models and service quality</li>
                    <li>Provide technical support when needed</li>
                    <li>Analyze usage patterns for app optimization</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Data Storage and Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We take data security seriously. Your generated videos are
                    stored locally on your device and temporarily on our secure
                    servers during processing. We do not permanently store your
                    content or prompts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Third-Party Services
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    AIVidly uses AI services from leading providers to generate
                    videos. These services process your prompts but do not
                    retain your data beyond the generation process.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You can request deletion of your data at any time by
                    contacting us. All locally stored content can be deleted
                    directly from the app.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For any privacy-related questions or requests, please
                    contact us at:
                  </p>
                  <p className="text-primary font-medium">
                    contact@pawelkarniej.com
                  </p>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer hover:scale-105 transition-transform no-underline"
                  >
                    Back to Privacy Policies
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer hover:scale-105 transition-transform no-underline"
                  >
                    Home
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
