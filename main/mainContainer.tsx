import React from "react";
import WeatherContainer from "./weather/weatherContainer";
import ClothesContainer from "./clothes/clothesContainer";
import WeatherListfrom from "./weather/weatherList";
import { StyleSheet, Text, View } from "react-native";

export default function MainContainer() {
  return (
    <View style={styles.container}>
      <WeatherContainer />
      <ClothesContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "green",
    height: 472,
  },
});
