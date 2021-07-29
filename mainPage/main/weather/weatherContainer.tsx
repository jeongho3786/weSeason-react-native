import React from "react";
import WeatherList from "./weatherList";
import WeatherTitleContainer from "./weatherTitle/weatherTitleContainer";
import { StyleSheet, View } from "react-native";

export default function WeatherContainer() {
  return (
    <View style={styles.container}>
      <WeatherTitleContainer />
      <WeatherList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
  },
});
