import React from "react";
import WeatherList from "./weatherList";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.weatherTitle}>weatherTitle</Text>
      <WeatherList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    left: 18,
    height: 160,
    width: 370,
    borderWidth: 3,
  },

  weatherTitle: {
    position: "absolute",
    left: 80,
    top: 8,
    borderWidth: 3,
    width: 200,
    textAlign: "center",
  },
});
