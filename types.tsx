import { DrawerNavigationProp } from "@react-navigation/drawer";

type DrawerParamList = {
  main: undefined;
};

type MainScreenNavigationProp = DrawerNavigationProp<DrawerParamList, "main">;

export type MainPageProps = {
  navigation: MainScreenNavigationProp;
};

export type HeadContainerProps = {
  navigation: MainScreenNavigationProp;
};

export type MenuProps = {
  navigation: MainScreenNavigationProp;
};
