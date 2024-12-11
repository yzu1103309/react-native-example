import { Stack, Tabs } from "expo-router";
import { SWRConfig } from "swr";
import { defaultFetcher } from "@/api/fetcher";
import { ThemeProvider } from 'react-native-ios-kit';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerShown: false}}/>
      <Tabs.Screen name="settings" options={{headerShown: false}}/>
    </Tabs>
  );
}
