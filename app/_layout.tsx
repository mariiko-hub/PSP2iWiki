import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AlertProvider } from '@/template';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <AlertProvider>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="category/[id]" />
          <Stack.Screen name="page/[id]" />
          <Stack.Screen name="equipment/[type]" />
          <Stack.Screen name="equipment/detail/[id]" />
        </Stack>
      </SafeAreaProvider>
    </AlertProvider>
  );
}
