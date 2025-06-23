import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  Alert,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function PostsScreen() {
  const {
    params: { username, email, imageUri },
  } = useRoute();

  return (
    <View
      style={{
        paddingTop: 32,
        paddingHorizontal: 16,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        {!imageUri ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              backgroundColor: "#f6f6f6",
            }}
          ></View>
        ) : (
          <ImageBackground
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              overflow: "hidden",
            }}
            source={{ uri: imageUri }}
          ></ImageBackground>
        )}
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text style={{ fontWeight: "700", fontSize: 13, color: "#212121" }}>
            {username}
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 11,
              color: "rgba(33, 33, 33, 0.8)",
            }}
          >
            {email}
          </Text>
        </View>
      </View>
    </View>
  );
}
