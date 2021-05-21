import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MapButton() {
  return (
    <View style={styles.container}>
      <Text>buttonArea</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 30,
    borderWidth: 3,
    top: 6,
    left: 170,
  },
});
