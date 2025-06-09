import { Stack } from 'expo-router';
import { Providers } from '../contexts/providers';
import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Providers>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="about" />
        </Stack>
      </Providers>
    </GestureHandlerRootView>
  );
}
