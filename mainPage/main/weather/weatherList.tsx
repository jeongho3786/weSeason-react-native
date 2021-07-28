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
    // height: 100,
    width: 300,
    borderWidth: 3,
  },
});
