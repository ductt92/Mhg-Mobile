import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { LoginContainer } from "@/src/containers/Login";
import { ThemeProvider } from "@/theme/ThemeContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <StatusBar style="light" />
      <LoginContainer />
    </ThemeProvider>
  );
}
