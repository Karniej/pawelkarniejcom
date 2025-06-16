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

export default function AividlyTermsPage() {
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
                AIVidly Terms of Service
              </CardTitle>
              <CardDescription className="text-lg">
                Last updated: December 2024
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By downloading, installing, or using AIVidly, you agree to
                    be bound by these Terms of Service. If you do not agree to
                    these terms, please do not use the application.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    2. Description of Service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    AIVidly is an AI-powered video generation application that
                    allows users to create videos from text prompts using
                    artificial intelligence technology.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    3. User Responsibilities
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to use AIVidly responsibly and in compliance with
                    all applicable laws. You are responsible for:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>
                      Ensuring your prompts do not violate content policies
                    </li>
                    <li>
                      Not generating harmful, illegal, or inappropriate content
                    </li>
                    <li>Respecting intellectual property rights</li>
                    <li>Not attempting to reverse engineer the AI models</li>
                    <li>
                      Using the service for personal or authorized commercial
                      use only
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    4. Content Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    AIVidly prohibits the generation of content that is:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Illegal, harmful, or promotes violence</li>
                    <li>Sexually explicit or inappropriate</li>
                    <li>Defamatory or harassing</li>
                    <li>Infringing on intellectual property rights</li>
                    <li>Misleading or deceptive</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    5. Subscription and Billing
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    AIVidly offers premium features through subscription plans
                    processed via the Apple App Store. Subscriptions
                    automatically renew unless cancelled at least 24 hours
                    before the current period ends.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    6. Intellectual Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You retain ownership of content you create using AIVidly.
                    However, you grant us a limited license to process your
                    prompts for the purpose of generating videos. The AI models
                    and application code remain our intellectual property.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    7. Service Availability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive to maintain service availability but cannot
                    guarantee uninterrupted access. The service may be
                    temporarily unavailable for maintenance, updates, or due to
                    technical issues.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    8. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    AIVidly is provided &quot;as is&quot; without warranties. We
                    are not liable for any damages arising from your use of the
                    application, including but not limited to loss of data,
                    business interruption, or any indirect damages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    9. Termination
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may terminate your access to AIVidly at any time for
                    violation of these terms or for any other reason. You may
                    stop using the service at any time by deleting the
                    application.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    10. Changes to Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these terms from time to time. We will notify
                    you of any changes by posting the updated terms in the
                    application. Your continued use constitutes acceptance of
                    the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For any questions about these Terms of Service, please
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
                    href="/terms"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer hover:scale-105 transition-transform no-underline"
                  >
                    Back to Terms
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
