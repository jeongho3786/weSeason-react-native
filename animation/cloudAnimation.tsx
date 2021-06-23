import React from "react";
import { StyleSheet, View } from "react-native";
import { useCloud } from "../hooks/animationHooks";
import LeftCloud from "./leftCloud";
import RightCLoud from "./rightCloud";

export default function CloudAnimation() {
  const leftCloud: JSX.Element[] = useCloud(LeftCloud);
  const rightCloud: JSX.Element[] = useCloud(RightCLoud);

  return (
    <View style={styles.container}>
      {leftCloud}
      {rightCloud}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
