import { Stack } from 'expo-router';
import { SafeAreaProvider} from "react-native-safe-area-context"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SystemBars } from 'react-native-edge-to-edge';


export default function Layout() {
  return (<SafeAreaProvider>
    <GestureHandlerRootView>
      <SystemBars style="dark" />
    <Stack screenOptions={{ headerShown: false }} />
  </GestureHandlerRootView>
  </SafeAreaProvider>)
}
