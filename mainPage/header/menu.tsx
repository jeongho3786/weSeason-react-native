import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type menuProps = {
  navigation: DrawerNavigationProp<{ main: undefined }, "main">;
};

export default function Menu({ navigation }: menuProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.openDrawer()}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "contain",
        }}
        source={require("../../images/hambugermenu.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 5,
    height: 25,
    width: 35,
    marginRight: 10,
    // borderWidth: 3,
  },
});
