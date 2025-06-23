import "react-native-gesture-handler";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import AppNavigation from "./AppNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto": require("./assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}
