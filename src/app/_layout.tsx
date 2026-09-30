import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { colors } from '../components/ui';
import { StoreProvider } from '../lib/store';

const icon = (emoji: string) => () => <Text style={{ fontSize: 20 }}>{emoji}</Text>;

export default function RootLayout() {
  return (
    <StoreProvider>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          headerStyle: { backgroundColor: colors.bg },
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Today', tabBarIcon: icon('🏠') }} />
        <Tabs.Screen name="coach" options={{ title: 'Run coach', tabBarIcon: icon('🏃') }} />
        <Tabs.Screen name="log" options={{ title: 'Log', tabBarIcon: icon('📝') }} />
        <Tabs.Screen name="progress" options={{ title: 'Progress', tabBarIcon: icon('📈') }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: icon('👤') }} />
      </Tabs>
    </StoreProvider>
  );
}
