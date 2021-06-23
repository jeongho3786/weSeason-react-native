import React, { useRef, useEffect } from "react";
import { Image, Animated, Dimensions, Easing } from "react-native";

type RightCloudProps = {
  topValue: number;
  durationValue: number;
  delayValue: number;
};

export default function RightCloud({
  topValue,
  durationValue,
  delayValue,
}: RightCloudProps) {
  let windowWidth = Dimensions.get("window").width;
  const ref = useRef(new Animated.Value(windowWidth)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(ref, {
        toValue: -110,
        duration: durationValue,
        delay: delayValue,
        useNativeDriver: false,
        easing: Easing.linear,
      })
    ).start();
  }, [ref]);

  const styles: object = {
    position: "absolute",
    top: topValue,
    width: 104,
    height: 64,
    transform: [{ translateX: ref }],
  };

  return (
    <Animated.View style={styles}>
      <Image
        style={{ height: "100%", width: "100%", resizeMode: "contain" }}
        source={require("../images/cloudReverse.png")}
      />
    </Animated.View>
  );
}
