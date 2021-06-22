import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function RightCloud() {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: "100%", width: "100%", resizeMode: "contain" }}
        source={require("../images/cloudReverse.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 64,
    borderWidth: 3,
    borderColor: "rgb(245, 24, 24)",
  },
});
