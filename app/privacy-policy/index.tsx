/** @format */

import { Heading, VStack, Text, Pressable } from "@gluestack-ui/themed";
import Animated, { FadeIn } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { colors } from "@/constants/customisedTheme";

export default function PrivacyPolicyIndexScreen() {
  const router = useRouter();

  return (
    <Animated.View style={{ flex: 1 }} entering={FadeIn}>
      <VStack flex={1} p="$4" space="md">
        <Heading
          $light-color={colors.darkBackground}
          $dark-color={colors.lightBackground}
          fontFamily="Poppins_600SemiBold"
        >
          App Privacy Policies
        </Heading>
        <Text
          $light-color={colors.darkBackground}
          $dark-color={colors.lightBackground}
          fontFamily="Poppins_400Regular"
        >
          Select an app to view its privacy policy:
        </Text>
        <Pressable onPress={() => router.push("/privacy-policy/aividly")}>
          <Text
            color={colors.primary}
            fontFamily="Poppins_500Medium"
            textDecorationLine="underline"
          >
            AIVidly Privacy Policy
          </Text>
        </Pressable>
        {/* Add links for other apps here */}
      </VStack>
    </Animated.View>
  );
}
