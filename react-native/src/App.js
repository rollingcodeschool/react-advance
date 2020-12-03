import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/Home";
import Details from "./Screens/Details";
import Tabs from "./Components/Tabs";
import Login from "./Screens/Login";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-community/async-storage";
import AppProvider from "./Components/AppProvider";

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [initialRouteName, setInitialRouteName] = useState("Login");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const getToken = async () => {
      const jwt = await AsyncStorage.getItem("jwt");
      if (jwt) {
        setInitialRouteName("Inicio");
      }
      setLoading(false);
    };
    getToken();
  }, []);

  if (loading)
    return (
      <SafeAreaView>
        <Text>Cargando...</Text>
      </SafeAreaView>
    );

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Inicio"
            component={(props) => <Tabs {...props} theme={theme} />}
          />
          <Stack.Screen name="Detalle" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

registerRootComponent(App);
