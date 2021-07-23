import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ClothesList() {
  return (
    <View style={styles.container}>
      <Text>ClothesListArea</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 300,
    borderWidth: 3,
  },
});
