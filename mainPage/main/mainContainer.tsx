import React, { useState, useEffect } from "react";
import WeatherContainer from "./weather/weatherContainer";
import ClothesContainer from "./clothes/clothesContainer";
import { StyleSheet, View } from "react-native";
import { getWeather } from "../../hooks/api";

export default function MainContainer() {
  const [weatherData, setWeatherData] = useState<any>();

  useEffect(() => {
    (async () => {
      const data = await getWeather();
      setWeatherData(data);
    })();
  }, []);

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
    borderWidth: 1,
    borderColor: "rgba(81, 245, 66, 0.514)",
    zIndex: 1,
  },
});
