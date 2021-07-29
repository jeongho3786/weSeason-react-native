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
    flex: 2,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
  },

  clothesTitle: {
    width: 200,
    height: 55,
    textAlign: "center",
    borderWidth: 1,
  },
});
