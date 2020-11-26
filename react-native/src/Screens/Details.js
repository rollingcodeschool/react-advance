import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Details({ route }) {
  const { nombre, desarrollador } = route.params;

  return (
    <>
      <Text>desde details</Text>
      <Text>{nombre}</Text>
      <Text>{desarrollador}</Text>
    </>
  );
}
