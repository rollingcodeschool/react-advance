import React, { useContext } from "react";
import { Text } from "react-native-paper";
import { AppContext } from "../context/AppContext";

const MonedaReader = () => {
  const { moneda } = useContext(AppContext);
  return (
    <>
      <Text>tu moneda es (monedaReader)</Text>
      <Text>{moneda}</Text>
    </>
  );
};

export default MonedaReader;
