import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text>titleArea</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    left: 8,
    height: 30,
    borderWidth: 3,
  },
});
