import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function RegistrationScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.registration_conteiner}>
          <View style={styles.registration_avatar}>
            <View style={styles.registration_icon}>
              <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
            </View>
          </View>

          <Text style={styles.registration_header}>Registration</Text>

          <View style={styles.registration_form}>
            <TextInput
              style={styles.registration_input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.registration_input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.registration_input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  registration_conteiner: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    paddingTop: 92,
  },
  registration_avatar: {
    position: "absolute",
    top: 0,
    left: "50%",
    marginLeft: -60,
    marginTop: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  registration_icon: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
  },
  registration_header: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 32,
  },
  registration_form: {
    flex: 1,
    gap: 16,
    paddingBottom: 30,
    justifyContent: "flex-end",
  },
  registration_input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 16,
    height: 50,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    fontWeight: "400",
    fontSize: 16,
  },
});
