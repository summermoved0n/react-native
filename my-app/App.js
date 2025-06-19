import {
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -160}
        style={styles.container}
      >
        <ImageBackground
          style={styles.background}
          source={require("./assets/images/photo-BG.jpg")}
        >
          <RegistrationScreen />
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
});
