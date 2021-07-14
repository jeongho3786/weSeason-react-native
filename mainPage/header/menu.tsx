import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      {/* <Text>menuArea</Text> */}
      <Image
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "contain",
        }}
        source={require("../../images/hambugermenu.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 10,
    height: 25,
    width: 35,
    // marginRight: 10,
    // borderWidth: 3,
  },
});
