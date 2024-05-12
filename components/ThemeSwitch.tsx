import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "@/store/theme";
import { colors } from "@/constants/customisedTheme";
import { Box, Pressable } from "@gluestack-ui/themed";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const rotation = useSharedValue(isDark ? 180 : 0);

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      rotation.value,
      [180, 0],
      [180, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  const handlePress = () => {
    rotation.value = withTiming(isDark ? 180 : 0, {
      duration: 500,
    });

    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Pressable
      p="$0.5"
      mr="$2"
      hardShadow="5"
      shadowColor={colors.primary}
      alignItems="center"
      bg={theme === "light" ? colors.lightBackground : colors.darkBackground}
      rounded="$full"
      onPress={handlePress}
    >
      <Animated.View style={animatedStyle}>
        <Box hardShadow="5" shadowColor={colors.primary}>
          {isDark ? (
            <MaterialCommunityIcons
              name="moon-waning-crescent"
              size={22}
              color={colors.primary}
            />
          ) : (
            <MaterialCommunityIcons
              name="white-balance-sunny"
              size={22}
              color={colors.primary}
            />
          )}
        </Box>
      </Animated.View>
    </Pressable>
  );
};
