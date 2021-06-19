import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text>titleArea</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginLeft: 10,
    borderWidth: 3,
  },
});