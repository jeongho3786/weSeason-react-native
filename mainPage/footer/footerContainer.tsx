import React from "react";
import MapButton from "./mapButton";
import { StyleSheet, Text, View } from "react-native";

export default function FooterContainer() {
  return (
    <View style={styles.container}>
      <MapButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "rgba(249, 252, 119, 0.945)",
    zIndex: 1,
  },
});
