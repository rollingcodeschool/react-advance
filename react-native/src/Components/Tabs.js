import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home";
import Settings from "../Screens/Settings";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageViewer from "../Screens/Image";

const Tab = createBottomTabNavigator();

export default function Tabs({ theme }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Config") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Argentina") {
            iconName = focused ? "md-desktop" : "ios-list";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={(props) => <HomeScreen {...props} theme={theme} />}
      />
      <Tab.Screen name="Config" component={Settings} />
      <Tab.Screen name="Perfil" component={ImageViewer} />
    </Tab.Navigator>
  );
}
