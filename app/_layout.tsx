import { Stack } from "expo-router";
import { SWRConfig } from "swr";
import { defaultFetcher } from "@/api/fetcher";

export default function RootLayout() {
  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        fetcher: defaultFetcher,
        refreshInterval: 2000
      }}
    >
      <Stack>
        <Stack.Screen name="index" options={{title: "Home", headerShown: false}} />
        <Stack.Screen name="temperature" options={{title: "Temperature"}}/>
      </Stack>
    </SWRConfig>
  );
}
