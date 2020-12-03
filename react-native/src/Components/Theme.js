import React, { useContext } from "react";
import { Text } from "react-native-paper";
import { AppContext } from "../context/AppContext";

const Theme = ({ theme }) => {
  const { moneda } = useContext(AppContext);
  return (
    <>
      <Text>tu estilo es</Text>
      <Text>{theme}</Text>
      <Text>tu moneda es (desde theme)</Text>
      <Text>{moneda}</Text>
    </>
  );
};

export default Theme;
