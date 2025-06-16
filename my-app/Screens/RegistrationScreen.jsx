import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function RegistrationScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    Alert.alert("Credentials", `${username} + ${email}`);
  };

  return (
    <View style={styles.registration_container}>
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

        <TouchableOpacity
          title="Sign Up"
          style={styles.registration_button}
          onPress={onLogin}
        >
          <Text style={styles.registration_btn_text}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.registration_form_text}>
          Do you have an account? SIgn In
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  registration_container: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    paddingTop: 92,
    // paddingBottom: 45,
  },
  registration_avatar: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
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
    display: "flex",
    gap: 16,
    paddingHorizontal: 16,
  },
  registration_input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 16,
    fontWeight: "400",
    fontSize: 16,
  },
  registration_button: {
    marginTop: 43,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  registration_btn_text: {
    fontWeight: "400",
    fontSize: 16,
    color: "white",
  },
  registration_form_text: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "#1b4371",
  },
});
