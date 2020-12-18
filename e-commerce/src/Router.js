import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login";
import BottomTabs from "./Components/BottomTabs";
import Register from "./Screens/Register";
import { Text } from "@ui-kitten/components";
import { AsyncStorage } from "react-native";
import LottieView from "lottie-react-native";
import ProductDetail from "./Screens/ProductDetail";

const Stack = createStackNavigator();

const Router = () => {
  const [initialRoute, setInitialRoute] = useState("Login");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      const jwt = await AsyncStorage.getItem("jwt");
      if (jwt) {
        setInitialRoute("BottomTabs");
      }
      setLoading(false);
    };
    getToken();
  }, []);

  if (loading) {
    return (
      <LottieView
        source={require("./assets/lotties/ecommerce.json")}
        autoPlay
        loop
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
