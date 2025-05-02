/** @format */

import { Stack } from "expo-router";

export default function TermsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Terms of Service" }} />
      <Stack.Screen
        name="aividly"
        options={{ title: "AIVidly Terms of Service" }}
      />
    </Stack>
  );
}
