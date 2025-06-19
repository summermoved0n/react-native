import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
        style={styles.container}
      >
        <ImageBackground
          style={styles.background}
          source={require("./assets/images/photo-BG.jpg")}
        >
          <NavigationContainer>
            <MainStack.Navigator initialRouteName="Registration">
              <MainStack.Screen
                name={"Registration"}
                component={RegistrationScreen}
              />
              <MainStack.Screen name={"Login"} component={LoginScreen} />
              <MainStack.Screen name={"Posts"} component={PostsScreen} />
            </MainStack.Navigator>
          </NavigationContainer>
          {/* <RegistrationScreen /> */}
          {/* <LoginScreen /> */}
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
