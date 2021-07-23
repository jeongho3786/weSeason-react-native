import React from "react";
import Title from "./title";
import Menu from "./menu";
import { StyleSheet, View } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type headContainerProps = {
  navigation: DrawerNavigationProp<{ main: undefined }, "main">;
};

export default function HeaderContainer({ navigation }: headContainerProps) {
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
    // borderWidth: 3,
    // borderColor: "rgb(245, 24, 24)",
    zIndex: 1,
  },
});
