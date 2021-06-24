import React from "react";
import HeaderContainer from "./header/headerContainer";
import MainContainer from "./main/mainContainer";
import FooterContainer from "./footer/footerContainer";
import CloudAnimation from "./animation/cloudAnimation";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#87B0FF", "#A3FFF9"]} style={styles.container}>
      <CloudAnimation />
      {/* <HeaderContainer />
      <MainContainer />
      <FooterContainer /> */}
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
});
