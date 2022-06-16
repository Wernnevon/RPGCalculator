import { Routes } from "./src/routes";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  ComicNeue_300Light,
  ComicNeue_300Light_Italic,
  ComicNeue_400Regular,
  ComicNeue_400Regular_Italic,
  ComicNeue_700Bold,
  ComicNeue_700Bold_Italic,
} from "@expo-google-fonts/comic-neue";
import { JutsusProvider } from "./src/components/Context/jutsusContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    ComicNeue_300Light,
    ComicNeue_300Light_Italic,
    ComicNeue_400Regular,
    ComicNeue_400Regular_Italic,
    ComicNeue_700Bold,
    ComicNeue_700Bold_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <JutsusProvider>
      <Routes />
    </JutsusProvider>
  );
}
