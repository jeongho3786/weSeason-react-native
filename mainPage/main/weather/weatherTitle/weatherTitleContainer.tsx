import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function WeatherTitleContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.firstCtn}>
        <Text style={styles.weatherText}>현재 기온은</Text>
      </View>
      <View style={styles.seconCtn}>
        <Text style={styles.seconText}>32</Text>
      </View>
      <View style={styles.lastCtn}>
        <Text style={styles.weatherText}>도씨</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },

  firstCtn: {
    borderWidth: 1,
    borderColor: "red",
    marginRight: 10,
  },

  seconCtn: {
    borderWidth: 1,
    borderColor: "red",
    marginRight: 6,
  },

  lastCtn: {
    borderWidth: 1,
    borderColor: "red",
  },

  weatherText: {
    fontFamily: "Jalnan",
    fontSize: 28,
  },

  seconText: {
    fontFamily: "Jalnan",
    fontSize: 28,
    color: "#0047FF",
  },
});
