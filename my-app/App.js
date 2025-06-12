import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("./assets/images/photo-BG.jpg")}
      >
        <View style={styles.login}>
          <View style={styles.avatar}>
            <Text style={styles.icon}>
              <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
            </Text>
          </View>
          <Text style={styles.header}>Regestration</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  login: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    // height: 549,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    paddingTop: 92,
  },
  avatar: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50% -50%)",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
  },
  header: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 32,
  },
  icon: {
    top: 14,
    left: 11,
  },
});
