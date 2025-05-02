/** @format */

import React from "react";
import { ScrollView } from "react-native";
import { VStack, Text, Heading, Box } from "@gluestack-ui/themed";
import Animated, { FadeIn } from "react-native-reanimated";

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <VStack space="sm">
    <Heading size="md">{title}</Heading>
    {children}
  </VStack>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <VStack space="xs" pl="$4">
    {items.map((item, index) => (
      <Text key={index}>• {item}</Text>
    ))}
  </VStack>
);

export default function PrivacyPolicyScreen() {
  return (
    <Animated.View style={{ flex: 1 }} entering={FadeIn}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack p="$4" space="lg" flex={1}>
          <Heading size="xl">Privacy Policy for AIVidly</Heading>
          <Text size="sm">Last updated: 23.09.2024</Text>

          <Section title="1. Introduction">
            <Text>
              Welcome to AIVidly. We respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we look after your personal data when you use our app
              and tell you about your privacy rights.
            </Text>
          </Section>

          <Section title="2. Data We Collect">
            <Text>We collect and process the following data:</Text>
            <BulletList
              items={[
                "User Account Information: If you create an account, we store your email address and encrypted password.",
                "Payment Information: If you subscribe to our premium service, we process payment data through our payment processor (e.g., RevenueCat). We do not store full payment card details.",
                "Usage Data: We collect analytics data about how you interact with our app using Firebase Analytics. This may include information such as app opens, feature usage, and interaction with in-app elements.",
                "All facial data is processed in-memory and discarded after the session ends.",
              ]}
            />
          </Section>
          <Section title="2A. Face Data Usage">
            <Text>
              Some features of AIVidly may involve uploading user photos that
              include faces in order to generate images using AI. In these
              cases:
            </Text>
            <BulletList
              items={[
                "We do not collect or store biometric data such as facial geometry or facial recognition templates.",
                "User-uploaded photos are temporarily processed by our AI models to generate outputs and are not retained after processing.",
                "All processing occurs on secure servers and is not used for identification or authentication purposes.",
                "We do not share user photos or any facial data with third-party services.",
              ]}
            />
          </Section>

          <Section title="3. How We Use Your Data">
            <Text>We use your data to:</Text>
            <BulletList
              items={[
                "Provide our newsletter statistics service",
                "Manage your account",
                "Process payments for premium subscriptions",
                "Improve and optimize our app",
                "Communicate with you about your account or our services",
                "Analyze app usage patterns to improve our service and user experience",
              ]}
            />
          </Section>

          <Section title="4. Data Sharing and Disclosure">
            <Text>
              We do not sell your personal data. We may share data with:
            </Text>
            <BulletList
              items={[
                "Service providers who help us operate our app (e.g., hosting providers, payment processors)",
                "Law enforcement agencies when required by law",
                "Analytics providers (such as Firebase) who help us understand app usage and improve our services",
              ]}
            />
          </Section>

          <Section title="5. Data Security">
            <Text>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized or unlawful
              processing, accidental loss, destruction, or damage.
            </Text>
          </Section>
          <Text>
            User-submitted photos, including those containing faces, are
            processed temporarily and then discarded. No face data is stored or
            retained after the image generation is complete.
          </Text>

          <Section title="6. Your Rights">
            <Text>Depending on your location, you may have the right to:</Text>
            <BulletList
              items={[
                "Access the personal data we hold about you",
                "Correct inaccurate personal data",
                "Delete your personal data",
                "Object to or restrict our processing of your personal data",
                "Data portability",
              ]}
            />
            <Text>
              To exercise these rights, please contact us at contact@silpho.com.
            </Text>
          </Section>

          <Section title="7. Changes to This Policy">
            <Text>
              We may update this privacy policy from time to time. We will
              notify you of any significant changes by posting the new policy on
              this page.
            </Text>
          </Section>

          <Section title="8. Contact Us">
            <Text>
              If you have any questions about this privacy policy, please
              contact us at contact@silpho.com.
            </Text>
          </Section>
        </VStack>
      </ScrollView>
    </Animated.View>
  );
}
