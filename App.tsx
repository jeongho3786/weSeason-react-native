import React from "react";
import HeaderContainer from "./header/headerContainer";
import MainContainer from "./main/mainContainer";
import FooterContainer from "./footer/footerContainer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
