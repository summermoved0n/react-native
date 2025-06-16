import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, Button, Alert, View, TextInput } from "react-native";

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

        <Button
          title="Sign Up"
          style={styles.registration_button}
          onPress={onLogin}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  registration_container: {
    // flex: 1,
    position: "relative",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    // height: 200,
    width: "100%",
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  registration_avatar: {
    position: "absolute",
    top: 0,
    left: "50%",
    marginLeft: -30,
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
    display: "flex",
    // flex: 1,
    gap: 16,
    // paddingBottom: 30,
  },
  registration_input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 16,
    height: 50,
    paddingHorizontal: 16,
    fontWeight: "400",
    fontSize: 16,
  },
  registration_button: {
    marginLeft: 16,
    margineRight: 16,
    backgroundColor: "orange",
  },
});
