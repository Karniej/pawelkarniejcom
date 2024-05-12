import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { useTheme, DarkThemeProvider } from "@/store/theme";
import { DarkTheme, LightTheme } from "@/constants/customisedTheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import {
  useFonts,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { config } from "@gluestack-ui/config";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const App = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : LightTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GluestackUIProvider config={config} colorMode={theme}>
          <Stack
            screenOptions={{
              headerTitleAlign: "center",
              headerTitle: " ",
              headerRight: () => <ThemeSwitch />,
              headerTitleStyle: {
                fontFamily: "Poppins_500Medium",
              },
              headerStyle: {
                borderBottomWidth: 0,
              },
            }}
          >
            <Stack.Screen name="index" />
            {/* <Stack.Screen name="modal" options={{ headerShown: false }} /> */}
          </Stack>
        </GluestackUIProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

function RootLayoutNav() {
  return (
    <DarkThemeProvider>
      <App />
    </DarkThemeProvider>
  );
}
