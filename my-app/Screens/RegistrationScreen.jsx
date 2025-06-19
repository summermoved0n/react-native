import { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";

import AntDesign from "@expo/vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function RegistrationScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameFocus, setUsernameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [isSecurePassword, setIsSecurePassword] = useState(true);

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
      },
      (response) => {
        if (response.didCancel) return;
        if (response.assets && response.assets.length > 0) {
          const file = response.assets[0];
          console.log("File selected:", file);
        }
      }
    );
  };

  const onLogin = () => {
    Alert.alert("Credentials", `${username} + ${email}`);
  };

  return (
    <View style={styles.registration_container}>
      <View style={styles.registration_avatar}>
        <TouchableOpacity
          onPress={openGallery}
          style={styles.registration_icon}
        >
          <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
        </TouchableOpacity>
      </View>

      <Text style={styles.registration_header}>Registration</Text>

      <View style={styles.registration_form}>
        <TextInput
          onFocus={() => {
            setUsernameFocus(true);
          }}
          onBlur={() => setUsernameFocus(false)}
          style={[
            styles.registration_input,
            usernameFocus && styles.registration_inputFocused,
          ]}
          placeholder="Username"
          placeholderTextColor="#bdbdbd"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          style={[
            styles.registration_input,
            emailFocus && styles.registration_inputFocused,
          ]}
          placeholder="Email"
          placeholderTextColor="#bdbdbd"
          value={email}
          onChangeText={setEmail}
        />

        <View>
          <TextInput
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            style={[
              styles.registration_input,
              passwordFocus && styles.registration_inputFocused,
            ]}
            placeholder="Password"
            placeholderTextColor="#bdbdbd"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isSecurePassword}
          />
          <TouchableOpacity
            style={styles.registration_show_btn}
            onPressIn={() => setIsSecurePassword(false)}
            onPressOut={() => setIsSecurePassword(true)}
          >
            <Text style={styles.registration_show_text}>Show</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.registration_button} onPress={onLogin}>
          <Text style={styles.registration_btn_text}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.registration_form_text}>
            Do you have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  registration_container: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    paddingTop: 92,
    paddingBottom: 78,
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
    color: "#212121",
  },
  registration_inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "transparent",
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
  registration_show_btn: {
    position: "absolute",
    right: 16,
    bottom: "50%",
    transform: [{ translateY: "50%" }],
  },
  registration_show_text: {
    fontWeight: "400",
    fontSize: 16,
    color: "#1b4371",
  },
});
