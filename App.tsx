import React from "react";
import MainPage from "./mainPage/mainPage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="main" drawerPosition="right">
        <Drawer.Screen name="main" component={MainPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
