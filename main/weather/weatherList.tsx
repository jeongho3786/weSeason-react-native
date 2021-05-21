import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherList() {
  return (
    <View style={styles.container}>
      <Text>weatherList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 44,
    left: 55,
    height: 100,
    width: 250,
    borderWidth: 3,
  },
});
