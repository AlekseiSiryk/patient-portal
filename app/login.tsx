import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { router, useNavigation } from "expo-router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "@/store";

export default function ModalScreen() {
  const dispatch = useDispatch();
  const handleLogin = useCallback(() => {
    dispatch(logIn());
    router.replace("/(tabs)");
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Button title={"login"} onPress={handleLogin} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
