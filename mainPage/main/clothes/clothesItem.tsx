import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ClothesItem() {
  return (
    <View style={styles.container}>
      <Text>ClothesItemArea</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: 300,
    borderWidth: 1,
  },
});
