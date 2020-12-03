import React, { useContext } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { AppContext } from "../context/AppContext";

export default function Settings() {
  const { handleSetMoneda } = useContext(AppContext);

  const handlePress = () => handleSetMoneda("USD");

  return (
    <>
      <Text>Desde settings</Text>
      <Button onPress={handlePress}>Cambiar valor</Button>
    </>
  );
}
