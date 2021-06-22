import React, { useRef, useEffect } from "react";
import { Image, Animated } from "react-native";

type LeftCloudProps = {
  topValue: number;
  durationValue: number;
  delayValue: number;
};

export default function LeftCloud({
  topValue,
  durationValue,
  delayValue,
}: LeftCloudProps) {
  const ref = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(ref, {
      toValue: 255,
      duration: durationValue, //5천에서 8천
      delay: delayValue, //천에서 일단 5천
      useNativeDriver: true,
    }).start();
  }, [ref]);

  const styles: object = {
    position: "absolute",
    top: topValue,
    width: 104,
    height: 64,
    borderWidth: 3,
    borderColor: "rgb(245, 24, 24)",
    transform: [{ translateX: ref }],
  };

  return (
    <Animated.View style={styles}>
      <Image
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "contain",
        }}
        source={require("../images/cloud.png")}
      />
    </Animated.View>
  );
}
