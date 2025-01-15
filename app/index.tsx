/** @format */

import { Article } from "@/components/Article";
import Card from "@/components/Card";
import { colors } from "@/constants/customisedTheme";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  Box,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
  Pressable,
} from "@gluestack-ui/themed";
import { Linking } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export default function HomeScreen() {
  const Header = () => (
    <Animated.View entering={FadeIn}>
      <HStack alignItems="center" justifyContent="center">
        <Box
          borderWidth={4}
          borderColor="$gray.200"
          borderRadius={100}
          overflow="hidden"
          shadowColor={colors.primary}
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.2}
          shadowRadius={4}
        >
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              overflow: "hidden",
            }}
            source={require("../assets/images/me.jpg")}
          />
        </Box>
        <Text
          w="30%"
          pl="$4"
          fontFamily="Poppins_500Medium"
          $light-color={colors.darkBackground}
          $dark-color={colors.lightBackground}
        >
          Hi! I'm Paweł and I build apps using React Native since 2018.
        </Text>
      </HStack>
    </Animated.View>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <Animated.View entering={FadeIn}>
      <Text
        $light-color={colors.darkBackground}
        $dark-color={colors.lightBackground}
        fontFamily="Poppins_600SemiBold"
        textTransform="uppercase"
        fontSize="$lg"
        my="$4"
      >
        {children}
      </Text>
    </Animated.View>
  );

  const ArticleSection = () => {
    return (
      <Animated.View entering={FadeIn}>
        <VStack gap="$1" alignItems="center">
          <SectionTitle>Articles about React Native</SectionTitle>
          <Article
            title="The best React Native date picker libraries"
            link="https://blog.logrocket.com/best-react-native-date-picker-libraries/"
            description="Feb 22, 2024"
          />
          <Article
            title="React Native iOS and Android"
            link="https://www.netguru.com/blog/react-native-ios-and-android"
            description="Feb 22, 2024"
          />
          <Article
            title="Designing a custom UI using React Native Paper"
            link="https://blog.logrocket.com/designing-custom-ui-using-react-native-paper/"
            description="May 2, 2023"
          />
          <Article
            title="Detox Tool for React Native"
            link="https://www.netguru.com/blog/detox-tool-react-native"
            description="May 2, 2023"
          />
          <Article
            title="Common bugs in React Native ScrollView"
            link="https://blog.logrocket.com/common-bugs-react-native-scrollview/"
            description="Aug 6, 2020"
          />
          <Article
            title="How to make Tinder-like card animations with React Native"
            link="https://blog.logrocket.com/how-to-make-tinder-like-card-animations-with-react-native/"
            description="Sep 2, 2019"
          />
          <Article
            title="React Native Heart Animation"
            link="https://www.netguru.com/blog/react-native-heart-animation"
            description="Sep 2, 2019"
          />
        </VStack>
      </Animated.View>
    );
  };

  const ReleasesSection = () => (
    <Animated.View entering={FadeIn}>
      <VStack alignItems="center">
        <SectionTitle>Currently working on:</SectionTitle>
        <HStack gap="$2" alignItems="center">
          <Card
            type="app"
            imageUrl={require("../assets/images/newsletterytics.png")}
            title="Newsletterytics"
            link="https://newsletterytics.com/"
            description="Your Beehiiv newsletter statistics, on the go."
          />
          <Card
            type="app"
            imageUrl={require("../assets/images/coldsmith.png")}
            title="Coldsmith"
            link="https://coldsmithapp.com/"
            description="Tracking your cold exposure sessions on Mobile."
          />
          <Card
            type="app"
            imageUrl={require("../assets/images/rnchallenge.png")}
            title="React Native Challenge"
            link="https://reactnativechallenge.com/"
            description="Weekly Newsletter of React Native coding challenges to sharpen your skills."
          />
          {/* <Card
            type="app"
            imageUrl={require("../assets/images/utanihur.png")}
            title="Utanihur"
            link="https://utanihur.com/"
            description="Tibia boss checker for Web and Mobile."
          /> */}
        </HStack>
        <SectionTitle>My released projects</SectionTitle>
        <HStack gap="$2" alignItems="center">
          <Card
            imageUrl={require("../assets/images/countownnuts.png")}
            title="Countdown Nuts"
            link="https://countdownnuts.com/"
            description="Managing and tracking your consumable items."
          />
          <Card
            imageUrl={require("../assets/images/themegen.png")}
            title="Themegen.xyz"
            link="https://themegenrn.netlify.app/"
            description="Create and customize dependency-free themes for React Native"
          />
          <Card
            type="app"
            imageUrl={require("../assets/images/fitmate.png")}
            title="The Fitmate App"
            link="https://apps.apple.com/pl/app/the-fitmate-app/id6450453721?l=pl"
            description="App that helps you find people to train with."
          />
          <Card
            imageUrl={require("../assets/images/selfmadedev.png")}
            title="Selfmade.dev"
            link="https://selfmadedev.com/"
            description="My blog about learning programming and React Native."
          />
        </HStack>
      </VStack>
    </Animated.View>
  );

  const SocialsSection = () => (
    <Animated.View entering={FadeIn}>
      <HStack mb="$16" alignItems="center" justifyContent="center">
        <Pressable
          onPress={() => Linking.openURL("https://twitter.com/pawelkarniej")}
        >
          <FontAwesome6 name="x-twitter" size={24} color={colors.primary} />
        </Pressable>
        <Pressable
          mx="$4"
          onPress={() => Linking.openURL("https://github.com/karniej")}
        >
          <FontAwesome6 name="github" size={24} color={colors.primary} />
        </Pressable>
        <Pressable
          onPress={() => Linking.openURL("mailto:contact@pawelkarniej.com")}
        >
          <FontAwesome6 name="envelope" size={24} color={colors.primary} />
        </Pressable>
      </HStack>
    </Animated.View>
  );

  return (
    <VStack flex={1} alignItems="center">
      <ScrollView alignItems="center">
        <Header />
        <ReleasesSection />
        <ArticleSection />
      </ScrollView>
      <SocialsSection />
    </VStack>
  );
}
