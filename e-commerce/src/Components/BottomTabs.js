import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@ui-kitten/components";
import React from "react";
import Home from "../Screens/Home";
import Settings from "../Screens/Setting";
import { KittenBottomTabs } from "./KittenBottomTabs";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

  const SettingsIcon = (props) => <Icon {...props} name="settings-2-outline" />;

  return (
    <Tab.Navigator tabBar={(props) => <KittenBottomTabs {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: "Inicio", tabBarIcon: HomeIcon }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Configuraciones", tabBarIcon: SettingsIcon }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
