import React from "react";
import HeaderContainer from "./header/headerContainer";
import MainContainer from "./main/mainContainer";
import FooterContainer from "./footer/footerContainer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
      <StatusBar style="auto" />
    </View>
  );
}
