/** @format */

import {
  Box,
  Button,
  ButtonText,
  Heading,
  Link,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Linking } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { colors } from "@/constants/customisedTheme";

export default function ContactScreen() {
  const supportEmail = "contact@pawelkarniej.com";
  const appNames = ["AIVidly", "Newsletterytics", "Iconic!"];

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${supportEmail}`);
  };

  return (
    <Animated.View style={{ flex: 1 }} entering={FadeIn}>
      <VStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        p="$4"
        space="md"
      >
        <Heading
          $light-color={colors.darkBackground}
          $dark-color={colors.lightBackground}
          fontFamily="Poppins_600SemiBold"
        >
          Support
        </Heading>
        <Text
          textAlign="center"
          $light-color={colors.darkBackground}
          $dark-color={colors.lightBackground}
          fontFamily="Poppins_400Regular"
        >
          This is the official support page for {appNames.join(", ")}.
        </Text>
        <Text
          textAlign="center"
          $light-color={colors.darkBackground}
          $dark-color={colors.lightBackground}
          fontFamily="Poppins_400Regular"
        >
          For support, please contact us at:
        </Text>
        <Link onPress={handleEmailPress}>
          <Text
            color={colors.primary}
            fontFamily="Poppins_500Medium"
            textDecorationLine="underline"
          >
            {supportEmail}
          </Text>
        </Link>
      </VStack>
    </Animated.View>
  );
}
