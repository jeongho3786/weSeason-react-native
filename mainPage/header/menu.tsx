import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text>menuArea</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 250,
    marginRight: 10,
    borderWidth: 3,
  },
});
