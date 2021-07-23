import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { MenuProps } from "../../types";

export default function Menu({ navigation }: MenuProps) {
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
