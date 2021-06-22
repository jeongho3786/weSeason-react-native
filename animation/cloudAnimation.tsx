import React from "react";
import { StyleSheet, View } from "react-native";
import LeftCloud from "./leftCloud";

export default function CloudAnimation() {
  const leftCollection: JSX.Element[] = [];
  let leftCount: number = 0;

  while (leftCount < 3) {
    let col: number = Math.floor(Math.random() * 570);
    let durTime: number = Math.floor(Math.random() * (8000 - 5000) + 5000);
    let delTime: number = Math.floor(Math.random() * (5000 - 500) + 500);

    let leftCloud: JSX.Element = (
      <LeftCloud
        topValue={col}
        durationValue={durTime}
        delayValue={delTime}
        key={leftCount}
      />
    );
    leftCollection.push(leftCloud);
    leftCount++;
  }

  return <View style={styles.container}>{leftCollection}</View>;
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
