/** @format */

import React from "react";
import { ScrollView } from "react-native";
import { VStack, Text, Heading, Box } from "@gluestack-ui/themed";
import Animated, { FadeIn } from "react-native-reanimated";
import { colors } from "@/constants/customisedTheme";

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <VStack space="sm">
    <Heading
      size="md"
      $light-color={colors.darkBackground}
      $dark-color={colors.lightBackground}
      fontFamily="Poppins_600SemiBold"
    >
      {title}
    </Heading>
    {children}
  </VStack>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <VStack space="xs" pl="$4">
    {items.map((item, index) => (
      <Text
        key={index}
        $light-color={colors.darkBackground}
        $dark-color={colors.lightBackground}
        fontFamily="Poppins_400Regular"
      >
        • {item}
      </Text>
    ))}
  </VStack>
);

export default function ColdsmithPrivacyPolicyScreen() {
  return (
    <Animated.View style={{ flex: 1 }} entering={FadeIn}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack p="$4" space="lg" flex={1}>
          <Heading
            size="xl"
            $light-color={colors.primary}
            $dark-color={colors.primary}
            fontFamily="Poppins_600SemiBold"
          >
            Privacy Policy for Coldsmith
          </Heading>

          <Section title="1. Information We Collect">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Health Data:</Text> We
              collect cold exposure session data, including duration,
              temperature preferences, mood ratings, and completion status. This
              data is stored locally on your device and optionally synced with
              Apple Health with your explicit consent.
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">
                Apple Health Integration:
              </Text>{" "}
              When you choose to connect Apple Health, we may read your heart
              rate variability, sleep data, and activity levels to provide
              personalized recommendations. We also write your cold exposure
              sessions as mindful sessions and workouts to Apple Health.
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Device Data:</Text> We
              collect basic device information, app usage analytics, and crash
              reports to improve app performance. No personal health data is
              included in these analytics.
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Subscription Data:</Text>{" "}
              Payment and subscription information is processed by Apple App
              Store and RevenueCat. We only receive subscription status
              (active/inactive) to provide premium features.
            </Text>
          </Section>

          <Section title="2. How We Use Your Information">
            <BulletList
              items={[
                "Provide personalized cold exposure coaching and recommendations",
                "Track your progress and session history",
                "Sync data between your iPhone and Apple Watch",
                "Improve app functionality and user experience",
                "Send optional notifications and reminders",
              ]}
            />
          </Section>

          <Section title="3. Data Storage and Security">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              Your health data is stored locally on your device using iOS secure
              storage. We use industry-standard encryption to protect your data.
              Session data shared with Apple Health is governed by Apple's
              privacy policies.
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              We do not store your health data on external servers. All
              processing happens locally on your device to ensure maximum
              privacy and security.
            </Text>
          </Section>

          <Section title="4. Data Sharing">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              We do not sell, trade, or share your personal health data with
              third parties. Data may only be shared:
            </Text>
            <BulletList
              items={[
                "With Apple Health (only with your explicit consent)",
                "Between your devices (iPhone and Apple Watch) for app functionality",
                "When required by law or to protect safety",
              ]}
            />
          </Section>

          <Section title="5. Your Rights and Controls">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              You can control your data through:
            </Text>
            <BulletList
              items={[
                "Deleting individual sessions or all data in the app",
                "Revoking Apple Health permissions at any time",
                "Exporting your session data",
                "Contacting us to request data deletion",
              ]}
            />
          </Section>

          <Section title="6. Third-Party Services">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Apple Health:</Text>{" "}
              Subject to Apple's Privacy Policy
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">RevenueCat:</Text>{" "}
              Processes subscription data subject to their Privacy Policy
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Apple App Store:</Text>{" "}
              Handles payments and subscriptions subject to Apple's Privacy
              Policy
            </Text>
          </Section>

          <Section title="7. Data Retention">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              Session data is retained locally until you delete it. If you
              uninstall the app, all local data is automatically deleted. Data
              in Apple Health remains until you delete it from the Health app.
            </Text>
          </Section>

          <Section title="8. Changes to This Policy">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page and updating the "Last updated" date.
            </Text>
          </Section>

          <Section title="9. Contact Us">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              If you have any questions about this Privacy Policy, please
              contact us at privacy@coldsmith.app
            </Text>
          </Section>

          <Text
            size="sm"
            fontStyle="italic"
            textAlign="center"
            mt="$6"
            $light-color={colors.darkBackground}
            $dark-color={colors.lightBackground}
            fontFamily="Poppins_400Regular"
          >
            Last updated: December 2024
          </Text>
        </VStack>
      </ScrollView>
    </Animated.View>
  );
}
