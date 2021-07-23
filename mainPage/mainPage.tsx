import React from "react";
import HeaderContainer from "./header/headerContainer";
import MainContainer from "./main/mainContainer";
import FooterContainer from "./footer/footerContainer";
import CloudAnimation from "./animation/cloudAnimation";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type mainPageProps = {
  navigation: DrawerNavigationProp<{ main: undefined }, "main">;
};

export default function MainPage({ navigation }: mainPageProps) {
  return (
    <LinearGradient colors={["#87B0FF", "#A3FFF9"]} style={styles.container}>
      <HeaderContainer navigation={navigation} />
      <MainContainer />
      <FooterContainer />
      <CloudAnimation />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
});
