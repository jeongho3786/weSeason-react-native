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
    height: 40,
    width: 100,
    borderWidth: 3,
  },
});
