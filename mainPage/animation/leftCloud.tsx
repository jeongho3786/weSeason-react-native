import React, { useRef, useEffect } from "react";
import { Image, Animated, Dimensions, Easing } from "react-native";

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
  let windowWidth = Dimensions.get("window").width;
  const ref = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(ref, {
        toValue: windowWidth + 110,
        duration: durationValue,
        delay: delayValue,
        useNativeDriver: false, // true시 loop가 안됨
        easing: Easing.linear, // 애니메이션 일정 속도
      })
    ).start();
  }, [ref]);

  const styles: object = {
    position: "absolute",
    top: topValue,
    left: -110,
    width: 104,
    height: 64,
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
        source={require("../../images/cloud.png")}
      />
    </Animated.View>
  );
}
