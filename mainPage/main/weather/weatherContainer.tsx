import React from "react";
import WeatherList from "./weatherList";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.weatherTitle}>폰트 적용 된거니?</Text>
      <WeatherList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 3,
  },

  weatherTitle: {
    borderWidth: 3,
    width: 200,
    textAlign: "center",
    fontFamily: "Jalnan",
  },
});
