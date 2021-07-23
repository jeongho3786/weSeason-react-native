import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "cover",
        }}
        source={require("../../images/logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 5,
    height: 30,
    width: 75,
    marginLeft: 10,
    // borderWidth: 3,
  },
});
