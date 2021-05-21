import React from "react";
import Title from "./title";
import Menu from "./menu";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderContainer() {
  return (
    <View style={styles.container}>
      <Title />
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "red",
    marginTop: 30,
    height: 55,
  },
});
