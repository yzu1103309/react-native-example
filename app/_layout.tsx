import { Stack } from "expo-router";
import { SWRConfig } from "swr";
import { defaultFetcher } from "@/api/fetcher";
import { ThemeProvider } from 'react-native-ios-kit';

export default function RootLayout() {
  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        fetcher: defaultFetcher,
        refreshInterval: 2000
      }}
    >
      <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{title: "Home", headerShown: false}} />
        <Stack.Screen name="temperature" options={{title: "Temperature"}}/>
        <Stack.Screen name="moisture" options={{title: "Moisture"}}/>
      </Stack>
      </ThemeProvider>
    </SWRConfig>
  );
}
