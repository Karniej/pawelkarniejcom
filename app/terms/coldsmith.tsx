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

export default function ColdsmithTermsOfServiceScreen() {
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
            Terms of Service for Coldsmith
          </Heading>

          <Box
            bg="rgba(255, 107, 107, 0.1)"
            borderLeftColor="#FF6B6B"
            borderLeftWidth="$1"
            p="$4"
            borderRadius="$md"
          >
            <Heading
              size="md"
              color="#FF6B6B"
              textAlign="center"
              fontFamily="Poppins_600SemiBold"
              mb="$2"
            >
              IMPORTANT MEDICAL DISCLAIMER
            </Heading>
            <Text
              color="#FF6B6B"
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              This app is for educational and informational purposes only. It is
              not intended to replace professional medical advice, diagnosis, or
              treatment. Cold exposure can be dangerous and may not be suitable
              for everyone. Always consult with a qualified healthcare provider
              before beginning any cold exposure program, especially if you have
              any medical conditions.
            </Text>
          </Box>

          <Section title="1. Acceptance of Terms">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              By downloading, installing, or using Coldsmith, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, do not use the app.
            </Text>
          </Section>

          <Section title="2. Health and Safety Warnings">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Cold Exposure Risks:</Text>{" "}
              Cold exposure therapy carries inherent risks including but not
              limited to hypothermia, cardiac events, respiratory distress, and
              injury. You assume all risks associated with cold exposure
              activities.
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Medical Conditions:</Text>{" "}
              Do not use cold exposure if you have heart conditions, high blood
              pressure, pregnancy, diabetes, eating disorders, or any other
              medical conditions without physician approval.
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">
                Emergency Situations:
              </Text>{" "}
              If you experience chest pain, difficulty breathing, dizziness, or
              any concerning symptoms during cold exposure, stop immediately and
              seek medical attention.
            </Text>
          </Section>

          <Section title="3. Age Restrictions">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              You must be at least 18 years old to use this app. Cold exposure
              is not recommended for minors without proper medical supervision
              and parental consent.
            </Text>
          </Section>

          <Section title="4. Proper Use Guidelines">
            <BulletList
              items={[
                "Start slowly with shorter durations and warmer temperatures",
                "Never practice cold exposure alone; have someone nearby",
                "Always have a way to exit cold exposure immediately",
                "Listen to your body and stop if you feel unwell",
                "Follow all safety protocols and never exceed your limits",
              ]}
            />
          </Section>

          <Section title="5. Subscription Terms">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Premium Features:</Text>{" "}
              Certain features require a paid subscription processed through the
              Apple App Store. Subscription automatically renews unless
              cancelled.
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Billing:</Text> You will be
              charged through your Apple ID account. Subscriptions renew
              automatically unless auto-renewal is turned off at least 24 hours
              before the current period ends.
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Cancellation:</Text> You
              can cancel your subscription anytime through your Apple ID account
              settings. Cancellation takes effect at the end of the current
              billing period.
            </Text>
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              <Text fontFamily="Poppins_600SemiBold">Refunds:</Text> Refunds are
              handled by Apple according to their refund policy. We do not
              process refunds directly.
            </Text>
          </Section>

          <Section title="6. Limitation of Liability">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
              ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP OR COLD EXPOSURE
              ACTIVITIES, INCLUDING BUT NOT LIMITED TO PERSONAL INJURY, PROPERTY
              DAMAGE, OR LOSS OF DATA.
            </Text>
          </Section>

          <Section title="7. Indemnification">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              You agree to indemnify and hold harmless Coldsmith and its
              developers from any claims, damages, or expenses arising from your
              use of the app or participation in cold exposure activities.
            </Text>
          </Section>

          <Section title="8. App Usage Rules">
            <BulletList
              items={[
                "Use the app only for personal, non-commercial purposes",
                "Do not share your premium account with others",
                "Do not attempt to reverse engineer or modify the app",
                "Respect intellectual property rights",
              ]}
            />
          </Section>

          <Section title="9. Data and Privacy">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              Your use of the app is subject to our Privacy Policy. By using the
              app, you consent to the collection and use of information as
              described in our Privacy Policy.
            </Text>
          </Section>

          <Section title="10. Modifications">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              We reserve the right to modify these terms at any time. Continued
              use of the app after changes constitutes acceptance of the new
              terms.
            </Text>
          </Section>

          <Section title="11. Termination">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              We may terminate your access to the app at any time for violation
              of these terms. You may stop using the app at any time.
            </Text>
          </Section>

          <Section title="12. Governing Law">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              These terms are governed by the laws of Poland. Any disputes will
              be resolved in the courts of Poland.
            </Text>
          </Section>

          <Section title="13. Contact Information">
            <Text
              $light-color={colors.darkBackground}
              $dark-color={colors.lightBackground}
              fontFamily="Poppins_400Regular"
              lineHeight={22}
            >
              For questions about these Terms of Service, contact us at
              legal@coldsmith.app
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
