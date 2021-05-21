import React from "react";
import ClothesItem from "./clothesItem";
import ClothesList from "./clothesList";
import { StyleSheet, Text, View } from "react-native";

export default function ClothesContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.clothesTitle}>clothesTitle</Text>
      <ClothesItem />
      <ClothesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 185,
    left: 18,
    height: 275,
    width: 370,
    borderWidth: 3,
  },

  clothesTitle: {
    position: "absolute",
    left: 80,
    top: 8,
    borderWidth: 3,
    width: 200,
    height: 55,
    textAlign: "center",
  },
});
