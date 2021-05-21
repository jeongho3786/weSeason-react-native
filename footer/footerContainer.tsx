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
    borderWidth: 3,
    borderColor: "yellow",
    height: 60,
  },
});
