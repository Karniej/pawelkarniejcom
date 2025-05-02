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

export default function TermsOfServiceScreen() {
  return (
    <Animated.View style={{ flex: 1 }} entering={FadeIn}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack p="$4" space="lg" flex={1}>
          <Heading size="xl">Terms of Service for AIVidly</Heading>
          <Text size="sm">Last updated: 23.09.2024</Text>

          <Section title="1. Acceptance of Terms">
            <Text>
              By accessing or using the AIVidly app, you agree to be bound by
              these Terms of Service. If you disagree with any part of the
              terms, you may not use our app.
            </Text>
          </Section>

          <Section title="2. Description of Service">
            <Text>
              AIVidly is a mobile application that allows you to create videos
              using AI.
            </Text>
          </Section>

          <Section title="3. User Accounts">
            <Text>
              3.1. You may need to create an account to use some features of our
              app. You are responsible for maintaining the confidentiality of
              your account and password.
            </Text>
            <Text>
              3.2. You agree to provide accurate, current, and complete
              information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </Text>
          </Section>

          <Section title="4. Data Access">
            <Text>
              4.1. To use our service, you must sign in with your Apple or
              Google account.
            </Text>
          </Section>

          <Section title="5. Analytics and Data Collection">
            <Text>
              5.1. We use Firebase Analytics to collect usage data to improve
              our services. This data is collected anonymously and does not
              personally identify you.
            </Text>
            <Text>
              5.2. By using our app, you consent to the collection and use of
              this analytics data.
            </Text>
            <Text>
              5.3. You may opt out of analytics data collection through your
              device settings or by contacting us at contact@silpho.com.
            </Text>
          </Section>

          <Section title="6. Subscription and Payments">
            <Text>
              6.1. Some features of our app may require a paid subscription. By
              subscribing, you agree to pay the applicable fees.
            </Text>
            <Text>
              6.2. Subscriptions automatically renew unless canceled before the
              renewal date.
            </Text>
            <Text>
              6.3. Refunds are provided in accordance with the platform's (e.g.,
              Apple App Store, Google Play Store) policies.
            </Text>
          </Section>

          <Section title="7. User Conduct">
            <Text>You agree not to:</Text>
            <BulletList
              items={[
                "Use the app in any way that violates any applicable laws or regulations",
                "Impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity",
                "Interfere with or disrupt the app or servers or networks connected to the app",
                "Attempt to gain unauthorized access to any portion of the app or any other systems or networks connected to the app",
              ]}
            />
          </Section>

          <Section title="8. Intellectual Property">
            <Text>
              The app and its original content, features, and functionality are
              owned by F.C.I. Paweł Karniej and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property or proprietary rights laws.
            </Text>
          </Section>

          <Section title="9. Termination">
            <Text>
              We may terminate or suspend your account and access to the app
              immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </Text>
          </Section>

          <Section title="10. Limitation of Liability">
            <Text>
              In no event shall F.C.I. Paweł Karniej, nor its directors,
              employees, partners, agents, suppliers, or affiliates, be liable
              for any indirect, incidental, special, consequential or punitive
              damages, including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the app.
            </Text>
          </Section>

          <Section title="11. Changes to Terms">
            <Text>
              We reserve the right to modify or replace these Terms at any time.
              We will provide notice of any significant changes by posting the
              new Terms on this page.
            </Text>
          </Section>

          <Section title="12. Contact Us">
            <Text>
              If you have any questions about these Terms, please contact us at
              contact@silpho.com.
            </Text>
          </Section>
        </VStack>
      </ScrollView>
    </Animated.View>
  );
}
