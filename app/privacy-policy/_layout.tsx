/** @format */

import { Stack } from "expo-router";

export default function PrivacyPolicyLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Privacy Policies" }} />
      <Stack.Screen
        name="aividly"
        options={{ title: "AIVidly Privacy Policy" }}
      />
    </Stack>
  );
}
