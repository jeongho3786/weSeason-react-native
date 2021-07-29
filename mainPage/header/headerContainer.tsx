import React from "react";
import Title from "./title";
import Menu from "./menu";
import { StyleSheet, View } from "react-native";
import { HeadContainerProps } from "../../types";

export default function HeaderContainer({ navigation }: HeadContainerProps) {
  return (
    <View style={styles.container}>
      <Title />
      <Menu navigation={navigation} />
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
    marginBottom: 51,
    // borderWidth: 3,
    // borderColor: "rgb(245, 24, 24)",
    zIndex: 1,
  },
});
