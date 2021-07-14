import React from "react";
import WeatherContainer from "./weather/weatherContainer";
import ClothesContainer from "./clothes/clothesContainer";
import { StyleSheet, View } from "react-native";

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
    flex: 10,
    borderWidth: 3,
    borderColor: "rgba(81, 245, 66, 0.514)",
    zIndex: 1,
  },
});
