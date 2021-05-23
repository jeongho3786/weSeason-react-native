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
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    borderWidth: 3,
    borderColor: "rgb(245, 24, 24)",
  },
});
