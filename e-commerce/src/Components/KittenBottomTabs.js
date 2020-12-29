import React from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
  Text,
} from "@ui-kitten/components";
import { View } from "react-native";

export const KittenBottomTabs = (props) => {
  const onSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  //   <View key={route.key}>
  //   <BottomNavigationTab title={options.title} icon={options.tabBarIcon} />
  //   {options.title === "Carrito" && (
  //     <View
  //       style={{
  //         position: "absolute",
  //         top: 0,
  //         right: 20,
  //         backgroundColor: "red",
  //         paddingHorizontal: 10,
  //         borderRadius: 20,
  //       }}
  //     >
  //       <Text>3</Text>
  //     </View>
  //   )}
  // </View>
  const createNavigationTabForRoute = (route) => {
    const { options } = props.descriptors[route.key];
    return (
      <BottomNavigationTab
        title={options.title}
        icon={options.tabBarIcon}
        key={route.key}
      />
    );
  };

  return (
    <>
      <Divider />
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={props.state.index}
        onSelect={onSelect}
      >
        {props.state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
    </>
  );
};
